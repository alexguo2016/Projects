//先写model, 读取, 写入, 增删改查
var fs = require('fs')
var log = require('../util/logUtil')
var savedData = '../interviewList/db/savedData.json'
var tempData = '../interviewList/db/tempData.json'

class InterviewForm {
    constructor(form) {
        //normalInfos包含候选人名字, 性别, 民族, 籍贯, 生日, 联系电话, 详细地址以及工作年限, 是一个对象数组
        this.normalInfos = form.normalInfos || ''
        //martalStatus包含婚姻状况, 生育状况以及生育计划, 是一个对象数组
        this.maritalStatus = form.maritalStatus || ''
        //教育经历, 工作经历, 家庭背景, 应聘情况都是一个对象数组
        this.eduExps = form.eduExps || ''
        this.workExps = form.workExps || ''
        this.famiStatus = form.famiStatus || ''
        this.jobObjected = form.jobObjected || ''
        //候选人声明是一个boolean
        this.declaration = iForm.declaration || ''
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

allForm.all = () => {
    return allForm.data
}


module.exports = allForm
