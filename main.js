video = "";
function preload(){
    video=createVideo('video.mp4');
   
}
function setup(){
    canvas=createCanvas(480,380);
    video.hide();
    canvas.center();
}
function draw(){
    image(video,0,0,480,380);
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="Status:dectando objetos";
}
function modelloaded(){
    console.log("modelo carregado");
    video.loop();
    video.speed(1);
    video.volume(0);
}