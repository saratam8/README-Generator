const inquirer = require('inquirer');
const fs = require('fs');
const markdownGeneration = require('./utils/generateMarkdown.js');
console.log(markdownGeneration.renderLicenseBadge());

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

function writeToFile(fileName, data) {
    console.log(data);

    const licenseBadge = markdownGeneration.renderLicenseBadge(data.license);
    const licenseLink = markdownGeneration.renderLicenseLink(data.license);
    const tableOfContents = markdownGeneration.generateMarkdown();
    console.log(licenseBadge);

    fs.writeFile(fileName, `# ${data.title} ${licenseBadge} \n\n ${tableOfContents} \n\n  ## Description <a name="Description"></a> \n\n ${data.description}  \n\n ## Installation <a name="Installation"></a> \n\n ${data.installation} \n\n ## Usage <a name="Usage"></a> \n\n ${data.usage}  \n\n ## License <a name="License"></a> \n\n This application is covered under ${licenseLink} \n\n ## Contribution <a name="Contribution"></a> \n\n ${data.contribution} \n\n ## Tests <a name="Tests"></a> \n\n ${data.test} \n\n ## Questions <a name="Questions"></a> \n\n Application documentation: [GitHub Profile](https://github.com/${data.github}) \n\n Additional questions can be sent to this email address: ${data.email}`, (err) =>
    err ? console.error(err) : console.log('README Generated')
    );
}