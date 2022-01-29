noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX=0;

function setup ()
{
    video = createCapture(VIDEO);
    video.size(550 , 500 );

    canvas = createCanvas(550 , 500);
    canvas.position(560 , 150);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotposes);
}
 function draw ()
 {
     background('#6C91C2');
     textSize(difference);
     fill('#FFE787');
     text('Sayani' , 50 , 400);

 }
  
  function modelLoaded ()
  {
      console.log('poseNet is initilized');

  }
   function gotposes (results)
   {
       if(results.length > 0 )

       {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

         console.log(results);
         leftwristX = results[0].pose.leftWrist.x;
         rightwristX = results[0].pose.rightWrist.x;
         difference = floor(leftwristX -  rightwristX);

         console.log("leftwristX  = "  + leftwristX + "rightwristX = " + rightwristX + "difference  = " + difference)


       }
    
   }
 