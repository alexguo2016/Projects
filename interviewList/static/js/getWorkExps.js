//获取value需要借助myTool.js中的函数, 详见 getFromDOM_ObjectVersion
var getBegin = (obj) => {
    var value = getFromDOM_ObjectVersion(obj, '.from', 'input')
    return value
}

var getEnd = (obj) => {
    var value = getFromDOM_ObjectVersion(obj, '.to', 'input')
    return value
}

var getNature = (obj) => {
    var value = getFromDOM_ObjectVersion(obj, '.natureBox', 'select')
    return value
}

var getWorkPlace = (obj) => {
    var value = getFromDOM_ObjectVersion(obj, '.workPlaceBox', 'input')
    return value
}

var getDepartment = (obj) => {
    var value = getFromDOM_ObjectVersion(obj, '.departmentBox', 'input')
    return value
}

var getWorkStatus = (obj) => {
    var value = getFromDOM_ObjectVersion(obj, '.workStatusBox', 'select')
    return value
}

var getSalary = (obj) => {
    var value = getFromDOM_ObjectVersion(obj, '.salaryBox', 'input')
    return value
}

var getLinkman = (obj) => {
    var value = getFromDOM_ObjectVersion(obj, '.linkmanBox', 'input')
    return value
}

var getWorkExp = (obj) => {
    var o = {
        studyBegin: getBegin(obj),
        studyEnd: getEnd(obj),
        nature: getNature(obj),
        workPlace: getWorkPlace(obj),
        department: getDepartment(obj),
        workStatus: getWorkStatus(obj),
        salary: getSalary(obj),
        linkman: getLinkman(obj),
    }
    return o
}

var getWorkExps = () => {
    var box = e('.workExps')
    var exps = myFindAll('.detail', box)
    var workExps = []
    for (var i = 0; i < exps.length; i++) {
        var item = exps[i]
        var info = getWorkExp(item)
        workExps.push(info)
    }
    return workExps
}
