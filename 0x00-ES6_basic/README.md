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

- Instructions

        Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)

        export default function getNeighborhoodsList() {
        this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

        const self = this;
        this.addNeighborhood = function add(newNeighborhood) {
            self.sanFranciscoNeighborhoods.push(newNeighborhood);
            return self.sanFranciscoNeighborhoods;
        };
        }

#### Execution:

- bob@dylan:~$ cat 2-main.js

        import getNeighborhoodsList from './2-arrow.js';

        const neighborhoodsList = new getNeighborhoodsList();
        const res = neighborhoodsList.addNeighborhood('Noe Valley');
        console.log(res);

- bob@dylan:~$ npm run dev 2-main.js 

[ 'SOMA', 'Union Square', 'Noe Valley' ]

### Task 4: (3. Parameter defaults)

Condense the internals of the following function to 1 line - without changing the name of each function/variable.

Hint: The key here to define default parameter values for the function parameters.

        export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
        if (expansion1989 === undefined) {
            expansion1989 = 89;
        }

        if (expansion2019 === undefined) {
            expansion2019 = 19;
        }
        return initialNumber + expansion1989 + expansion2019;
        }

#### Execution:
- bob@dylan:~$ cat 3-main.js

        import getSumOfHoods from './3-default-parameter.js';

        console.log(getSumOfHoods(34));
        console.log(getSumOfHoods(34, 3));
        console.log(getSumOfHoods(34, 3, 4));

- bob@dylan:~$ npm run dev 3-main.js 

    142

    56
    
    41

### Task 5: (4. Rest parameter syntax for functions)

#### Instruction

Modify the following function to return the number of arguments passed to it using the rest parameter syntax


        export default function returnHowManyArguments() {

        }

#### Example out put

-> returnHowManyArguments("Hello", "ALX", 2020);

3

#### Execution
- bob@dylan:~$ cat 4-main.js

        import returnHowManyArguments from './4-rest-parameter.js';

        console.log(returnHowManyArguments("one"));
        console.log(returnHowManyArguments("one", "two", 3, "4th"));

- bob@dylan:~$ npm run dev 4-main.js 

1

4

### Task 6: (5. The wonders of spread syntax)

#### Instructions

Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.

#### given code

        export default function concatArrays(array1, array2, string) {
        }

#### Execution:

- bob@dylan:~$ cat 5-main.js

        import concatArrays from './5-spread-operator.js';

        console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));

- bob@dylan:~$ npm run dev 5-main.js 

        [
        'a', 'b', 'c',
        'd', 'H', 'e',
        'l', 'l', 'o'
        ]


### Task 7: (6. Take advantage of template literals)

#### Instructions

Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.

        export default function getSanFranciscoDescription() {
        const year = 2017;
        const budget = {
            income: '$119,868',
            gdp: '$154.2 billion',
            capita: '$178,479',
        };

        return 'As of ' + year + ', it was the seventh-highest income county in the United States'
                / ', with a per capita personal income of ' + budget.income + '. As of 2015, San Francisco'
                / ' proper had a GDP of ' + budget.gdp + ', and a GDP per capita of ' + budget.capita + '.';
        }

#### Execution:

- bob@dylan:~$ cat 6-main.js

        import getSanFranciscoDescription from './6-string-interpolation.js';

        console.log(getSanFranciscoDescription());

- File: 6-string-interpolation.js

- bob@dylan:~$ npm run dev 6-main.js 

As of 2017, it was the seventh-highest income county in the United States, with a per capita personal income of $119,868. As of 2015, San Francisco proper had a GDP of $154.2 billion, and a GDP per capita of $178,479.



### Task 8: (7. Object property value shorthand syntax)

#### Instructions

Notice how the keys and the variable names are the same?

Modify the following function’s budget object to simply use the keyname instead.

#### Given code

        export default function getBudgetObject(income, gdp, capita) {
        const budget = {
            income: income,
            gdp: gdp,
            capita: capita,
        };

        return budget;
        }

#### Execution:
- bob@dylan:~$ cat 7-main.js

        import getBudgetObject from './7-getBudgetObject.js';

        console.log(getBudgetObject(400, 700, 900));

- bob@dylan:~$ npm run dev 7-main.js 

{ income: 400, gdp: 700, capita: 900 }

- filename: 7-getBudgetObject.js


### Task 9: (8. No need to create empty objects before adding in properties)

#### Instruction

        Rewrite the getBudgetForCurrentYear function to use ES6 computed property names on the budget object

        function getCurrentYear() {
        const date = new Date();
        return date.getFullYear();
        }

        export default function getBudgetForCurrentYear(income, gdp, capita) {
        const budget = {};

        budget[`income-${getCurrentYear()}`] = income;
        budget[`gdp-${getCurrentYear()}`] = gdp;
        budget[`capita-${getCurrentYear()}`] = capita;

        return budget;
        }

#### Execution:

- bob@dylan:~$ cat 8-main.js

        import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';

        console.log(getBudgetForCurrentYear(2100, 5200, 1090));

- bob@dylan:~$ npm run dev 8-main.js 

{ 'income-2021': 2100, 'gdp-2021': 5200, 'capita-2021': 1090 }

- File: 8-getBudgetCurrentYear.js


### Task 10: (9. ES6 method properties)

#### Instructions

Rewrite getFullBudgetObject to use ES6 method properties in the fullBudget object

import getBudgetObject from './7-getBudgetObject.js';

        export default function getFullBudgetObject(income, gdp, capita) {
        const budget = getBudgetObject(income, gdp, capita);
        const fullBudget = {
            ...budget,
            getIncomeInDollars: function (income) {
            return `$${income}`;
            },
            getIncomeInEuros: function (income) {
            return `${income} euros`;
            },
        };

        return fullBudget;
        }

#### Execution:

- bob@dylan:~$ cat 9-main.js

        import getFullBudgetObject from './9-getFullBudget.js';

        const fullBudget = getFullBudgetObject(20, 50, 10);

        console.log(fullBudget.getIncomeInDollars(fullBudget.income));
        console.log(fullBudget.getIncomeInEuros(fullBudget.income));

- ob@dylan:~$ npm run dev 9-main.js 

20

20 euros

- File: 9-getFullBudget.js

### Task 11: (10. For...of Loops)

#### Instructions

Rewrite the function appendToEachArrayValue to use ES6’s for...of operator. And don’t forget that var is not ES6-friendly.

#### Given code

        export default function appendToEachArrayValue(array, appendString) {
        for (var idx in array) {
            var value = array[idx];
            array[idx] = appendString + value;
        }

        return array;
        }

#### Execution:

- bob@dylan:~$ cat 10-main.js

        import appendToEachArrayValue from './10-loops.js';

        console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));

- bob@dylan:~$ npm run dev 10-main.js 

[ 'correctly-appended', 'correctly-fixed', 'correctly-displayed' ]

- File: 10-loops.js
