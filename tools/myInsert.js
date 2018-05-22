//在页面上插入HTML
var insertBE = function(element, html) {
    element.insertAdjacentHTML('beforeend', html)
}
var insertAB = function(element, html) {
    element.insertAdjacentHTML('afterbegin', html)
}
var insertBB = function(element, html) {
    element.insertAdjacentHTML('beforebegin', html)
}
var insertAE = function(element, html) {
    element.insertAdjacentHTML('afterend', html)
}
