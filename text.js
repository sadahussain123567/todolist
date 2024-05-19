#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let conditions = true;
console.log(chalk.blue("WELCOME TO CODE WITH SADAM - TODO-LIST APPLICATION"));
while (conditions) {
    let addtask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.yellowBright("enter your new task:")
        }
    ]);
    todos.push(addtask.task);
    console.log(`${addtask.task} TASK ADDED IN TODOLIST`);
    let addmoretask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: chalk.yellow("do you want to add more task ?"),
            default: "false"
        }
    ]);
    conditions = addmoretask.addmore;
}
console.log("your updated todo-list:", todos);
