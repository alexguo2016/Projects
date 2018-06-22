var myForm = require('../model/interviewForm')
var log = require('../util/logUtil')
var route = require('../util/routeUtil')

var all = {
    path: '/api/form/all',
    method: 'get',
    func: (request, response) => {
        //接收数据
        log('all')
        var data = myForm.all()
        //处理数据

        //将数据发送给浏览器
        route.sendJSON(data, response)
    }
}

var routes = [
    all,
]

module.exports.routes = routes
