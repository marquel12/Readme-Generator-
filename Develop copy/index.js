// TODO: Include packages needed for this application
import fs from 'fs'
import inquirer from 'inquirer'
import colors from 'colors'


// TODO: Create an array of questions for user input
const questions = [
    {
     type: 'input',
     name: 'GitHubUserName',
     message: 'What is your Github username?'
    },
    {
     type: 'input',
     name: 'email',
     message: 'What is your email address?'
    },
    {
     type: 'input',
     name: 'projectName',
     message: 'What is your project name?'
     },
     {
     type: 'input',
     name: 'description',
     message: 'Please write a short description of your project.'
     },
     {
     type: 'list',
     name: 'license',
     message: 'What kind of license should your project have',
     choices: ['MIT', 'APACE.20', 'GPL 3.0', 'BSD', 'NONE']
     },
     {
     type: 'list',
     name: 'name',
     message: 'What command should be run to run install dependencies?',
     default: colors.gray("npm i")
     
     },
     {
     type: 'input',
     name: 'text',
     message: "What does user need to know about using repo?"
     },
     {
     type: 'input',
     name: 'text',
     message: 'What does the user need to know about contributing to the repo?'
     }
 
 
 ];
 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
