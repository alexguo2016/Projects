var fs = require('fs')
var log = require('../util/logUtil')
var qData = '../qaDemo/db/question.json'
var ansModel = require('./answer')

class Question {
    constructor(model) {
        this.author = model.author || ''
        this.content = model.content || ''
        this.id = model.id || ''
        this.answerData = []
    }
}

var loadData = () => {
    var d = fs.readFileSync(qData, 'utf-8')
    var data = JSON.parse(d)
    return d
}

var question = {
    data: loadData(),
}

question.new = (model) => {
    var item = new Question(model)
    var data = this.data

    var lastId = data[data.length - 1]
    if (lastId === undefined) {
        item.id = 1
    } else {
        item.id = lastId + 1
    }
    data.push(item)
    this.save()
    return item
}

question.delete = (id) => {
    var data = this.data
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
    var data = this.data
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
    var data = JSON.stringify(this.data, null, 2)
    fs.writeFile(qData, data, (error) => {
        if (error) {
            log('something worng in saving QUESTION JSON FILE!')
        } else {

        }
    })
}

module.exports = question
