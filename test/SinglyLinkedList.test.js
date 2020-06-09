const {
  SinglyLinkedListNode,
  SinglyLinkedList
} = require('../src/SinglyLinkedList')

test('Declares an empty SinglyLinkedList', () => {
  const l = new SinglyLinkedList()
  expect(l.head).toBe(null)
  expect(l.length).toBe(0)
})

test('Adds A to an empty SinglyLinkedList', () => {
  const l = new SinglyLinkedList()
  l.addNode('A')
  expect(l.length).toBe(1)
  expect(l.head.data).toBe('A')
})

test('Adds A, B and C to an empty SinglyLinkedList', () => {
  const l = new SinglyLinkedList()
  l.addNode('A')
  l.addNode('B')
  l.addNode('C')
  expect(l.length).toBe(3)
  expect(l.head.data).toBe('A')
})

test('Returns the node at index 1 of an empty SinglyLinkedList', () => {
  const l = new SinglyLinkedList()
  expect(l.getNodeAtIndex(1)).toBe(null)
})

test('Returns the node at index 1 of a SinglyLinkedList with one node', () => {
  const l = new SinglyLinkedList()
  l.addNode('A')
  expect(l.getNodeAtIndex(1)).toBe(null)
})

test('Returns the node at index 1 of a SinglyLinkedList with two nodes', () => {
  const l = new SinglyLinkedList()
  l.addNode('A')
  l.addNode('B')
  expect(l.getNodeAtIndex(1).data).toBe('B')
})

test('Returns the node at index 1 of a SinglyLinkedList with three nodes', () => {
  const l = new SinglyLinkedList()
  l.addNode('A')
  l.addNode('B')
  l.addNode('C')
  expect(l.getNodeAtIndex(1).data).toBe('B')
})

test('Returns the last node of an empty SinglyLinkedList', () => {
  const l = new SinglyLinkedList()
  expect(l.getLastNode()).toBe(null)
})

test('Returns the last node of a SinglyLinkedList with one node', () => {
  const l = new SinglyLinkedList()
  l.addNode('A')
  expect(l.getLastNode().data).toBe('A')
})

test('Returns the last node of a SinglyLinkedList with three nodes', () => {
  const l = new SinglyLinkedList()
  l.addNode('A')
  l.addNode('B')
  l.addNode('C')
  expect(l.getLastNode().data).toBe('C')
})

test('Removes the node at index 1 of an empty SinglyLinkedList', () => {
  const l = new SinglyLinkedList()
  expect(l.removeNodeAtIndex(1)).toBe(null)
})

test('Removes the node at index 1 of a SinglyLinkedList with one node', () => {
  const l = new SinglyLinkedList()
  l.addNode('A')
  expect(l.removeNodeAtIndex(1)).toBe(null)
})

test('Removes the node at index 1 of a SinglyLinkedList with two nodes', () => {
  const l = new SinglyLinkedList()
  l.addNode('A')
  l.addNode('B')
  expect(l.removeNodeAtIndex(1)).toBe('B')
  expect(l.length).toBe(1)
})

test('Removes the node at index 1 of a SinglyLinkedList with three nodes', () => {
  const l = new SinglyLinkedList()
  l.addNode('A')
  l.addNode('B')
  l.addNode('C')
  expect(l.removeNodeAtIndex(1)).toBe('B')
  expect(l.length).toBe(2)
})

test('Removes the node at index 1 of a SinglyLinkedList with three nodes', () => {
  const l = new SinglyLinkedList()
  l.addNode('A')
  l.addNode('B')
  l.removeAllNodes()
  expect(l.head).toBe(null)
  expect(l.length).toBe(0)
})