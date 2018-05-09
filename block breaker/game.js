//小球进行自由移动，首先试试移动x
var x = 200
var dx = 1
var dy = 1
var y = 200
var px = (400/2 - 35)
var py = 300 - 20 - 20
var img = new Image()
img.src = "ball.png"
var drawBall = function() {
    var c = e('#myCanvas')
    var cxt = c.getContext("2d")
    cxt.clearRect(0, 0, 400, 300)
    // cxt.clearRect(x - 2, y - 2, 54, 54)
    cxt.drawImage(img, x, y)

    var speed = 2

    var isOutX = ((x + 50) >= 400 || (x) <= 0)
    var isOutY = ((y + 50) >= 300 || y <= 0)

    var touchPlayerY = (y + 50 >= py)
    var in_x_Detected = (x > px && x < px + 70) || (x + 50 > px && x + 50 < px + 70)
    var touchBottom = (y + 50 >= 300)
    var in_y_Detected = (y > py && y < py + 20) || (y + 50 > py && y + 50 < py + 20)
    // var touchPlayerX = !((x > px + 70) || (x + 50 < px))
    var touchPlayerX = !(x - 50 > px + 70)

    if (in_x_Detected) {
        // log('in')
        if (touchPlayerY) {
            // log('mayTouchY')
            dy *= -1
        }
    }
    if (in_y_Detected) {
        // log('in')
        if (touchPlayerX) {
            dx *= -1
        }
    }
    if (isOutX) {
        // dx = Math.random()
        dx *= -1
    }
    x += speed * dx
    if (touchBottom) {
        log('bottom')
    }
    if (isOutY) {
        // dy = Math.random()
        dy *= -1
    }
    y -= speed * dy
}

// setInterval(drawBall, 1000/50)

var player = new Image()
player.src = "player.png"
// var px = 0
// var py = 0
var drawPlayer = function() {
    var c = e('#myCanvas')
    var cxt = c.getContext("2d")
    cxt.clearRect(px, py, 70, 20)
    cxt.drawImage(player, px, py)
}

var __main = function() {
    setInterval(function() {
        drawBall()
        drawPlayer()
    }, 1000/70)
    drawPlayer()
    bindLeft()
}
__main()
