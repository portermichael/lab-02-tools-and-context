# Context Lab


Functions are created under fp for map, filter, reduce, concat and splice. They function just like the standard counterparts for arrays, but we can use these for array like objects. .call, .apply and .bind were used to control the context of the Array.prototype and apply the array methods. .call takes the array context and applies the function and comma separated arguments. .apply takes the array context and applies it to the function with an array of arguments. .bind takes the array context and applies it to the function, but must be invoked like a function because it returns a function. I sometimes used non optimal .call and .bind to get a better understanding of how they worked. They function fine in the end and it was a good learning experience.

We can use these slightly different tools to control the context optimally. Two different tests were performed with each function.

In the index.js I splice the arguments starting at 2 and continuing until the end of the array. That way I can handle any number of arguments presented at the command line. splice returns an array, so call map on that array and uppercase it. Now we have an array of arguments that we return. A single test was performed to test this function.
