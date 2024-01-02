/**********************************************
 * The following values will be equal to false:
 *   {
 *       false, 
 *       0, 
 *       ‘’, 
 *       NaN, 
 *       undefined, 
 *       Null
 *   }
 *
 * 
 * 
 ****************************** 
 * Special Operators:      ****
*----Ternary operator ‘?’  ****
*----Guard operator ‘&&’   ****
*----Default operator ‘||’ ****
*******************************
 *****************************/


let myBoolean = true;

//use of the ternary operator
const result = myBoolean ? "Truthy":"Falsy";
console.log(result);

let number = 25;

//use of the guard operator
const result2 = (number-25) && 50;  //if the operation (number-25) is false, the result of (number - 25) will be stored else 50 will be stored
console.log(result2);

//use of the default operator
const result3 = (number-25) || 50;  //if the operation (number-25) is not false, the result of (number - 25) will be stored else 50 will be stored
console.log(result3);