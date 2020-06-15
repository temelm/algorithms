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
   * Returns the number of elements in the stack.
   * @returns {number}
   */
  size () {
    return this.last
  }

  /**
   * Checks whether the stack is empty.
   * @returns {boolean}
   */
  isEmpty () {
    return this.size() === 0
  }

  /**
   * Checks whether the stack is full.
   * @returns {boolean}
   */
  isFull () {
    return this.size() === this.maxSize
  }

  /**
   * Returns the last element in the stack without removing it.
   * Returns undefined if the stack is empty.
   * @returns {*|undefined}
   */
  peek () {
    return this.isEmpty() ? undefined : this.elements[this.size() - 1]
  }

  /**
   * Adds the specified element to the end of the stack and returns true.
   * Returns false if the addition fails.
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
   * Removes and returns the last element in the stack.
   * Returns undefined if the stack is empty.
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
   * Changes the size limit of the stack and returns true.
   * Returns false if the change fails.
   * @param {number} maxSize
   * @returns {boolean}
   */
  setMaxSize (maxSize) {
    let result = false
    if (maxSize === -1 || maxSize >= this.size()) {
      result = true
      this.maxSize = maxSize
    }
    return result
  }
}

module.exports = Stack