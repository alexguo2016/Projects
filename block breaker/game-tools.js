var imgFromPath = function(src) {
    var o = new Image()
    o.src = src
    return o
}

var rectIntersects = function(a, b) {
    if (b.y > a.y && b.y < a.y + a.image.height) {
        if (b.x > a.x && b.x < a.x + a.image.width) {
            return true
        }
    }
    return false
}
