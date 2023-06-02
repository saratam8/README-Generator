// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title for your README?',
            name: 'title',
        },
    ])
    .then((response) =>
        writeToFile('README.md', response)
    );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, `# ${data.title}`, (err) =>
    err ? console.error(err) : console.log('README Generated')
    );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
