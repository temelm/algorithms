class SinglyLinkedListNode {
  /**
   * @constructs SinglyLinkedListNode
   * @param {*} data
   * @param {*} [next]
   */
  constructor (data, next = null) {
    this.data = data
    this.next = next
  }
}

class SinglyLinkedList {
  /**
   * @constructs SinglyLinkedList
   */
  constructor () {
    this.head = null
    this.length = 0
  }

  /**
   * Returns the node at the specified index without removing it.
   * Returns null if the specified index does not store a node.
   * @param {number} index
   * @returns {SinglyLinkedListNode|null}
   */
  getNodeAtIndex (index) {
    let result = null
    if (index > -1 && this.length > 0) {
      let current = this.head
      let i = 0
      while (i < index && current) {
        current = current.next
        i++
      }
      result = current
    }
    return result
  }

  /**
   * Returns the last node without removing it.
   * @returns {SinglyLinkedListNode|null}
   */
  getLastNode () {
    return this.getNodeAtIndex(this.length - 1)
  }

  /**
   * Adds a node which stores the specified data.
   * @param {*} data
   * @param {*} [next]
   */
  addNode (data, next) {
    const node = new SinglyLinkedListNode(data, next)
    if (!this.head) {
      this.head = node
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length++
  }

  /**
   * Removes the node at the specified index and returns its data.
   * Returns null if the specified index does not store a node.
   * @param {number} index
   * @returns {SinglyLinkedListNode|null}
   */
  removeNodeAtIndex (index) {
    let result = null
    if (index > -1 && index < this.length) {
      if (index === 0) {
        result = this.head.data
        this.head = this.head.next
      } else {
        let previous = null
        let current = this.head
        let i = 0
        while (current && i < index) {
          previous = current
          current = current.next
          i++
        }
        if (current) {
          result = current.data
          previous.next = current.next
        }
      }
      this.length--
    }
    return result
  }

  /**
   * Removes all nodes.
   */
  removeAllNodes () {
    this.head = null
    this.length = 0
  }
}

module.exports = {
  SinglyLinkedListNode,
  SinglyLinkedList
}