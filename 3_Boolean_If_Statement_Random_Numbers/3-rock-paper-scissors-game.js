/***
 *Rock paper scissors game
 *variable selection: stores the selected option one of (Rock paper scissors) 
 *cosnt array options: [Rock paper scissors]
 *result message: it will be shown to inform if user won or loses
 *score: stores total score
 *machine selection: will store the selected option from the machine
 ***************************************************************
 *Description:
 *This program will select one of (Rock paper scissors),
 *the user should press a button to select their choise and after that the choise will be compared with the machine choise
 *the program should show the result and operate the score
 ****/
/************
 * CONSTANTS*
 ***********/

const INITIAL_SCORE=3;
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const options = 
{
    [ROCK]: 0,
    [PAPER]: 1,
    [SCISSORS]: 2
};

/***********************************************************
 * THESE ARE THE RULES WHICH DEFINES WHO WINS AND WHO LOSES*
 * ********************************************************/
const rules =
{
    [ROCK]: {
        beats: 
        {
            [SCISSORS]: options[SCISSORS]
        },
        losesTo:
        {
            [PAPER]: options[PAPER]
        }
    },
    [SCISSORS]: {
        beats: 
        {
            [PAPER]: options[PAPER]
        },
        losesTo:
        {
            [ROCK]: options[ROCK]
        }
    },
    [PAPER]: {
        beats: 
        {
            [ROCK]: options[ROCK]
        },
        losesTo:
        {
            [SCISSORS]: options[SCISSORS]
        }
    }
}

let selection = {[ROCK]: options[ROCK]};            //default is rock
let resultMess = "No Message";                      //initialize result message
let score = INITIAL_SCORE;                          //initialize score
let machSelection = genMachineSelect();     




showResults();//show initial state


//random generator for machile choise
function genMachineSelect(){
    let totalOptions = Object.keys(options).length;
    let randomOption = Math.round((Math.random()*100*totalOptions)/(totalOptions*100));
    
    const foundKey = Object.keys(options).find(key => options[key] === randomOption);
    return {[foundKey]: options[foundKey]};
}

//function which returns selected option from user
function setSelection(mySelection){
    machSelection = genMachineSelect();
    console.log(machSelection);
    if(mySelection in options){
        selection={[mySelection]: options[mySelection]};
    }

    compareSelection(selection,machSelection);
    showResults();
    

}


//Fuction to compare selected option
function compareSelection(selection, machSelection){
    //rock beats scissors
    //scissors beats paper
    //paper beats rock
    const LOSER = rules[Object.keys(machSelection)].beats;
    const WINNER = rules[Object.keys(machSelection)].losesTo;
    let userSelect = Object.keys(selection);
    

    if(userSelect in LOSER){
        resultMess="You Lose mother Fucker";
        restFromScore();
    }else if(userSelect in WINNER){
        resultMess="Ok, you win";
        addToScore();
    }else if(userSelect in options){
        resultMess="Draw bitches!!!!";
    }
}

//function which adds points to score
function addToScore(){
    ++score;
}

//function which rest points from score
function restFromScore(){
    --score;
}

//This function shows the results
function showResults(){
    let resultText = document.getElementById("resultText");
    let resultVar = document.getElementById("result");
    resultVar.innerText = score;
    resultText.innerText = resultMess;
}

