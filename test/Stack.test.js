const Stack = require('../src/Stack')

test('Declares an empty Stack without any maximum size limit', () => {
  const s = new Stack()
  expect(s.elements).toEqual({})
  expect(s.last).toBe(0)
  expect(s.maxSize).toBe(-1)
})

test('Declares an empty Stack with a maximum size limit of 8', () => {
  const s = new Stack(8)
  expect(s.elements).toEqual({})
  expect(s.last).toBe(0)
  expect(s.maxSize).toBe(8)
})

test('Returns the size of an empty Stack', () => {
  const s = new Stack()
  expect(s.size()).toBe(0)
})

test('Checks whether an empty Stack is empty', () => {
  const s = new Stack()
  expect(s.isEmpty()).toBe(true)
})

test('Checks whether an empty Stack is full', () => {
  const s = new Stack()
  expect(s.isFull()).toBe(false)
})

test('Returns the first element of an empty Stack', () => {
  const s = new Stack()
  expect(s.peek()).toBe(undefined)
})

test('Adds A, B and C to an empty Stack', () => {
  const s = new Stack()
  s.push('A')
  s.push('B')
  s.push('C')
  expect(s.size()).toBe(3)
  expect(s.peek()).toBe('C')
})

test('Removes the last element of an empty Stack', () => {
  const s = new Stack()
  expect(s.pop()).toBe(undefined)
})

test('Removes the last element of a Stack', () => {
  const s = new Stack()
  s.push('A')
  s.push('B')
  s.push('C')
  const last = s.pop()
  expect(last).toBe('C')
  expect(s.size()).toBe(2)
})

test('Successfully sets the max size of an empty Stack', () => {
  const s = new Stack()
  s.setMaxSize(10)
  expect(s.maxSize).toBe(10)
})

test('Successfully increases the max size of a Stack', () => {
  const s = new Stack(5)
  s.push('A')
  s.push('B')
  s.push('C')
  s.push('D')
  s.push('E')
  s.setMaxSize(10)
  expect(s.maxSize).toBe(10)
})

test('Successfully decreases the max size of a Stack', () => {
  const s = new Stack(5)
  s.push('A')
  s.push('B')
  s.push('C')
  s.push('D')
  s.setMaxSize(4)
  expect(s.maxSize).toBe(4)
  expect(s.isFull()).toBe(true)
})

test('Fails to decrease the max size of a Stack', () => {
  const s = new Stack(5)
  s.push('A')
  s.push('B')
  s.push('C')
  s.push('D')
  s.push('E')
  s.setMaxSize(4)
  expect(s.maxSize).toBe(5)
})