let myPersonalBubbles = [];
var  clicks = 0;

function setup() {
  colorMode(RGB, 255, 255, 255)
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100 ; i++) {
   addBubble();
 }
}

function draw() {
 background('#ffffff');
 for (let i = 0; i < myPersonalBubbles.length; i++) {
   myPersonalBubbles[i].run();
 }
 console.log(frameCount)
}

function restart(){
  frameCount = 0;
  clicks++;
  if (clicks == 3){
    clicks = 0
  }
  myPersonalBubbles = myPersonalBubbles.slice(100000);
   for (let i = 0; i < 100 ; i++) {
   addBubble();
   }
  console.log(clicks);
};

function mousePressed(){
  restart();
}

function addBubble() {
  var r = random(255) ;
  var g = random(255) ;
  var b = 0 ;

  if (clicks==1){;
    g = 0;
    b = random(255);
    r = random(255);
  }

  if (clicks==2){
    r = 0;
    g = random(255);
    b = random(255);
  }

 let bubbleColor = color(r,g,b);

 const aNewBubble = new Bubble(
  random(windowWidth), 
  random(windowHeight), 
  random(0.01, 0.1),
  bubbleColor
   );

 myPersonalBubbles.push(aNewBubble);
}

class Bubble {
 constructor(temp_x, temp_y, temp_z, temp_color) {
   this.x = temp_x;
   this.y = temp_y;
   this.z = temp_z;
   this.color = temp_color;
 }

 display() {
   push();
   noStroke();
   fill(this.color);
   ellipse(this.x, this.y, this.z * 2);
   pop();
 }

 updatePosition() {
  if (frameCount<500){
    this.z += this.z/40
     }

 if (frameCount>500){
      this.z -= this.z/40
       }

if (frameCount==1000){
  restart();
}
}

   run() {
    this.updatePosition();
    this.display();
  }

 }



