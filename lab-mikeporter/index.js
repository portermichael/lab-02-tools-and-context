'use strict';

const fp = require('./lib/fp.js');

// make a CLI index.js that will use your new map function to UpperCase all command line args and print them to the screen

let upperCase = (str) => String.prototype.toUpperCase.call(str);

const main = module.exports = () => {
  let result = fp.map(process.argv[2], upperCase).join('');
  console.log(result);
  return result;
};

main();
