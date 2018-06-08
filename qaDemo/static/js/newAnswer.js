//点击按钮之后, 在指定位置插入回答form, 点击form中的提交按钮之后, 通过ajax添加回答, 在页面上增加回答

var bindNewAnswer = () => {
    var mainBox = e('.main')
    mainBox.addEventListener('click', (event) => {
        var self = event.target
        if (self.classList.contains('userAnswerBtn')) {
            var answerForm = myClosest('.answerForm', self)
            insertAnswerForm(self)
        }
    })
}

var insertAnswerForm = (ele) => {
    var t = `
    <div class="blog-body">
        <div class="blog-title">
            <h1>提问</h1>
            <h3>怎样提出一个好的问题?</h3>
            <p> 关键在于</p>
            <p>1.厘清事实, 分离由于短时情绪等引发的干扰因素</p>
            <p>2.不要加入主观臆断, 描述时需要提供实质证据</p>
            <p>3.细致地描述问题背景, 问题发生时的状况以及提供尽量多的信息</p>
            <p>4.您想要达到的目的</p>
        </div>
        <div class="blog-summary ">
            <p>请输入您的用户名</p>
            <input type="text" class="questionInfos questionUser" placeholder="请不要输入敏感词汇">
            <br>
            <p>请输入标题</p>
            <input type="text" class="questionInfos questionTitle" placeholder="请不要输入敏感词汇">
            <br>
            <p>请输入问题描述</p>
            <textarea class="questionInfos questionDescription" rows="10" cols="90" placeholder="请不要输入敏感词汇"></textarea>
            <br>
        </div>
    </div>

    <div class="questionArea">
        <div class="blog-body item-parent">
            <button class="userQuestionBtn">提交问题</button>
        </div>
    </div>
    `
    ele.insertAdjacentHTML('beforeend', t)
}


var __main = () => {
    bindNewAnswer()
}

__main()
