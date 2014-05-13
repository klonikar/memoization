    function fibonacci(n, cache) {
        if(n == 0 || n == 1)
            return n;
        else
           return cache(n-1, cache) + cache(n-2, cache);
    }

    function callAndPrintFib(s, spanElementId) {
	var element = document.getElementById(spanElementId);
	var startDate = new Date();
	element.innerHTML = "Answer: ";
	var fibMemoizeLookup = memoize(fibonacci, null);
	element.innerHTML += fibMemoizeLookup(s, fibMemoizeLookup);
	var endDate = new Date();
	element.innerHTML += ", took " + (endDate - startDate) + " ms.";
    }

    function fibStraight (s) {
        if(s == 0 || s == 1)
            return s;
        else
            return fibStraight(s-1) + fibStraight(s-2);
    }

    function callAndPrintFibStraight(s, spanElementId) {
	var element = document.getElementById(spanElementId);
	var startDate = new Date();
	element.innerHTML = "Answer: ";
	element.innerHTML += fibStraight(s);
	var endDate = new Date();
	element.innerHTML += ", took " + (endDate - startDate) + " ms.";
    }

