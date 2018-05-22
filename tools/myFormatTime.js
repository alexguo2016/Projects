//将毫秒数转化为xx分xx秒的格式
var formatTime = function(time) {
    var srcTime = Math.floor(time)
    var minute = 0
    while (true) {
        if (srcTime > 59) {
            minute += 1
            srcTime -= 60
        } else {
            var result
            return result = `${minute}分${srcTime}秒`
        }
    }
}
