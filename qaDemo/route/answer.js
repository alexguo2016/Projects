var a = require('../model/answer')
var route = require('../util/routeUtil')

var add = {
    path: '/api/answer/add',
    method: 'post',
    func: (request, response) => {
        //接收数据
        var data = request.body
        //处理数据
        var item  = a.new(data)
        //将数据发送给浏览器, 返回的是新增的数据, 对象
        route.sendJSON(item, response)
    },
}

var deleteAnswer = {
    path: '/api/answer/delete:id',
    method: 'get',
    func: (request, response) => {
        //接收数据
        var data = request.body
        //处理数据
        var item  = a.delete(id)
        //将数据发送给浏览器, 返回的是被删除的数据, 对象
        route.sendJSON(item, response)
    },
}

var all = {
    path: '/api/answer/all',
    method: 'get',
    func: (request, response) => {
        //接收数据
        var data = a.all()
        //处理数据, 而all请求并不需要处理数据
        // console.log(data)
        //将数据发送给浏览器
        route.sendJSON(data, response)
    },
}

var routes = [
    add,
    deleteAnswer,
    all,
]

module.exports.routes = routes
