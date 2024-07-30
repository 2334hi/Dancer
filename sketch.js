/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new StickDude(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class StickDude {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;

    // add properties for your dancer here:
    this.bodyx = startX - (width / 2) - 25; // x Position of Body
    this.bodyy = startY - (height / 2) + 50; // y Position of Body
    this.bodyWid = 50; 
    this.bodyHei = 100; 

    this.LArmx = this.bodyx - 30; 
    this.LArmy = this.bodyy + 20; 

    this.RArmx = this.bodyx + 40; 
    this.RArmy = this.bodyy + 20; 

    this.LLegx = this.bodyx - 15; 
    this.LLegy = this.bodyy + 45; 

    this.RLegx = this.bodyx + 15; 
    this.RLegy = this.bodyy + 45;

    this.headx = this.bodyx + 25; 
    this.heady = this.bodyy - 30; 

    // this.LLegx = this.bodyx; 
    // this.LLegy = this.bodyy; 

    this.angle = -15; 
    this.stance = true; 

    this.headHor = 0;
    this.headVer = 0; 
    this.headAng = 0; 
    this.right = true; 
    this.left = false; 

  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
  }

  dance(){
    push();
    translate(this.LArmx, this.LArmy); 
    rotate(radians(this.angle)); 
    
    
    pop(); 
  }

  drawArmsLeft(){
    push();
    translate(this.LArmx, this.LArmy); 
    rotate(radians(this.angle))
    fill(255); 
    noStroke(); 
    rect(0, 0, 40, 10, 20); 
    if(this.stance == true){
      this.angle += 1; 
      if(this.angle == 15){
        this.stance = false; 
      }
    } else if(this.stance == false){
      this.angle -= 1; 
      if(this.angle == -15){
        this.stance = true; 
      }
    }
    pop(); 
  }

  drawArmsRight(){
    push();
    translate(this.RArmx, this.RArmy); 
    rotate(radians(-this.angle))
    fill(255); 
    noStroke(); 
    rect(0, 0, 40, 10, 20); 
    if(this.stance == true){
      if(this.angle == 15){
        this.stance = false; 
      }
    } else if(this.stance == false){
      if(this.angle == -15){
        this.stance = true; 
      }
    }
    pop(); 
  }

  drawLegLeft(){
    push(); 
    translate(this.LLegx, this.LLegy);
    if(this.stance){
      rotate(radians(10)); 
    }
    fill(255); 
    ellipse(20, 50, 35, 25); 
    pop(); 
  }

  drawLegRight(){
    push(); 
    translate(this.RLegx, this.RLegy);
    if(!this.stance){
      rotate(radians(-15));
    }
     
    fill(255); 
    ellipse(30, 50, 35, 25);
    pop(); 
  }

  stretch(){
    push(); 
    translate(this.bodyx, this.bodyy); 
    
    if(this.stance){
      this.bodyHei -= 1; 
      this.LLegy -= 1; 
      this.RLegy -= 1; 

      this.bodyx -= 2; 
      this.LArmx -= 2; 
      this.RArmx -= 2; 
      this.LLegx -= 2; 
      this.RLegx -= 2; 
      this.headx -= 2; 
      translate(-5, 5); 

    } else if(!this.stance){
      this.bodyHei += 1; 
      this.LLegy += 1; 
      this.RLegy += 1;

      this.bodyx += 2; 
      this.LArmx += 2; 
      this.RArmx += 2; 
      this.LLegx += 2; 
      this.RLegx += 2; 
      this.headx += 2; 
      translate(5, 5); 
    } 

    circle(25, -30, 50);
    fill(0); 
    rect(27, -40, 15, 5);
    rect(10, -40, 15, 5);
     
    pop(); 
  }

  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    fill(255); 
    noStroke(); 
    rect(this.bodyx, this.bodyy, this.bodyWid, this.bodyHei, 20); 
    this.drawArmsLeft(); 
    this.drawArmsRight(); 
    this.drawLegLeft(); 
    this.drawLegRight(); 
    fill(0);
    ellipse(this.bodyx + 25, this.bodyy + 50, this.bodyWid - 5, this.bodyHei - 25); 
    fill(255); 

    this.stretch(); 
    //circle(this.headx, this.heady, 50); 
     
    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes()

    pop();
  }

  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}

/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/