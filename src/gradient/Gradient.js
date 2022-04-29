import './Gradient.css';

function Gradient() {

  /*
  // BLEU
  const COLORS = [
      {r: 51, g: 153, b: 255},
      {r: 153, g: 51, b: 255},
      {r: 0, g: 0, b: 51},
      {r: 0, g: 176, b: 153},
      {r: 102, g: 255, b: 255},
  ];
*/


  const COLORS = [{
      r: 51,
      g: 153,
      b: 255
    },
    {
      r: 153,
      g: 51,
      b: 255
    },
    {
      r: 0,
      g: 0,
      b: 51
    },
    {
      r: 255,
      g: 178,
      b: 102
    },
    {
      r: 255,
      g: 153,
      b: 255
    },
  ];


  // ORANGE
  /*
    const COLORS = [{
        r: 212,
        g: 96,
        b: 101
      },
      {
        r: 253,
        g: 176,
        b: 87
      },
      {
        r: 235,
        g: 147,
        b: 170
      },
      {
        r: 255,
        g: 178,
        b: 102
      },
      {
        r: 255,
        g: 153,
        b: 255
      },
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
      } else if (this.x > stageWidth) {
        this.vx *= -1;
        this.x -= 10;
      }

      if (this.y < 0) {
        this.vy *= -1;
        this.y += 10;
      } else if (this.y > stageHeight) {
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



  class Engine {
    constructor() {
      this.canvas = document.createElement('canvas');
      document.body.appendChild(this.canvas);
      this.src = this.canvas.getContext('2d');

      this.pixelRatio = (window.decivePixelRatio > 1) ? 2 : 1;

      this.totalConfettis = 12;
      this.confettis = [];
      this.maxRadius = 800;
      this.minRadius = 300;

      window.addEventListener('resize', this.resize.bind(this), false);
      this.resize();

      window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
      this.stageWidth = document.body.clientWidth;
      this.stageHeight = document.body.clientHeight;

      this.canvas.width = this.stageWidth * this.pixelRatio;
      this.canvas.height = this.stageHeight * this.pixelRatio;
      this.src.scale(this.pixelRatio, this.pixelRatio);

      this.src.globalCompositeOperation = 'overlay';

      this.createConfettis();
    }
    createConfettis() {
      let curColor = 0;
      this.confettis = [];

      for (let i = 0; i < this.totalConfettis; i++) {
        const item = new Glow(
          Math.random() * this.stageWidth,
          Math.random() * this.stageHeight,
          Math.random() * (this.maxRadius - this.minRadius) +
          this.minRadius,
          COLORS[curColor]
        );

        if (++curColor >= COLORS.length) {
          curColor = 0;
        }

        this.confettis[i] = item;
      }
    }

    animate() {
      window.requestAnimationFrame(this.animate.bind(this));

      this.src.clearRect(0, 0, this.stageWidth, this.stageHeight);

      for (let i = 0; i < this.totalConfettis; i++) {
        const item = this.confettis[i];
        item.animate(this.src, this.stageWidth, this.stageHeight);
      }
    }
  }

  new Engine();
}

export default Gradient;
