var testAdd = () => {
    var testBox = e('.testDiv')
    var testInput = e('.testInput')
    var testSumit = e('.testSumit')
    testBox.addEventListener('click', (event) => {
        var self = event.target
        if (self.classList.contains('testSumit')) {
            //找到合适的数据, 包装
            var data = getTestInfos()
            // log('data-->', data)
            //发送到服务器
            addForm(data)
        }
    })
}

var getTestInfos = () => {
    var testInput = e('.testInput')
    var value = testInput.value

    var o = {
        normalInfos: {
            name: value,
        },
    }
    return o
}


var addForm = (data) => {
    var method = 'post'
    var path = 'http://localhost:7000/api/form/add'
    ajax(method, path, (r) => {
        log('send OK')
    }, data)
}

var __main = () => {
    testAdd()
}

__main()
