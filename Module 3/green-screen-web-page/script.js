function upload() {
    var imgcanvas = document.getElementById("canvas1");
    var fileinput = document.getElementById("finput");
    // Declare "image" as a global variable
    image = new SimpleImage(fileinput);
    image.drawTo(imgcanvas);
}

function makeGray() {
    for (var pixel of image.values()){
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    var imgcanvas = document.getElementById("canvas1");
    image.drawTo(imgcanvas);
}

function uploadDouble() {
    var imgcanvas1 = document.getElementById("canvas1");
    var imgcanvas2 = document.getElementById("canvas2");
    var fileinput = document.getElementById("finput");
    image = new SimpleImage(fileinput);
    imageGray = new SimpleImage(fileinput);
    image.drawTo(imgcanvas1);
    imageGray.drawTo(imgcanvas2);
}

function makeGrayDouble() {
    for (var pixel of imageGray.values()){
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    var imgcanvas = document.getElementById("canvas2");
    imageGray.drawTo(imgcanvas);
}