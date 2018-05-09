var bindLeft = function() {
    var c = e('body')
    c.addEventListener('keydown', function(event) {
        var keyCode = event.keyCode
        // log('click', keyCode)
        if (keyCode == 37) {
            px -= 10
            // drawPlayer()
        } else if (keyCode == 39) {
            px += 10
        }
        // drawPlayer()
    })
}
