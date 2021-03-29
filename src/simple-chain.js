const chainMaker = {
  array : [],
     
  getLength() {
    return this.array.length;
  },

  addLink(value) {
    this.array.push(`( ${value} )`);
    return this;   
  },

  removeLink(position) {
    if ((typeof position === "number") && (position % 1 === 0)) {
      if (((position - 1) < this.getLength()) && ((position - 1) >= 0)) this.array.splice(position - 1, 1); 
      else { 
        this.array.length = 0;
        throw new Error;
      }
    }
       else { 
       this.array.length = 0;
       throw new Error;
    }
    return this;
  },

  reverseChain() {
    if (this.getLength() > 0) this.array.reverse();
    return this;
  },

  finishChain() {
    let result = this.array.join("~~");
    this.array.length = 0;
   return result;
  }
};

module.exports = chainMaker;
