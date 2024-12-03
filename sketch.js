function setup() {
  // using innerwidth and innerheight applys the width and height you set in css
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(190);
  ////////////////
  // mapping
  ////////////////
  noFill();
  rect(40,40,300,120);
  fill(250,80,200);
  // width is only avaible after createCanvas has been put into setup function
  let w = map(mouseX,0,width,0,300);
  rect(40,40,w,120);

  fill(40,40,200);
  // height is only avaible after createCanvas has been put into setup function
  let h = map(mouseY,0,height,0,120);
  rect(40,40,300,h);

  
}
