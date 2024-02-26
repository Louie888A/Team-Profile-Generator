const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

let team = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.
const options = [
  {
    type: "list",
    name: "options",
    message: "How would you like to procees ?",
    choices: ["Add an engineer", "Add an intern", "Finish building the team"],
  },
];
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the manager's name:",
    default: "Manager",
    validate: (input) => !!input.trim() || "Name cannot be empty",
  },
  {
    type: "input",
    name: "id",
    message: "Enter the manager's ID:",
    default: "1",
    validate: (input) =>
      (!isNaN(input) && input.trim() !== "") || "ID must be a number",
  },
  {
    type: "input",
    name: "email",
    message: "Enter the manager's email:",
    default: "manager@manager.com",
    validate: (input) => /\S+@\S+\.\S+/.test(input) || "Invalid email format",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Enter the manager's office number:",
    default: "11",
    validate: (input) =>
      (!isNaN(input) && input.trim() !== "") ||
      "Office number must be a number",
  },
];
const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the engineer's name:",
    default: "Engineer",
    validate: (input) => !!input.trim() || "Name cannot be empty",
  },
  {
    type: "input",
    name: "id",
    message: "Enter the engineer's ID:",
    default: "2",
    validate: (input) =>
      (!isNaN(input) && input.trim() !== "") || "ID must be a number",
  },
  {
    type: "input",
    name: "email",
    message: "Enter the engineer's email:",
    default: "engineer@gmail.com",
    validate: (input) => /\S+@\S+\.\S+/.test(input) || "Invalid email format",
  },
  {
    type: "input",
    name: "github",
    message: "Enter the engineer's github:",
    default: "https://github.com/engineer",
    validate: (input) =>
      input.startsWith("https://github.com/") || "Invalid GitHub URL format",
  },
];
const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the intern's name:",
    default: "Intern",
    validate: (input) => !!input.trim() || "Name cannot be empty",
  },
  {
    type: "input",
    name: "id",
    message: "Enter the intern's ID:",
    default: "3",
    validate: (input) =>
      (!isNaN(input) && input.trim() !== "") || "ID must be a number",
  },
  {
    type: "input",
    name: "email",
    message: "Enter the intern's email:",
    default: "intern@gmail.com",
    validate: (input) => /\S+@\S+\.\S+/.test(input) || "Invalid email format",
  },
  {
    type: "input",
    name: "school",
    message: "Enter the intern's school:",
    default: "local school",
    validate: (input) => !!input.trim() || "School cannot be empty",
  },
];
const html = render(team);
console.log(html);