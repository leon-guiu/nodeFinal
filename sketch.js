// Final project.
// Dip. Digital Arts and Interactive Technologies
// Node center for Curatorial Studies, Berlin.

// it-would-be-so-nice
// Medium: Web
// Software: Processing, p5.js
// url: http://it-would-be-so-nice.neocities.org/node/index.html

// Author: Fernando León-Guiu
// Year: 2015

var img1;
var img2;
var img3;
var img4;
var img5;

var img11;
var img12;
var img13;
var img14;
var img15;
var img16;

var img21;
var img22;
var img23;
var img24;
var img25;
var img26;
var img27;

var gun;
var font;
var option = 1;

function preload() {

  font = loadFont("https://dl.dropboxusercontent.com/u/15335326/WebFonts/source-code-pro/SourceCodePro-Regular.otf");

  img1 = loadImage("1-disneyland_castle.jpg");
  img2 = loadImage("20140118_bkp505.jpg");
  img3 = loadImage("AlQaedasboycommandos3-_tr1y.jpg");
  img4 = loadImage("9d368772b038e49aaa27d2229c022298.jpg");
  img5 = loadImage("isil_kids.jpg");
  img6 = loadImage("islamic-state-child-soldiers.jpg");

  img11 = loadImage("runway1.jpg");
  img12 = loadImage("7225539_orig.jpg");
  img14 = loadImage("child-works-textile-factory-bangladesh.jpeg");
  img15 = loadImage("29abf3fb65b0ff348f3f92299fc7f4b21698843764-1301571404-4d94674c-620x348.jpg");
  img16 = loadImage("sm-image-24-219938597.jpg");
  img17 = loadImage("Blue-Dragon-Anti-Trafficking-Child-labour-Boy-in-Garment-Factory.jpg");

  img21 = loadImage("dt63iraqtgkkqy2gjasv.jpg");
  img22 = loadImage("2A29C62300.jpg");
  img23 = loadImage("Waste-dumps--Childre-010.jpg");
  img24 = loadImage("MDG--Waste-Dump--Tibar-ga-009.jpg");
  img25 = loadImage("mickeyDump.jpg");
  img26 = loadImage("GTY_syrian_boys_forage_garbage_jt_141220_16x9_992.jpg");
  img27 = loadImage("130605141731-andc-sreyna-150-horizontal-large-gallery.jpg");

  gun = loadSound("Gun_Shot.mp3");
}

function setup() {

  createCanvas(1000, 900);
  textFont(font);
  noStroke();
  fill(220);
}

function draw() {

  background(0);

  if (option == 1) {

    textSize(23);
    text("It would be so nice if something would make sense for a change", 70, 325);
    noStroke()

  }

  if (option == 2) {

    var aspect1 = img1.height / img1.width;
    var imageWidth1 = 1000;
    var imageHeight1 = imageWidth1 * aspect1;
    image(img1, 0, 0, imageWidth1, imageHeight1);

    var aspect2 = img2.height / img2.width;
    var imageWidth2 = 330;
    var imageHeight2 = imageWidth2 * aspect2;
    image(img2, 630, 300, imageWidth2, imageHeight2);

    var aspect3 = img3.height / img3.width;
    var imageWidth3 = 290;
    var imageHeight3 = imageWidth3 * aspect3;
    image(img3, 40, 310, imageWidth3, imageHeight3);

    var aspect4 = img4.height / img4.width;
    var imageWidth4 = 250;
    var imageHeight4 = imageWidth4 * aspect4;
    image(img4, 350, 530, imageWidth4, imageHeight4);

    var aspect5 = img5.height / img5.width;
    var imageWidth5 = 210;
    var imageHeight5 = imageWidth5 * aspect5;
    image(img5, 70, 560, imageWidth5, imageHeight5);

    var aspect6 = img6.height / img6.width;
    var imageWidth6 = 300;
    var imageHeight6 = imageWidth6 * aspect6;
    image(img6, 650, 580, imageWidth6, imageHeight6);


  } else if (option == 3) {

    var aspect11 = img11.height / img11.width;
    var imageWidth11 = 1000;
    var imageHeight11 = imageWidth11 * aspect11;
    image(img11, 0, 0, imageWidth11, imageHeight11);

    var aspect12 = img12.height / img12.width;
    var imageWidth12 = 340;
    var imageHeight12 = imageWidth12 * aspect12;
    image(img12, 15, 80, imageWidth12, imageHeight12);

    var aspect14 = img14.height / img14.width;
    var imageWidth14 = 350;
    var imageHeight14 = imageWidth14 * aspect14;
    image(img14, 630, 70, imageWidth14, imageHeight14);

    var aspect15 = img15.height / img15.width;
    var imageWidth15 = 380;
    var imageHeight15 = imageWidth15 * aspect15;
    image(img15, 310, 630, imageWidth15, imageHeight15);

    var aspect16 = img16.height / img16.width;
    var imageWidth16 = 310;
    var imageHeight16 = imageWidth16 * aspect16;
    image(img16, 685, 380, imageWidth16, imageHeight16);

    var aspect17 = img17.height / img17.width;
    var imageWidth17 = 300;
    var imageHeight17 = imageWidth17 * aspect17;
    image(img17, 10, 370, imageWidth17, imageHeight17);


  } else if (option == 4) {
    background(0);

    var aspect21 = img21.height / img21.width;
    var imageWidth21 = 800;
    var imageHeight21 = imageWidth21 * aspect21;
    image(img21, 100, 225, imageWidth21, imageHeight21);

    var aspect22 = img22.height / img22.width;
    var imageWidth22 = 280;
    var imageHeight22 = imageWidth22 * aspect22;
    image(img22, 360, 30, imageWidth22, imageHeight22);

    var aspect23 = img23.height / img23.width;
    var imageWidth23 = 280;
    var imageHeight23 = imageWidth23 * aspect23;
    image(img23, 690, 30, imageWidth23, imageHeight23);

    var aspect24 = img24.height / img24.width;
    var imageWidth24 = 280;
    var imageHeight24 = imageWidth24 * aspect24;
    image(img24, 30, 700, imageWidth24, imageHeight24);

    var aspect25 = img25.height / img25.width;
    var imageWidth25 = 280;
    var imageHeight25 = imageWidth25 * aspect25;
    image(img25, 360, 700, imageWidth25, imageHeight25);

    var aspect26 = img26.height / img26.width;
    var imageWidth26 = 280;
    var imageHeight26 = imageWidth26 * aspect26;
    image(img26, 30, 30, imageWidth26, imageHeight26);

    var aspect27 = img27.height / img27.width;
    var imageWidth27 = 280;
    var imageHeight27 = imageWidth27 * aspect27;
    image(img27, 690, 700, imageWidth27, imageHeight27);
  }
}

function mousePressed() {

  option++;
  gun.play();
  if (option > 4) option = 1;
}
