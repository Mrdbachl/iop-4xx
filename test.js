"use strict";

function getAverage(a,b,c){
	
	//var average = (a - b -c) / 3;
	// removed definition of average variable to fail in strict mode.
	average = (a - b - c) / 3;
	console.log(average);
	return average;
	
}
	
var myResult = getAverage(20,10,7);	
console.log("the average is " + myResult);
//added delete variable to show failure in strict mode.
delete myResult;

function logResult(){
	
	console.log("the average is " + myResult + " inside the function");
}

logResult();

var finalAvg = logResult ();

document.write(finalAvg);

