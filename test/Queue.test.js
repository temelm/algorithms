const Queue = require('../src/Queue')

test('Declares an empty Queue without any maximum size limit', () => {
  const q = new Queue()
  expect(q.elements).toEqual({})
  expect(q.first).toBe(0)
  expect(q.last).toBe(0)
  expect(q.maxSize).toBe(-1)
})

test('Declares an empty Queue with a maximum size limit of 8', () => {
  const q = new Queue(8)
  expect(q.elements).toEqual({})
  expect(q.first).toBe(0)
  expect(q.last).toBe(0)
  expect(q.maxSize).toBe(8)
})

test('Returns the size of an empty Queue', () => {
  const q = new Queue()
  expect(q.size()).toBe(0)
})

test('Checks whether an empty Queue is empty', () => {
  const q = new Queue()
  expect(q.isEmpty()).toBe(true)
})

test('Checks whether an empty Queue is full', () => {
  const q = new Queue()
  expect(q.isFull()).toBe(false)
})

test('Returns the first element of an empty Queue', () => {
  const q = new Queue()
  expect(q.peek()).toBe(undefined)
})

test('Adds A, B and C to an empty Queue', () => {
  const q = new Queue()
  q.enqueue('A')
  q.enqueue('B')
  q.enqueue('C')
  expect(q.size()).toBe(3)
  expect(q.peek()).toBe('A')
})

test('Removes the first element of an empty Queue', () => {
  const q = new Queue()
  expect(q.dequeue()).toBe(undefined)
})

test('Removes the first element of a Queue', () => {
  const q = new Queue()
  q.enqueue('A')
  q.enqueue('B')
  q.enqueue('C')
  const first = q.dequeue()
  expect(first).toBe('A')
  expect(q.size()).toBe(2)
})