'use strict';

// create stand alone map, filter, reduce, concat, and splice using call, bind, and apply
// the standlone functions should have the signature (array, ...args) => array
const fp = module.exports = {};

fp.map = (list, args) => Array.prototype.map.call(list, args);

fp.filter = (list, arrArgs) => Array.prototype.filter.apply(list, arrArgs);

fp.reduce = (list, arrArgs) => Array.prototype.reduce.apply(list, arrArgs);

fp.concat = (list, arg) => Array.prototype.concat.bind(list, arg);

fp.splice = (list, start, end, args) => Array.prototype.splice.call(list, start, end, args);
