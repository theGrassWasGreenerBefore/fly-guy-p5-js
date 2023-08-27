import { canvasSize, background } from './variables.js';

const drawP5 = () => {
  new p5((sketch) => {
    sketch.setup = () => {
      sketch.createCanvas(canvasSize, canvasSize);
    };

    sketch.draw = () => {
      sketch.background(background);
    };
  });
}

module.exports = {
  drawP5,
};
