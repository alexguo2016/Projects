var Ball = function(game) {
    // var image = imgFromPath('ball.png')
    // var o = {
    //     image: image,
    //     x: 100,
    //     y: 100,
    //     speedX: 5,
    //     speedY: 5,
    //     fired: false,
    // }
    var o = game.imageByName('ball')
    o.x = 100
    o.y = 100
    o.speedX = 5
    o.speedY = 5
    o.fired = false

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
