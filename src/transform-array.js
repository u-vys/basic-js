module.exports = function transform(arr) {
  let copy = [];
 
if (!(Array.isArray(arr))) throw Error ; 
else {
  for (let i = 0; i < arr.length; i++) {
    
    switch (arr[i]) {
      case '--discard-next': {
        if (i < arr.length - 1) ++i;
        break;
      }
      case '--discard-prev': {
        if ((i - 1 >= 0) && (arr[i - 2] != '--discard-next'))    copy.pop(); 
        break;
      }
      case '--double-next': {
        if (i < arr.length - 1) copy.push(arr[i + 1]);
        break;
      }
      case '--double-prev': {
        if ((i - 1 >= 0) && (arr[i - 2] != '--discard-next'))   copy.push(arr[i - 1]); 
        break;
      }
      default: {
        copy.push (arr[i]);
        break;
      }
    }    
  }
 
  return copy;
}

}

