
// 11-Jan IAP Java Workshop
//=======================================================================
//Arrays
let arr = [1,2,3,4,5];
arr.splice(1, 2); //removes item
console.log(arr);

arr.splice(1, 0, 7); //adds item
console.log(arr);


//Functions
function getEven(x){
    if(x %2 == 0){
        return true;
    }
    return false;
}
console.log(getEven);


function timesTwo(x){
    return x*2;
}
console.log(timesTwo);


//=======================================================================
// Sorting
/*
product= [[a: book, b: 12], [a:pen, b: 3]];
product.sort((a, b) => b.price - a.price);
*/

let test = [["pen", 2], [2, 6], [9, 0]];

test.sort((a, b) => b[1] - a[1]);
console.log(test);


//=======================================================================
// swtich case (similar to loops)
let item = "laptop";

let resultCheck;

switch(item){
	case "pen":
	result = 1;
	break;

	case "pencil":
	result = 5;
	break;

	default:
	result = 0;
	break
}
console.log(item)



//=======================================================================
// CallBack function
const(printResult) = function(x) {
	console.log(x)
}

const(printResultUsingLoop) = function(x){
	console.log("SecondCallBack")
	for (let i = 0; i <10; i++) {
 	console.log(x);
 	}
}

const(addNumbers) = function(a,b,CallBack,SecondCallBack){
	let c = a+b;
	CallBack(c);
	c = c+c;
	SecondCallBack(c);
}

addNumbers(2,5,printResult,printResultUsingLoop);


//=======================================================================
//Promise function
//**to wait while making a request to API



const test2 = async function(){
	try

}



//=======================================================================
//Syntax

// == : checks only values are equal
// === : checks if values and type are equal

let x = 5;

console.log(x == 5);
console.log(x==="5");




//=======================================================================
// reduce()
// promise()