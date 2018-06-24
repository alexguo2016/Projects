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

var check = {
    path: '/api/form/check:id',
    method: 'get',
    func: (request, response) => {
        var id = request.params.id
        var item = myForm.check(id)
        route.sendJSON(item, response)
    }
}

var delForm = {
    path: '/api/form/del:id',
    method: 'get',
    func: (request, response) => {
        var id = request.params.id
        var item = myForm.delForm(id)
        route.sendJSON(item, response)
    }
}

var updataForm = {
    path: '/api/form/update:id',
    method: 'post',
    func: (request, response) => {
        var id = request.params.id
        var data = request.body
        var item = myForm.updataForm(id, data)
        route.sendJSON(item, response)
    }
}

var routes = [
    all,
    add,
    check,
    delForm,
    updataForm,
]

module.exports.routes = routes
