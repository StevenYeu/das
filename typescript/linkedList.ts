type LNode<T> = {
    value: T
    next: LNode<T> | null
}

function push<T>(head: LNode<T>, node: LNode<T>): void {
    let cur = head
    while (cur.next !== null) {
        cur = cur.next
    }
    cur.next = node
}

function find<T>(head: LNode<T>, val: T): T | null {
    let cur: LNode<T> | null = head
    while (cur !== null) {
        if (cur.value === val) {
            return val
        }
        cur = cur.next
    }
    return null
}

function reverse<T>(head: LNode<T>): LNode<T> | null {
    let cur: LNode<T> | null = head
    let prev: LNode<T> | null = null
    while (cur !== null) {
        const next: LNode<T> | null = cur.next
        cur.next = cur
        prev = cur
        cur = next
    }
    return prev
}

function printList<T>(head: LNode<T> | null, size: number): string {
    const output: Array<T> = Array(size)
    let cur: LNode<T> | null = head

    while (cur !== null) {
        output.push(cur.value)
        cur = cur.next
    }
    return output.toString()
}

const head: LNode<number> = {
    value: 1,
    next: null,
}

for (let i = 1; i <= 25; ++i) {
    const newNode: LNode<number> = {
        value: i + 1,
        next: null,
    }
    push(head, newNode)
}

const value = find(head, 25)
console.log(value)
console.log(head.value)

const reversed = reverse(head)
console.log(printList(reversed, 25))
