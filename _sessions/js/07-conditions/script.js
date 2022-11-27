// if(condition){
//     statement/action
// }else {
//     another action
// }
var hour = (new Date).getHours();
let theme = document.body;

if (hour >= 16) {
  theme.removeClass('light').addClass('dark');
} else {
  theme.removeClass('dark').addClass('light');
}

// let age = prompt('Enter your age.')
// const isHungry = false;

// if(age>=12 && isHungry){
//    console.log(`You are ${age} years old.You can cook for yourself.`)
// } else if(age<12 && isHungry){
//     console.log(`You are too young. Wait for your parents.`)
// } else if(!isHungry) {
//     console.log('Dont eat!')
// }

// let username = prompt('What is your name?')
// if (username==="Romeo"){
// console.log('Hello my love!');
// } else{
// console.log(`Hi ${username}`);
// } 

// SWITCH STATEMENTS
// let username = prompt('What is your name?')

// switch(username){
//     case 'Romeo':
//     console.log('Hello my love!');
//     break;
//     case 'Julia':
//     console.log('Hello sister');
//     break;
//     default:
//     console.log(`Hello ${username}`)
// }

// TERNARY OPERATOR

// let username = prompt('What is your name?')

// username==='Romeo' ? console.log('Hello my love!') : console.log(`Hello ${username}`)

// condition ? action : default action