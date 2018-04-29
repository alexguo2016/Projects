var e = function(str) {
    return document.querySelector(str)
}
var log = console.log.bind(console)
var ajax = function(method, path, data, callback) {
    var r = new XMLHttpRequest()
    r.open(method, path, true)
    r.setRequestHeader('Origin', '*')
    r.withCredentials = true;
    r.setRequestHeader('Content-Type', 'application/json')
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            callback(r.response)
        }
    }
    data = JSON.stringify(data, null, 2)
    r.send(data)
}

var getData = (callback) => {
    var method = 'GET'
    var path = 'http://api.avatardata.cn/MingRenMingYan/Random?key=6cc25a1ab64942ae8b970121bedc014f'
    var data = {}
    ajax(method, path, data, callback)
}

getData(function(r) {
    log('r', r)
})
