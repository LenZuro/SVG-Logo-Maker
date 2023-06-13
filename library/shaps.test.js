const { Triangle , Square , Circle} = require("./shapes");

describe("Triangle Test", () => {
    test( "test for a triangle with a green backround" , () => {
        const shape = new Triangle();
        shape.setColor('green');
        expect(shape.render()).toEqual(
            '<polygon points="150, 18 244, 182 56, 182" fill="green" />'
        );
    });
});

describe("Square Test ", () => {
    test("test for a Square with a pink backround" , () => {
        const shape = new Square();
        shape.setColor('pink');
        expect(shape.render()).toEqual(
            '<rect x="73" y="40" width="160" height="160" fill="pink" />'
        );
    });
});

describe("Cricle Test" , () => {
    test("test for a circle with a #00d9ad backround" , () => {
        const shape = new Circle();
        shape.setColor("#00d9ad");
        expect(shape.render()).toEqual(
            '<circle cx="150" cy="115" r="80" fill="#00d9ad" />'
        );
    });
});
