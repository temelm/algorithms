class Queue {
  /**
   * @constructs Queue
   * @param {number} [maxSize]
   */
  constructor (maxSize = -1) {
    this.elements = {}
    this.first = 0
    this.last = 0
    this.maxSize = maxSize
  }

  /**
   * @returns {number}
   */
  size () {
    return this.last - this.first
  }

  /**
   * @returns {boolean}
   */
  isEmpty () {
    return this.size() === 0
  }

  /**
   * @returns {boolean}
   */
  isFull () {
    return this.size() === this.maxSize
  }

  /**
   * @returns {*|undefined}
   */
  peek () {
    return this.isEmpty() ? undefined : this.elements[this.first]
  }

  /**
   * @param {*} element
   * @returns {boolean}
   */
  enqueue (element) {
    let result = false
    if (!this.isFull()) {
      result = true
      this.elements[this.last] = element
      this.last++
    }
    return result
  }

  /**
   * @returns {*|undefined}
   */
  dequeue () {
    let result = undefined
    if (!this.isEmpty()) {
      result = this.elements[this.first]
      delete this.elements[this.first]
      this.first++
    }
    return result
  }

  /**
   * @param {number} maxSize
   * @returns {boolean}
   */
  setMaxSize (maxSize) {
    let result = false
    if (maxSize === -1 || maxSize > this.size()) {
      result = true
      this.maxSize = maxSize
    }
    return result
  }
}

module.exports = Queue