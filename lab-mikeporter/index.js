'use strict';

const fp = require('./lib/fp.js');

let upperCase = (str) => String.prototype.toUpperCase.call(str);

const main = module.exports = () => {
  let arr = fp.splice(process.argv, 2, process.argv.length - 2);
  let result = fp.map(arr, upperCase);
  console.log(result);
  return result;
};

main();
