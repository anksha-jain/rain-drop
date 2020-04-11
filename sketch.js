var drops = [];
var dropCount = 500;


function preload(){

}

function setup(){

    createCanvas(640, 600);

    for(var i = 0; i < dropCount; i++){

        drops[i] = new Drop();

    }

}

function draw(){

    background(566);

    for(var i = 0; i < drops.length; i++){

        drops[i].display();
        drops[i].fall();


    }

}