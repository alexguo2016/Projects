var route = require('../util/routeUtil')

var index = {
    path: '/',
    method: 'get',
    func: (request, response) => {
        var path = 'newInterview.html'
        route.sendHTML(path, response)
    }
}

var test = {
    path: '/test',
    method: 'get',
    func: (request, response) => {
        var path = 'test.html'
        route.sendHTML(path, response)
    }
}

var newInterview = {
    path: '/newInterview',
    method: 'get',
    func: (request, response) => {
        var path = 'newInterview.html'
        route.sendHTML(path, response)
    }
}

var check = {
    path: '/check',
    method: 'get',
    func: (request, response) => {
        var path = 'check.html'
        route.sendHTML(path, response)
    }
}

var check_vue = {
    path: '/check_vue',
    method: 'get',
    func: (request, response) => {
        var path = 'check_vue.html'
        route.sendHTML(path, response)
    }
}


var routes = [
    index,
    test,
    newInterview,
    check,
    check_vue,
]

module.exports.routes = routes
