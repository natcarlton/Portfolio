import React from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense

const circleDiameter = 100
const numCircles = window.innerWidth / circleDiameter;
const shadowOffset = 10

const NavBarDecor: React.FC = () => {

    // See annotations in JS for more information
    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(window.innerWidth, 60).parent(canvasParentRef);
    };

    const draw = (p5: p5Types) => {
        // p5.background(0);
        for (let i = 0; i < numCircles; i++) {
            p5.noStroke();
            p5.fill('#28536B')
            p5.circle(100 * i + 50 + shadowOffset, shadowOffset, circleDiameter);

            p5.fill('#85A9BB')
            p5.circle(100 * i + 50, 0, circleDiameter);
        }
    };

    return <Sketch setup={setup} draw={draw} />;
};

export default NavBarDecor