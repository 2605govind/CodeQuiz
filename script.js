
const quizDataSet = [
    {
        title: `What will the following code output to the console?`,
        options: ["12", "57", "10", "Error"],
        answer: "57",
        snippet: `console.log(2 + 3 + "7");`
    },
    {
        title: `What does the following JavaScript code do?`,
        options: ["Prints 'true'", "Prints 'false'", "Throws an error", "None of the above"],
        answer: "Prints 'true'",
        snippet: `var a = [1, 2, 3];<br/>console.log(a instanceof Array);`
    },
    {
        title: `Which of the following methods removes the last element from an array and returns that element?`,
        options: [".pop()", ".shift()", ".splice()", ".last()"],
        answer: ".pop()",
        snippet: ``
    },
    {
        title: `What will be the output of the following code?`,
        options: ["10", "Yes", "No", "Undefined"],
        answer: "Yes",
        snippet: `var x = 10;<br/>var y = (x === 10) ? "Yes" : "No";<br/>console.log(y);`
    },
    {
        title: `What will the following code output to the console?`,
        options: ["3, 4, 5", "7", "Error", "345"],
        answer: "7",
        snippet: `console.log(3 + 4 + "5");`
    },
    {
        title: `Which method is used to add new elements to the end of an array and returns the new length of the array?`,
        options: [".push()", ".pop()", ".concat()", ".shift()"],
        answer: ".push()",
        snippet: ``
    },
    {
        title: `What will be logged to the console by the following code?`,
        options: ["5", "Undefined", "Error", "Throws an exception"],
        answer: "5",
        snippet: `var b = 5;<br/>console.log(b);`
    },
    {
        title: `What does the following expression evaluate to in JavaScript?`,
        options: ["true", "false", "null", "undefined"],
        answer: "true",
        snippet: ``
    },
    {
        title: `Which method is used to join all elements of an array into a string and returns the resulting string?`,
        options: [".join()", ".concat()", ".slice()", ".toString()"],
        answer: ".join()",
        snippet: ``
    },
    {
        title: `Which method is used to join all elements of an array into a string and returns the resulting string?`,
        options: [".join()", ".concat()", ".slice()", ".toString()"],
        answer: ".join()",
        snippet: ``
    },
    {
        title: `What will the following code output to the console?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "true",
        snippet: `console.log(typeof undefined === typeof null);`
    },
    {
        title: `What does the following expression evaluate to in JavaScript?`,
        options: ["75", "12", "345", "Error"],
        answer: "75",
        snippet: ``
    },
    {
        title: `Which of the following methods removes the first element from an array and returns that element?`,
        options: [".shift()", ".unshift()", ".pop()", ".splice()"],
        answer: ".shift()",
        snippet: ``
    },
    {
        title: `What is the output of the following code?`,
        options: ["0, 2", "1, 1", "1, 2", "0, 1"],
        answer: "0, 2",
        snippet: `var x = 0;<br/>console.log(x++);<br/>console.log(++x);`
    },
    {
        title: `What does the following expression evaluate to in JavaScript?`,
        options: ["true", "false", "null", "undefined"],
        answer: "true",
        snippet: ``
    },
    {
        title: `What will the following code output to the console?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "true",
        snippet: `console.log(typeof NaN === "number");`
    },
    {
        title: `What does the following JavaScript code output to the console?`,
        options: ["1", "2", "3", "Undefined"],
        answer: "1",
        snippet: `console.log(10 % 3);`
    },
    {
        title: `Which method is used to return the index of the first occurrence of a value in an array, or -1 if not found?`,
        options: [".find()", ".indexOf()", ".includes()", ".filter()"],
        answer: ".indexOf()",
        snippet: ``
    },
    {
        title: `What is the output of the following code?`,
        options: ["1undefined", "1function", "1", "undefined"],
        answer: "1undefined",
        snippet: `var x = 1;<br/>if (function f(){}) {<br/>  x += typeof f;<br/>}<br/>console.log(x);`
    },
    {
        title: `What does the following expression evaluate to in JavaScript?`,
        options: ["true", "false", "null", "undefined"],
        answer: "true",
        snippet: ``
    },
    {
        title: `What will be logged to the console by the following code?`,
        options: ["1, 2", "2, 1", "2, 2", "1, 1"],
        answer: "2, 2",
        snippet: `var x = 1;<br/>if (true) {<br/>  var x = 2;<br/>  console.log(x);<br/>}<br/>console.log(x);`
    },
    {
        title: `Which method is used to return a new array containing the specified start and end elements from an existing array?`,
        options: [".slice()", ".splice()", ".concat()", ".split()"],
        answer: ".slice()",
        snippet: ``
    },
    {
        title: `What will the following code output to the console?`,
        options: ["NaN", "Error", "0", "3"],
        answer: "NaN",
        snippet: `console.log(3 * 'abc');`
    },
    {
        title: `Which of the following methods is used to return the number of elements in an array?`,
        options: [".length()", ".size()", ".count()", ".length"],
        answer: ".length",
        snippet: ``
    },
    {
        title: `What is the output of the following code?`,
        options: ["10", "Undefined", "ReferenceError", "TypeError"],
        answer: "10",
        snippet: `var x = 10;<br/>function foo() {<br/>  console.log(x);<br/>}<br/>foo();`
    },
    {
        title: `What does the following expression evaluate to in JavaScript?`,
        options: ["true", "false", "null", "undefined"],
        answer: "true",
        snippet: ``
    },
    {
        title: `What will be logged to the console by the following code?`,
        options: ["true", "false", "null", "undefined"],
        answer: "true",
        snippet: `console.log(0 == "0");`
    },
    {
        title: `What is the output of the following code?`,
        options: ["2", "10", "Undefined", "ReferenceError"],
        answer: "2",
        snippet: `var x = 1;<br/>if (true) {<br/>  var x = 2;<br/>  console.log(x);<br/>}<br/>console.log(x);`
    },
    {
        title: `Which method is used to return a new array with all elements that pass the test implemented by the provided function?`,
        options: [".find()", ".filter()", ".indexOf()", ".map()"],
        answer: ".filter()",
        snippet: ``
    },
    {
        title: `What will the following code output to the console?`,
        options: ["TypeError", "true", "false", "null"],
        answer: "true",
        snippet: `console.log(null == undefined);`
    },
    {
        title: `What does the following JavaScript code output to the console?`,
        options: ["5", "6", "Undefined", "ReferenceError"],
        answer: "5",
        snippet: `var x = 5;<br/>console.log(x);`
    },
    {
        title: `Which method is used to add new elements to the beginning of an array and returns the new length of the array?`,
        options: [".push()", ".unshift()", ".concat()", ".shift()"],
        answer: ".unshift()",
        snippet: ``
    },
    {
        title: `What will be logged to the console by the following code?`,
        options: ["undefined", "Error", "Throws an exception", "5"],
        answer: "undefined",
        snippet: `var y;<br/>console.log(y);`
    },
    {
        title: `What does the following expression evaluate to in JavaScript?`,
        options: ["true", "false", "null", "undefined"],
        answer: "false",
        snippet: ``
    },
    {
        title: `What is the output of the following code?`,
        options: ["Error", "1", "2", "3"],
        answer: "1",
        snippet: `var x = 1;<br/>console.log(x);`
    },
    {
        title: `Which method is used to return a shallow copy of a portion of an array into a new array object selected from start to end (end not included)?`,
        options: [".slice()", ".splice()", ".concat()", ".split()"],
        answer: ".slice()",
        snippet: ``
    },
    {
        title: `What will be logged to the console by the following code?`,
        options: ["5", "0", "10", "Undefined"],
        answer: "5",
        snippet: `var x = "5";<br/>console.log(parseInt(x));`
    },
    {
        title: `What does the following expression evaluate to in JavaScript?`,
        options: ["TypeError", "ReferenceError", "true", "false"],
        answer: "false",
        snippet: ``
    },
    {
        title: `What is the output of the following code?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "true",
        snippet: `console.log(NaN === NaN);`
    },
    {
        title: `What will the following code output to the console?`,
        options: ["true", "false", "null", "undefined"],
        answer: "true",
        snippet: `console.log(true && false || true);`
    },
    {
        title: `What does the following expression evaluate to in JavaScript?`,
        options: ["false", "true", "null", "undefined"],
        answer: "false",
        snippet: ``
    },
    {
        title: `What is the output of the following code?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "false",
        snippet: `console.log(0 === -0);`
    },
    {
        title: `What will be logged to the console by the following code?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "true",
        snippet: `console.log([] == ![]);`
    },
    {
        title: `What does the following expression evaluate to in JavaScript?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "true",
        snippet: ``
    },
    {
        title: `What is the output of the following code?`,
        options: ["true", "false", "null", "undefined"],
        answer: "true",
        snippet: `console.log(3 > 2 > 1);`
    },
    {
        title: `What will the following code output to the console?`,
        options: ["3", "2", "1", "TypeError"],
        answer: "3",
        snippet: `console.log("10" - 7);`
    },
    {
        title: `What does the following expression evaluate to in JavaScript?`,
        options: ["true", "false", "null", "undefined"],
        answer: "false",
        snippet: ``
    },
    {
        title: `What is the output of the following code?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "true",
        snippet: `console.log("10" == 10);`
    },
    {
        title: `What will be logged to the console by the following code?`,
        options: ["TypeError", "true", "false", "null"],
        answer: "true",
        snippet: `console.log(null != undefined);`
    },
    {
        title: `What does the following expression evaluate to in JavaScript?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "false",
        snippet: ``
    },
    {
        title: `What is the output of the following code?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "true",
        snippet: `console.log("0" == false);`
    },
    {
        title: `What will be logged to the console by the following code?`,
        options: ["0", "1", "2", "TypeError"],
        answer: "1",
        snippet: `console.log(1 + "1");`
    },
    {
        title: `What does the following expression evaluate to in JavaScript?`,
        options: ["true", "false", "null", "undefined"],
        answer: "true",
        snippet: ``
    },
    {
        title: `What is the output of the following code?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "true",
        snippet: `console.log(0 == "0");`
    },
    {
        title: `What will be logged to the console by the following code?`,
        options: ["true", "false", "null", "undefined"],
        answer: "true",
        snippet: `console.log([] == 0);`
    },
    {
        title: `What does the following expression evaluate to in JavaScript?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "false",
        snippet: ``
    },
    {
        title: `What is the output of the following code?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "false",
        snippet: `console.log(null === undefined);`
    },
    {
        title: `What will be logged to the console by the following code?`,
        options: ["false", "true", "TypeError", "ReferenceError"],
        answer: "false",
        snippet: `console.log(NaN == NaN);`
    },
    {
        title: `What does the following expression evaluate to in JavaScript?`,
        options: ["true", "false", "null", "undefined"],
        answer: "true",
        snippet: ``
    },
    {
        title: `What is the output of the following code?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "false",
        snippet: `console.log(0 === -0);`
    },
    {
        title: `What will be logged to the console by the following code?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "true",
        snippet: `console.log([] == ![]);`
    },
    {
        title: `What does the following expression evaluate to in JavaScript?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "true",
        snippet: ``
    },
    {
        title: `What is the output of the following code?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "true",
        snippet: `console.log(3 > 2 > 1);`
    },
    {
        title: `What will the following code output to the console?`,
        options: ["3", "2", "1", "TypeError"],
        answer: "3",
        snippet: `console.log("10" - 7);`
    },
    {
        title: `What does the following expression evaluate to in JavaScript?`,
        options: ["true", "false", "null", "undefined"],
        answer: "false",
        snippet: ``
    },
    {
        title: `What is the output of the following code?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "true",
        snippet: `console.log("10" == 10);`
    },
    {
        title: `What will be logged to the console by the following code?`,
        options: ["TypeError", "true", "false", "null"],
        answer: "true",
        snippet: `console.log(null != undefined);`
    },
    {
        title: `What does the following expression evaluate to in JavaScript?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "false",
        snippet: ``
    },
    {
        title: `What is the output of the following code?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "true",
        snippet: `console.log("0" == false);`
    },
    {
        title: `What will be logged to the console by the following code?`,
        options: ["0", "1", "2", "TypeError"],
        answer: "1",
        snippet: `console.log(1 + "1");`
    },
    {
        title: `What does the following expression evaluate to in JavaScript?`,
        options: ["true", "false", "null", "undefined"],
        answer: "true",
        snippet: ``
    },
    {
        title: `What is the output of the following code?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "true",
        snippet: `console.log(0 == "0");`
    },
    {
        title: `What will be logged to the console by the following code?`,
        options: ["true", "false", "null", "undefined"],
        answer: "true",
        snippet: `console.log([] == 0);`
    },
    {
        title: `What does the following expression evaluate to in JavaScript?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "false",
        snippet: ``
    },
    {
        title: `What is the output of the following code?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "false",
        snippet: `console.log(null === undefined);`
    },
    {
        title: `What is the output of the following code?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "false",
        snippet: `console.log(null === undefined);`
    },
    {
        title: `What will be logged to the console by the following code?`,
        options: ["false", "true", "TypeError", "ReferenceError"],
        answer: "false",
        snippet: `console.log(NaN == NaN);`
    },
    {
        title: `What does the following expression evaluate to in JavaScript?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "true",
        snippet: ``
    },
    {
        title: `What is the output of the following code?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "false",
        snippet: `console.log(0 === -0);`
    },
    {
        title: `What will be logged to the console by the following code?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "true",
        snippet: `console.log([] == ![]);`
    },
    {
        title: `What does the following expression evaluate to in JavaScript?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "true",
        snippet: ``
    },
    {
        title: `What is the output of the following code?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "true",
        snippet: `console.log(3 > 2 > 1);`
    },
    {
        title: `What will the following code output to the console?`,
        options: ["3", "2", "1", "TypeError"],
        answer: "3",
        snippet: `console.log("10" - 7);`
    },
    {
        title: `What does the following expression evaluate to in JavaScript?`,
        options: ["true", "false", "null", "undefined"],
        answer: "false",
        snippet: ``
    },
    {
        title: `What is the output of the following code?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "true",
        snippet: `console.log("10" == 10);`
    },
    {
        title: `What will be logged to the console by the following code?`,
        options: ["TypeError", "true", "false", "null"],
        answer: "true",
        snippet: `console.log(null != undefined);`
    },
    {
        title: `What does the following expression evaluate to in JavaScript?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "false",
        snippet: ``
    },
    {
        title: `What is the output of the following code?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "true",
        snippet: `console.log("0" == false);`
    },
    {
        title: `What will be logged to the console by the following code?`,
        options: ["0", "1", "2", "TypeError"],
        answer: "1",
        snippet: `console.log(1 + "1");`
    },
    {
        title: `What does the following expression evaluate to in JavaScript?`,
        options: ["true", "false", "null", "undefined"],
        answer: "true",
        snippet: ``
    },
    {
        title: `What is the output of the following code?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "true",
        snippet: `console.log(0 == "0");`
    },
    {
        title: `What will be logged to the console by the following code?`,
        options: ["true", "false", "null", "undefined"],
        answer: "true",
        snippet: `console.log([] == 0);`
    },

    {
        title: `What is the output of the following code?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "false",
        snippet: `console.log(null === undefined);`
    },
    {
        title: `What will be logged to the console by the following code?`,
        options: ["false", "true", "TypeError", "ReferenceError"],
        answer: "false",
        snippet: `console.log(NaN == NaN);`
    },
    {
        title: `What does the following expression evaluate to in JavaScript?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "true",
        snippet: ``
    },
    {
        title: `What is the output of the following code?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "false",
        snippet: `console.log(0 === -0);`
    },
    {
        title: `What will be logged to the console by the following code?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "true",
        snippet: `console.log([] == ![]);`
    },

    {
        title: `What is the output of the following code?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "true",
        snippet: `console.log(3 > 2 > 1);`
    },
    {
        title: `What is the output of the following code?`,
        options: ["true", "false", "TypeError", "ReferenceError"],
        answer: "true",
        snippet: `console.log(3 > 2 > 1);`
    },
    {
        title: `What will the following code output to the console?`,
        options: ["3", "2", "1", "TypeError"],
        answer: "3",
        snippet: `console.log("10" - 7);`
    }
];


let arraysIndex = [];

const permutations = [
    [0, 1, 2, 3],
    [0, 1, 3, 2],
    [0, 2, 1, 3],
    [0, 2, 3, 1],
    [0, 3, 1, 2],
    [0, 3, 2, 1],
    [1, 0, 2, 3],
    [1, 0, 3, 2],
    [1, 2, 0, 3],
    [1, 2, 3, 0],
    [1, 3, 0, 2],
    [1, 3, 2, 0],
    [2, 0, 1, 3],
    [2, 0, 3, 1],
    [2, 1, 0, 3],
    [2, 1, 3, 0],
    [2, 3, 0, 1],
    [2, 3, 1, 0],
    [3, 0, 1, 2],
    [3, 0, 2, 1],
    [3, 1, 0, 2],
    [3, 1, 2, 0],
    [3, 2, 0, 1],
    [3, 2, 1, 0]
];

let quizePageCount = 0;
let quizData = [];
let quizCount = 1;

const form = document.querySelector(".quiz-form")

function generate2DArray() {
    // Generate an array of unique numbers from 0 to 99
    let uniqueNumbers = Array.from({ length: 100 }, (_, i) => i);
    
    // Shuffle the array using Fisher-Yates algorithm
    for (let i = uniqueNumbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [uniqueNumbers[i], uniqueNumbers[j]] = [uniqueNumbers[j], uniqueNumbers[i]];
    }
    
    // Create a 2D array with 20 rows and 5 columns
    let result = [];
    for (let i = 0; i < 20; i++) {
        result.push(uniqueNumbers.slice(i * 5, i * 5 + 5));
    }
    
    return result;
}


arraysIndex = generate2DArray()



// Print the generated 2D array
console.log(generate2DArray());

// Generate random number
function randomNumberGenerate() {
    let num = Math.floor(Math.random() * 24);

    return num;
}

// upload data on web
function uploadData() {
    const removeContainer = document.createElement('div');
    removeContainer.classList.add('remove-container')

    quizData.forEach((obj,index) => {
        const optionArray = permutations[randomNumberGenerate()];

        const question = document.createElement('div');
        question.classList.add('question');
        question.id = `question${index+1}`;

        question.innerHTML = `
                    <p class="question-title">${quizCount++}. ${obj.title}</p>
                    <div class="code-snippet ${obj.snippet.length === 0 ? 'hide' : ''}">${obj.snippet}</div>
                    <div class="option">
                        <input type="radio" name="q${index+1}" value="${obj.options[optionArray[0]]}" >
                        <label for="">A ${obj.options[optionArray[0]]}</label>
                    </div>
                    <div class="option">
                        <input type="radio" name="q${index+1}" value="${obj.options[optionArray[1]]}" >
                        <laquiz-formbel for="">B ${obj.options[optionArray[1]]}</label>
                    </div>
                    <div class="option">
                        <input type="radio" name="q${index+1}" value="${obj.options[optionArray[2]]}" >
                        <label for="">C ${obj.options[optionArray[2]]}</label>
                    </div>
                    <div class="option">
                        <input type="radio" name="q${index+1}" value="${obj.options[optionArray[3]]}" >
                        <label for="">D ${obj.options[optionArray[3]]}</label>
                    </div>`


        removeContainer.appendChild(question)
    })

    document.querySelector(`.quiz-container`).appendChild(removeContainer)
}

function load5quiz() {
    const index = arraysIndex[quizePageCount];
    let newQuizArray = [];

    index.forEach(val =>{
        newQuizArray.push(quizDataSet[val])
    })

    quizData = newQuizArray
    quizePageCount++;
}



// main

load5quiz()
uploadData()


let score = 0;
let nowMoveNextPage = false

let isReady = true
form.addEventListener('submit', event => {
    event.preventDefault();
    const questionsCount = quizData.length;
    let notChooseAll = false;

    for(let i = 0; i < questionsCount; i++) {
        const input = document.querySelector(`input[name="q${i+1}"]:checked`)
        if(input === null) {
            notChooseAll = true;
            break;
        }
    }    

    if(isReady && !notChooseAll){
        
        
        for(let i = 0; i < questionsCount; i++) {
            const input = document.querySelector(`input[name="q${i+1}"]:checked`)
            
            if(input === null) {
                alert("please choose attends all quetion")
                break;
            }
            if(quizData[i].answer === input.value){
                score++;
                
                input.parentElement.parentElement.classList.add('correct');
            }else {
                input.parentElement.parentElement.classList.add('wrong');
            }
        }
    
        document.querySelector('.result').classList.remove('hide');
        document.querySelector('#score').innerText = `your score ${score}/${questionsCount}!`;
        
    
        scrollTo(0,0)
        isReady = false

        nowMoveNextPage = true;
    }
});


document.querySelector('#try-again').addEventListener('click', () =>{
    // window.location.reload(true);
    document.querySelector('.result').classList.add('hide');
    isReady = true;
} )



document.querySelector('#move-next-page').addEventListener('click', ()=>{
    if(nowMoveNextPage) {
        document.querySelector(".remove-container").remove();
    
        load5quiz()
        uploadData()
    
    
        if(quizePageCount == 20) {
            quizCount = 1;
            quizePageCount = 0;
        }

        nowMoveNextPage = false;
        isReady = true;

        document.querySelector('.result').classList.add('hide');
    }
})




