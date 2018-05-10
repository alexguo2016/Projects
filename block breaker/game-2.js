var loadLevel = function(n) {
    n = n - 1
    var level = levels[n]
    var blocks = []
    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = new Block(p)
        blocks.push(b)
    }
    return blocks
}

var enableDebugMode = function(enable) {
    if (!enable) {
        return
    }
    window.addEventListener('keydown', function(event) {
        var k = event.key
        if (k == 'p') {
            window.pause = !window.pause
        } else if ('1234567'.includes(k)) {
            blocks = loadLevel(Number(k))
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
var __main = function() {
    enableDebugMode(true)
    // var pause = false
    var paddle = new Paddle()
    var ball = new Ball()
    var game = new Game(100)

    // var blocks = loadLevel(2)
    blocks = loadLevel(2)// for test

    //增加控制
    game.registerAction('a', function() {
        paddle.moveLeft()
    })
    game.registerAction('d', function() {
        paddle.moveRight()
    })
    game.registerAction('f', function() {
        ball.fire()
    })

    game.update = function() {
        if (window.pause) {
            return
        }
        ball.move()
        //判断相撞
        if (paddle.collide(ball)) {
            // ball.speedY *= -1
            ball.rebound()
        }
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i]
            if (block.collide(ball)) {
                block.kill()
                ball.rebound()
            }
        }
    }
    game.draw = function() {
        game.drawImage(paddle)
        game.drawImage(ball)
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i]
            if (block.alive) {
                game.drawImage(block)
            }
        }
    }
    // game.looper(window.fps)
}

__main()
