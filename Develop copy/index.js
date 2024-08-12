/// TODO: Include packages needed for this application
import inquirer from 'inquirer'; // this will import the inquirer package
import colors from 'colors'; // this will import the colors package
import fs from 'fs'; // this will import the fs package
import generateMarkdown from './utils/generateMarkdown.js'; // this will import the generateMarkdown file

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'userName',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
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
        message: 'Please select a license for this project.',
        choices: ['MIT', 'APACE.20', 'GPL 3.0', 'BSD', 'NONE']
    },
    {


        type: 'input',
        name: 'installation',
        message: 'What command should be run to run install dependencies?',
        default: colors.gray('npm i') // this will print the default command to install dependencies which is npm i

    },
        
    {
        type: 'input',
        name: 'usage',
        message: "What does user need to know about using repo?"
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?'
    },

    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        },
];





// TODO: Create a function to write README file
function writeToFile(data) { // this function will write the README.md file
    const content = generateMarkdown(data); // this will generate the markdown content
    fs.writeFile('README.md',content, data, err => { // this will write the README.md file with the user's responses
        err ? console.log(err) : console.log(' Your README.md file has been created')
    
})};


// TODO: Create a function to initialize app
function init()  { // what this will do is initialize the app
    inquirer.prompt(questions).then((response) => { // await will wait for the user to respond to the questions and then the responses will be stored in the response variable
            console.log('Creating a professional README.md file') // this will let the user know that the README.md file is being created
            writeToFile(response); // this will write the user's responses to the README.md file
        })
    } 
    init(); // this will call the function to initialize the app
    