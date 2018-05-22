class HashTable {

    constructor() {
        this.data = []
        this.size = 101
        // this.size = 5
    }

    hash(s) {
        var s_code = 0
        var result = 0
        var rate = 1
        for (var i = 0; i < s.length; i++) {
            s_code = s.charCodeAt(i) * rate
            rate *= 10
            result += s_code
        }
        return result
    }

    index(s) {
        var num = this.hash(s)
        var i = num % this.size
        return i
    }

    set(key, value) {
        var index = this.index(key)
        var cell = this.data[index]
        var _insert = [key, value]
        if (cell == undefined) {
            cell = []
            cell.push(_insert)
        } else {
            for (var i = 0; i < cell.length; i++) {
                if (cell[i][0] == key) {
                    cell[i] = _insert
                } else {
                    cell.push(_insert)
                }
            }
        }
        this.data[index] = cell
    }
    show() {
        for (var i = 0; i < this.size; i++) {
            if (this.data[i] != undefined) {
                log(this.data[i], i)
            }
        }
        //遍历所有元素
    }

    get(key, value) {
        var result = value
        var index = this.index(key)
        var cell = this.data[index]
        if (cell != undefined) {
            for (var i = 0; i < cell.length; i++) {
                if (cell[i][0] == key) {
                    result = cell[i][1]
                    break
                }
            }
        }
        return result
    }

    has(key) {
        /*
        key 是一个 string

        在 data 中检查是否存储了 key 并以布尔值返回结果
        */
        var hasKey = false
        var index = this.index(key)
        var cell = this.data[index]
        if (cell != undefined) {
            for (var i = 0; i < cell.length; i++) {
                if (cell[i][0] == key) {
                    hasKey = true
                    break
                }
            }
        }
        return hasKey
    }
}
