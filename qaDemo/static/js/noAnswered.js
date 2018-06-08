var showNoanswereds = () => {
    var method = 'get'
    var path = 'http://localhost:7000/api/question/all'
    ajax(method, path, (r) => {
        var data = r
        var arr = []
        for (var i = 0; i < data.length; i++) {
            var item = data[i]
            if (item.answerData.length == 0) {
                arr.push(item)
            }
        }
        insertQuestions(arr)
        insertAnswers(arr)
    })
    bindShowAnswers()
}

var __main = () => {
    showNoanswereds()
}

__main()
