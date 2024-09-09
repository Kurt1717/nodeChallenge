// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
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
    name: 'installation instructions',
    message: 'Enter installation instructions: '
},
{
    type: 'input',
    name: 'usage information',
    message: 'Enter usage information:'
},
{
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines:'
},
{
type: 'input',
    name: 'test instructions',
    message: 'Enter test instructions:'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
