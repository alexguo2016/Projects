var Block = function(block_info) {
    //position是一个数组，储存了砖块的各种信息，格式是[x, y, lifes]
    var p = block_info
    var image = imgFromPath('block.png')
    var o = {
        image: image,
        x: p[0],
        y: p[1],
        alive: true,
        lifes: p[2] || 1,

    }
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
