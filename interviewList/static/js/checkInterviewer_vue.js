//
var modalAll = {
    props: ['items'],
    template: `
        <div class="container">
        <!-- 模态框2 为显示  所有评价而设置 -->
            <div class="modal fade text-center" id="myModal_forAll">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">

                    <!-- 模态框头部 -->
                        <div class="modal-header">
                        <h4 class="modal-title">候选人的所有评价如下:</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                    <!-- 模态框主体 -->
                        <div class="modal-body-forAll" v-for="item in items">
                            <div class="" data-id="item.id">
                                <div class="content text-center col-sm-8">
                                    {{item.jud}}
                                </div>
                                <div class="footer text-right col-sm-8">
                                    <span class="timeBox">{{item.createTime | myTimeFormat }}</span>
                                    <span class="nameBox">{{item.author}}</span>
                                </div>
                            </div>
                        </div>

                    <!-- 模态框底部 -->
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary " data-dismiss="modal">确认</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    `,
}

var modalNewest = {
    props: ['id'],
    data: function() {
        return {
            'judText': '',
            'judMan': '',
        }
    },
    computed: {
        'info': function() {
            var o = {
                'id': this.id,
                'judMan': this.judMan,
                'judText': this.judText,
            }
            return o
        }
    },
    methods: {
        newModelInfos: function() {
            console.log('this.jud', this.info.judText, this.info.judMan)
        },
        clearInfo: function() {
            this.judText = ''
            this.judMan = ''
        },
    },
    template: `
        <div class="container">
            <!-- 模态框 为显示  增加评价 设置-->
            <div class="modal fade text-center" id="myModal">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">

                        <!-- 模态框头部 -->
                        <div class="modal-header">
                            <h4 class="modal-title">请评价该候选人</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <!-- 模态框主体 -->
                        <div class="modal-body">
                            <div class="outerModal">
                                <textarea class="" rows="20" cols="90"
                                v-model="judText"
                                 ></textarea>
                                <div class="">
                                    <span>评价人</span>
                                    <input type="text" v-model="judMan">
                                </div>
                            </div>
                        </div>

                        <!-- 模态框底部 -->
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary judgeSumit" data-dismiss="modal"
                            v-on:click="$emit('add-emit', info)"
                            v-on:click="clearInfo"
                            v-bind:info="info"
                            >确认</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal"
                            v-on:click="clearInfo"
                            >关闭</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    `,
}

var myLables = {
    template: `
        <div class="lables row">
            <div class="col-sm-1 font-weight-bold">
                id:
            </div>
            <div class="col-sm-1 font-weight-bold">
                姓名：
            </div>
            <div class="col-sm-1 font-weight-bold">
                应聘职位：
            </div>
            <div class="col-sm-2 font-weight-bold">
                填表时间：
            </div>
            <div class="col-sm-4 font-weight-bold">
                最新评价：
            </div>

        </div>
    `
}

var interviewerBox = {
    template: `
        <div class="interviewerBox" >
            <div class="" v-for="(item, index) in arr">
            <div class="row detail" >
                <div class="col-sm-1 font-weight-bold">
                    <div class="idBox">
                        {{item.id}}
                    </div>
                </div>
                <div class="col-sm-1 font-weight-bold">
                    <div class="nameBox">
                        {{item.normalInfos.name}}
                    </div>
                </div>
                <div class="col-sm-1 font-weight-bold">
                    <div class="careerBox">
                        {{item.jobObjected.position}}
                    </div>
                </div>
                <div class="col-sm-2 font-weight-bold">
                    <div class="timeBox">
                        {{item.createTime}}
                    </div>
                </div>
                <div class="col-sm-4 font-weight-bold">
                    <div class="judgeBox">
                        <div class="text-left">{{allLastjudge[index].jud}}</div>
                        <div class="text-right">评价人:{{allLastjudge[index].author}}     时间:{{allLastjudge[index].createTime | myTimeFormat}}</div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <button type="button" class="updateForm btn btn-primary" data-toggle="modal" data-target="#myModal"
                    v-on:click="$emit('show-modal', item.id)"
                    >新增评价</button>
                    <button type="button" class="allJudge btn btn-info" data-toggle="modal" data-target="#myModal_forAll"
                    v-on:click="$emit('show-all-emit', item.id)"
                     >所有评价</button>
                    <button type="button" class="delForm btn btn-danger"
                    v-on:click="$emit('del-emit', item.id)"
                     >删除候选人</button>
                </div>
            </div>
        </div>
    `,
    props: ['arr', 'allLastjudge'],
    data: function() {
        return {
            testData: ''
        }
    }
}

var pageTitle = {
    template: `
        <div class="title row">
            <div class="col-sm-12 mySection">
                <span class="sectionTitle">应聘情况</span>
            </div>
        </div>
    `,
}

var formTitle = {
    template: `
        <div class="formTitle">
            <nav class="navbar navbar-expand-sm bg-info navbar-dark">
                <!-- Brand/logo -->
                <a class="navbar-brand" href="newInterview">
                    <h1>LOGO</h1>
                    <!-- <span class="small">面试表格</span> -->
                </a>

                <!-- Links -->
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="newInterview">
                            新增面试
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="check">
                            查看候选人
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="check_vue">
                            查看候选人-Vue版本
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    `
}

Vue.filter('myTimeFormat', function(t) {
    var date = new Date(t)
    var d = date.toLocaleDateString()
    var h = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()
    var time = `${d}--${h}:${m}:${s}`
    return time
})

var app = new Vue({
    el: '#outerForm_Vue',
    data: {
        arr: '',
        allJudge: [],
        newJudge: '',
        id: '',
    },
    computed: {
        allLastjudge: function() {
            var judArr = []
            for (var i = 0; i < this.arr.length; i++) {
                var item = this.arr[i].judgement
                var lastJud = ''
                if (item == undefined) {
                    lastJud = {
                        'id': '',
                        'author': '',
                        'jud': '',
                        'createTime': ''
                    }
                } else {
                    lastJud = item[item.length - 1]
                }
                judArr.push(lastJud)
            }
            return judArr
        }
    },
    methods: {
        getAllForm: function() {
            var d = ''
            var method = 'get'
            var path = 'http://localhost:7000/api/form/all'
            var that = this
            var callback = (data) => {
                that.arr = data
            }
            ajax(method, path, callback)
        },
        addEmit: function(input) {
            var o = {
                'id': input.id,
                'author': input.judMan,
                'jud': input.judText,
                'createTime': new Date()
            }
            for (var i = 0; i < this.arr.length; i++) {
                var item = this.arr[i]
                if (item.id == input.id) {
                    item.judgement.push(o)
                    this.arr.splice(i, 1, item)
                }
            }
            //通过ajax发起修改数据库的请求
            apiUpdateForm(o)

        },
        showModal: function(input) {
            // console.log('showModal')
            this.id = input
        },
        showAllEmit: function(input) {
            for (var i = 0; i < this.arr.length; i++) {
                var item = this.arr[i]
                if (item.id == input) {
                    this.allJudge = item.judgement
                }
            }
        },
        delEmit: function(input) {
            for (var i = 0; i < this.arr.length; i++) {
                var item = this.arr[i]
                if (item.id == input) {
                    //使用ajax删除数据库中的项目
                    apiDelData(input)
                    //页面删除项目
                    this.arr.splice(i, 1)
                }
            }
        },
    },

    mounted: function() {
        this.getAllForm()
    },

    components: {
        'my-modal-all': modalAll,
        'my-modal-newest': modalNewest,
        'my-lables': myLables,
        'my-interviewer-box': interviewerBox,
        'my-page-title': pageTitle,
        'my-form-title': formTitle,
    },

    template: `
        <div >
            <div class="myForm">
                <my-form-title></my-form-title>
                <br>
                <div class="formMain container">
                    <div class="interviewerStatus">
                        <my-page-title></my-page-title>

                        <my-lables></my-lables>

                        <my-interviewer-box
                        v-bind:arr="arr"
                        v-bind:allLastjudge="allLastjudge"
                        v-on:show-all-emit="showAllEmit"
                        v-on:del-emit="delEmit"
                        v-on:show-modal="showModal"
                        ></my-interviewer-box>

                    </div>
                </div>
                <br>
            </div>
            <br>

            <my-modal-newest v-on:add-emit="addEmit" v-bind:id="id"></my-modal-newest>

            <my-modal-all v-bind:items="allJudge"></my-modal-all>

        </div>
    `
})

var apiDelData = function(id) {
    var method = 'get'
    var path = 'http://localhost:7000/api/form/del' + id
    var callback = () => {
        console.log('delete')
    }
    ajax(method, path, callback)
}

var apiUpdateForm = (newJudge) => {
    var id = newJudge.id
    var path =  'http://localhost:7000/api/form/check' + id
    var method = 'get'
    ajax(method, path, (data) => {
        var checkData = data
        if (checkData.judgement == undefined) {
            checkData.judgement = []
        }
        checkData.judgement.push(newJudge)
        var inner_method = 'post'
        var inner_path =  'http://localhost:7000/api/form/update' + id
        ajax(inner_method, inner_path, (d) => {

        }, checkData)
    })
}
