var Paddle = function() {
    var image = imgFromPath('player.png')
    var o = {
        image: image,
        x: 200,
        y: 300,
        speed: 5,
    }

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
