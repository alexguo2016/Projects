1、log_e_es.js
    自定义的log函数

    自定义的选择函数 e(selector)和es(selector)，对应querySelector和querySelectorAll

    自定义的选择函数t_find(element, selector) 和 t_findAll(element, selector),从element中选择符合selector的元素

2、myInsert.js, insertAdjacentHTML的封装
        insertBE(element, html)-->beforeend插入
        insertAB(element, html)-->afterbegin插入
        insertAE(element, html)-->afterend插入
        insertBB(element, html)-->beforebegin插入

3、myLocalStorage.js
    saveLocalStorage(data, key) 将data序列化之后，在原来数据的末尾  插入到自定义key的localStorage中
    loadLocalStorage(key) 从localStorage中读取key的数据

4、myFormatTime.js
    formatTime(time) 将毫秒数转化为xx分xx秒的格式

5、myRndElementFromArray.js
    choice(array) 从array中返回随机一个元素
