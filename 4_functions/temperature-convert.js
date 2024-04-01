let inputSelection = document.querySelector('#input-temp-units');
inputSelection.value = 'c';
let outputSelection = document.querySelector('#output-temp-units');
outputSelection.value = 'f';

let inputText = document.querySelector('input');
let btnConvert = document.querySelector('#btn-convert');
let outputLabel = document.querySelector('#output-temp');


let inputTemp = 0;

inputSelection.addEventListener("change", (event) => {
    outputSelection.value = event.target.value == 'c' ? 'f' : 'c';
});

outputSelection.addEventListener("change", (event) => {
    inputSelection.value = event.target.value == 'c' ? 'f' : 'c';
});

inputText.addEventListener("input", (event) => {
    inputValue = event.target.value.replace(/[^0-9.]/g, '');
    let dotIndex = inputValue.indexOf(".");
    let integerPart = dotIndex >= 0 ? inputValue.slice(0, dotIndex) : inputValue;
    let decimalPart = '';
    let completeInput = '';
    if(dotIndex >= 0){
        decimalPart = inputValue.slice(dotIndex + 1);
        decimalPart = decimalPart.replace(/\./g, '');
        completeInput = dotIndex == 0 ?
        `0\.${decimalPart}`
        :
        `${integerPart}\.${decimalPart}`
        
    }else completeInput = integerPart;
    event.target.value = completeInput;
    inputTemp = parseFloat(completeInput);
});


btnConvert.addEventListener('click', ()=>{
    let result = inputSelection.value == 'c' ? (inputTemp*9/5) + 32 : (inputTemp - 32)*5/9;
    outputLabel.innerHTML=`${result} ${outputSelection.value}`;
});


