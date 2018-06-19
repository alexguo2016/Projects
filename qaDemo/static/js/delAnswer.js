
var bindDelAnswer = () => {
    var mainBox = e('.main')
    mainBox.addEventListener('click', (event) => {
        var self = event.target
        if (self.classList.contains('delAnswer')) {
            //找到这个相应的answerItem.
            var answerItem = myClosest('.answerItem', self)
            var id = answerItem.id
            //ajax操作
            apiDelete(id)
        }
    })
}

var apiDelete = (id) => {
    var method = 'get'
    var path = 'http://localhost:7000/api/answer/delete' + id
    ajax(method, path, (r) => {
        // log('删除成功')
        // log('被删除的条目是', r)
        var delItemId = r[0].id
        var delItem = e(`#${delItemId}`)
        subtraAnsNum(delItem)
        delItem.remove()
    })
}

var subtraAnsNum = (obj) => {
    var numEle = myClosest('.numero', obj)
    var num = Number(numEle.innerHTML)
    num = num - 1
    numEle.innerHTML = num
}

var __main = () => {
    bindDelAnswer()
}

__main()
