class Circle{
    constructor(x,y){
        var balloptions={
            restitution:1,
            isStatic:true
           }
         this.radius=30;
         this.ball=Bodies.circle(x,y,30,balloptions)
           World.add(world,this.ball);


    }
    display()
    {
        ellipseMode(RADIUS); 
        ellipse(this.ball.position.x,this.ball.position.y,this.radius,this.radius);
    }
}