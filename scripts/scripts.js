/****************** YOUR NAME: Cintya Lara

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE
var modelName = "XYZ";      //I started with a default value, in this case "XYZ"
var duration = 0;            //I started with a default value, in this case 0, because I am not booking anything yet.






/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE
function recalculate() {                                            //I created a function called recalculate()
    var costLabel = document.getElementById("calculated-cost");     //I created a variable to link to the calculated-cost element
    if (modelName== "XYZ") {                                        //I used an if statement to check the value of modelName. If modelName is   "XYZ" then it will multiply duration by 100. Else if modelName is "CPRG" then it will multiply duration by 213. 
        costLabel.innerHTML = duration * 100;
    } else if (modelName == "CPRG"){  
        costLabel.innerHTML = duration * 213;
    }
}






/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE

var modelButton = document.getElementById("model-button");    //variable to link to the model-button element

function changeModel() {                                        //Function called changeModel to change the value of modelName and the innerHTML of the model-text element
    var modelText = document.getElementById("model-text");      //Variable to link to the model-text element
    if (modelName == "XYZ") {                                   //If modelName is "XYZ" then it will change the value of modelName to "CPRG" and the innerHTML of the model-text element to "Model CPRG" when the button is clicked. Else if modelName is "CPRG" then it will change the value of modelName to "XYZ" and the innerHTML of the model-text element to "Model XYZ" when the button is clicked.
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    } else if (modelName == "CPRG") {
        modelName = "XYZ"; 
        modelText.innerHTML = "Model XYZ";
    }
    recalculate();                                              //At thwe end of the function, I called the recalculate() function to recalculate the total cost depending on the new value of modelName.
}
modelButton.addEventListener("click", changeModel);              //Finally, addEventListener was attached to ModelButton to run the changeModel() function when the button is clicked.



/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE

var durationButton = document.getElementById("duration-button");                //Variable to link to the duration-button element in the HTML

function changeDuration() {                                                     //Function called changeDuration                            
    var durationText = document.getElementById("duration-text");                //Variable to link to the duration-text element in the HTML
    duration = prompt("How many days would you like to book the robot for?");     //Prompt to ask the user how many days they would like to book the robot for.
    durationText.innerHTML = duration;                                          //Change the innerHTML of the duration-text element to the new value of duration
    recalculate();                                                              //At the end of the function, I called the recalculate() function to recalculate the total cost depending on the new value of duration.
}

durationButton.addEventListener("click", changeDuration);                       //Finally, addEventListener was attached to durationButton to run the changeDuration() function when the button is clicked.



