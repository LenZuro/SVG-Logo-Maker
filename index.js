const inquirer = require('inquirer');

const fs = require('fs');

const { Triangle , Square , Circle } = require("./library/shapes");

function writeToFile(fileName, answers){
    let svgItem = "";
    svgItem = 
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgItem += '<g>';
    svgItem += `${answers.shape}`;
}

let userShape;
    if (answers.shape === "Triangle") {
        userShape = new Triangle();
        svgItem += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
    } else if (answers.shape === "Sqaure") {
        userShape = new Square();
        svgItem += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
    } else {
        userShape = new Circle();
        svgItem += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
    }


    svgItem += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;

    svgItem += '</g>';

    svgItem += '</svg>';


    fs.writeFile(fileName , svgItem , (err) => {
        err ? console.log(err) : console.log("Succsessfully Created your logo.svg");
    });


    function promptInfo() {
        inquirer
        .prompt([
                {
                    type: "input",
                    message: "What would you like your logo to say (Enter 1-3 characters)",
                    name: "text",
                },
                {
                    type: "input",
                    message: "Please choose a text color (Enter color keyword OR a Hexadecimal number",
                    name: "textColor",
                },
                {
                    type: "list",
                    message: "What shape would you like your Logo?",
                    choices: ["Triangle", "Square", "Circle"],
                    name: "shape",
                },
                {
                    type: "input",
                    message: "Please choose the shapes color (Enter color keyword OR a Hexadecimal number)",
                    name: "shapeBackgroundColor",
                },
        ])
        .then((answers) => {
            if (answers.text.length > 3){
                console.log("The text can not be more than 3 Characters");
                promptInfo();
            } else{
                writeToFile('logo.svg' , answers);
            }

        });
    }

    promptInfo();