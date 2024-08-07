// TODO: Include packages needed for this application
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
fs.appendFile('README.md', `${data}\n`, (err) =>
    err ? console.error(err) : console.log('Commit logged!'));
    
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
