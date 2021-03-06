class Drop{

    constructor(){

        this.x = random(width);
        this.y = random(-50, -500);
        this.z = random(0, 20);
        this.len = map(this.z, 0, 20, 10, 20);
        this.yspeed = map(this.z, 0, 20, 1, 20);
       

    }

    fall(){

        this.y = this.y + this.yspeed;
        this.grav = map(this.z, 0, 20, 0, 0.2);
        this.yspeed = this.yspeed + this.grav;

        if(this.y > height){

            this.y = random(-200, -50);
            this.yspeed = map(this.z, 0, 20, 4, 10);   
    
        }
    
    }

    display(){

        var thick = map(this.z, 0, 20, 1, 3);
        strokeWeight(thick);
        stroke("red");
        line(this.x, this.y, this.x, this.y + 10);

    }
   
}