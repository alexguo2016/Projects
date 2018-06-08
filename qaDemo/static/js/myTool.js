var log = console.log.bind(console)

var e = (str) => {
    return document.querySelector(str)
}

var es = (str) => {
    return document.querySelectorAll(str)
}

var myFind = (str, ele) => {
    return ele.querySelector(str)
}

var myClosest = (str, ele) => {
    //从这个节点的父节点开始寻找, 直到根目录, 返回最近的符合要求的节点
    var parentEle = ele.parentNode
    var target = ''
    while (parentEle != null) {
        target = myFind(str, parentEle)
        if (target != null) {
            return target
        } else {
            parentEle = parentEle.parentNode
        }
    }
    return undefined
}

//自己封装的ajax函数
var ajax = (method, path, callback, data) => {
    var xhr = new XMLHttpRequest()
    xhr.open(method, path, true)
    xhr.onreadystatechange = (response) => {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                var r = xhr.responseText
                callback(r)
            }
        }
    }
    if (data == undefined) {
        data = null
    }
    xhr.send(data)
}
//测试ajax函数
// var method = 'get'
// var path = 'http://localhost:7000/api/question/all'
// var callback = (r) => {
//     console.log(r, typeof r)
// }
// ajax(method, path, callback)
