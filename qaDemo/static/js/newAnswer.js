//点击按钮之后, 在指定位置显示回答form, 点击form中的提交按钮之后, 通过ajax添加回答, 在页面上增加回答

var bindShowForm = () => {
    var mainBox = e('.main')
    mainBox.addEventListener('click', (event) => {
        var self = event.target
        if (self.classList.contains('userAnswerBtn')) {
            var answerForm = myClosest('.answerForm', self)
            answerForm.classList.toggle('myHidden')
        }
    })
}

var bindSummitForm = () => {
    var mainBox = e('.main')
    mainBox.addEventListener('click', (event) => {
        var self = event.target
        if (self.classList.contains('userAnswerSummit')) {
            //获取form中的数据,
            var formData = getFormData(self)
            //ajax操作, 同时在回调函数中, 在页面插入相应的回答
            makeAnswer(formData)
            clearForm(self)
        }
    })
}

var getFormData = (obj) => {
    //获取DOM
    var answerForm = myClosest('.answerForm', obj)
    var afa = myFind('.answerFormAuthor', answerForm)
    var afc = myFind('.answerFormContent', answerForm)
    //获取DOM中的value
    var author = afa.value
    var content = afc.value
    var qId = Number(answerForm.dataset.id)

    var o = {
        author: author,
        content: content,
        qId: qId,
    }

    return o
}

var makeAnswer = (obj) => {
    //将obj发送给服务器
    sendAnsewer(obj)
}

var sendAnsewer = (obj) => {
    //使用ajax将数据传给服务器
    var method = 'post'
    var path = 'http://localhost:7000/api/answer/add'
    var data = obj
    ajax(method, path, (r) => {
        //在页面上插入最近的回答
        var lastAnswer = r
        insertOneAnswer(lastAnswer)
    }, data)
}

var insertOneAnswer = (lastAnswer) => {
    var ansItem = lastAnswer
    var eleId = lastAnswer.qId
    var questionEles = es('.myQuestion')
    for (var i = 0; i < questionEles.length; i++) {
        var q = questionEles[i]
        if (q.dataset.id == eleId) {
            insertTemplateAnswer(ansItem, q)
            addAnswerNum(q)
            toggleAnswerForm(q)
        }
    }
}

var addAnswerNum = (questionEle) => {
    var q = questionEle
    var ansNum = myFind('.numero', q)
    var n = Number(ansNum.innerHTML)
    n += 1
    ansNum.innerHTML = n
}

var toggleAnswerForm = (questionEle) => {
    var q = questionEle
    var ansForm = myFind('.answerForm', q)
    ansForm.classList.toggle('myHidden')

}

var clearForm = (obj) => {
    //获取DOM
    var answerForm = myClosest('.answerForm', obj)
    var afa = myFind('.answerFormAuthor', answerForm)
    var afc = myFind('.answerFormContent', answerForm)
    //重置
    afa.value = ''
    afc.value = ''
}

var __main = () => {
    bindShowForm()
    bindSummitForm()
}

__main()
