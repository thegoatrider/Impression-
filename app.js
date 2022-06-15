var c;
var rect;
var homelogo;
var weirdo;
var call, mail,location;
function preload(){
homelogo = loadImage("LOGO.jpg");
weirdo = loadImage("rksukk.jpg");
call = loadImage("CALL.png");
mail = loadImage("MAIL.png");
location = loadImage("LOCATION.png");
}

function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw (){
    background('white');
    rect(0,70,3050,300);
    fill(204, 101, 192, 127);
    rect(0,0,3050,70);

    imageMode (CENTER);
    image(homelogo,420,220);
    homelogo.resize(750, 200);
   
    fill(0, 0, 0);
    textSize(45);
    textFont('Georgia');
    text('“I feel honored and it gives me immense pleasure to  introduce myself through ', 1400, 800);
   
    fill(0, 0,0);
    textSize(50);
    textFont('Georgia');
    text('M/s. IMPRESSION FURNITURE INDUSTRIES Pvt. Ltd.', 1400, 900);

    fill(0, 0,0);
    textSize(45);
    textFont('Georgia');
    text('this is an emotional moment for me', 1400, 1000);

    imageMode (CENTER);
    image(weirdo,700,800);
    weirdo.resize(1200,800);

    imageMode (CENTER);
    image(call,100,33);
    call.resize(110,80);

    fill(0, 0,0);
    textSize(45);
    textFont('Georgia');
    text('+91xxxxxxxxxx', 150, 45);

    imageMode (CENTER);
    image(mail,700,43);
    mail.resize(90,90);

    imageMode (CENTER);
    image(location,700,43);
    location.resize(90,90);
   
}






