'use strict';

const expect = require('expect');
const fp = require('../lib/fp.js');

let arr = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let add = (n) => n + 2;
let lessThan = (m) => m > 2 == 0;
let isNumber = (o) => typeof o == 'number';
let addEm = (a, b) => a + b;
let multiplyEm = (acc, cum) => acc * cum;
let potato = 'potato';

describe ('testing fp file', () => {
  describe ('testing fp.map', () => {
    it ('return array with each value increased by 2', () => {
      expect(fp.map(arr, add)).toEqual([3, 4, 5, 6]);
    });
    it ('separate the string into individual indices and concat with 2', () => {
      expect(fp.map('str', add)).toEqual(['s2', 't2', 'r2']);
    });
  });

  describe ('testing fp.filter', () => {
    it ('return values in array less than 2', () => {
      expect(fp.filter(arr, [lessThan])).toEqual([1, 2]);
    });
    it ('return only numbers', () => {
      expect(fp.filter(arr, [isNumber])).toEqual(arr);
    });
  });

  describe ('testing fp.reduce', () => {
    it ('total sum of all numbers', () => {
      expect(fp.reduce(arr, [addEm])).toEqual(10);
    });
    it ('multiply numbers of array', () => {
      expect(fp.reduce(arr, [multiplyEm])).toEqual(24);
    });
  });

  describe ('testing fp.concat', () => {
    it ('combine the arrays arr and arr2 in that order', () => {
      expect(fp.concat(arr, arr2)()).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
    it ('combine a string and an array of numbers', () => {
      expect(fp.concat(potato, arr)()).toEqual([potato, 1,2,3,4]);
    });
  });

  describe ('testing fp.splice', () => {
    it ('expect to remove 3 elements starting at index 0', () => {
      expect(fp.splice(arr, 0, 3, potato)).toEqual([1, 2, 3]);
      expect(arr).toEqual([potato, 4]);
    });
    it ('expect to remove all elements greater than index 1', () => {
      let len = arr2.length-2;
      expect(fp.splice(arr2, 2, len, potato)).toEqual([7, 8]);
      expect(arr2).toEqual([5, 6, potato]);
    });
  });
});
