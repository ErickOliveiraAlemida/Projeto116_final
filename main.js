noseX = 0
noseY = 0

function preload(){
Bigode = loadImage("https://i.postimg.cc/7L95prh1/Bigode.png")
}

function draw(){
image(video, 0, 0, 300, 300)
image(Bigode, noseX, noseY, 30, 30)
}

function setup(){
canvas = createCanvas(300, 300)
canvas.center()
video = createCapture(VIDEO)
video.size(300,300)
video.hide()
poseNet = ml5.poseNet(video, modelLoad())
classifier = ml5.imageClassifier("MobileNet", modelLoad())
poseNet.on("pose", gotPoses)
}

function takeSnapshot (){
  save("minha.foto.png")
}

function modelLoad(){
  console.log("modelLoad")
}

function gotPoses(results){
//console.log(results)/
noseX = results[0].pose.nose.x - 10
noseY = results[0].pose.nose.y - 4
}