//获取value需要借助myTool.js中的函数, 详见 getFromDOM_ObjectVersion
var getRelationship = (obj) => {
    var value = getFromDOM_ObjectVersion(obj, '.relationshipBox', 'input')
    return value
}

var getName = (obj) => {
    var value = getFromDOM_ObjectVersion(obj, '.nameBox', 'input')
    return value
}

var getCareer = (obj) => {
    var value = getFromDOM_ObjectVersion(obj, '.careerBox', 'input')
    return value
}

var getTel = (obj) => {
    var value = getFromDOM_ObjectVersion(obj, '.telBox', 'input')
    return value
}

var getFami = (obj) => {
    var o = {
        relationship: getRelationship(obj),
        name: getName(obj),
        career: getCareer(obj),
        tel: getTel(obj),
    }
    return o
}

var getFamiStatus = () => {
    var box = e('.famiStatus')
    var ele = myFindAll('.detail', box)
    var result = []
    for (var i = 0; i < ele.length; i++) {
        var item = ele[i]
        var info = getFami(item)
        result.push(info)
    }
    return result
}
