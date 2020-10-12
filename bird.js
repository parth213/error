/*class bird
{
  constructor(x,y,width,height)
  {
      var option={//isStatic:true
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
      }
   this.birdobject=Bodies.rectangle(x,y,width,height,option);
   World.add(world,this.birdobject);
   this.height=height;
   this.width=width;
   this.image=loadImage("bird.png")
  }
   display()
   {
     this.birdobject.position.x=mouseX
     this.birdobject.position.y=mouseY
     push();
     translate(this.birdobject.position.x,this.birdobject.position.y);
     rotate(this.birdobject.angle);
     fill("blue");
     stroke("green");
     strokeWeight(4);
     imageMode(CENTER)
     image(this.image,0,0,this.width,this.height)
      // rectMode(CENTER)
    // rect(0,0,this.width,this.height)
    pop();
   }


}*/
class bird extends base
{
 constructor(x,y,width,height)
 {
  super(x,y,width,height)
  this.image=loadImage("bird.png")

 }
 display()
 {
  this.boxobject.position.x=mouseX
     this.boxobject.position.y=mouseY
     super.display()

 }

}