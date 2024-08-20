module.exports = function reverse (n) {
  reverseNumber =  parseInt(Math.abs(n).toString().split('').reverse().join(''), 10);
  return n<0? -reverseNumber : reverseNumber;
}
