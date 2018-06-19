var getQid = (str, qchar, achar) => {
    var begin = str.indexOf(qchar) + 1
    var end = str.indexOf(achar) - 1
    if ((end - begin) > 0) {
        var ln = str.substr(begin, end)
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

module.exports = getQid
