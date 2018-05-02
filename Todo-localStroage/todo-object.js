var Todo = function() {
    this.todos = []
    this.actions = {
        add: function() {
            createTodo()
            saveTols()
        },
        remove: function(item) {
            var id = item.dataset.id
            item.remove()
            deleteIntodos(id)
        },
        done: function(item) {
            var id = item.dataset.id
            item.classList.toggle('done')
            doneIntodos(id)
        },
        update: function(id, str) {
            log('update')
            var id = item.dataset.id
            updateIntodos(id, str)
        },
    }
}
Todo.prototype = {
    constructor: Todo(),
    showTodos: function() {
        insertTodos(this.todos)
    },
    ls: function() {
        if (!localStorage.getItem('todoList')) {
            localStorage.setItem('todoList', '[]')
        } else {
            var data = localStorage.getItem('todoList')
        }
        this.todos = JSON.parse(data)
    },
    saveTols: function() {
        //var todos = ls()
        // log('save-->', todos)
        var data = JSON.stringify(this.todos)
        localStorage.setItem('todoList', data);
    },
    saveToList: function(element) {
        //var todos = ls()
        this.todos.push(element)
    },
    updateIntodos: function(id, str) {
        for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id == id) {
                this.todos[i].text = str
                // log('todos[i].done-->', todos[i].done)
                break
            }
        }
        this.saveTols()
    },
    doneIntodos: function(id) {
        //var todos = ls()
        for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id == id) {
                this.todos[i].done = !this.todos[i].done
                break
            }
        }
        this.saveTols()
    },
    deleteIntodos: function(id) {
        for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id == id) {
                this.todos.splice(i, 1)
            }
        }
        this.saveTols()
    },
    createTodo: function() {
        var text = getInputText()
        var t = todo(text)
        insertTodo(t)
        this.saveToList(t)
    },
    _main: function() {
        this.ls()
        this.showTodos()
        bindBtns()
        bindEdit()
    }
}
// var actions = {
//     add: function() {
//         createTodo()
//         saveTols()
//     },
//     remove: function(item) {
//         var id = item.dataset.id
//         item.remove()
//         deleteIntodos(id)
//     },
//     done: function(item) {
//         var id = item.dataset.id
//         item.classList.toggle('done')
//         doneIntodos(id)
//     },
//     update: function(id, str) {
//         log('update')
//         var id = item.dataset.id
//         //弹出对话框，用于修改文本  暂时不会做……
//         // create_dialog_box()
//         updateIntodos(id, str)
//     },
// }

var bindBtns = function() {
    var t_box = e('.todo-container')
    t_box.addEventListener('click', function(event) {
        var self = event.target
        item = self.closest('.todo-item')
        if (self.classList.contains('todo-item-done')) {
            actions.done(item)
        } else if (self.classList.contains('addBtn')) {
            actions.add()
        } else if (self.classList.contains('todo-item-delete')) {
            actions.remove(item)
        } else if (self.classList.contains('todo-item-text')) {
            self.contentEditable = true
            //弹出一个对话框，用于修改内容
            // actions.update()
        }
    })
}
var bindEdit = function() {
    var items = e('.items')
    items.addEventListener('keydown', function(event) {
        item = t_find(items, '.todo-item')
        var self = event.target
        if (self.classList.contains('todo-item-text')) {
            // log('keycode-->',event.code)
            if (event.code == 'Enter') {
                self.contentEditable = false
                // log('text', self.innerHTML)
                var id = item.dataset.id
                var str = self.innerHTML
                actions.update(id, str)
            }
        }
    })
}
var ttd = new Todo()
ttd._main()
