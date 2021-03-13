module.exports = function createDreamTeam(members) {

  let result = false;
 

  if (((typeof members) === "object") && (Array.isArray(members)))  {

    result = [];

    for (let elem of members) {
        if ((typeof elem) === "string") { 
          elem = elem.trim();
          result.push(elem[0].toUpperCase());
                     }
    }
  } else result = false;  
  
  if (result) result = result.sort().join("");

  return result;

};

