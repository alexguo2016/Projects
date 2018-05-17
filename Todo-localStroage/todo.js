
/*
第一次启动时候加载页面
*/
var showTodos = function() {
    //var todos = ls()
    insertTodos(todos)
}
/*
button  listeners
*/
//使用表驱动法，对应增删改
var actions = {
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
        //弹出对话框，用于修改文本  暂时不会做……
        // create_dialog_box()
        updateIntodos(id, str)
    },
    clearDone: function(items) {
        for (var i = 0; i < items.length; i++) {
            var id = items[i].dataset.id
            items[i].remove()
            deleteIntodos(id)
        }
    },
}

var getDones = function(obj) {
    var dones = []
    d_item = obj.closest('.todo-item-done')
    dones.push(d_item)
    return dones
}

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
        } else if (self.classList.contains('clearDone')) {
            var items = document.querySelectorAll('.done')
            actions.clearDone(items)
        }
    })
    t_box.addEventListener('keypress', function(event) {
        var self = event.target
        if (event.key == 'Enter') {
            actions.add()
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

var preparePage = function() {
    insertDialog()
}

var main = function() {
    ls()
    showTodos()
    bindBtns()
    bindEdit()
}
main()
