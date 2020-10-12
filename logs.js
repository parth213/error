/*class logs
{
  constructor(x,y,height,angle)
  {
      var option={//isStatic:true
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
      }
   this.logobject=Bodies.rectangle(x,y,20,height,option);
   World.add(world,this.logobject);
   Matter.Body.setAngle(this.logobject,angle)
   this.height=height;
   this.width=20;
   this.image=loadImage("wood2.png")
  }
   display()
   {
     push();
     translate(this.logobject.position.x,this.logobject.position.y);
     rotate(this.logobject.angle);
     fill("blue");
     stroke("green");
     strokeWeight(4);
     imageMode(CENTER)
     image(this.image,0,0,this.width,this.height)
       //rectMode(CENTER)
     //rect(0,0,this.width,this.height)
    pop();
   }


}*/
class logs extends base
{
  constructor(x,y,width,height,angle)
  {
   super(x,y,width,height,angle)
    Matter.Body.setAngle(this.boxobject,angle)
   this.image=loadImage("wood2.png")
  }

}