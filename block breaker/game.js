//小球进行自由移动，首先试试移动x
var x = 200
var dx = 1
var dy = 1
var canvasWidth = 600
var canvasHeight = 400
var ballWidth = 50
var playerWidth = 70
var playerHeight = 20
var y = 200
var px = (canvasWidth - playerWidth) / 2
var py = canvasHeight - playerHeight - 20

var imgs = {
    'player': createImg('player.png'),
    'ball': createImg('ball.png'),
}

var drawBall = function() {
    var c = e('#myCanvas')
    var cxt = c.getContext("2d")
    cxt.clearRect(0, 0, canvasWidth, canvasHeight)
    cxt.drawImage(imgs.ball, x, y)

    var speed = 2
    if (touchPlayer()) {
        dy *= -1
    }
    boundaryDetect()
    x += speed * dx
    y -= speed * dy
}

var touchPlayer = function() {
    var touchPlayerY = (y + ballWidth >= py)
    var left_limit = (x > px && x < px + playerWidth)
    var right_limit = (x + ballWidth > px && x + ballWidth < px + playerWidth)
    var touchPlayerX = !(x - ballWidth > px + playerWidth)

    if (left_limit || right_limit) {
        if (touchPlayerY) {
            return true
        }
    }
    return false
}

var boundaryDetect = function() {
    var isOutX = ((x + ballWidth) >= canvasWidth || x <= 0)
    var isOutY = ((y + ballWidth) >= canvasHeight || y <= 0)
    var touchBottom = (y + ballWidth >= canvasHeight)
    if (isOutX) {
        dx *= -1
    }
    if (isOutY) {
        dy *= -1
    }
    if (touchBottom) {
        log('bottom')
    }
}

var drawPlayer = function() {
    var c = e('#myCanvas')
    var cxt = c.getContext("2d")
    cxt.clearRect(px, py, playerWidth, playerHeight)
    cxt.drawImage(imgs.player, px, py)
}

var __main = function() {
    setInterval(function() {
        drawBall()
        drawPlayer()
    }, 1000/66)
    bindMove()
}
__main()
