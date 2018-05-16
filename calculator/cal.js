//tools
var log = console.log.bind(console)
var e = function(str) {
    return document.querySelector(str)
}
//方法，例如计算，清除，退格等等。
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
//表驱动，如果需要增加功能，主要修改这里即可。
var actions = {
    'C': function(result) {
        result.value = clear()
    },
    '<=': function(result, equation) {
        result.value = redo(equation)
    },
    '=': function(result, equation) {
        result.value = cal(equation)
    },
    '%': function(result, equation) {
        result.value = cal(equation).toFixed(2)
    },
}

var bindControls = function() {
    var cb = e('.cal_box')
    var result = e('.result')
    cb.addEventListener('click', function(event) {
        var self = event.target
        var v = self.value

        var validValue = !(v == undefined || self.classList.contains('result'))
        var opts = Object.keys(actions)
        var isOpt = opts.includes(v)

        var equation = result.value
        if (validValue) {
            if (isOpt) {
                actions[v].call(this, result, equation)
            } else {
                result.value += v
            }
        } else {
            return
        }
    })
}

var __main = function() {
    bindControls()
}

__main()
