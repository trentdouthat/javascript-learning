let ownership = 'Rexha"s'; 
let ownership2 = "Rexha's"; 
let ownership3 = 'Rexha\'s'; 
let ownership4 = "Rexha\"s"; 
console.log("double quote inside single quotes is " + ownership);
console.log("single quote inside double quotes is " + ownership2);
console.log("escaped single quote inside single quotes is " + ownership3);
console.log("escaped double quote inside double quotes is " + ownership4);

let firstName="Kevin";
let lastName="Patrick";
console.log("Name: "+firstName+" "+lastName+"\nEmail:"+firstName+"_"+lastName+"@abc.com");

let firstName1="Bob";
let lastName1="Roberts";
console.log(`Name: ${firstName1} ${lastName1}
Email:${firstName1}_${lastName1}@abc.com`);

let custName; //here value and the data type are undefined
console.log("custName " + custName);

let custName1 = "John"; //here value is John and the data type is String
custName1 = undefined; //here value and the data type are undefined
console.log("custName1 " + custName1);

let item = null;
// variable item is intended to be assigned with object later. Hence null is assigned during variable declaration.

console.log(item==null);

const bigintvar = 67423478234689887894747472389477823647n;
console.log("bigintvar " + bigintvar);
const bigintvar2 = BigInt("67423478234689887894747472389477823647");
console.log("bigintvar2 " + bigintvar2);
const bigintFromNumber = BigInt(10); // same as 10n
console.log("bigintFromNumber " + bigintFromNumber);

console.log(3n + 2n); // 5
console.log(7n / 2n); // 3
//alert(8n + 2); // Error: Cannot mix BigInt and other types
//datatypes.js:40 Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
//    at datatypes.js:40:10
//console.log(8n + 2); // Error: Cannot mix BigInt and other types



let bigintvar3 = 6n;
let numvar = 3;
// number to bigint
console.log(bigintvar3 + BigInt(numvar)); // 9
// bigint to number
console.log(Number(bigintvar3) + numvar); // 9

console.log( 8n > 2n ); // true
console.log( 4n > 2 ); // true
console.log( 5 == 5n ); // true
console.log( 5 === 5n ); // false

//When inside if or other boolean operations, BigInts behave like numbers.
//Example:
if (0n) {
    // never executes
    console.log(true);
} else {
    console.log(false);
}

// 1. returns 1n since 1n is considered truthy
console.log( 1n || 2 ); // OR

// 2. returns 2 since 0n is considered falsy
console.log( 0n || 2 ); // OR

// 3. returns 2 since 1n is true
console.log( 1n && 2 ); // AND
// 4. returns 0n since it's false
console.log( 0n && 2 ); // AND

// empid is a symbol with the description "empno"
let empid = Symbol("empno");
console.log(empid);
console.log(empid.toString()); // Symbol(empno), now it works
console.log(empid.description); // empno

// Even if various symbols are created with the same description, they are different values. 
// Thus, symbols ensures uniqueness. So the description provided can be considered as just a label.

let empid1 = Symbol("empno");
let empid2 = Symbol("empno");
console.log(empid1== empid2); // false

// read from the global registry
let empid3 = Symbol.for("empno"); // if the symbol did not exist, it is created
// read it again (maybe from another part of the code)
let empidAgain= Symbol.for("empid3");
// the same symbol
console.log( empid3 === empidAgain ); // false

// example from Gemini for Symbol
let user = {
    id: 101,
    name: "Trent"
};
const myTrackingId = Symbol("id");
user[myTrackingId] = "ABC-123"; 

console.log(user.id);            // 101 (The original ID is safe!)
console.log(user[myTrackingId]); // "ABC-123" (Your hidden data)

for (let key in user) {
    console.log(key); // Prints "id", "name" -- but SKIPS your symbol
}

// create an object and list its keys
let mySmartPhone = { 
    name: "iPhone", 
    brand: "Apple", 
    platform: "iOS", 
    price: 50000 
}; 

for (let key in mySmartPhone) {
    console.log(key); 
}

// creating Arrays instead of an Object
let dummyArr = new Array();
//OR
let dummyArr2 = [];

digits = [1,2,3,"four"];

let empName = "Philip Jackson", 
                empAge = 26, 
                isConfirmed = 0, 
                bonous = undefined, 
                designation = "System Engineer", 
                promotions = null;

console.log("<b> Primitives and Non-Primitive Data types </b> <br /><br>");
console.log("Employee Details: <br/>");
console.log("<br/>Employee Name:" + empName);

let firstName3 = "Trent";
let lastName3 = "Douthat";

// The Template Literal Way
console.log(`Employee Details: ${firstName3} ${lastName3}`);