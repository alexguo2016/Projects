//注意, checkbox的value要的是target.checked这个属性
var getDeclaration = () => {
    var outer = e('.declaration')
    var target = myFind('input', outer)
    var value = target.checked
    return value
}
