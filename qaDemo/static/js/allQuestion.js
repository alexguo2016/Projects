var showQuestions = () => {
    var method = 'get'
    var path = 'http://localhost:7000/api/question/all'
    ajax(method, path, (r) => {
        var data = JSON.parse(r)
        insertQuestions(data)
    })
}

var insertQuestions = (qs) => {
    for (var i = 0; i < qs.length; i++) {
        var q = qs[i]
        var id = q.id
        insertQuestion(q)
        insertAnswers(qs, id)
    }
}

var insertQuestion = (q) => {
    var main = e('.main')
    insertTemplateQuestion(q, main)
}

var insertAnswers = (qs, id) => {

}

var insertTemplateQuestion = (obj, ele) => {
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
                <li class="published-date">${obj.createTime}</li>
                <li class="comments"><a href="#"><svg class="icon-bubble"><use xlink:href="#icon-bubble"></use></svg><span class="numero">8</span></a></li>
            </ul>
        </div>

        <div class="answerBox">

        </div>
    </div>
    `
    ele.insertAdjacentHTML('beforeend', t)
}

var insertTemplateAnswer = (obj, ele) => {
    var t = `
        <div class="blog-body">
            ${obj.content}
            <br>
        </div>
        <div class="blog-footer">
            <ul>
                <li class="published-date">${obj.createTIme}</li>
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
