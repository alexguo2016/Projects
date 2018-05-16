var __main = function() {
    // var pause = false
    var images = {
        ball: 'img/ball.png',
        player: 'img/player.png',
        block: 'img/block.png',
    }

    // var scene = new Scene(game)
    var game = Game.instance(20, images, function(g) {
        // var s = new Scene(g)
        // var s = new SceneTitle(g)
        var s = SceneTitle.new(g)
        // log(window.fps)
        g.runWithScene(s)
    })
    enableDebugMode(game, true)
    editBlock(game, 2)
}

__main()
