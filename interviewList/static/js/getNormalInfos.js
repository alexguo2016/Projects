//各种获取信息的具体方法, 需要借助myTool.js中的方法, 详见 getFromDom
var getName = () => {
    var value = getFromDom('.nameBox', 'input')
    return value
}

var getGender = () => {
    var value = getFromDom('.genderBox', 'select')
    return value
}

var getNation = () => {
    var value = getFromDom('.nationBox', 'input')
    return value
}

var getNative = () => {
    var value = getFromDom('.nativeBox', 'input')
    return value
}

var getBirthday = () => {
    var value = getFromDom('.birthdayBox', 'input')
    return value
}

var getTel = () => {
    var value = getFromDom('.telBox', 'input')
    return value
}

var getAddress = () => {
    var value = getFromDom('.addressBox', 'input')
    return value
}

var getWorkYears = () => {
    var value = getFromDom('.workYearsBox', 'input')
    return value
}

var getMarry = () => {
    //单选框 可能需要遍历
    var d = e('.marryBox')
    var myForm = myFind('form', d)
    var radios = myFindAll('input', myForm)
    for (var i = 0; i < radios.length; i++) {
        var item = radios[i]
        if (item.checked) {
            return item.value
        }
    }
    return ''
}

var getBirth = () => {
    //单选框 可能需要遍历
    var d = e('.birthBox')
    var myForm = myFind('form', d)
    var radios = myFindAll('input', myForm)
    for (var i = 0; i < radios.length; i++) {
        var item = radios[i]
        if (item.checked) {
            return item.value
        }
    }
    return ''
}

var getBirthPlan = () => {
    var value = getFromDom('.birthPlayBox', 'select')
    return value
}
//表驱动, 减少重复代码
var baseInfoAction = {
    name: getName,
    gender: getGender,
    nation: getNation,
    native: getNative,
    birthday: getBirthday,
    tel: getTel,
    address: getAddress,
    workYears: getWorkYears,
    marry: getMarry,
    birth: getBirth,
    birthPlan: getBirthPlan,
}

//获取基本信息, 包括 姓名, 性别, 民族, 生日, 联系电话, 详细地址, 工作年限, 婚姻状况, 生育状况以及生育计划
//获取信息, 并且生成一个对象, 返回
var getNormalInfos = () => {
    var o = {}
    for (var prop in baseInfoAction) {
        if (baseInfoAction.hasOwnProperty(prop)) {
            o[prop] = baseInfoAction[prop]()
        }
    }
    return o
}
