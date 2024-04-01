let inputName = "";//inputName initial value

//function triggered when the greet button is pressed, it will show a dialog
const greet=()=>{
    const dialog = document.querySelector('dialog');//get the dialog element
    const innerParagraph = document.querySelector('dialog p');//get the p element child of dialog
    innerParagraph.innerHTML=`${inputName ? `Hello ${inputName}`:'Hi there'}`;//set the innerHTML of the paragraph <p>
    dialog.showModal();//show the dialog as modal, this means other elements besides the dialog are disabled
}

//this function activates when the close button inside the dialog is pressed
const closeModal=()=>{
    const dialog = document.querySelector('dialog'); //get the dialog element
    dialog.close();//close the dialog element
}

//this activates every time the input text changes
function modName(event){
    inputName=event.target.value;//the value of inputName changes
}