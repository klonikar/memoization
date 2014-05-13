// memoize: a general-purpose function to enable a function to use memoization
// Based on: http://unscriptable.com/2009/05/01/a-better-javascript-memoizer/#more-272
// Changed to handle recursive functions
//   func: the function to be memoized
//   context: the context for the memoized function to execute within
//   Note: the function must use explicit, primitive parameters (or objects
//     that generate unique strings in a toString() method)
// Note on cache: It is a map of either function return values for last parameters or closures for other parameters of the function. Check the logs carefully.
// Effectively, it is an n-dimensional cache, n being the number of arguments to the function.
function memoize (func, context) {
    function memoizeArg (argPos) {
        var cache = {};
        return function memoizeArgCacheBuilder() {
            if (argPos == 0) {
                if (!(arguments[argPos] in cache)) {
                    //console.log(' calling function for ' + argPos + ', ' + arguments[argPos]);
                    cache[arguments[argPos]] = func.apply(context, arguments);
                }
		else {
			//console.log(' cache hit for ' + argPos + ', ' + arguments[argPos]);
		}
		//console.log('cache: ' + cache[arguments[argPos]]);
                return cache[arguments[argPos]];
            }
            else {
                if (!(arguments[argPos] in cache)) {
                    //console.log(' calling function memoizeArg for ' + argPos + ', ' + arguments[argPos]);
                    cache[arguments[argPos]] = memoizeArg(argPos - 1);
                }
		else {
			//console.log(' cache hit for memoizeArg for ' + argPos + ', ' + arguments[argPos]);
		}
		var cachedVal = cache[arguments[argPos]].apply(this, arguments);
		//console.log('cached Value: ' + cachedVal);
                return cachedVal;
            }
        }
    }
    // JScript doesn't grok the arity property, but uses length instead
    var arity = func.arity || func.length;
    return memoizeArg(arity - 1);
}
