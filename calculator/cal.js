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
        result.value = Number(cal(equation)).toFixed(2)
    },
}
//tools
var log = console.log.bind(console)
var e = function(str) {
    return document.querySelector(str)
}
//对算式进行格式化，消除eval带来的bug
var digFormat = function(str) {
    var len = str.length
    var res = ''
    for (var i = 0; i < len; i++) {
        if(str[i] != '0') {
            log('in')
            break
        }
    }
    res = str.substr(i, len)
    return res
}
var equFormat = function(equation) {
    var opts = ['+', '-', '*', '/', '(', ')']
    var start = 0
    var arr = []
    var res = ''
    for (var i = 0; i < equation.length; i++) {
        if (opts.includes(equation[i]) || i == equation.length - 1) {
            var ele = equation.substr(start, i - start)
            ele = digFormat(ele)
            arr.push(ele)
            arr.push(equation[i])
            start = i + 1
        }
    }
    res = arr.join('')
    return res
}
//方法，例如计算，清除，退格等等。
var cal = function(equation) {
    try {
        var equ = equFormat(equation)
        // var equ = equation
        var res = eval(equ)
        return res
    } catch(e) {
        log(e)
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
//插入div，插件化
var insertCal = function() {
    var container = e('.cal_container')
    var t = `
        <div id="sDiv" class = "cal_box item_center item_child">
            <input type="text" name="t" id="t" class = "result" value="" /><br />
            <input type="button"  value="1" />
            <input type="button"  value="2" />
            <input type="button"  value="3" />
            <input type="button"  value="4" /><br />
            <input type="button"  value="5" />
            <input type="button"  value="6" />
            <input type="button"  value="7" />
            <input type="button"  value="8" /><br />
            <input type="button"  value="9" />
            <input type="button"  value="0" />
            <input type="button"  value="." />
            <input type="button"  value="/" /><br />
            <input type="button"  value="+" />
            <input type="button"  value="-" />
            <input type="button"  value="*" />
            <input type="button"  value="C" /><br />
            <input type="button"  value="(" />
            <input type="button"  value=")" />
            <input type="button"  value="%" />
            <input type="button"  value="<=" /><br />
            <input type="button"  id="equ" value="=" />
        </div>
    `
    container.insertAdjacentHTML('beforeend', t)
}
var __main = function() {
    insertCal()
    bindControls()
}

__main()
