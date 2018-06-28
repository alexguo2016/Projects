//
var ib_v = new Vue({
    el: '#outerForm_Vue',
    data: {
        arr: '',
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
                    if (last >= 1) {
                        jud[last].createTime = that.formatTime(jud[last].createTime)
                    } else {
                        jud[last] = {}
                    }
                    that.arr[i].lastJud = jud[last]
                }
            }
            ajax(method, path, callback)
        },
        formatTime: function(t) {
            var date = new Date(t)
            var d = date.toLocaleDateString()
            var h = date.getHours()
            var m = date.getMinutes()
            var s = date.getSeconds()
            var time = `${d}--${h}:${m}:${s}`
            return time
        },
        formDel: function(event) {
            var self = event.target
            var idbox = myClosest('.idBox', self)
            var outer = myClosest('.detail', self)
            var id = Number(idbox.innerHTML)
            apiDelData(id, outer)
        },
        showAddModal: function(event) {
            var self = event.target
            var idbox = myClosest('.idBox', self)
            var id = Number(idbox.innerHTML)
            clearModal()
            insertJudgeModal(id)
        },
        judgeSumit: function(event) {
            var self = event.target
            var newJudge = getJudgement(self)
            //ajax操作, 首先check相应id的form, 然后update, 并且在回调函数内将元素插入页面
            apiUpdateForm(newJudge)
        },
        showJudges: function(event) {
            var self = event.target
            var idbox = myClosest('.idBox', self)
            var id = Number(idbox.innerHTML)
            clearModal()
            //由该id查询数据, 获取所有评价
            apiShowJudges(id)
            //渲染到页面模态框中

        }
    },
    mounted: function() {
        this.getAllForm()
    },
})

var apiDelData = function(id, outer) {
    var method = 'get'
    var path = 'http://localhost:7000/api/form/del' + id
    var callback = () => {
        outer.remove()
    }
    ajax(method, path, callback)
}

var clearModal = () => {
    var m = e('.modal-body')
    m.innerHTML = ''
}

var insertJudgeModal = (id) => {
    var t = `
        <div class="outerModal" data-id=${id}>
            <textarea class="" rows="20" cols="90" ></textarea>
            <div class="">
                <span>评价人</span>
                <input type="text" >
            </div>
        </div>
    `
    var m = e('.modal-body')
    m.insertAdjacentHTML('beforeend', t)
}

var getJudgement = (obj) => {
    var self = obj
    var o = {}
    var outer = myClosest('.outerModal', self)
    o.id = Number(outer.dataset.id)

    var authorBox = myClosest('input', self)
    o.author = authorBox.value

    var judgementBox = myClosest('textarea', self)
    o.jud = judgementBox.value

    o.createTime = new Date()
    return o
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
            var item = d.judgement
            var newestJudge = item[item.length - 1]
            updateNewestJudge(newestJudge)
        }, checkData)
    })
}

var updateNewestJudge = (newestJudge) => {
    var item = newestJudge
    var id = item.id
    var forms = es('.detail')
    for (var i = 0; i < forms.length; i++) {
        var f = forms[i]
        var idBox = myFind('.idBox',f)
        var target_id = Number(idBox.innerHTML)
        if (target_id == id) {
            var target = myFind('.judgeBox', f)
            insertJudge_DOM(newestJudge, target)
        }
    }
}

var insertJudge_DOM = (newestJudge, dom) => {
    var item = newestJudge
    var author = item.author
    var jud = item.jud
    var date = new Date(item.createTime)
    var d = date.toLocaleDateString()
    var h = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()
    var time = `${d}--${h}:${m}:${s}`
    var t = `
        <div>
            <div class="text-left">${jud}</div>
            <div class="text-right">评价人:${author}     时间:${time}</div>
        </div>
    `
    dom.innerHTML = t
}

var apiShowJudges = (id) => {
    var path =  'http://localhost:7000/api/form/check' + id
    var method = 'get'
    ajax(method, path, (data) => {
        var checkData = data
        if (checkData.judgement == undefined) {
            checkData.judgement = []
        }
        var items = checkData.judgement
        var m = e('.modal-body-forAll')
        m.innerHTML = ''
        modalJudges(items)
    })
}

var modalJudges = (items) => {
    for (var i = 0; i < items.length; i++) {
        var item = items[i]
        modalJudge(item, i)
    }
}

var modalJudge = (item, i) => {
    var id = i
    var author = item.author
    var jud = item.jud
    var time = new Date(item.createTime).toLocaleDateString()
    var t = `
        <div class="" data-id=${id}>
            <div class="content text-center col-sm-8">
                ${jud}
            </div>
            <div class="footer text-right col-sm-8">
                <span class="timeBox">${time}</span>
                <span class="nameBox">${author}</span>
            </div>
        </div>
    `
    var m = e('.modal-body-forAll')
    m.insertAdjacentHTML('beforeend', t)
}
