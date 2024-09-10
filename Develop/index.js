// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs, { write } from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'Enter project title: '
},
{
    type: 'input',
    name: 'description',
    message: 'Enter your project description: '
},
{
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions: '
},
{
    type: 'input',
    name: 'usage',
    message: 'Enter usage information: '
},
{
    type: 'input',
    name: 'Contribution',
    message: 'Enter contribution guidelines: '
},
{
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions: '
},
{
    type: 'input',
    name: 'license',
    message: 'Choose a license for your project: ', 
    choices: ['Boost', 'Eclipse', 'MIT','Mozilla']
},
{
    type: 'input',
    name: 'github',
    message: 'Enter your Github username: '
},
{
    type: 'input',
    name: 'email',
    message: 'Enter you email address: '
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err){
            console.error('Error creating the file:', err);
        }   else{
            console.log(`${fileName} has been successfully written`);
        }
        })
    }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
       const readmeContent = generateMarkdown(response);
       writeToFile('README.md', readmeContent);
    })
}

// Function call to initialize app
init();
