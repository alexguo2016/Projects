var fs = require('fs')
var log = require('../util/logUtil')
var aData = '../qaDemo/db/answer.json'

class Answer {
    constructor(model) {
        this.author = model.author || ''
        this.content = model.content || ''
        this.qId = model.qId || ''
        this.createTime = Math.floor(new Date() / 1000)
    }
}

var loadData = () => {
    var d = fs.readFileSync(aData, 'utf-8')
    var data = JSON.parse(d)
    return data
}

var answer = {
    data: loadData(),
}

answer.new = (model) => {
    var item = new Answer(model)
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

answer.delete = (id) => {
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

answer.all = () => {
    return answer.data
}

answer.save = () => {
    var data = JSON.stringify(this.data, null, 2)
    fs.writeFile(qData, data, (error) => {
        if (error) {
            log('something worng in saving ANSWER JSON FILE!')
        } else {

        }
    })
}

module.exports = answer
