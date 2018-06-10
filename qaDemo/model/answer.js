var fs = require('fs')
var log = require('../util/logUtil')
var getLastNum = require('../util/getLastNum')
var getQid = require('../util/getQid')
var aData = '../qaDemo/db/answer.json'

class Answer {
    constructor(model) {
        this.author = model.author || ''
        this.content = model.content || ''
        this.title = model.title || ''
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
    var data = answer.data

    var lastItem = data[data.length - 1]
    var qId = model.qId

    //data.id 的格式是'qnan'
    if (item.id == undefined) {
        var n = 1
    } else {
        var n = getLastNum(item.id, 'a')
    }
    if (lastItem === undefined) {
        item.id = `q${qId}a${n}`
    } else {
        n = n + 1
        item.id = `q${qId}a${n}`
    }

    data.push(item)
    answer.save()
    return item
}

answer.delete = (id) => {
    var data = answer.data
    for (var i = 0; i < data.length; i++) {
        var item = data[i]
        if (id == item.id) {
            var d = data.splice(i, 1)
            answer.save()
            return d
        }
    }
    return {}
}

answer.all = () => {
    return answer.data
}

answer.save = () => {
    var data = JSON.stringify(answer.data, null, 2)
    fs.writeFile(aData, data, (error) => {
        if (error) {
            log('something worng in saving ANSWER JSON FILE!')
        } else {

        }
    })
}

module.exports = answer
