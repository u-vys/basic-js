const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
 
if ((typeof sampleActivity === "string") && (+sampleActivity < 15) &&  (+sampleActivity > 0))  { 
  return Math.ceil(Math.log (MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
} else return false;
  
};
