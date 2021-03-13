module.exports = function getSeason(date) {

  const seasons = ["winter", "winter", "spring", "spring", "spring", "summer", "summer", "summer", "fall", "fall", "fall", "winter",]
  
  let result = 'Unable to determine the time of year!';
  
  if (!date)  result = 'Unable to determine the time of year!';
    else if ((Object.prototype.toString.call(date) != '[object Date]')) throw Error ('Unable to determine the time of year!');
        else  result = seasons[date.getMonth()]; 
   
 return result;
 
};
