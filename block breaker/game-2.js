var loadLevel = function(game, n) {
    n = n - 1
    var level = levels[n]
    var blocks = []
    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = new Block(game, p)
        blocks.push(b)
    }
    return blocks
}

var enableDebugMode = function(game, enable) {
    if (!enable) {
        return
    }
    window.addEventListener('keydown', function(event) {
        var k = event.key
        if (k == 'p') {
            window.pause = !window.pause
        } else if ('1234567'.includes(k)) {
            blocks = loadLevel(game, Number(k))
        }
    })
    var debugSpeedinput = e('#debug_input')
    debugSpeedinput.addEventListener('input', function(event) {
        var target = event.target
        window.fps = Number(target.value)
    })
}
//for test
blocks = []
