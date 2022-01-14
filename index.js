class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
      this.items.push(item);
      this.items.sort((a, b) => { return a - b });
      this.length = this.items.length;
  }

  get(pos) {
    if(pos < this.items.length) { return this.items[pos]; }
    if(pos > this.items.length) { throw new Error('OutOfBounds'); }
  }

  max() {
    if(this.items.length != 0) { return Math.max(this.items); }
    else { throw new Error('EmptySortedList'); }
  }

  min() {
    if(this.items.length != 0) { return Math.min(this.items); }
    else { throw new Error('EmptySortedList'); }
  }

  sum() {
    let sum = 0;
    for (let i = this.items.length; i--;) { sum += this.items[i]; }
    return sum;
  }

  avg() { 
    if(!this.items || this.items.length == 0) { throw new Error('EmptySortedList')}
    else { this.sum() / this.items.length; }
  }
}

module.exports = SortedList;
