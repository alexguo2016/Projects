var myForm = require('../model/interviewForm')
var log = require('../util/logUtil')
var route = require('../util/routeUtil')

var all = {
    path: '/api/form/all',
    method: 'get',
    func: (request, response) => {
        //接收数据
        var data = myForm.all()
        //处理数据
        //将数据发送给浏览器
        route.sendJSON(data, response)
    }
}

var add = {
    path: '/api/form/add',
    method: 'post',
    func: (request, response) => {
        //接收数据
        var data = request.body
        //处理数据
        var item = myForm.new(data)
        //将数据发送给浏览器
        route.sendJSON(item, response)
    },
}

var routes = [
    all,
    add,
]

module.exports.routes = routes
