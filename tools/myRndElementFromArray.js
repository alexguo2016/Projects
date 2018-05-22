//从array中返回随机一个元素
var choice = function(array) {
    var rnd = Math.random()
    var i = Math.floor(rnd * array.length)
    return array[i]
}
