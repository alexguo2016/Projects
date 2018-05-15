var __main = function() {
    // var pause = false
    var images = {
        ball: 'img/ball.png',
        player: 'img/player.png',
        block: 'img/block.png',
    }

    // var scene = new Scene(game)

    var game = new Game(20, images, function(g) {
        // var s = new Scene(g)
        var s = new SceneTitle(g)
        g.runWithScene(s)
    })
    enableDebugMode(game, true)

}

__main()
