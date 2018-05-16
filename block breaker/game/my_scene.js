class myScene {
    constructor(game) {
        this.game = game
    }
    static new(game) {
        let i = new this(game)
        return i
    }
    draw() {
        // alert('这个方法必须被重写')
    }
    update() {

    }
}
