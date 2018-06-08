var showQuestions = () => {
    var method = 'get'
    var path = 'http://localhost:7000/api/question/all'
    ajax(method, path, (r) => {
        var data = JSON.parse(r)
        insertQuestions(data)
        insertAnswers(data)
    })
}

var insertQuestions = (qs) => {
    for (var i = 0; i < qs.length; i++) {
        var q = qs[i]
        insertQuestion(q)
    }
}

var insertQuestion = (q) => {
    var main = e('.main')
    insertTemplateQuestion(q, main)
}

var insertAnswers = (qs) => {
    for (var i = 0; i < qs.length; i++) {
        var q = qs[i]
        var id = q.id
        insertAnswer(q, id)
    }
}

var insertAnswer = (q, id) => {
    //注意, answer是一个数组, 所以插入的时候需要进一步遍历
    var qBoxes = es('.blog-container')
    for (var i = 0; i < qBoxes.length; i++) {
        var qBox = qBoxes[i]
        if (qBox.dataset.id == id) {
            var answers = q.answers
            for (var j = 0; j < answers.length; j++) {
                var ansItem = answers[j]
                if (ansItem != undefined) {
                    var answerBox = myFind('.answerBox', qBox)
                    insertTemplateAnswer(ansItem, answerBox)
                }
            }
        }
    }
}

var insertTemplateQuestion = (obj, ele) => {
    var date = new Date(obj.createTime * 1000)
    var myTime = date.toLocaleDateString()
    var answerNum = obj.answers.length
    var t = `
    <div class="blog-container" data-id="${obj.id}">
        <div class="blog-header">
            <div class="blog-author--no-cover">
                <h3>${obj.author}</h3>
            </div>
        </div>

        <div class="blog-body">
            <div class="blog-title">
                <h1>${obj.title}</h1>
            </div>
            <div class="blog-summary">
                <p>${obj.content}</p>
            </div>
        </div>

        <div class="blog-footer">
            <ul>
                <li class="published-date">${myTime}</li>
                <li class="comments"><svg class="icon-bubble"><use xlink:href="#icon-bubble"></use></svg><span class="numero">${answerNum}</span></li>
            </ul>
        </div>
        <div class="answerBox">
            <div class="blog-body item-parent">
                <button class="userAnswerBtn">回答</button>
            </div>
        </div>
    </div>
    `
    ele.insertAdjacentHTML('beforeend', t)
}

var insertTemplateAnswer = (obj, ele) => {
    var date = new Date(obj.createTime * 1000)
    var myTime = date.toLocaleDateString()
    var t = `
        <div class="blog-body">
            ${obj.content}
            <br>
        </div>
        <div class="blog-footer">
            <ul>
                <li class="published-date">${myTime}</li>
                <li class="comments">${obj.author}</li>
            </ul>
        </div>
    `
    ele.insertAdjacentHTML('beforeend', t)
}
//页面加载的时候加载ajax数据
var __main = () => {
    showQuestions()
}

__main()
