var route = require('../util/routeUtil.js')

var index = {
    path: '/',
    method: 'get',
    func: (request, response) => {
        var path = 'index.html'
        route.sendHTML(path, response)
    },
}

var answered = {
    path: '/answered.html',
    method: 'get',
    func: (request, response) => {
        var path = 'answered.html'
        route.sendHTML(path, response)
    },
}

var noAnswered = {
    path: '/noAnswered.html',
    method: 'get',
    func: (request, response) => {
        var path = 'noAnswered.html'
        route.sendHTML(path, response)
    },
}

var routes = [
    index,
    answered,
    noAnswered,
]

module.exports.routes = routes
