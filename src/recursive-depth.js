module.exports = class DepthCalculator {
  
  calculateDepth(arr) {
    let result = 1;

    if (arr.some(elem => Array.isArray(elem))) {
      let newArr = arr.reduce((acc, cur) => acc.concat(cur), []);
      return result + this.calculateDepth(newArr);      
    }

    return result;
     
    

}

}
