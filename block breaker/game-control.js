var Game = function(fps, images, runCallback) {
    //fps控制帧率，image代表需要载入的图片,是一个对象{image: imageURL...}
    var g = {
        actions: {},
        keydowns: {},
        images: {},
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
    window.fps = e('#debug_input').value
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

    //开始运行程序之前需要预先载入图片,然后运行g.run
    var loads = []
    var names = Object.keys(images)
    for (var i = 0; i < names.length; i++) {
        let name = names[i]
        var path = images[name]
        let img = new Image()
        img.src = path

        img.onload = function() {
            //所有图片载入成功之后，调用run
            g.images[name] = img
            loads.push(1)
            // log('images-->', img)
            if (loads.length == names.length) {
                g.run()
            }
        }
    }


    g.imageByName = function(name) {
        // log('name', images)
        var img = g.images[name]
        var image = {
            image: img,
        }
        return image
    }

    //开始运行
    g.run = function() {
        // log('g.runCallback', runCallback)
        runCallback(g)
        setTimeout(function() {
            runloop()
        }, 1000/window.fps)
    }

    g.drawText = function(score) {
        g.context.font = "30px bold 微软雅黑"
        g.context.fillText(`分数: ${score}`, 20, 380)
        // log('score')
    }
    return g

}
