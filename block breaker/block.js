var Block = function(game, block_info) {
    //block_info是一个数组，储存了砖块的各种信息，格式是[x, y, lifes]
    var p = block_info
    var o = game.imageByName('block')
    // log(game.imageByName('block').image)
    o.x = p[0]
    o.y = p[1]
    o.alive = true
    o.lifes = p[2] || 1

    o.kill = function() {
        // o.alive = false
        if (o.lifes >= 1) {
            o.lifes -= 1
        } else {
            o.alive = false
        }
    }
    o.collide = function(ball) {
        var collide = rectIntersects(o, ball) || rectIntersects(ball, o)
        return o.alive && collide
    }
    return o
}
