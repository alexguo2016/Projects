//将data序列化之后存入自定义key的localStorage
var saveLocalStorage = function(data, key) {
    var t = JSON.stringify(data)
    last_t = localStorage.getItem(key)
    if (localStorage.getItem(key)) {
        t += last_t
    }
    localStorage.setItem(key, t)
}
//从localStorage中读取key的数据
var loadLocalStorage(key) {
    var t = localStorage.getItem(key)
    if (!t) {
        console.log(`对应${key}的localStorage并不存在，返回空数据`)
    }
    return t
}
