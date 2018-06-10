
var bindDelQuestion = () => {
    var mainBox = e('.main')
    mainBox.addEventListener('click', (event) => {
        var self = event.target
        if (self.classList.contains('delQuesBtn')) {
            //找到这个相应的answerItem.
            var questionBox = myClosest('.myQuestion', self)
            var id = questionBox.dataset.id
            // //ajax操作
            apiDeleteQuestion(id)
        }
    })
}

var apiDeleteQuestion = (id) => {
    var method = 'get'
    var path = 'http://localhost:7000/api/question/delete' + id
    ajax(method, path, (r) => {
        var delItemId = r[0].id
        var questionItems = es('.myQuestion')
        for (var i = 0; i < questionItems.length; i++) {
            var q = questionItems[i]
            if (q.dataset.id == delItemId) {
                apiCleanupAnswer(id)
                q.remove()
            }
        }
    })
}

var apiCleanupAnswer = (id) => {
    //清除多余的answer
    var method = 'get'
    var path = 'http://localhost:7000/api/answer/cleanUp' + id
    ajax(method, path, (r) => {
        // log('被清除的答案', r)
    })
}

var __main = () => {
    bindDelQuestion()
}

__main()
