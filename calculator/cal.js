//tools
var log = console.log.bind(console)
var e = function(str) {
    return document.querySelector(str)
}

var cal = function(equation) {
    try {
        var res = eval(equation)
        return eval(equation)
    } catch(e) {
        return "equation error!"
    }
}
var clear = function() {
    return ''
}
var redo = function(equation) {
    var len = equation.length
    if (len > 0) {
        return equation.substr(0, len - 1)
    } else {
        return ''
    }
}

var bindControls = function() {
    var cb = e('.cal_box')
    var result = e('.result')
    cb.addEventListener('click', function(event) {
        var self = event.target
        var v = self.value
        if (v == undefined || self.classList.contains('result')) {
            return
        } else {
            if (v != '=' && v != 'C' && v != '<=') {
                result.value += v
            } else if (v == 'C') {
                result.value = clear()
            } else if (v == '<=') {
                var equation = result.value
                result.value = redo(equation)
            }
            else {
                var equation = result.value
                result.value = cal(equation)
            }
        }
    })
}

var __main = function() {
    bindControls()
}

__main()
