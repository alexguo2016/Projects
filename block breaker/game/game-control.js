
class Game {
    constructor(fps, images, runCallback) {
        window.fps = fps
        this.images = images
        this.runCallback = runCallback
        //
        this.scene = null
        this.actions = {}
        this.keydowns = {}
        this.canvas = e('#myCanvas')
        this.context = this.canvas.getContext("2d")
        //events
        var self = this
        window.addEventListener('keydown', (event) => {
            this.keydowns[event.key] = true
        })
        window.addEventListener('keyup', function(event) {
            self.keydowns[event.key] = false
        })
        this.init()
    }
    //methods
    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }
    drawImage(image) {
        var  g = this
        g.context.drawImage(image.image, image.x, image.y)
    }
    drawText(score) {
        var g = this
        g.context.font = "30px bold 微软雅黑"
        g.context.fillText(`分数: ${score}`, 20, 380)
    }
    //update
    update() {
        this.scene.update()
    }
    //draw
    draw() {
        this.scene.draw()
    }
    //register
    registerAction(key, callback) {
        this.actions[key] = callback
    }
    runloop() {
        var g = this
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
            g.runloop()
        }, 1000/window.fps)
    }
    imageByName(name) {
        // log('name', images)
        var g = this
        var img = g.images[name]
        var image = {
            image: img,
        }
        return image
    }
    //开始运行
    runWithScene(scene) {
        var  g = this
        g.scene = scene
        setTimeout(function() {
            g.runloop()
        }, 1000/window.fps)
        // log(window.fps)
    }
    //用于切换场景
    replaceScene(scene) {
        // g.runWithScene(scene)
        this.scene = scene
    }
    run() {
        this.runCallback(this)
    }

    init() {
        //开始运行程序之前需要预先载入图片,然后运行g.run
        var g = this
        var loads = []
        var names = Object.keys(g.images)
        //这里let的使用算是一个hack，否则只能读取最后一张图片，JavaScript的固有bug
        for (var i = 0; i < names.length; i++) {
            let name = names[i]
            var path = g.images[name]
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
    }


}
