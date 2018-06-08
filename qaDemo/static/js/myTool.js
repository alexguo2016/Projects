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

//自己封装的ajax函数
var ajax = (method, path, callback, data) => {
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = (response) => {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                var r = xhr.responseText
                callback(r)
            }
        }
    }
    xhr.open(method, path, false)
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
