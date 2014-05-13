// myObj constructor
function myObj () { };
 
myObj.prototype = {
    expensiveAjaxLookup: function (y, mo, d, h, mn, s) {
        // OK.  No XHR.  Just pretend it does something on the server!
        // Instead we're just going to construct a date string.  Lame, I know.
        return this.prop + new Date(y || 0, mo || 0, d || 0, h || 0, mn || 0, s || 0);
    },
 
    // a public property to prove that "this" is really "this" in our memoized methods
    prop: 'my date: '
 
}

var o = new myObj();
console.log('testing memoize');
var testMemoizeLookup = memoize(o.expensiveAjaxLookup, o);
console.log('constructed Test memoize ' + testMemoizeLookup);
// Note: 8 == September, not August in Javascript
console.log(testMemoizeLookup(2009, 8, 17));
console.log(testMemoizeLookup(2009, 8, 16));
console.log(testMemoizeLookup(2009, 9, 16));
console.log(testMemoizeLookup(2009, 8, 16));
console.log(testMemoizeLookup(2009, 8, 21, 13, 26, 17));
console.log(testMemoizeLookup(2010, 8, 21, 13, 26, 17));
console.log(testMemoizeLookup(2009, 8, 21, 13, 26, 17));
console.log(testMemoizeLookup(2010, 8, 21, 13, 26, 17));

