'use strict';


const index = require('../index.js');
const expect = require('expect');

describe ('testing index CLI', () => {
  it ('expect to upppercase paper to PAPER', () => {
    process.argv[2] = 'paper';
    expect(index()).toEqual(['PAPER']);
  });
});
