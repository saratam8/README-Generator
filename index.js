// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your application?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is the Description of your application?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the Installation Instructions for this application?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What is the Usage Information of this application?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What are the contribution guidelines to this project?',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'What are the test instructions for this application?',
            name: 'test',
        },
    ])
    .then((response) =>
        writeToFile('README.md', response)
    );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, `# ${data.title} \n\n ## Description \n\n ${data.description} \n\n ## Installation \n\n ${data.installation} \n\n ## Usage \n\n ${data.usage} \n\n ## Contribution \n\n ${data.contribution} \n\n ## Tests \n\n ${data.test}`, (err) =>
    err ? console.error(err) : console.log('README Generated')
    );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
