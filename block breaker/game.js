//小球进行自由移动，首先试试移动x

var Imgs = function() {
    var imgs = {
        'player': {
            src: createImg('player.png'),
            playerWidth: 70,
            playerHeight: 20,
            px: 200,
            py: 360,
        },
        'ball': {
            src: createImg('ball.png'),
            ballWidth: 50,
            ballHeight: 50,
            x: 200,
            y: 200,
        },
        'canvas': {
            canvasWidth: 600,
            canvasHeight: 400,
            dx: 1,
            dy: 1,
        },
    }
    return imgs
}
var imgs = new Imgs()

var drawBall = function() {
    var c = e('#myCanvas')
    var cxt = c.getContext("2d")
    cxt.clearRect(0, 0, imgs.canvas.canvasWidth, imgs.canvas.canvasHeight)
    cxt.drawImage(imgs.ball.src, imgs.ball.x, imgs.ball.y)

    var speed = 2
    if (touchPlayer(imgs.ball, imgs.player)) {
        imgs.canvas.dy *= -1
    }
    boundaryDetect(imgs.ball, imgs.canvas)
    imgs.ball.x += speed * imgs.canvas.dx
    imgs.ball.y -= speed * imgs.canvas.dy
}

var drawPlayer = function() {
    var px = imgs.player.px
    var py = imgs.player.py
    var c = e('#myCanvas')
    var cxt = c.getContext("2d")
    cxt.clearRect(px, py, imgs.player.playerWidth, imgs.player.playerHeight)
    cxt.drawImage(imgs.player.src, px, py)
}

var touchPlayer = function(ball, player) {
    var px = imgs.player.px
    var py = imgs.player.py
    var x = imgs.ball.x
    var y = imgs.ball.y
    var touchPlayerY = (y + ball.ballWidth >= py)
    var left_limit = (x > px && x < px + player.playerWidth)
    var right_limit = (x + ball.ballWidth > px && x + ball.ballWidth < px + player.playerWidth)
    var touchPlayerX = !(x - ball.ballWidth > px + player.playerWidth)

    if (left_limit || right_limit) {
        if (touchPlayerY) {
            return true
        }
    }
    return false
}


var boundaryDetect = function(ball, canvas) {
    var x = imgs.ball.x
    var y = imgs.ball.y
    var isOutX = ((x + ball.ballWidth) >= canvas.canvasWidth || x <= 0)
    var isOutY = ((y + ball.ballWidth) >= canvas.canvasHeight || y <= 0)
    var touchBottom = (y + ball.ballWidth >= canvas.canvasHeight)
    if (isOutX) {
        imgs.canvas.dx *= -1
    }
    if (isOutY) {
        imgs.canvas.dy *= -1
    }
    if (touchBottom) {
        log('bottom')
    }
}

var __main = function() {
    setInterval(function() {
        drawBall()
        drawPlayer()
    }.bind(this), 1000/66)
    // log(this)
    bindMove()
}
__main()
