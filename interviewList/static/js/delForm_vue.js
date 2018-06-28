//删除指定id的候选人, 并在页面上删除
// var bindDel = () => {
//     var myForm = e('.myForm')
//     myForm.addEventListener('click', (event) => {
//         var self = event.target
//         if (self.classList.contains('delForm') && self.type == 'button') {
//             var outer = myClosest('.detail', self)
//             var id = Number(outer.dataset.id)
//             //在数据库中删除数据, 然后在回调函数里面移除相应的页面元素
//             delData(id, outer)
//         }
//     })
// }
//
// var delData = (id, outer) => {
//     var method = 'get'
//     var path = 'http://localhost:7000/api/form/del' + id
//     var callback = () => {
//         outer.remove()
//     }
//     ajax(method, path, callback)
// }
//
// var __main = () => {
//     bindDel()
// }
//
// __main()


// var ib_del_v = new Vue({
//     el: '#interBox_Vue',
//     data: {
//         arr: ''
//     },
//     methods: {
//         bindDel: function() {
//             var myForm = e('.myForm')
//             myForm.addEventListener('click', (event) => {
//                 var self = event.target
//                 if (self.classList.contains('delForm') && self.type == 'button') {
//                     var outer = myClosest('.detail', self)
//                     var id = Number(outer.dataset.id)
//                     //在数据库中删除数据, 然后在回调函数里面移除相应的页面元素
//                     this.delData(id, outer)
//                 }
//             })
//         },
//         delData: function() {
//             var method = 'get'
//             var path = 'http://localhost:7000/api/form/del' + id
//             var callback = () => {
//                 outer.remove()
//             }
//             ajax(method, path, callback)
//         },
//     },
//     mounted: function() {
//         this.bindDel()
//     }
// })
