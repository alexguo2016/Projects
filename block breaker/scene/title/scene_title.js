var SceneTitle = function(game) {
    var s = {
        game: game,
    }
    game.registerAction('k', function() {
        var begin = new Scene(game)
        game.replaceScene(begin)
    })
    s.draw = function() {
        var c = game.context
        c.fillStyle = 'orange'
        c.fillRect(0, 0, 600, 400)
        c.fillStyle = '#678'
        c.font = '60px Georgia'
        c.fillText('按“K”开始游戏', 150, 200)
    }
    s.update = function() {

    }
    return s
}
