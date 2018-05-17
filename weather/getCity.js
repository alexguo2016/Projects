var log = console.log.bind(console)
var e = function(str) {
    return document.querySelector(str)
}
var getCity = function() {
    var input = e('.input_city')
    return input.value
}

var bindCity = function() {
    var box = e('.city')
    box.addEventListener('click', function(event) {
        var self = event.target
        if (self.classList.contains('get_weather')) {
            var city = getCity()
            getData(function(r) {
                var wd = JSON.parse(r)
                var msgArray = getTemps(wd)
                drawGraph(msgArray, city)
            }, city)
        }
    })
}
