const Comparator = require('../src/Comparator')

test('@todo: Add description', () => {
  const c = new Comparator()
  expect(c.isEqualTo(2, 2)).toBe(true)
})

test('@todo: Add description', () => {
  const c = new Comparator()
  expect(c.isEqualTo(2, 1)).toBe(false)
})

test('@todo: Add description', () => {
  const c = new Comparator()
  expect(c.isLessThan(2, 1)).toBe(false)
})

test('@todo: Add description', () => {
  const c = new Comparator()
  expect(c.isLessThan(2, 2)).toBe(false)
})

test('@todo: Add description', () => {
  const c = new Comparator()
  expect(c.isLessThan(2, 3)).toBe(true)
})

test('@todo: Add description', () => {
  const c = new Comparator()
  expect(c.isLessThanOrEqualTo(2, 1)).toBe(false)
})

test('@todo: Add description', () => {
  const c = new Comparator()
  expect(c.isLessThanOrEqualTo(2, 2)).toBe(true)
})

test('@todo: Add description', () => {
  const c = new Comparator()
  expect(c.isLessThanOrEqualTo(2, 3)).toBe(true)
})

test('@todo: Add description', () => {
  const c = new Comparator()
  expect(c.isGreaterThan(2, 1)).toBe(true)
})

test('@todo: Add description', () => {
  const c = new Comparator()
  expect(c.isGreaterThan(2, 2)).toBe(false)
})

test('@todo: Add description', () => {
  const c = new Comparator()
  expect(c.isGreaterThan(2, 3)).toBe(false)
})

test('@todo: Add description', () => {
  const c = new Comparator()
  expect(c.isGreaterThanOrEqualTo(2, 1)).toBe(true)
})

test('@todo: Add description', () => {
  const c = new Comparator()
  expect(c.isGreaterThanOrEqualTo(2, 2)).toBe(true)
})

test('@todo: Add description', () => {
  const c = new Comparator()
  expect(c.isGreaterThanOrEqualTo(2, 3)).toBe(false)
})

test('@todo: Add description', () => {
  const c = new Comparator()
  expect(c.isLessThan(2, 1)).toBe(false)
  c.reverseCompare()
  expect(c.isLessThan(2, 1)).toBe(true)
})