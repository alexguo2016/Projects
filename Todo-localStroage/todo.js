/*
1、在输入框输入文本之后，按add可以创建一条todo
*/
var todos = []
var todo = function(text) {
    var o = {}
    o.text = text
    if (todos[todos.length - 1] == undefined) {
        o.id = 0
    } else {
        o.id = todos[todos.length - 1].id + 1
    }
    log('todo-->', o)
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
var insertTodos = function(ts) {
    // log('ts',ts)
    for (var i = 0; i < ts.length; i++) {
        insertTodo(ts[i])
    }
}
var saveToList = function(element) {
    todos.push(element)
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
第一次启动时候加载页面
*/
var showTodos = function() {
    insertTodos(todos)
}
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
            saveTols()
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
            var id = item.dataset.id
            item.remove()
            deleteIntodos(id)
        }
    })
}
var deleteIntodos = function(id) {
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos.splice(i, 1)
        }
    }
    saveTols()
}
var bindUpdate = function() {
    var t_box = e('.todo-container')
    t_box.addEventListener('click', function(event) {
        var self = event.target
        if (self.classList.contains('todo-item-complete')) {
            // log('remove')
            var item = self.closest('.todo-item')
            item.classList.toggle('done')
        }
    })
}
/*
localStorage相关
*/
//判断有没有缓存，没有则创建一个localStorage
var ls = function() {
    if (!localStorage.getItem('todoList')) {
        localStorage.setItem('todoList', '')
    } else {
        data = localStorage.getItem('todoList')
        todos = JSON.parse(data)
    }
}
var saveTols = function() {
    var data = JSON.stringify(todos)
    localStorage.setItem('todoList', data);
}
/*
main程序
*/
var bindBtns = function() {
    bindAdd()
    bindRemove()
    bindUpdate()
}
var main = function() {
    ls()
    showTodos()
    bindBtns()
}
main()
