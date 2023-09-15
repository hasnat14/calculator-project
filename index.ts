import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";
import { type } from "os";
import { listenerCount } from "process";
import { log } from "console";
console.log(chalk.bgBlue("let start calculator"))
const answer = await inquirer.prompt([
    {
      type:"list",
      name:"operator",
      message:"which operator whould u like to perform?\n",
      choices:["addition","subtraction","multiplication","division"]

    },
    {
      type:"number",
      name:"num1",
      message:"plz entre your firtst number"

    },
    {
        type:"number",
        name:"num2",
        message:"plz entre your second number"
    }
])
{if(answer.operator=="addition")
{console.log(`the result of addition ${answer.num1}+${answer.num2}= ${answer.num1+answer.num2}`)}
else if(answer.operator=="subtraction")
{console.log(`the result of subtraction ${answer.num1}-${answer.num2}= ${answer.num1-answer.num2}`)}
else if(answer.operator=="multipication")
{console.log(`the result of multiplcation ${answer.num1}*${answer.num2}= ${answer.num1*answer.num2}`)}
else if (answer.operator=="multipication")
    {console.log(`the result of division ${answer.num1}/${answer.num2}= ${answer.num1/answer.num2}`)}

}
    
