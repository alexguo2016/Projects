
var editBlock = function(game, n) {
    // var scene = new Scene(game)

    var blockOpt = e('#debug_block')
    var enableDrag_block = blockOpt.checked
    var add_block = e('#add_block')
    // var blocks = loadLevel(game, n)
    // log(levels[n])
    add_block.addEventListener('click', function(event) {
        // log('add')
        levels[n].push([300, 300, 1])
        // log(levels[n])
        // scene.draw()
    })
    //拖动砖块
    // game.canvas.addEventListener('mousedown', function(event) {
    //     var x = event.offsetX
    //     var y = event.offsetY
    //     // log(x,y)
    //     if (block.hasPoint(x, y)) {
    //         enableDrag_block = true
    //     }
    // })
    // game.canvas.addEventListener('mousemove', function(event) {
    //
    //     var x = event.offsetX
    //     var y = event.offsetY
    //     if (enableDrag_block) {
    //         block.x = x
    //         block.y = y
    //     }
    // })
    // game.canvas.addEventListener('mouseup', function(event) {
    //     var x = event.offsetX
    //     var y = event.offsetY
    //     enableDrag_block = false
    //     //存入自定义关卡
    //     // levels[n] = blocks
    //     // log(x,y)
    // })
}
