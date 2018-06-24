//教育经历包括 受教育的时间段, 学校性质, 学历, 学校名称, 专业
//暂时有3个教育经历需要获取, 所以应该返回一个数组

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

var getDegree = (obj) => {
    var value = getFromDOM_ObjectVersion(obj, '.degreeBox', 'select')
    return value
}

var getSchool = (obj) => {
    var value = getFromDOM_ObjectVersion(obj, '.schoolBox', 'input')
    return value
}

var getMajor = (obj) => {
    var value = getFromDOM_ObjectVersion(obj, '.majorBox', 'input')
    return value
}

var getEduExp = (obj) => {
    var o = {
        studyBegin: getBegin(obj),
        studyEnd: getEnd(obj),
        nature: getNature(obj),
        degree: getDegree(obj),
        school: getSchool(obj),
        major: getMajor(obj),
    }
    return o
}

var getEduExps = () => {
    var box = e('.eduExps')
    var exps = myFindAll('.detail', box)
    var eduExps = []
    for (var i = 0; i < exps.length; i++) {
        var item = exps[i]
        var info = getEduExp(item)
        eduExps.push(info)
    }
    return eduExps
}
