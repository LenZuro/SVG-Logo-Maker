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


    