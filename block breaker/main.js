var __main = function() {
    // var pause = false
    var images = {
        ball: 'ball.png',
        player: 'player.png',
        block: 'block.png',
    }

    var game = new Game(40, images, function(g) {
        enableDebugMode(game, true)
        var paddle = new Paddle(game)
        var ball = new Ball(game)
        var score = 0
        // var blocks = loadLevel(2)
        blocks = loadLevel(game, 2)// for test

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
                    //增加分数
                    score += 100
                    // log(score)
                }
            }
        }

        // var testPaddle = function(paddle) {
        //     game.drawImage(paddle)
        //
        //     log(paddle.image.height, paddle.image.width, paddle.x, paddle.y)
        // }

        game.draw = function() {
            // testPaddle(paddle)
            game.drawImage(paddle)
            game.drawImage(ball)
            for (var i = 0; i < blocks.length; i++) {
                var block = blocks[i]
                if (block.alive) {
                    // log('block')
                    game.drawImage(block)
                }
            }
            game.drawText(score)
        }
    })


    // game.looper(window.fps)
}

__main()
