//Vue是数据驱动的, 尽量不要动DOM, 改动data属性, 视图可以自动更新
var title = {
    template: `
    <div>
        <label for="title">标题行
        <input name="title" type="text" placeholder="请输入标题名">
    </div>
    `
}
var author = {
    template: `
    <div>
        <label for="author">作者
        <input name="author" type="text" placeholder="您的名字">
    </div>
    `
}
var keywords = {
    template: `
    <div>
        <label for="keywords">关键字
        <input name="keywords" type="text" placeholder="请输入关键字, 以逗号隔开">
    </div>
    `
}
var article = {
    template: `
    <div>
        <label for="article">文章主体
        <textarea placeholder="您的文章">
    </div>
    `
}

var header = {
    template: `
    <div class="header">
    <!-- 导航栏 -->
    </div>
    `
}
var footer = {
    template: `
    <div class="footer">
    <!-- 显示创建时间等额外信息 -->
    </div>
    `
}
var main = {
    template: `
    <div class="main">
    <com-title></com-title>
    <com-author></com-author>
    <com-keywords></com-keywords>
    <com-article></com-article>
    </div>
    `,
    components: {
        'com-title': title,
        'com-author': author,
        'com-keywords': keywords,
        'com-article': article,
    }
}

var app = new Vue({
    el: '#app',
    data: {
        test: "test"
    },
    //template里面应该由插槽和组件组成
    template: `
    <div class="container">
        <my-header></my-header>
        <my-main></my-main>
        <my-footer></my-footer>
    </div>
    `,
    components: {
        'my-header': header,
        'my-main': main,
        'my-footer': footer,
    },
    methods: {

    },
    mounted: {
        
    }
})
