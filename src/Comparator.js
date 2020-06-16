class Comparator {
  /**
   * @constructs Comparator
   * @param {function} [compareFunction]
   */
  constructor (compareFunction) {
    this.compare
      = typeof compareFunction === 'function'
      ? compareFunction
      : Comparator.defaultCompareFunction
  }

  /**
   * @todo: Add description.
   * @param {number|string} a
   * @param {number|string} b
   * @returns {number}
   */
  static defaultCompareFunction (a, b) {
    let result = 0
    if (a < b) {
      result = -1
    } else if (a > b) {
      result = 1
    }
    return result
  }

  /**
   * @todo: Add description.
   * @param {*} a
   * @param {*} b
   * @returns {boolean}
   */
  isEqualTo (a, b) {
    return this.compare(a, b) === 0
  }

  /**
   * @todo: Add description.
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  isLessThan(a, b) {
    return this.compare(a, b) < 0
  }

  /**
   * @todo: Add description.
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  isLessThanOrEqualTo(a, b) {
    return this.isLessThan(a, b) || this.isEqualTo(a, b)
  }

  /**
   * @todo: Add description.
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  isGreaterThan(a, b) {
    return this.compare(a, b) > 0
  }

  /**
   * @todo: Add description.
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  isGreaterThanOrEqualTo(a, b) {
    return this.isGreaterThan(a, b) || this.isEqualTo(a, b)
  }

  /**
   * @todo: Add description.
   */
  reverseCompare () {
    const originalCompareFunction = this.compare;
    this.compare = (a, b) => originalCompareFunction(b, a);
  }
}

module.exports = Comparator