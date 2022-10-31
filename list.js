class ListNode {
    constructor(val = null, next = null ) {
        this.val = val
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = new ListNode()
    }

    append(val) {
        if (this.head.val === null) {
            this.prepend(val)
            return
        }

        let cur = this.head

        while (cur.next) {
            cur = cur.next
        }

        //1 2 3 4 5 null

        cur.next = new ListNode(val)

    }

    prepend(val) {
        if (this.head.val === null) {
            this.head = new ListNode(val)
            return
        }

        this.head = new ListNode(val, this.head)
    }

    size() {
        let cur = this.head
        let length = 0;

        while (cur) {
            cur = cur.next
            length++
        }

        return length
    }

    tail() {
        let cur = this.head

        while (cur.next) {
            cur = cur.next
        }

        return cur
    }

    at(index) {
        if (index < 0 || index >= this.size()) {
            return -1
        }

        let cur = this.head

        for (let i = 0; i < index; i++) {
            cur = cur.next
        }

        return cur
    }

    pop() {
        let cur = this.head

        if (cur.next) {
            while (cur.next.next) {
                cur = cur.next
            }

            cur.next = cur.next.next 
        }
    }

    contains(val) {
        let cur = this.head

        while (cur) {
            if (cur.val === val) {
                return true
            }

            cur = cur.next
        }

        return false
    }

    find(val) {
        let index = 0;
        let cur = this.head

        while (cur) {
            if (cur.val === val) {
                return index
            }

            index++
            cur = cur.next
        }

        return -1
    }

    toString() {
        if (this.head.val === null) {
            return null
        }

        let string = ''
        let cur = this.head

        while (cur) {
            string += `( ${cur.val} ) -> `
            cur = cur.next
        }

        string += `null`
        return string
    }

    insertAt(val, index) {
        if (index < 0 || index > this.size()) {
            return -1
        } else if (index === 0) {
            this.head = this.head.next
            return
        }

        let cur = this.head

        //1 2  4 5

        for (let i = 0; i < index - 1; i++) {
            cur = cur.next
        }

        cur.next = new ListNode(val, cur.next)
    }

    removeAt(index) {
        if (index < 0 || index >= this.size()) {
            return -1
        }

        let cur = this.head

        for (let i = 0; i < index - 1; i++) {
            cur = cur.next
        }

        cur.next = cur.next.next
    }
}

export { ListNode, LinkedList }
