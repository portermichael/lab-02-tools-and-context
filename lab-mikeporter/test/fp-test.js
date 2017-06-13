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

describe ('testing fp file', () => {
  describe ('testing fp.map', () => {
    it ('expect to return array with each value increased by 2', () => {
      expect(fp.map(arr, add)).toEqual([3, 4, 5, 6]);
    });
    it ('expect to separate the sting into individual indices and concat with 2', () => {
      expect(fp.map('str', add)).toEqual(['s2', 't2', 'r2']);
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

  describe ('testing fp.reduce', () => {
    it ('expect to total sum of all numbers', () => {
      expect(fp.reduce(arr, [addEm])).toEqual(10);
    });
    it ('expect to sum numbers of array less than 2', () => {
      expect(fp.reduce(arr, [multiplyEm])).toEqual(24);
    });
  });

  describe ('testing fp.concat', () => {
    it ('expect to combine the arrays arr and arr2 in that order', () => {
      expect(fp.concat(arr, arr2)()).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
    // it ('expect to sum numbers of array less than 2', () => {
    //   expect(fp.reduce(arr, [multiplyEm])).toEqual(24);
    // });
  });
  describe ('testing fp.splice', () => {
    it ('expect to remove index 2', () => {
      let test = arr;
      expect(fp.splice(test, 0, 3, 'potato')).toEqual([1, 2, 3]);
      expect(test).toEqual(['potato', 4]);
    });
    // it ('expect to sum numbers of array less than 2', () => {
    //   expect(fp.reduce(arr, [multiplyEm])).toEqual(24);
    // });
  });
});
