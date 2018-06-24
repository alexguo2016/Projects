//获取value需要借助myTool.js中的函数, 详见 getFromDOM_ObjectVersion
var getPosition = (obj) => {
    var value = getFromDOM_ObjectVersion(obj, '.positionBox', 'select')
    return value
}

var getNature = (obj) => {
    var value = getFromDOM_ObjectVersion(obj, '.natureBox', 'select')
    return value
}

var getSelfPosition = (obj) => {
    var value = getFromDOM_ObjectVersion(obj, '.selfPositionBox', 'select')
    return value
}

var getSalary = (obj) => {
    var value = getFromDOM_ObjectVersion(obj, '.salaryBox', 'input')
    return value
}

var getArrivalTime = (obj) => {
    var value = getFromDOM_ObjectVersion(obj, '.arrivalTimeBox', 'select')
    return value
}

var getJobObjected = () => {
    var obj = e('.jobObjected')
    var o = {
        position: getPosition(obj),
        nature: getNature(obj),
        selfPosition: getSelfPosition(obj),
        salary: getSalary(obj),
        arrivalTime: getArrivalTime(obj),
    }
    return o
}
