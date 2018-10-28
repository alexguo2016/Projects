<template>
    <div>
        test.vue
        <div class='class1'
        :class='dataClass'
        @click='changeClass'
        :data-msg='msg' >
            class-v-bind-test
        </div>

        <hr>
        <div>
            <input type="text" @input='showInput'>
        </div>

        <hr>

        <div v-if='showIf'>
            showIf
        </div>
        <div v-show='showShow'>
            showShow
        </div>

        <hr>
        <button @click='change1'>button1</button>
        <button @click='change2'>BTN2</button>

        <hr>
        <h1>计算属性 {{fullMsg}}</h1>
        <h2>{{cm}}</h2>

        <hr>
        <h2>v-for</h2>
        <button @click='addList'>
            add list
        </button>
        <List :list='list'/>
    </div>
</template>

<script>
import List from "~/components/List"

export default {
    data() {
        return {
            dataClass: 'class2',
            anotherClass: 'class3',
            msg: 'yourMsg',
            showIf: false,
            showShow: false,
            meter: 1,
            list: [1, 'aaa', 99]
        }
    },

    components: {
        List
    },

    computed: {
        fullMsg() {
            return 'fullMsg is ' + this.msg + this.dataClass
        },
        cm() {
            return this.meter * 100 + 'cm'
        }
    },


    methods: {
        addList() {
            this.list.push('new item')
            // var length = this.list.length
            // this.list[length] = 'new item'
            // console.warn('this.list', this.list)
        },

        changeClass(event) {
            this.dataClass = 'yourCustomClass'
            // console.warn(event)
            // console.warn('event.target.dateset.msg,', event.target.dataset.msg)
        },

        showInput(event) {
            console.log('this.value', event.target.value)
        },

        change1() {
            this.msg = 'msgChanged'
        },
        
        change2() {
            this.showIf = !this.showIf
        }
    },

    watch: {
        msg() {
            console.warn('msg changed!!!')
        },

        showIf() {
            console.warn('showIf changed!!!')
        }
    },

    beforeCreate() {
        // console.warn('beforeCreate, this.msg', this.msg)
    },

    created() {
        // console.warn('created, this.msg', this.msg)
    },

    beforeMount() {
        
    },

    mounted() {
        
    },

    beforeUpdate() {
       
    },

    updated() {
        console.warn('use updated')
    },

    beforeDestroy() {
        
    },

    destroyed() {
        
    },
}
</script>

<style>

</style>
