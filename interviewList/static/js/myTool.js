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

var myFindAll = (str, ele) => {
    return ele.querySelectorAll(str)
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
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onreadystatechange = (response) => {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                var d = JSON.parse(xhr.response)
                callback(d)
            }
        }
    }
    if (data == undefined) {
        data = null
    }
    data = JSON.stringify(data)
    xhr.send(data)
}

//从指定的DOM元素中, 查找特定选择器匹配的元素, 返回其value
var getFromDom = (domSelectorString, targetSelectorString) => {
    var d = e(domSelectorString)
    var t = myFind(targetSelectorString, d)
    var value = t.value
    return value
}

//从指定的DOM元素中, 查找特定选择器匹配的元素, 返回其value
var getFromDOM_ObjectVersion = (dom_Object, outerSelectroString, targetSelectorString) => {
    var tb = myFind(outerSelectroString, dom_Object)
    var targetDOM = myFind(targetSelectorString, tb)
    var value = targetDOM.value
    return value
}
