
var bindAsk = () => {
    var mainBox = e('.main')
    mainBox.addEventListener('click', (event) => {
        var self = event.target
        if (self.classList.contains('userQuestionBtn')) {
            var questionInfos = getInfos(self)
            log(questionInfos)
            takeQuestion(questionInfos)
            alertMsg()
            clearInput(self)
        }
    })
}

var getInfos = (obj) => {
    //从obj出发, 找出需要的input以及textarea中的数据, 集合成一个对象
    //分别是  用户名, 标题, 问题描述

    //获取相应的DOM
    var user = e('.questionUser')
    var title = e('.questionTitle')
    var content = e('.questionDescription')

    //提取各自的value
    var userName = user.value
    var titleDetail = title.value
    var contentDetail = content.value

    var o = {
        author: userName,
        title: titleDetail,
        content: contentDetail,
    }

    return o
}

var takeQuestion = (obj) => {
    //将obj发送给服务器
    send(obj)
}

var send = (obj) => {
    //使用ajax将数据传给服务器
    var method = 'post'
    var path = 'http://localhost:7000/api/question/add'
    var data = obj
    ajax(method, path, (r) => {
        log('send ok')
    }, data)
}

var alertMsg = () => {
    //弹出'提交成功'窗口
    alert('提交成功!!')
}

var clearInput = (obj) => {
    //重置input等内容
    //获取相应的DOM
    var user = myClosest('.questionUser', obj)
    var title = myClosest('.questionTitle', obj)
    var content = myClosest('.questionDescription', obj)

    //重置value
    user.value = ''
    title.value = ''
    content.value = ''
}

var __main = () => {
    bindAsk()
}

__main()
