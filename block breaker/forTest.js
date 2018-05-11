var log = console.log.bind(console)

var myObject = {
    foo: 'bar',
    func: function() {
        var self = this
        console.log('outer func: this.foo = ' + this.foo);
        console.log('outer func: this.self = ' + this.self);
        (function() {
            console.log('inner func: this.foo = ' + this.foo)
            console.log('inner func: this.self = ' + this.self)
        }())
    }
}
myObject.func()
