var route = require('../util/routeUtil')

var index = {
    path: '/',
    method: 'get',
    func: (request, response) => {
        var path = 'index.html'
        route.sendHTML(path, response)
    }
}


var routes = [
    index,
]

module.exports.routes = routes
