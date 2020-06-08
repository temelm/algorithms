class Stack {
  /**
   * @constructs
   * @param {number} [maxSize]
   */
  constructor (maxSize = -1) {
    this.elements = {}
    this.last = 0
    this.maxSize = maxSize
  }

  /**
   * @returns {number}
   */
  size () {
    return this.last
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
    return this.isEmpty() ? undefined : this.elements[this.size() - 1]
  }

  /**
   * @param {*} element
   * @returns {boolean}
   */
  push (element) {
    let result = false
    if (!this.isFull()) {
      result = true
      this.elements[this.size()] = element
      this.last++
    }
    return result
  }

  /**
   * @returns {*|undefined}
   */
  pop () {
    let result = undefined
    if (!this.isEmpty()) {
      result = this.elements[this.size() - 1]
      delete this.elements[this.size() - 1]
      this.last--
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