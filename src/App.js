import './App.css';

function App() {

  /*
  // BLEU
  const COLORS = [
      {r: 51, g: 153, b: 255},
      {r: 153, g: 51, b: 255},
      {r: 0, g: 0, b: 51},
      {r: 0, g: 176, b: 153},
      {r: 102, g: 255, b: 255},
  ];

  /*
  // MULTI
  const COLORS = [
      {r: 51, g: 153, b: 255},
      {r: 153, g: 51, b: 255},
      {r: 0, g: 0, b: 51},
      {r: 255, g: 178, b: 102},
      {r: 255, g: 153, b: 255},
  ];
  */

  // ORANGE
  /*
  const COLORS = [
      {r: 212, g: 96, b: 101},
      {r: 253, g: 176, b: 87},
      {r: 235, g: 147, b: 170},
      {r: 255, g: 178, b: 102},
      {r: 255, g: 153, b: 255},
  ];
*/
const MathPI = Math.PI * 2;

class Glow {
    constructor(x, y, radius, rgb) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.rgb = rgb;

        this.vx = Math.random() * 4;
        this.vy = Math.random() * 4;

        this.sinVal = Math.random();
    }

    animate(src, stageWidth, stageHeight) {
        this.sinVal += 0.01;

        this.radius += Math.sin(this.sinVal);

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) {
            this.vx *= -1;
            this.x += 10;
        } else if (this.x > stageWidth){
            this.vx *= -1;
            this.x -= 10;
        }

        if (this.y < 0) {
            this.vy *= -1;
            this.y += 10;
        } else if (this.y > stageHeight){
            this.vy *= -1;
            this.y -= 10;
        }

        src.beginPath();
        const g = src.createRadialGradient(
            this.x, this.y, this.radius * 0.01,
            this.x, this.y, this.radius
        );
        g.addColorStop(0, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 1`);
        g.addColorStop(1, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 0`);
        src.fillStyle = g;
        //src.fillStyle = `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 1`;
        src.arc(this.x, this.y, this.radius, 0, MathPI, false);
        src.fill();
    }
}

class Engine{
      constructor(){
          this.canvas = document.createElement('canvas');
          document.body.appendChild(this.canvas);
          this.src =  this.canvas.getContext('2d');

          this.pixelRatio =  (window.decivePixelRatio > 1) ? 2 : 1;


      }


}

export default App;
