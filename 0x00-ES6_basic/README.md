# 0x00-ES6_basic

## Resources (tutorialls)

* Modern JS
https://github.com/mbeaudru/modern-js-cheatsheet 


* JS Fundamentals
https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity 

## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:


- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Learning resources

### ECMAScript 6 - ECMAScript 2015
https://www.w3schools.com/js/js_es6.asp

### Statements and declarations
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements 

### Arrow functions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions


### Default parameters
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

### Rest parameter
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters


### Demystifying ES6 Iterables & Iterators
https://www.freecodecamp.org/news/demystifying-es6-iterables-iterators-4bdd0b084082/ 

## Learning Objectives
- What ES6 is

- New features introduced in ES6

- The difference between a constant and a variable
Block-scoped variables

- Arrow functions and function parameters default to them
Rest and spread function parameters

- String templating in ES6

- Object creation and their properties in ES6
Iterators and for-of loops

### Requirements General
- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x

- Allowed editors: vi, vim, emacs, Visual Studio Code

- All your files should end with a new line

- A README.md file, at the root of the folder of the project, is mandatory

- Your code should use the js extension

- Your code will be tested using the Jest Testing Framework

- Your code will be analyzed using the linter ESLint along with specific rules that we’ll provide

- All of your functions must be exported

### Setup Install NodeJS 12.11.x ((in your home directory):)
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y


### Version
- nodejs -v (v12.11.1)

- npm -v (6.11.3)

### Basic instructions
- Install Jest, Babel, and ESLint

in your project directory, install Jest, Babel and ESList by using the supplied package.json and run npm install.

### Configuration files
- package.json
- babel.config.js
- .eslintrc.js


Don’t forget to run npm install from the terminal of your project folder to install all necessary project dependencies.


### Task 0 (0. Const or let?)
Modify the following

- function taskFirst to instantiate variables using const

- function taskNext to instantiate variables using let

#### given Code

    export function taskFirst() {
    var task = 'I prefer const when I can.';
    return task;
    }

    export function getLast() {
    return ' is okay';
    }

    export function taskNext() {
    var combination = 'But sometimes let';
    combination += getLast();

    return combination;
    }

### Execution example:
- ob@dylan:~$ cat 0-main.js

        import { taskFirst, taskNext } from './0-constants.js';

        console.log(`${taskFirst()} ${taskNext()}`);

- bob@dylan:~$ npm run dev 0-main.js

output: I prefer const when I can. But sometimes let is okay

- target filename ( 0-constants.js)


### 1. Block Scope (1. Block Scope)
- instructions:-

Given what you’ve read about var and hoisting, modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.

- File: 1-block-scoped.js

### Execution
- bob@dylan:~$ cat 1-main.js

        import taskBlock from './1-block-scoped.js';

        console.log(taskBlock(true));
        console.log(taskBlock(false));

- bob@dylan:~$ npm run dev 1-main.js 

[ false, true ]
[ false, true ]


### Task 3: (2. Arrow functions)
