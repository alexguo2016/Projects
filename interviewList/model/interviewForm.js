//先写model, 读取, 写入, 增删改查
var fs = require('fs')
var log = require('../util/logUtil')
var savedData = '../interviewList/db/savedData.json'
var tempData = '../interviewList/db/tempData.json'

class InterviewForm {
    constructor(form) {
        //normalInfos包含候选人名字, 性别, 民族, 籍贯, 生日, 联系电话, 婚姻状况, 详细地址以及工作年限, 是一个对象
        this.normalInfos = form.normalInfos || {}
        //教育经历, 工作经历, 家庭背景都是一个对象数组
        this.eduExps = form.eduExps || []
        this.workExps = form.workExps || []
        this.famiStatus = form.famiStatus || []
        //应聘情况是一个对象
        this.jobObjected = form.jobObjected || {}
        //候选人声明是一个boolean
        this.declaration = form.declaration || false
        //表单录入的时间
        this.createTime = new Date().toLocaleString()
        //记录面试官的评价
        this.judgement = form.judgement || []
        //记录到底公司时间
        this.arrivalTime = form.arrivalTime || ''
    }
}

var loadData = () => {
    var d = fs.readFileSync(savedData, 'utf-8')
    var data = JSON.parse(d)
    return data
}

var allForm = {
    data: loadData(),
}

allForm.new = (form) => {
    var item = new InterviewForm(form)
    var data = allForm.data
    var lastItem = data[data.length - 1]
    if (lastItem == undefined) {
        item.id = 1
    } else {
        item.id = lastItem.id + 1
    }
    data.push(item)
    allForm.save()
    return item
}

allForm.save = () => {
    var data = JSON.stringify(allForm.data, null, 2)
    fs.writeFile(savedData, data, (error) => {
        if (error) {
            log('saveForm ERROR')
        } else {

        }
    })
}

allForm.check = (id) => {
    var data = allForm.data
    for (var i = 0; i < data.length; i++) {
        var item = data[i]
        if (item.id == id) {
            return item
        }
    }
    return {}
}

allForm.delForm = (id) => {
    var data = allForm.data
    for (var i = 0; i < data.length; i++) {
        var item = data[i]
        if (item.id == id) {
            data.splice(i, 1)
            allForm.save()
            return item
        }
    }
    return {}
}

allForm.updataForm = (id, form) => {
    var data = allForm.data
    for (var i = 0; i < data.length; i++) {
        var item = data[i]
        if (item.id == id) {
            data[i] = form
            allForm.save()
            return data[i]
        }
    }
    return {}
}

allForm.all = () => {
    return allForm.data
}


module.exports = allForm
