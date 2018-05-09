var bindMove = function() {
    var c = e('body')
    var playerSpeed = 10
    c.addEventListener('keydown', function(event) {
        var keyCode = event.keyCode
        var canMoveLeft = ((px - playerSpeed) >= 0)
        var canMoveRight = ((px + 70 + playerSpeed) < canvasWidth)
        if (keyCode == 37 && canMoveLeft) {
            px -= playerSpeed
        } else if (keyCode == 39 && canMoveRight) {
            px += playerSpeed
        }
    })
}
