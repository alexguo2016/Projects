var log = console.log.bind(console)
//选择元素
var e = function(selector) {
    return document.querySelector(selector)
}
var es = function(selector) {
    return document.querySelectorAll(selector)
}

//在元素内选择符合条件的元素
var t_find = function(element, selector) {
    return element.querySelector(selector)
}
var t_findAll = function(element, selector) {
    return element.querySelectorAll(selector)
}
