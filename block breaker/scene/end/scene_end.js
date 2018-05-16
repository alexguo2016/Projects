
class SceneEnd extends myScene {
    constructor(game) {
        super(game)
        game.registerAction('r', function() {
            // var s = new SceneTitle(game)
            var s = SceneTitle.new(game)
            game.replaceScene(s)
        })
    }
    draw() {
        var game = this.game
        var c = game.context
        c.fillStyle = 'orange'
        // c.fillRect(0, 0, 600, 400)
        c.fillStyle = '#678'
        c.font = '20px Georgia'
        c.fillText('GameOver, press "R"', 150, 200)

    }
}
