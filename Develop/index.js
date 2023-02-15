// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please add the name of the project",
      },
      {
        type: "input",
        name: "description",
        message: "Please add description of the project : ",
      },
      {
        type: "input",
        name: "email",
        message: "Please add your email address",
      },
      {
        type: "input",
        name: "github",
        message: "Please add your github username",
      },
     
      {
        type: "list",
        message: "Please choice the Licence for your project",
        name: "license",
        choices: [
          "MIT License",
        
          "GNU General Public License 3.0",
    
          "Apache License 2.0",
          
          "None",
        ],
      },
      {
        type: "input",
        name: "installation",
        message: "Please type the command to install dependencies",
      },
      {
        type: "input",
        name: "test",
        message: "Please type the command to run tests",
      },
      {
        type: "input",
        name: "contributing",
        message:
          "Please add information for contributors",
      },
      {
        type: "input",
        name: "usage",
        message: "Please add usage information ",
      },
      
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, generateMarkdown(data), error => {
   
    console.log("Generating README...");

    if (error) throw error;

    console.log("README file Generated!");
  });
}


// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(
        questions
    )
    .then((data) => {
        return generateMarkdown(data);
    }).then((data) => {
        writeToFile('README.md', data);
    })
};

// Function call to initialize app
init();
