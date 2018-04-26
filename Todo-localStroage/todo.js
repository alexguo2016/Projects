/*
1、在输入框输入文本之后，按add可以创建一条todo
*/
var todoList = []
var todo = function(text) {
    var o = {}
    o.text = text
    if (todoList[todoList.length - 1] == undefined) {
        o.id = 0
    } else {
        o.id = todoList[todoList.length - 1].id + 1
    }
    return o
}
var createTodo = function() {
    var text = getInputText()
    var t = todo(text)
    insertTodo(t)
    saveToList(t)
    // saveToLocalStroage()
}

var getInputText = function() {
    var input = e('#todo-input')
    return input.value
}
var insertTodo = function(todo) {
    var items = e('.items')
    var html = `
        <div class = 'todo-item' data-id = '${todo.id}'>
            <button type = 'button' class = 'todo-item-delete'>delete</button>
            <button type = 'button' class = 'todo-item-complete'>complete</button>
            <span class = 'todo-item-text'>${todo.text}</span>
        </div>
    `
    items.insertAdjacentHTML('beforeend', html)
}
var saveToList = function(element) {
    todoList.push(element)
}
/*
2、todo可以被删除
*/
// var findId = function(element) {
//     var id = 0
//     id = element.dataset.id
//     return id
// }
// var removeTodo = function(element) {
//     var id = findId(element)
//     var t = findTodo(id)
//     log()
//     t.remove()
// }
// var findTodo = function(id) {
//     return e('#id')
// }


/*
button  listeners
*/
var bindAdd = function() {
    var t_box = e('.todo-container')
    t_box.addEventListener('click', function(event) {
        var self = event.target
        if (self.classList.contains('addBtn')) {
            // log('add')
            createTodo()
        }
    })
}
var bindRemove = function() {
    var t_box = e('.todo-container')
    t_box.addEventListener('click', function(event) {
        var self = event.target
        if (self.classList.contains('todo-item-delete')) {
            // log('remove')
            var item = self.closest('.todo-item')
            item.remove()
        }
    })
}


/*
main程序
*/
var bindBtns = function() {
    bindAdd()
    bindRemove()
}
var main = function() {
    bindBtns()
}
main()
