// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown';
//Creating a function to generate README
const generateREADME = (answers) => {
    return
}
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
    message: 'Enter usage information:'
},
{
    type: 'input',
    name: 'Contribution',
    message: 'Enter contribution guidelines:'
},
{
type: 'input',
    name: 'tests',
    message: 'Enter test instructions:'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', fileName, data, (err) => {
        if (err){
            console.error('Error creating the file:', err);
        }   else{
            console.log(`README.md ${fileName} has been successfully written`);
        }
        })
    }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeConent = generateMarkdown(answers);
    })
}

// Function call to initialize app
init();
