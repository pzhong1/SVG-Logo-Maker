const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');

const shapes = {
    triangle: Triangle,
    circle: Circle,
    square: Square
  };
  

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter three characters for your logo:',
        prefix: '>',
        validate: function(value) {
            if (value.length > 3) {
                return 'Please enter only three characters.';
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the color for your text:',
        prefix: '>'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
        prefix: '>'
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the color for your shape:',
        prefix: '>'
    },
];

inquirer.prompt(questions).then(answers => {
    let shape;
    if (answers.shape === 'circle') {
        shape = new Circle(answers.shapeColor);
    } else if (answers.shape === 'triangle') {
        shape = new Triangle(answers.shapeColor);
    } else {
        shape = new Square(answers.shapeColor);
    }

    const svgLogo = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shape.render()}
            <text x="150" y="130" font-size="50" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
        </svg>
    `;

    fs.writeFileSync('logo.svg', svgLogo);
    console.log('Generated logo.svg');
});
