const inputNameText = document.querySelector('#input-name');
const saveNameBtn = document.querySelector('#set-prod-name');
const loadProductBtn = document.querySelector('#get-prod-name');
const loadProductSpan = document.querySelector('#loaded-product');


//JSON
const products2 = {                 //this is another object, this time this includes a function
    name: "shirt",
    ['delivery-time']: '1 day',     //bracket notation lets us create properties with names which are not supported by the other notation
    rating: {
        stars: 4.5,
        count: 87
    },
    fun: function function1(){      //here we define a method for product2
        console.log('function inside object');
    },
    set: function(product){      //here we define a method for product2
        this.name = product.name;
        console.log(JSON.stringify(product));
    },
}




myJSONResult = JSON.stringify(products2) //convert a javascript object to json
console.log(myJSONResult);
console.log(typeof myJSONResult);
myJSONDataRestored = JSON.parse(myJSONResult);//convert a json object to javascript object
console.log(myJSONDataRestored);


//localStorage
// used to sabe values on the web local storage
saveNameBtn.addEventListener('click', ()=>{//this function saves data into localStorage
    products2.name = inputNameText.value;
    localStorage.setItem("products2",JSON.stringify(products2));
});

loadProductBtn.addEventListener('click', ()=>{//this loads the data stored in localStorage
    products2.set(JSON.parse(localStorage.getItem("products2")));
    loadProductSpan.innerHTML = products2.name;
});












