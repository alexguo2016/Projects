class SceneTitle extends myScene {
    constructor(game) {
        super(game)
        // var g = this.game
        game.registerAction('k', function() {
            var begin = new Scene(game)
            game.replaceScene(begin)
        })
    }
    draw() {
        var g = this.game
        var c = g.context
        c.fillStyle = 'orange'
        // c.fillRect(0, 0, 600, 400)
        c.fillStyle = '#678'
        c.font = '20px Georgia'
        c.fillText('按“K”开始游戏', 150, 200)
    }
}
