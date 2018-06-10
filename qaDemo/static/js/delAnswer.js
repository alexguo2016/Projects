
var bindDelAnswer = () => {
    var mainBox = e('.main')
    mainBox.addEventListener('click', (event) => {
        var self = event.target
        if (self.classList.contains('delAnswer')) {
            //找到这个相应的id.
            // var answerItem = myFind('')
            // var id = getQAid()
        }
    })
}


var __main = () => {
    bindDelAnswer()
}

__main()
