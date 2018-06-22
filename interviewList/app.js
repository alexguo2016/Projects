var express = require('express')
var bodyParser = require('body-parser')
var route = require('./util/routeUtil')

var app = express()
app.use(express.static('static'))
app.use(bodyParser.json())

var routesList = [
    'index',
    'interviewForm',
]

for (var i = 0; i < routesList.length; i++) {
    var r = routesList[i]
    var rs = require(`./route/${r}`).routes
    route.registerRoutes(rs, app)
}

var server = app.listen(7000, () => {
    var instance = server.address()
    var address = instance.address
    var port = instance.port
    console.log(`本地服务器启动: http://${address}:${port}`)
})
