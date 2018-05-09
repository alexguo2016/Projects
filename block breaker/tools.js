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

//用于载入图片
var createImg = function(src) {
    var o = new Image()
    o.src = src
    return o
}
