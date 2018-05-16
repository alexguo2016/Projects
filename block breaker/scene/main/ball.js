var Ball = function(game) {
    var o = game.imageByName('ball')
    o.x = 200
    o.y = 200
    o.speedX = 5
    o.speedY = 5
    o.fired = false

    o.fire = function() {
        // log('fire')
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
    o.hasPoint = function(x, y) {
        var xIn = x >= o.x && x <= o.x + o.image.width
        var yIn = y >= o.y && y <= o.y + o.image.height
        return xIn && yIn
    }
    return o
}
