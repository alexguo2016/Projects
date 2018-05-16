var __main = function() {
    // var pause = false
    var images = {
        ball: 'img/ball.png',
        player: 'img/player.png',
        block: 'img/block.png',
    }

    // var scene = new Scene(game)

<<<<<<< HEAD
    var game = new Game(window.fps = '20', images, function(g) {
=======
    var game = Game.instance(20, images, function(g) {
>>>>>>> test
        // var s = new Scene(g)
        // var s = new SceneTitle(g)
        var s = SceneTitle.new(g)
        // log(window.fps)
        g.runWithScene(s)
    })
    enableDebugMode(game, true)

}

__main()
