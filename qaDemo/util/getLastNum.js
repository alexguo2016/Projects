var getLastNum = (str, char) => {
    var index = str.indexOf(char) + 1
    console.log('index', index)
    if (index > 0) {
        var ln = str.substr(index)
    } else {
        var ln = '1'
    }
    return ln
}
//
// var str = 'q2a22'
// var str2 = 'q4a1'
// var str3 = '12q'
// var a = getLastNum(str, 'a')
// var b = getLastNum(str2, 'a')
// var c = getLastNum(str3, 'a')
// console.log('a-->', a, 'b-->', b, 'c-->', c)

module.exports = getLastNum
