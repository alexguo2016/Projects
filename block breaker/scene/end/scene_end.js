var SceneEnd = function(game) {
    var s = {
        game: game,
    }
    game.registerAction('r', function() {
        var s = new SceneTitle(game)
        game.replaceScene(s)
    })
    s.draw = function() {
        var c = game.context
        c.fillStyle = 'orange'
        c.fillRect(0, 0, 600, 400)
        c.fillStyle = '#678'
        c.font = '60px Georgia'
        c.fillText('GameOver, press "R"', 150, 200)

    }
    s.update = function() {

    }
    return s
}
