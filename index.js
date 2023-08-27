/*using onclick instead of add event listener, as we can call a function with many
buttons with parameters instead of having to add more and more event listeners. */

let colorOne = document.getElementById('color-a');
let colorTwo = document.getElementById('color-b');

let currentDirection = 'to bottom';
let outputCode = document.getElementById('code');



function setDirection(value, _this){/*remember that "this" represents the current element calling the function */
    let buttons = document.querySelectorAll('.buttons button');
    //select all with this classname
    for(let i of buttons) {
        i.classList.remove('active')
        //to make sure  able to select one as active
    }
    _this.classList.add('active')//adds active class to element
    currentDirection = value;//set the value of the gradient
}

function generateCode(){
    //can get value for both as input = textarea
    outputCode.value = `background-image: linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`
    document.querySelector('body').style. 
    backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`
}

function copyText() {
    outputCode.select();//when selecting  the text in text area
    document.execCommand('copy')
    alert('Gradient Copied')
}

//functions are called via onclick 
