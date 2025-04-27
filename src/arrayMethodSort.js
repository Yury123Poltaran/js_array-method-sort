function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const a = this[i];
        const b = this[j];

        let result;
        if (compareFunction) {
          result = compareFunction(a, b);
        } else {
          result = String(a).localeCompare(String(b), undefined, { sensitivity: 'base' });
        }

        if (result > 0) {
          const temp = this[i];
          this[i] = this[j];
          this[j] = temp;
        }
      }
    }
    return this;
  };
}

module.exports = applyCustomSort;



