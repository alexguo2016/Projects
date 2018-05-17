//表驱动，如果需要增加功能，主要修改这里即可。
//对应页面button的事件
var actions = {
    'C': function(result) {
        result.value = clear()
    },
    '退格': function(result, equation) {
        result.value = redo(equation)
    },
    '=': function(result, equation) {
        result.value = cal(equation)
    },
    '.00': function(result, equation) {
        result.value = Number(cal(equation)).toFixed(2)
    },
    '%' :function(result, equation) {
        result.value = percent(equation)
    },
}
//对应键盘事件
var keyActions = {
    'Escape': function(result) {
        result.value = clear()
    },
    'Backspace': function(result, equation) {
        result.value = redo(equation)
    },
    'Enter': function(result, equation) {
        result.value = cal(equation)
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
            break
        }
    }
    res = str.substr(i, len)
    return res
}
var equFormat = function(equation) {
    var signs = ['+', '-', '*', '/', '(', ')']
    var start = 0
    var arr = []
    var res = ''
    for (var i = 0; i < equation.length; i++) {
        if (signs.includes(equation[i]) || i == equation.length - 1) {
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
var endWithPercent = function(equation) {
    var len = equation.length
    if (equation[len - 1] == '%') {
        return true
    } else {
        return false
    }
}
//方法，例如计算，清除，退格等等。
var cal = function(equation) {
    try {
        if (!endWithPercent(equation)) {
            var equ = equFormat(equation)
            var res = eval(equ)
        } else {
            res = equation
        }
        return res
    } catch(e) {
        // log(e)
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
var percent = function(equation) {
    var lastChar = equation[equation.length - 1]
    if (lastChar != '%') {
        var r = cal(equation)
        var res = Number(r) * 100
        res = res.toFixed(2) + '%'
    } else {
        var r = equation.substr(0, equation.length - 2)
        var res = Number(r) / 100
        res += ''
    }
    return res
}

var bindBtns = function() {
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
var bindKeydowns = function() {
    var cb = e('body')
    var result = e('.result')
    cb.addEventListener('keydown', function(event) {
        // log(event.key)
        var v = event.key
        var opts = Object.keys(keyActions)
        var isOpt = opts.includes(v)
        var equation = result.value
        if (isOpt) {
            keyActions[v].call(this, result, equation)
        } else {
            result.value += event.key
        }
    })
}
//插入div，插件化
//插入css
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
            <input type="button"  value=".00" />
            <input type="button"  value="%" /><br />
            <input type="button"  value="退格" /><br />
            <input type="button"  id="equ" value="=" />
        </div>
    `
    container.insertAdjacentHTML('beforeend', t)
}
var insertCss = function() {
    var head = e('head')
    var t = `
    <style type = "text/css">
        /* init */
        body {
            margin: 0;
            padding: 0;
        }
        input {
            outline: none;
        }
        /* position */
        .item_parent {
            position: relative;
            text-align: center;
        }
        .item_child {
            position: absolute;
            display:inline-block;
        }
        .item_center {
            transform: translateX(-50%);
        }
        /* style */
        #sDiv{
            text-align: center;
            border: solid 1px;
            width: 300px;
            border-radius: 10px;
            background-color: aqua;
        }
        #t{
            border:solid 1px ;
            width: 260px;
            border-radius: 10px;
            margin-top: 10px;
            margin-bottom: 10px;
            font-size: 20px;
        }
        input[type=button]{
            border-radius: 5px;
            width: 55px;
            height: 30px;
            margin: 2px;
            font-size: 20px;
        }
        #equ{
            width: 260px;
            font - size: 30px;
            margin-bottom: 10px;
        }
    </style>
    `
    head.insertAdjacentHTML('beforeend', t)
}

var __main = function() {
    insertCss()
    insertCal()
    bindBtns()
    bindKeydowns()
}

__main()
