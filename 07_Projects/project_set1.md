# Project related to DOM

## Project link
[click here link1]
(https://stackblitz.com/edit/dom-project-chaiaurcode-?file=index.html)

[click here link2]
(https://stackblitz.com/edit/dom-project-chaiaurcode-ynibyjxg?file=index.html)

#Solution code

##Project 1 Solution
```javascript

const button = document.querySelectorAll('.button');
// console.log(button)

const body = document.querySelector('body');

button.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor=e.target.id;
    }
  });
});



```

##Project 2 Solution
```javascript


const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission and page reload

  // Corrected selectors to match the HTML
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  // Validation and BMI calculation
  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please enter a valid height.`;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please enter a valid weight.`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>Your BMI is: ${bmi}</span>`;
  }
});



```


##Project 3 Solution
```javascript

const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleDateString());
  clock.innerHTML = date.toLocaleDateString();
}, 1000);



```



##Project 4 Solution
```javascript

// Generate a random number between 1 and 100 and log it to the console. 
// Note: `randomNumber` will store `undefined` because `console.log()` doesn't return a value.
let randomNumber = console.log(parseInt(Math.random() * 100 + 1));

// Get references to various DOM elements used in the game
const submit = document.querySelector('#subt'); // Button for submitting the guess
const userInput = document.querySelector('#guessField'); // Input field for entering the guess
const guessSlot = document.querySelector('.guesses'); // Display for previous guesses
const remaining = document.querySelector('.lastResult'); // Display for remaining attempts
const LowOrHi = document.querySelector('.lowOrHhi'); // Display for "low" or "high" hint messages
const startOver = document.querySelector('.resultParas'); // Container for the "Start New Game" button

// Create a new paragraph element for the "Start New Game" button
const p = document.createElement('p');

// Track previous guesses and the number of guesses made
let prevGuess = [];
let numGuess = 1;

// Track if the game is active
let playGame = true;

// Event listener for the submit button if the game is active
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent form submission or page reload
    const guess = parseInt(userInput.value); // Parse the user's input as an integer
    console.log(guess); // Log the user's guess for debugging
    validateGuess(guess); // Call the function to validate the user's guess
  });
}

// Function to validate the user's guess
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number'); // Show an alert if the input is not a number
  } else if (guess < 1) {
    alert('Please enter a number greater than 1'); // Alert if the number is less than 1
  } else if (guess > 100) {
    alert('Please enter a number less than 100'); // Alert if the number is greater than 100
  } else {
    prevGuess.push(guess); // Add the valid guess to the array of previous guesses
    if (numGuess === 11) { // If the user has used all 10 attempts
      displayMessage(`Game Over. Random number was ${randomNumber}`); // Display the game-over message
      endGame(); // End the game
    } else {
      displayGuess(guess); // Display the user's guess
      checkGuess(guess); // Check if the guess is correct, too high, or too low
    }
  }
}

// Function to check the user's guess against the random number
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You guessed right, YOU WON'); // If the guess is correct, display a win message
    endGame(); // End the game
  } else if (guess < randomNumber) {
    displayMessage('You guessed TOO low'); // If the guess is too low, display a hint
  } else if (guess > randomNumber) {
    displayMessage('You guessed TOO high'); // If the guess is too high, display a hint
  }
}

// Function to display the user's guess and remaining attempts
function displayGuess(guess) {
  userInput.value = ''; // Clear the input field
  guessSlot.innerHTML += `${guess} ,`; // Append the guess to the guess display
  numGuess++; // Increment the guess count
  remaining.innerHTML = `${11 - numGuess}`; // Update the remaining attempts
}

// Function to display messages such as hints or game-over text
function displayMessage(message) {
  LowOrHi.innerHTML = `<h2>${message}</h2>`; // Display the message in the hint area
}

// Function to end the game
function endGame() {
  userInput.value = ''; // Clear the input field
  userInput.setAttribute('disabled', ''); // Disable the input field
  p.classList.add('button'); // Add a class to the paragraph element for styling
  p.innerHTML = `<h2 id="newGame">Start new Game </h2>`; // Add the "Start New Game" button text
  startOver.appendChild(p); // Append the button to the resultParas container
  playGame = false; // Set the game state to inactive
  newGame(); // Initialize the new game setup
}

// Function to reset the game
function newGame() {
  const newGameButton = document.querySelector('#newGame'); // Get the new game button
  newGameButton.addEventListener('click', function (e) {
    // When the new game button is clicked:
    randomNumber = parseInt(Math.random() * 100 + 1); // Generate a new random number
    prevGuess = []; // Clear the previous guesses
    numGuess = 1; // Reset the guess count
    guessSlot.innerHTML = ''; // Clear the guess display
    remaining.innerHTML = `${11 - numGuess}`; // Reset the remaining attempts display
    userInput.removeAttribute('disabled'); // Re-enable the input field
    startOver.removeChild(p); // Remove the "Start New Game" button
    playGame = true; // Set the game state to active
  });
}

```