var bindMove = function() {
    var c = e('body')
    var playerSpeed = 10
    c.addEventListener('keydown', function(event) {
        var keyCode = event.keyCode
        var canMoveLeft = (imgs.player.px >= 0)
        var canMoveRight = (imgs.player.px + 70 < imgs.canvas.canvasWidth)
        if (keyCode == 37 && canMoveLeft) {
            imgs.player.px -= playerSpeed
        } else if (keyCode == 39 && canMoveRight) {
            imgs.player.px += playerSpeed
        }
    })
}
