/* Write a Program to convert an array of objects to an object
	based on a given key */


const convert = (myArray,keyVal) => {
	let objectVal=null;
	if(Array.isArray(myArray))
	{	}
	if(myArray.length>0 && keyVal){
		objectVal={};
		for(arrVal of myArray)
		{
			objectVal[arrVal[keyVal]]=arrVal;
		}
	}
	return objectVal;
	// Write your code here
};

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;
