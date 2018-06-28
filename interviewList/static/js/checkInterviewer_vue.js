//
var ib_v = new Vue({
    el: '#interBox_Vue',
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
    },
    mounted: function() {
        this.getAllForm()
    }
})
