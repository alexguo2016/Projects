var SceneEnd = function(game) {
    var s = {
        game: game,
    }

    s.draw = function() {
        game.context.fillStyle = '#678'
        game.context.fillText('GameOver', 250, 200)
    }
    s.update = function() {

    }
    return s
}
