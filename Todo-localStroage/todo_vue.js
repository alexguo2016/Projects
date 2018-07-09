var todoList = {
    props: ['todo'],
    data: function() {
        return {}
    },
    template: `
        <li v-bind:class = "{done: todo.done}" class="todo-item todo-list ">
            <button type = 'button' class = 'todo-item-delete'
            v-bind:data-id = 'todo.id' v-on:click="$emit('allAction', 1)">delete</button>
            <button type = 'button' class = 'todo-item-done'
            v-bind:data-id = 'todo.id'
            v-on:click="$emit('allAction', 2)">done</button>
            <span class = 'todo-item-text'>{{todo.text}}</span>
        </li>
    `
}

var app = new Vue({
    el: '#app',
    data: {
        todos: [],
        inputText: '',
    },

    methods: {
        allAction: function(e) {
            var self = e.target
            if (self.classList.contains('addBtn')) {
                this.addTodo()
            } else if (self.classList.contains('todo-item-delete')) {
                var id = self.dataset.id
                this.delTodo(id)
            } else if (self.classList.contains('todo-item-done')) {
                var id = self.dataset.id
                this.changeDone(id)
            } else if (self.classList.contains('clearDone')) {
                this.clearDone()
            } else {

            }
        },
        //增加一个todo
        addTodo: function() {
            var text = this.inputText
            if (text == '') {
                return
            }
            var lastItem = this.todos[this.todos.length - 1]
            if (lastItem != undefined) {
                var lastId = lastItem.id
            } else {
                lastId = -1
            }
            var obj = {
                "text": text,
                "id": lastId + 1,
                "done": false,
            }
            this.todos.push(obj)
            this.inputText = ''
        },
        //删除一个todo
        delTodo: function(id) {
            var arr = this.todos
            for (var i = 0; i < arr.length; i++) {
                var item = arr[i]
                if (item.id == id) {
                    var index = arr.indexOf(item)
                    arr.splice(index, 1)
                }
            }
        },
        //修改状态, done or not
        changeDone: function(id) {
            var arr = this.todos
            for (var i = 0; i < arr.length; i++) {
                var item = arr[i]
                if (item.id == id) {
                    var index = arr.indexOf(item)
                    var obj = arr[index]
                    obj['done'] = !obj['done']
                    arr.splice(index, 1, obj)
                    //由于Vue.js的限制, 必须这样改动数组
                }
            }
        },


        //清除所有被标记为done的todo
        clearDone: function() {
            var arr = []
            for (var i = 0; i < this.todos.length; i++) {
                var item = this.todos[i]
                if (item.done == false) {
                    arr.push(item)
                }
            }
            this.todos = arr
        },
        //第一次加载, 读取信息
        getTodos: function() {
            this.loadTodos()
        },
        //localStroage相关
        loadTodos: function() {
            var data = '[]'
            if (!localStorage.getItem('todoList')) {
                localStorage.setItem('todoList', '[]')
            } else {
                data = localStorage.getItem('todoList')
            }
            this.todos = JSON.parse(data)
        },
        saveTodos: function() {
            var data = JSON.stringify(this.todos)
            localStorage.setItem('todoList', data)
        }
    },

    mounted: function() {
        this.getTodos()
    },

    watch: {
        todos: function() {
            this.saveTodos()
        }
    },

    template: `
    <div id='app' v-on:click="allAction">
        <div class="todo-container" id='app' >
            <header>
            <h1>My todos</h1>
            <input id = 'todo-input' class = 'new-todo' type="text"
            v-model.lazy="inputText"
            placeholder="what to do?" />
            <button class = 'addBtn' type="button">Add todo</button>
            <button class = 'clearDone' type="button">clearDone</button>
            </header>
        </div>
        <ul class="items">
            <todo-list v-for="todo in todos" v-bind:todo="todo"></todo-list>
        </ul>
    </div>
    `,

    components: {
        'todo-list': todoList,
    }
})
