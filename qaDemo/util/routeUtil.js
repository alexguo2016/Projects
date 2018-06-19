var fs = require('fs')

var sendJSON = (data, response) => {
    var data = JSON.stringify(data, null, 2)
    response.send(data)
}

var sendHTML = (path, response) => {
    var options = {
        encoding: 'utf-8',
    }
    var p = `template/${path}`
    fs.readFile(p, options, (error, data) => {
        response.send(data)
    })
}

var registerRoutes = (routes, app) => {
    for (var i = 0; i < routes.length; i++) {
        var r = routes[i]
        app[r.method](r.path, r.func)
    }
}

var route = {
    sendJSON,
    sendHTML,
    registerRoutes,
}

module.exports = route
