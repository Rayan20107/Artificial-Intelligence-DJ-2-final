song=""

function draw()
{
    
}

function preload()
{
    song=loadSound("music.mp3")
}

function setup()
{
    canvas=createCanvas(500, 500);
    canvas.center();
}

function play()
{
    song.play();
}
