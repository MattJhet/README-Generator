// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, `${data}\n`, (err) =>
        err ? console.error(err) : console.log('Commit logged!'));
}
const generateREADME = ({name, usage, installation, issue, contributions, githubProfile, license, demo}) => 
    `
    #The app is for ${name}

    ##How to use the app
    ${usage}
    ##How to install it
    ${installation}
    ##How to report issues
    ${issue}
    ##How to make contributions
    ${contributions}
    
    Github profile ${githubProfile}
    demo ${demo}

    Licensed with ${license}
    
`


    

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter project title'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter how to use the application'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter how to install the application'
        },
        {
            type: 'input',
            name: 'issue',
            message: 'Enter how to report issues'
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Enter how to contribute to this application'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter how to test to this application'
        },
        {
            type: 'input',
            name: 'githubProfile',
            message: 'Enter the developers github profile'
        },
        {
            type: 'input',
            name: 'demo',
            message: 'Enter the demonstration on how the application functions'
        },
        {
            type: 'input',
            name: 'license',
            message: 'Enter the license the project is using'
        }
    ]).then(data =>{
        writeToFile('README.md', generateREADME(data));
    });

}
// Function call to initialize app
init();

