function preload(){
    img = loadImage('dog_cat.jpg');
    status = "";
    Object = [];
}

function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    //objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    //document.getElementById("status").innerHTML = "Status : Detecting Objects";
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}
function start()
{
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status : Detectando Objetos";
}

function draw()
{
    Image(video, 0, 0, 380, 380);

    if(status !="")
    { 
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResult)   
        for(i - 0; i <objects_lengh; i++){
            document.getElementById("status").innerHTML = "status objeto DEtectado";
            document.getElementById("numberOfObjects").innerHTML = "quantidade objetos DEtectados"+objects.lengh
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
    FileList(r,g,b);
    text("dog", 45, 75);
    noFill();
    stroke(r,g,b);
    rect(30,60, 450, 350 );

    fill("#FF0000");
    text("cat", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(30,60, 450, 350 );
}

function modelLoaded() 
{
    console.log("modelLoaded")
    status = true;
    objectDetector.detect(video, gotResult)
}

function gotResult(error, results)
{
 if(error)
 {
    console.log(error);
 }
 console.log(results);
 Object = results;
}
