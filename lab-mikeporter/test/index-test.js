'use strict';

const expect = require('expect');
const index = require('../index.js');
console.log('hahahahahahahah');
describe ('testing index CLI', () => {
  it ('expect to upppercase paper to PAPER', () => {
    console.log('first', process.argv);
    process.argv[2] = 'paper';
    console.log('second', process.argv);
      expect(index()).toEqual(['PAPER']);
  });
});
