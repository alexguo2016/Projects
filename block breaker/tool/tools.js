var log = console.log.bind(log)

var e = function(str) {
    return document.querySelector(str)
}
var t_find = function(element, str) {
    return element.querySelector(str)
}
var t_findAll = function(element, str) {
    return element.querySelectorAll(str)
}

// var log = function(s) {
//     var textarea = e('#console_textarea')
//     // console.log('aaa')
//     textarea.value += '\n' + s
// }
