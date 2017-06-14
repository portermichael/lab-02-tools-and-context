'use strict';

const fp = require('./lib/fp.js');

let upperCase = (str) => String.prototype.toUpperCase.call(str);

const main = module.exports = () => {
  let tmp = process.argv[2];
  console.log(process.argv, tmp);
  let result = fp.map(tmp, upperCase).join('');
  console.log(result);
  return result;
};

main();
