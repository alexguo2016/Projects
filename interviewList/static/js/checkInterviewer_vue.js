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
                            模态框内容..
                        </div>

                        <!-- 模态框底部 -->
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary judgeSumit" data-dismiss="modal"

                            >确认</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
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
            <div class="" v-for="item in arr">
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
                        <div class="text-left">{{item.lastJud.jud}}</div>
                        <div class="text-right">评价人:{{item.lastJud.author}}     时间:{{item.lastJud.createTime | myTimeFormat}}</div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <button type="button" class="updateForm btn btn-primary" data-toggle="modal" data-target="#myModal"
                    v-on:click="$emit('add-emit', item.id)"
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
    props: ['arr'],
    data: function() {
        return ''
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
        allJudge: '',
        newJudge: '',
        id: '',
    },
    methods: {
        getAllForm: function() {
            var d = ''
            var method = 'get'
            var path = 'http://localhost:7000/api/form/all'
            var that = this
            var callback = (data) => {
                that.arr = data
                for (var i = 0; i < data.length; i++) {
                    var jud = that.arr[i].judgement
                    var last = jud.length - 1
                    if (last >= 0) {
                        // jud[last].createTime = that.formatTime(jud[last].createTime)
                        jud[last].createTime = jud[last].createTime
                    } else {
                        jud[last] = {}
                    }
                    that.arr[i].lastJud = jud[last]
                }
            }
            ajax(method, path, callback)
        },
        addEmit: function(input) {
            console.log('add input-->', input)
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
            console.log('delEmit-->', input)
        },
        // formDel: function(event) {
        //     var self = event.target
        //     var idbox = myClosest('.idBox', self)
        //     var outer = myClosest('.detail', self)
        //     var id = Number(idbox.innerHTML)
        //     apiDelData(id, outer)
        // },
        // showAddModal: function(event) {
        //     var self = event.target
        //     var idbox = myClosest('.idBox', self)
        //     var id = Number(idbox.innerHTML)
        //     clearModal()
        //     insertJudgeModal(id)
        // },
        // judgeSumit: function(event) {
        //     var self = event.target
        //     var newJudge = getJudgement(self)
        //     //ajax操作, 首先check相应id的form, 然后update, 并且在回调函数内将元素插入页面
        //     apiUpdateForm(newJudge)
        // },
        // showJudges: function(event) {
        //     var self = event.target
        //     var idbox = myClosest('.idBox', self)
        //     var id = Number(idbox.innerHTML)
        //     clearModal()
        //     //由该id查询数据, 获取所有评价
        //     apiShowJudges(id)
        //     //渲染到页面模态框中
        //
        // }
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
                        <my-interviewer-box v-bind:arr="arr"  v-on:add-emit="addEmit"
                        v-on:show-all-emit="showAllEmit"
                        v-on:del-emit="delEmit"
                        ></my-interviewer-box>
                    </div>
                </div>
                <br>
            </div>
            <br>

            <my-modal-newest></my-modal-newest>

            <my-modal-all v-bind:items="allJudge"></my-modal-all>

        </div>
    `
})

// var apiDelData = function(id, outer) {
//     var method = 'get'
//     var path = 'http://localhost:7000/api/form/del' + id
//     var callback = () => {
//         outer.remove()
//     }
//     ajax(method, path, callback)
// }
//
// var clearModal = () => {
//     var m = e('.modal-body')
//     m.innerHTML = ''
// }
//
// var insertJudgeModal = (id) => {
//     var t = `
//         <div class="outerModal" data-id=${id}>
//             <textarea class="" rows="20" cols="90" ></textarea>
//             <div class="">
//                 <span>评价人</span>
//                 <input type="text" >
//             </div>
//         </div>
//     `
//     var m = e('.modal-body')
//     m.insertAdjacentHTML('beforeend', t)
// }
//
// var getJudgement = (obj) => {
//     var self = obj
//     var o = {}
//     var outer = myClosest('.outerModal', self)
//     o.id = Number(outer.dataset.id)
//
//     var authorBox = myClosest('input', self)
//     o.author = authorBox.value
//
//     var judgementBox = myClosest('textarea', self)
//     o.jud = judgementBox.value
//
//     o.createTime = new Date()
//     return o
// }
//
// var apiUpdateForm = (newJudge) => {
//     var id = newJudge.id
//     var path =  'http://localhost:7000/api/form/check' + id
//     var method = 'get'
//     ajax(method, path, (data) => {
//         var checkData = data
//         if (checkData.judgement == undefined) {
//             checkData.judgement = []
//         }
//         checkData.judgement.push(newJudge)
//         var inner_method = 'post'
//         var inner_path =  'http://localhost:7000/api/form/update' + id
//         ajax(inner_method, inner_path, (d) => {
//             var item = d.judgement
//             var newestJudge = item[item.length - 1]
//             updateNewestJudge(newestJudge)
//         }, checkData)
//     })
// }
//
// var updateNewestJudge = (newestJudge) => {
//     var item = newestJudge
//     var id = item.id
//     var forms = es('.detail')
//     for (var i = 0; i < forms.length; i++) {
//         var f = forms[i]
//         var idBox = myFind('.idBox',f)
//         var target_id = Number(idBox.innerHTML)
//         if (target_id == id) {
//             var target = myFind('.judgeBox', f)
//             insertJudge_DOM(newestJudge, target)
//         }
//     }
// }
//
// var insertJudge_DOM = (newestJudge, dom) => {
//     var item = newestJudge
//     var author = item.author
//     var jud = item.jud
//     var date = new Date(item.createTime)
//     var d = date.toLocaleDateString()
//     var h = date.getHours()
//     var m = date.getMinutes()
//     var s = date.getSeconds()
//     var time = `${d}--${h}:${m}:${s}`
//     var t = `
//         <div>
//             <div class="text-left">${jud}</div>
//             <div class="text-right">评价人:${author}     时间:${time}</div>
//         </div>
//     `
//     dom.innerHTML = t
// }
//
// var apiShowJudges = (id) => {
//     var path =  'http://localhost:7000/api/form/check' + id
//     var method = 'get'
//     ajax(method, path, (data) => {
//         var checkData = data
//         if (checkData.judgement == undefined) {
//             checkData.judgement = []
//         }
//         var items = checkData.judgement
//         var m = e('.modal-body-forAll')
//         m.innerHTML = ''
//         modalJudges(items)
//     })
// }
//
// var modalJudges = (items) => {
//     for (var i = 0; i < items.length; i++) {
//         var item = items[i]
//         modalJudge(item, i)
//     }
// }
//
// var modalJudge = (item, i) => {
//     var id = i
//     var author = item.author
//     var jud = item.jud
//     var time = new Date(item.createTime).toLocaleDateString()
//     var t = `
        // <div class="" data-id=${id}>
        //     <div class="content text-center col-sm-8">
        //         ${jud}
        //     </div>
        //     <div class="footer text-right col-sm-8">
        //         <span class="timeBox">${time}</span>
        //         <span class="nameBox">${author}</span>
        //     </div>
        // </div>
//     `
//     var m = e('.modal-body-forAll')
//     m.insertAdjacentHTML('beforeend', t)
// }
