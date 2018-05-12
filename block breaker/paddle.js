var Paddle = function(game) {
    var o = game.imageByName('player')

    o.x = 100
    o.y = 300
    o.speed = 10

    o.moveLimit = function(x) {
        if (x < 0) {
            x = 0
        }
        if (x > 600 - o.image.width) {
            x = 600 - o.image.width
        }
        o.x = x
    }
    o.moveLeft = function() {
        o.x -= o.speed
        o.moveLimit(o.x)
    }
    o.moveRight = function() {
        o.x += o.speed
        o.moveLimit(o.x)
    }

    var aInb = function(x, x1, x2) {
        return x >= x1 && x <= x2
    }
    o.collide = function(ball) {
        // if (ball.y + ball.image.height  > o.y) {
        //     if (ball.x > o.x && ball.x < o.x + o.image.width) {
        //         return true
        //     }
        // }
        // return false
        var a = o
        var b = ball
        if ((aInb(a.x, b.x, b.x + b.image.width)) || (aInb(b.x, a.x, a.x + a.image.width))) {
            if ((aInb(a.y, b.y, b.y + b.image.height)) || (aInb(b.y, a.y, a.y + a.image.height))) {
                return true
            }
        }
        return false
    }
    return o
}
