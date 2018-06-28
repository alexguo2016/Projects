//
var ib_v = new Vue({
    el: '#interBox_Vue',
    data: {
        arr: '',
    },
    methods: {
        insertInterviewer: function(obj) {
            var id = obj.id
            var name = obj.normalInfos.name
            var time = obj.createTime
            var career = obj.jobObjected.position
            var judge = obj.judgement
            if (judge.length != 0) {
                var item = judge[judge.length - 1]
                var author = item.author
                var jud = item.jud
                var date = new Date(item.createTime)
                var d = date.toLocaleDateString()
                var h = date.getHours()
                var m = date.getMinutes()
                var s = date.getSeconds()
                var time = `${d}--${h}:${m}:${s}`
            } else {
                var item = {}
                var author = '暂无'
                var jud = ''
                var time = ''
            }
            var t = `
                <div class="">
                    <div class="row detail" data-id=${id}>
                        <div class="col-sm-1 font-weight-bold">
                            <div class="idBox">
                                ${id}
                            </div>
                        </div>
                        <div class="col-sm-1 font-weight-bold">
                            <div class="nameBox">
                                ${name}
                            </div>
                        </div>
                        <div class="col-sm-1 font-weight-bold">
                            <div class="careerBox">
                                ${career}
                            </div>
                        </div>
                        <div class="col-sm-2 font-weight-bold">
                            <div class="timeBox">
                                ${time}
                            </div>
                        </div>
                        <div class="col-sm-4 font-weight-bold">
                            <div class="judgeBox">
                                <div class="text-left">${jud}</div>
                                <div class="text-right">评价人:${author}     时间:${time}</div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <button type="button" class="updateForm btn btn-primary" data-toggle="modal" data-target="#myModal">新增评价</button>
                            <button type="button" class="allJudge btn btn-info" data-toggle="modal" data-target="#myModal_forAll">所有评价</button>
                            <button type="button" class="delForm btn btn-danger">删除候选人</button>
                        </div>
                    </div>
                </div>
            `
            var ib = e('.interviewerBox')
            ib.insertAdjacentHTML('beforeend', t)
        },
        insertAll: function(objs) {
            for (var i = 0; i < objs.length; i++) {
                var item = objs[i]
                this.insertInterviewer(item)
            }
        },
        getAllForm: function() {
            var d = ''
            var method = 'get'
            var path = 'http://localhost:7000/api/form/all'
            var that = this
            var callback = (data) => {
                //获得数据
                // var allForm = data
                // //插入表格
                // this.insertAll(allForm)
                that.arr = data
                // log('that.data', data)
            }
            ajax(method, path, callback)
        },

    },
    mounted: function() {
        this.getAllForm()
    }
})
