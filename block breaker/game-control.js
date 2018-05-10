var Game = function(fps) {
    var g = {
        actions: {},
        keydowns: {},
    }
    var canvas = e('#myCanvas')
    var cxt = canvas.getContext("2d")
    g.canvas = canvas
    g.context = cxt
    //draw
    g.drawImage = function(image) {
        g.context.drawImage(image.image, image.x, image.y)
    }

    //events
    window.addEventListener('keydown', function(event) {
        g.keydowns[event.key] = true
    })
    window.addEventListener('keyup', function(event) {
        g.keydowns[event.key] = false
    })
    //register
    g.registerAction = function(key, callback) {
        g.actions[key] = callback
    }
    //timer
    window.fps = 30
    var runloop = function() {
        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            if (g.keydowns[key]) {
                g.actions[key]()
            }
        }
        //update x y
        g.update()
        //clear
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
        //draw()
        g.draw()
        // next loop
        setTimeout(function() {
            runloop()
        }, 1000/window.fps)
    }

    setTimeout(function() {
        runloop()
    }, 1000/window.fps)

    return g

}
