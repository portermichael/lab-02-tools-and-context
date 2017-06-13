'use strict';

const expect = require('expect');
const fp = require('../lib/fp.js');

let arr = [1, 2, 3, 4];
let multiply = (n) => n + 2;
let lessThan = (m) => m > 2 == 0;
let isNumber = (o) => typeof o == 'number';

describe ('testing fp file', () => {
  describe ('testing fp.map', () => {
    it ('expect to return array with each value increased by 2', () => {
      expect(fp.map(arr, multiply)).toEqual([3, 4, 5, 6]);
    });
    it ('expect to separate the sting into individual indices and concat with 2', () => {
      expect(fp.map('str', multiply)).toEqual(['s2', 't2', 'r2']);
    });
  });

  describe ('testing fp.filter', () => {
    it ('expect to return values in array less than 2', () => {
      expect(fp.filter(arr, [lessThan])).toEqual([1, 2]);
    });
    it ('expect to return only numbers', () => {
      expect(fp.filter(arr, [isNumber])).toEqual(arr);
    });
  });
});
