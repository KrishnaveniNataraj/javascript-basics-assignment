/* Write a Program to Flatten a given n-dimensional array */

const flatten = (nos) => {
	var flattenArr=[];
	var finalArr=function flatten(nos){
		var nosLen=nos.length;
		for(var i=0;i<nosLen;i++){
			Array.isArray(nos[i]) ? flatten(nos[i]) : flattenArr.push(nos[i]);
		}
		return flattenArr;
	}

	if(Array.isArray(nos))
	{
		return finalArr(nos);
	}
	else{
		return null;
		
	}
		// Write your code here
};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
