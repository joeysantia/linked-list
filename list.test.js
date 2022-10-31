import { ListNode, LinkedList } from './list'

test('initialization creates a new linked list', () => {
    let test = new LinkedList()
    expect(test.head.val).toEqual(null)
    expect(test.head.next).toEqual(null)
})

test('can append a value to a linked list', () => {
    let test = new LinkedList()
    test.append(1)
    test.append(2)

    expect(test.head.val).toEqual(1)
    expect(test.head.next.val).toEqual(2)
})


test('toString returns a valid string representation of a linked list', () => {
    let test = new LinkedList()
    test.append(1)
    test.append(2)

    expect(test.toString()).toEqual('( 1 ) -> ( 2 ) -> null')
})

test('can prepend a value to a list', () => {
    let test = new LinkedList()
    test.append(1)
    test.append(2)
    test.prepend(0)

    expect(test.toString()).toEqual('( 0 ) -> ( 1 ) -> ( 2 ) -> null')

    
})

test('can return the size of a list', () => {
    let test = new LinkedList()
    test.append(1)
    test.append(2)

    expect(test.size()).toEqual(2)
})

test('can return the tail node of the list', () => {
    let test = new LinkedList()
    test.append(1)
    test.append(2)
    test.append(3)

    expect(test.tail().val).toEqual(3)
})

test('can return a node at a given index', () => {
    let test = new LinkedList()
    test.append(1)
    test.append(2)
    test.append(3)

    expect(test.at(1).val).toEqual(2)
})

test('can remove the last node in a list', () => {
    let test = new LinkedList()
    test.append(1)
    test.append(2)
    test.append(3)
    test.pop()

    expect(test.toString()).toEqual('( 1 ) -> ( 2 ) -> null')
})

test('can determine whether a node within the list has a given value', () => {
    let test = new LinkedList()
    test.append(1)
    test.append(2)
    test.append(3)

    expect(test.contains(2)).toBeTruthy()
    expect(test.contains(4)).toBeFalsy()
})

test('will find a node with a given val', () => {
    let test = new LinkedList()
    test.append(1)
    test.append(2)
    test.append(3)

    expect(test.find(3)).toEqual(2)
})

test('will return -1 if unable to find a node with a given val', () => {
    let test = new LinkedList()
    test.append(1)
    test.append(2)
    test.append(3)

    expect(test.find(4)).toEqual(-1)
})

test('can insert a node with a given val at a given index', () => {
    let test = new LinkedList()
    test.append(1)
    test.append(2)
    test.append(3)

    test.insertAt(2.5, 2)

    expect(test.toString()).toEqual('( 1 ) -> ( 2 ) -> ( 2.5 ) -> ( 3 ) -> null')
})

test('can delete a node at a given index', () => {
    let test = new LinkedList()
    test.append(1)
    test.append(2)
    test.append(3)

    test.removeAt(1)

    expect(test.toString()).toEqual('( 1 ) -> ( 3 ) -> null')
})


