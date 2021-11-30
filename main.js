NoseX=0;
NoseY=0;   
difference=0;
LeftwristX=0;
RightwristX=0; 


function setup()
{
    video = createCapture(VIDEO);
    video.size(550 , 500)
   canvas = createCanvas(550 , 550);
   canvas.position(600 , 130);

   posenet = ml5.poseNet(video , modelLoaded);
   posenet.on('pose' , gotPoses);
}

function modelLoaded()
{
    console.log("Posenet Is Loaded!");
}

function draw()
{
        background('#80ff00');
    document.getElementById("result").innerHTML = "Width and Height of the square will be: " + difference + "px";


    fill('#ff008c');
    stroke('#ff008c');
    square(NoseX , NoseY , difference);
    
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        console.log("noseX = " + NoseX + " noseY = " + NoseY);

        LeftwristX = results[0].pose.leftWrist.x;
        RightwristX = results[0].pose.rightWrist.x;
        difference = floor(LeftwristX - RightwristX);

        console.log("leftWristX = " + LeftwristX + " rightWristX = " + RightwristX + " difference = " + difference );

      
    
    }

    
}



