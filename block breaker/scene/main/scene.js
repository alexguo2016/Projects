var Scene = function(game) {
    var s = {
        game: game,
    }
    //初始化
    var paddle = new Paddle(game)
    var ball = new Ball(game)
    var score = 0

    //增加拖拽
    var enableDrag = false
    game.canvas.addEventListener('mousedown', function(event) {
        var x = event.offsetX
        var y = event.offsetY
        // log(x,y)
        if (ball.hasPoint(x, y)) {
            enableDrag = true
        }
    })
    game.canvas.addEventListener('mousemove', function(event) {

        var x = event.offsetX
        var y = event.offsetY
        if (enableDrag) {
            ball.x = x
            ball.y = y
        }
    })
    game.canvas.addEventListener('mouseup', function(event) {
        var x = event.offsetX
        var y = event.offsetY
        enableDrag = false
        // log(x,y)
    })

    var blocks = loadLevel(game, 2)// for test
    // blocks = loadLevel(game, 2)// for test
    //增加控制
    game.registerAction('a', function() {
        paddle.moveLeft()
    })
    game.registerAction('d', function() {
        paddle.moveRight()
    })
    game.registerAction('f', function() {
        ball.fire()
        // log('f')
    })

    s.draw = function() {
        game.context.fillStyle = '#678'
        game.context.fillRect(0, 0, 600, 400)
        game.drawImage(paddle)
        game.drawImage(ball)
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i]
            if (block.alive) {
                // log('block')
                game.drawImage(block)
            }
        }
        game.context.fillStyle = 'orange'
        game.drawText(score)
    }
    s.update = function() {
        if (window.pause) {
            return
        }
        ball.move()
        //判断游戏结束
        if (ball.y > paddle.y) {
            // var end = new SceneEnd(game)
            var end = SceneEnd.new(game)
            game.replaceScene(end)
            return
        }
        if (paddle.collide(ball)) {
            ball.rebound()
        }
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i]
            if (block.collide(ball)) {
                block.kill()
                ball.rebound()
                score += 100
            }
        }
    }
    return s
}
