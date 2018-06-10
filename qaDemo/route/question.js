//route应该有什么?route应该做什么?作为MVC中的C, 应该是连接M和V, 并且将数据发送到浏览器, 它要做的事情就3步
// 1.接收数据, 使用不同的path和method表示不同的方法
// 2.处理数据
// 3.将数据发送给浏览器
//既然这个是question的路由, 接收数据之后对数据进行处理的方法就是question的方法

var q = require('../model/question')
var route = require('../util/routeUtil')
var log = require('../util/logUtil')

var add = {
    path: '/api/question/add',
    method: 'post',
    func: (request, response) => {
        //接收数据
        var data = request.body
        //处理数据
        var item  = q.new(data)
        //将数据发送给浏览器, 返回的是新增的数据, 对象
        route.sendJSON(item, response)
    },
}

var deleteQuestion = {
    path: '/api/question/delete:id',
    method: 'get',
    func: (request, response) => {
        //接收数据
        var data = request.body
        //处理数据
        var id = request.params.id
        var item  = q.delQuestion(id)
        //将数据发送给浏览器, 返回的是被删除的数据, 对象
        route.sendJSON(item, response)
    },
}

var all = {
    path: '/api/question/all',
    method: 'get',
    func: (request, response) => {
        //接收数据
        // console.log('question, all')
        var data = q.all()
        //处理数据, 而all请求并不需要处理数据
        // console.log('question, all next', typeof data)
        //将数据发送给浏览器
        route.sendJSON(data, response)
    },
}

var detail = {
    path: '/api/question/:id',
    method: 'get',
    func: (request, response) => {
        //接收数据
        var id = Number(request.params.id)
        var data = q.detail(id)
        //处理数据, 和all类似, 不需要处理数据

        //将数据发送给浏览器, 返回的是被删除的数据, 对象
        route.sendJSON(data, response)
    },
}

var routes = [
    add,
    deleteQuestion,
    all,
    detail,
]

module.exports.routes = routes
