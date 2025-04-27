function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const result = compareFunction 
          ? compareFunction(this[i], this[j]) 
          : String(this[i]).localeCompare(String(this[j]));

        if (result > 0) {
          // обмін місцями
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

