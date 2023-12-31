//Show amount added to cart
//Show amount on previous to add to cart
//add 1 to products to add to cart
//rest 1 to products to add to cart
//reset all info



let prodQuantity = 0;                         //store number of elements added to cart
let preOrder = 0;                             //store number of elements previous to be added

//Add all to cart and reset preOrder
function addToCart(){
    let prodQuantityElement = document.getElementById("prodQuantity");  //get <div> element which contains quantity
    let preOrderElement = document.getElementById("preOrder");          //get <div> element which contains pre order quantity
    
    prodQuantity += preOrder;                                            //get the total amount of pre-order to add to cart
    
    
    insertElement(prodQuantityElement, prodQuantity, "p");              //insert element <p> to prodQuantityElement, value = prodQuantity
    insertElement(preOrderElement, 0, "p");                             //insert element <p> to preOrderElement, value = 0

    
    preOrder = 0;                                                       //set order variable to 0

}


//add 1 to products to add to cart
function addProduct(){
    let preOrderElement = document.getElementById("preOrder");          //get <div> element which contains pre order quantity
    ++preOrder;

    insertElement(preOrderElement, preOrder, "p");                      //insert element <p> to preOrderElement, value = preOrder
}

//rest 1 to products to add to cart
function restProduct(){
    let preOrderElement = document.getElementById("preOrder");          //get <div> element which contains pre order quantity
    if(preOrder>0){
        --preOrder;
    }
    insertElement(preOrderElement, preOrder, "p");                      //insert element <p> to preOrderElement, value = preOrder
}

//reset all info
function resetCart(){
    let preOrderElement = document.getElementById("preOrder");          //get <div> element which contains pre order quantity
    let prodQuantityElement = document.getElementById("prodQuantity");  //get <div> element which contains quantity
    
    //On this section we clean data in preOrderElement and prodQuantityElement
    insertElement(preOrderElement, 0, "p");                             //insert element <p> to preOrderElement, value = 0
    insertElement(prodQuantityElement, 0, "p");                         //insert element <p> to preOrderElement, value = 0

    //clean variables
    preOrder = 0;                                                       //set preorder variable to 0
    prodQuantity = 0;                                                   //set order variable to 0
}

//function to insert elements
function insertElement(htmlElement, data, newTag){
    let elementChild = document.createElement(newTag);          //create element with specified tag
    elementChild.textContent = data.toString();                 //text is set acording to data info
    htmlElement.innerHTML = "";                                 //Clear html element inner elements
    htmlElement.appendChild(elementChild);                      //add the new element
}
