const density = 'Ñ@#W$9876543210?!abc;:+=-,._          ';


let video;
let asciiDiv;

function setup() {
  noCanvas();
  video = createCapture(VIDEO);
  video.size(50,50);
  asciiDiv = createDiv();
  
}

function draw() {
  background(0);
  video.loadPixels();
  let row ='';
  for(let j = 0; j < video.width; j++){
    
    for(let i =0; i < video.height; i++){
     const pixelIndex = (i+j*video.width)*4;
      const r = video.pixels[pixelIndex +0];
      const g = video.pixels[pixelIndex+1];
      const b = video.pixels[pixelIndex+2];
      let avg = (r+g+b)/3;
      noStroke();
      fill(255);
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255,len,0));
     
      const c = density.charAt(charIndex);
      if(c==' ')
        row += '&nbsp';
      else
        row += c;
    } 
   row += '<br/>';
  }
  asciiDiv.html(row);
}