// Include inquirer package, fs library and the generateMarkdown file
const inquirer = require('inquirer');
const fs = require('fs');
const markdownGeneration = require('./utils/generateMarkdown.js');

// The following inquirer prompts will ask the user for input to populate the readme file
inquirer
    .prompt([
        {
            type: 'list',
            message: 'What license will be used for this application?',
            name: 'license',
            choices: [
                '',
                'Apache License 2.0',
                'GNU General Public License v3.0',
                'MIT License',
                'BSD 2-Clause "Simplified" License',
                'BSD 3-Clause "New" or "Revised" License',
                'Boost Software License 1.0',
                'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 2.0',
                'GNU Affero General Public License v3.0',
                'GNU General Public License v2.0',
                'GNU Lesser General Public License v3.0',
                'Mozilla Public License 2.0',
                'The Unlicense'
            ],
        },
        {
            type: 'input',
            message: 'What is the name of your application?',
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
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
    ])
    .then((response) =>
        writeToFile('README.md', response)
    );

//The following function is used to generate the readme files
function writeToFile(fileName, data) {

    // The license badge generation, license link generation and table of contents generation
    const licenseBadge = markdownGeneration.renderLicenseBadge(data.license);
    const licenseLink = markdownGeneration.renderLicenseLink(data.license);
    const tableOfContents = markdownGeneration.generateMarkdown();

    // Template literal used to generate the readme file
    fs.writeFile(fileName, `# ${data.title} ${licenseBadge} \n\n ${tableOfContents} \n\n ## Description\n\n ${data.description}  \n\n ## Installation\n\n ${data.installation} \n\n ## Usage\n\n ${data.usage}  \n\n ## License\n\n This application is covered under ${licenseLink} \n\n ## Contribution \n\n ${data.contribution} \n\n ## Tests \n\n ${data.test} \n\n ## Questions \n\n Application documentation: [GitHub Profile](https://github.com/${data.github}) \n\n Additional questions can be sent to this email address: ${data.email}`, (err) => err ? console.error(err) : console.log('README Generated')
    );
}