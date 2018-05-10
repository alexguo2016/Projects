var imgFromPath = function(src) {
    var o = new Image()
    o.src = src
    return o
}

var Paddle = function() {
    var image = imgFromPath('player.png')
    var o = {
        image: image,
        x: 200,
        y: 300,
        speed: 5,
    }
    o.moveLeft = function() {
        o.x -= o.speed
    }
    o.moveRight = function() {
        o.x += o.speed
    }
    o.collide = function(ball) {
        if (ball.y + ball.image.height  > o.y) {
            if (ball.x > o.x && ball.x < o.x + o.image.width) {
                return true
            }
        }
        return false
    }
    return o
}
var Ball = function() {
    var image = imgFromPath('ball.png')
    var o = {
        image: image,
        x: 100,
        y: 100,
        speedX: 10,
        speedY: 8,
        fired: false,
    }
    o.fire = function() {
        o.fired = true
    }
    o.move = function() {
        if (o.fired) {
            if (o.x < 0 || o.x + o.image.width > 600) {
                o.speedX *= -1
            }
            if (o.y < 0 || o.y + o.image.height > 400) {
                o.speedY *= -1
            }
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    o.rebound = function() {
        o.speedY *= -1
    }
    return o
}

var Game = function() {
    var g = {
        actions: {},
        keydowns: {},
    }
    var canvas = e('#myCanvas')
    var cxt = canvas.getContext("2d")
    g.canvas = canvas
    g.context = cxt
    //draw
    g.drawImage = function(image) {
        g.context.drawImage(image.image, image.x, image.y)
    }

    //events
    window.addEventListener('keydown', function(event) {
        g.keydowns[event.key] = true
    })
    window.addEventListener('keyup', function(event) {
        g.keydowns[event.key] = false
    })
    //register
    g.registerAction = function(key, callback) {
        g.actions[key] = callback
    }
    //timer
    setInterval(function() {
        //events
        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            if (g.keydowns[key]) {
                g.actions[key]()
            }
        }
        //update x y
        g.update()
        //clear
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
        //draw()
        g.draw()
    }, 1000/40)
    return g

}

var __main = function() {

    var paddle = new Paddle()
    var ball = new Ball()

    var game = new Game()

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
        ball.move()
        //判断相撞
        if (paddle.collide(ball)) {
            // ball.speedY *= -1
            ball.rebound()
        }
    }
    game.draw = function() {
        game.drawImage(paddle)
        game.drawImage(ball)
    }
}

__main()
