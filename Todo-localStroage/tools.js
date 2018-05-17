var log = console.log.bind(log)
var e = function(str) {
    return document.querySelector(str)
}
var t_find = function(element, str) {
    return element.querySelector(str)
}
var t_findAll = function(element, str) {
    return element.querySelectorAll(str)
}
//todo 的辅助函数
var todos = []
var todo = function(text) {
    //var todos = ls()
    var o = {}
    o.text = text
    if (todos[todos.length - 1] == undefined) {
        o.id = 0
    } else {
        o.id = todos[todos.length - 1].id + 1
    }
    // log('todo-->', o)
    o.done = false
    return o
}
var createTodo = function() {
    var text = getInputText()
    var t = todo(text)
    insertTodo(t)
    saveToList(t)
}

var getInputText = function() {
    var input = e('#todo-input')
    return input.value
}

var insertTodo = function(todo) {
    var items = e('.items')
    var d_status = ''
    if (todo.done == true) {
        d_status = 'done'
    }
    var html = `
        <li class = 'todo-item ${d_status} todo-list' data-id = '${todo.id}'>
            <button type = 'button' class = 'todo-item-delete'>delete</button>
            <button type = 'button' class = 'todo-item-done'>done</button>
            <span class = 'todo-item-text'>${todo.text}</span>
        </li>
    `
    items.insertAdjacentHTML('beforeend', html)
}
var insertTodos = function(ts) {
    // log('ts',ts)
    for (var i = 0; i < ts.length; i++) {
        insertTodo(ts[i])
    }
}

var deleteIntodos = function(id) {
    //var todos = ls()
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos.splice(i, 1)
        }
    }
    saveTols()
}
var doneIntodos = function(id) {
    //var todos = ls()
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos[i].done = !todos[i].done
            // log('todos[i].done-->', todos[i].done)
            break
        }
    }
    saveTols()
}
var updateIntodos = function(id, str) {
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos[i].text = str
            // log('todos[i].done-->', todos[i].done)
            break
        }
    }
    saveTols()
}
var saveToList = function(element) {
    //var todos = ls()
    todos.push(element)
}

/*
localStorage相关
*/
//判断有没有缓存，没有则创建一个localStorage，有则读取并赋值给todos
var ls = function() {
    var data = '[]'
    if (!localStorage.getItem('todoList')) {
        localStorage.setItem('todoList', '[]')
    } else {
        data = localStorage.getItem('todoList')
    }
    todos = JSON.parse(data)
    // var todos = JSON.parse(data)
    // return todos
}
//每次todos变化的时候都需要将数据写入到localStorage中
var saveTols = function() {
    //var todos = ls()
    // log('save-->', todos)
    var data = JSON.stringify(todos)
    localStorage.setItem('todoList', data);
}
