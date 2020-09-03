const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const questions = require("./utils/questions");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

// Function to prompt user for questions
const promptQuestions = (type) => {
    return inquirer.prompt(questions[type]);
};

// Function to start the team generator app
const startApp = () => {
    // Initial display message
    console.log("Please build your team.");
    // Prompt manager questions first
    promptQuestions("manager").then((manager) => {
        // Create new variable for manager 
        const newManager = new Manager(manager.name, manager.id, manager.email, manager.office);
        // Add manager to employees array
        employees.push(newManager);
        // Push other entries into their arrays
        questions.ids.push(manager.id);
        questions.emails.push(manager.email);
        questions.offices.push(manager.office);
        // Call for new employee function
        addNewEmployee();
    });
};

// New employee 
startApp();


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
//new Engineer ()
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```