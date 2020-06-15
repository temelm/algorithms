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
   * Returns the number of elements in the queue.
   * @returns {number}
   */
  size () {
    return this.last - this.first
  }

  /**
   * Checks whether the queue is empty.
   * @returns {boolean}
   */
  isEmpty () {
    return this.size() === 0
  }

  /**
   * Checks whether the queue is full.
   * @returns {boolean}
   */
  isFull () {
    return this.size() === this.maxSize
  }

  /**
   * Returns the first element in the queue without removing it. Returns undefined if the queue is empty.
   * @returns {*|undefined}
   */
  peek () {
    return this.isEmpty() ? undefined : this.elements[this.first]
  }

  /**
   * Adds the specified element to the end of the queue and returns true. Returns false if the addition fails.
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
   * Removes and returns the first element in the queue. Returns undefined if the queue is empty.
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
   * Changes the size limit of the queue and returns true. Returns false if the change fails.
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

module.exports = Queue