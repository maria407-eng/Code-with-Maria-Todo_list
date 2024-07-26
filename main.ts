#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todolist :string [] = [];
let Conditions = true;

//Print welcome message
console.log(chalk.bold.rgb(204, 204, 204)(`\n  \t\t <<<========================================>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`<<<==========>>> ${chalk.bold.hex('#9999FF')('Welcome to \'Code With Maria\' - todo_List App')} <<<==========>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`\t\t <<< ======================================== >>>\n `));


let main = async () => {
    while(Conditions){
        let option = await inquirer.prompt([
            {
                name:"choice",
                type:"list",
                message:"Select an option you want to do:",
                choices:["Add Task" , "Delete Task" ,"Update Task" ,"View Todo-list" , "Exit"],
            }
        ]);
        if(option.choice === "Add Task"){
        await addTask()
        }
        else if(option.choice === "Delete Task"){
            await deleteTask()
        }
        else if(option.choice === "Update Task"){
            await UpdateTask()
        }
        else if(option.choice === "View Todo-list"){
            await viewTask()
        }
        else if(option.choice === "Exit"){
            Conditions = false;
        }
    }
}

//Function to add new task to the list
let addTask = async ( ) => {
    let newTask = await inquirer.prompt([
   {
     name:"task",
    type:"input",
    message:"Enter Your New task:"
    }
    ]);
    todolist.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in Todo-list`);
}

//Function to view all Todo-list Tasks
let viewTask  = () => {
    console.log("\n Your Todo-list: \n");
    todolist.forEach((task,index) => {
        console.log(`${index + 1}: ${task}`);
    });
}

//Function to delete a task from the list
let deleteTask = async() =>{
    await viewTask()
    let taskIndex = await inquirer.prompt([
        {
            name:"index",
            type:"number",
            message:"Enter the 'index no.' of the task you want to  delete:",
        }
    ]);
    let deletedTask = todolist.splice(taskIndex.index - 1 ,1);
    console.log(`\n ${deleteTask} this task has been deleted successfuly from your todo_list\n`)
}

//Function to  update a task
let UpdateTask = async () => {
    await viewTask()
        let update_task_index = await inquirer.prompt([
            {
                name:"index",
                type:"number",
                message:"Enter the 'index no' of the task you want to update:"
            },
            {
                name:"new_task",
                type:"input",
                message:"Now Enter new task name:",
            }
        ]);
        todolist[update_task_index.index - 1] = update_task_index.new_task
        console.log(`\n Task at 'index no' .${update_task_index.index} updated successfuly [for updated list check view option: View todo_list]`)
    
}
main();