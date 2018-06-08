var fs = require('fs')
var log = require('../util/logUtil')
var qData = '../qaDemo/db/question.json'
var ansModel = require('./answer')

class Question {
    constructor(model) {
        this.author = model.author || ''
        this.content = model.content || ''
        this.title = model.title || ''
        this.id = model.id || ''
        this.answerData = []
        this.createTime = Math.floor(new Date() / 1000)
    }
}

var loadData = () => {
    var d = fs.readFileSync(qData, 'utf-8')
    var data = JSON.parse(d)
    return data
}

var question = {
    data: loadData(),
}

question.new = (model) => {
    //传入一个代表问题的对象
    var item = new Question(model)
    var data = question.data
    var lastItem = data[data.length - 1]
    if (lastItem === undefined) {
        item.id = 1
    } else {
        item.id = lastItem.id + 1
    }
    data.push(item)
    question.save()
    return item
}

question.delete = (id) => {
    var data = question.data
    for (var i = 0; i < data.length; i++) {
        var item = data[i]
        if (id === item[id]) {
            var d = data.splice(i, 1)
            return d
        }
    }
    return {}
}

question.all = () => {
    var q = question.data
    // log('question all--> question data', q)
    var a = ansModel.all()
    //获得问题列表以及回答列表之后, 根据问题id来将二者进行关联
    for (var i = 0; i < q.length; i++) {
        var qItem = q[i]
        var aItem = []
        for (var j = 0; j < a.length; j++) {
            var aEle = a[j]
            if (aEle.qId === qItem.id) {
                aItem.push(aEle)
            }
        }
        qItem.answerData = aItem
    }
    return q
}

//和all类似, 只是根据id来查找question, 并且将相应的answer也加进去
question.detail = (id) => {
    var data = question.data
    for (var i = 0; i < data.length; i++) {
        var item = data[i]
        if (item.id === id) {
            var a = ansModel.all()
            var aItem = []
            for (var j = 0; j < a.length; j++) {
                var aEle = a[j]
                if (aEle.qId === id) {
                    aItem.push(aEle)
                }
            }
            item.answerData = aItem
            return item
        }
    }
    return {}

}

question.save = () => {
    var data = JSON.stringify(question.data, null, 2)
    fs.writeFile(qData, data, (error) => {
        if (error) {
            log('something worng in saving QUESTION JSON FILE!')
        } else {

        }
    })
}

module.exports = question
