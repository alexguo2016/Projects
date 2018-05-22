class Node {
    constructor(e) {
        this.element = e
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = new Node()
        this._length = 0
    }

    //删除最后一个元素
    removeLast() {
        var n = this.head
        var k
        while (n.next.next != null) {
            n = n.next
            k = n.next.next
        }
        n.next = null
        k = null
        //
        this._length--
    }

    // 删除第一个元素
    removeFirst() {
        var n = this.head
        this.head = n.next
        this._length--
        n = null
    }

    //在链表开头插入一个元素
    prepend(e) {
        var node = new Node(e)
        // log('node-->', node.element)
        var n = this.head
        this.head = new Node()
        this.head.next = node
        node.next = n.next
        n = null
        // log('node next-->', node.next.element)
        this._length++
    }

    // 在链表末尾增加一个元素
    append(e) {
        var node = new Node(e)
        var n = this.head
        while (n.next != null) {
            n = n.next
        }
        n.next = node
        //
        this._length++
    }

    // 返回一个元素的 index
    indexOf(e) {
        var index = -1
        var n = this.head
        var i = 0
        while (n.next != null) {
            if (e === n.element) {
                index = i
                break
            }
            n = n.next
            i++
        }
        return index
    }

    // 返回链表的长度
    length() {
        return this._length
    }

    log() {
        var n = this.head.next
        log('遍历链表')
        while(n != null) {
            log(' > ', n.element)
            n = n.next
        }
    }
}
