var __main = function() {
    // var pause = false
    var images = {
        ball: 'ball.png',
        player: 'player.png',
        block: 'block.png',
    }

    // var scene = new Scene(game)

    var game = new Game(30, images, function(g) {
        var s = new Scene(g)
        g.runWithScene(s)
    })
    enableDebugMode(game, true)

}

__main()
