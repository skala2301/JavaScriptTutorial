const products = {
    //properties: through them you may access different values from the object
    name: "socks", 
    price: 1090
}

console.log(products);              //You may print the object values like this
products.name = "cotton socks";     // you may change a product's property
console.log(products);

products.newProperty = true;        // added new property
console.log(products);
delete products.newProperty;        // delete a property
console.log(products);


const products2 = {                 //this is another object, this time this includes a function
    name: "shirt",
    ['delivery-time']: '1 day',     //bracket notation lets us create properties with names which are not supported by the other notation
    rating: {
        stars: 4.5,
        count: 87
    },
    fun: function function1(){      //here we define a method for product2
        console.log('function inside object');
    } 
}

console.log("This is the product2: ",products2);
console.log(products2.name);
console.log(products2['name']); 
console.log(products2['delivery-time']);//bracket notation may include - in de middle, in dot notation that is not possible
                                        //in bracket notation we can include operations, variables, strings or anything which 
                                        //gives a value as result
console.log(products2.rating.count);  
products2.fun();                        //we can enter a function inside an object, these functions are called methods
console.log(typeof console.log, typeof console);


//Build-in Objects
//JSON 
//Localstorage

