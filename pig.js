/*class pig
{
  constructor(x,y)
  {
      var option={//isStatic:true
      'restitution':0.8,
      'friction':0.3,
      'density':1.0
      }
   this.pigobject=Bodies.rectangle(x,y,40,40,option);
   World.add(world,this.pigobject);
   this.height=40;
   this.width=40;
   this.image=loadImage("enemy.png")
  }
   display()
   {
     push();
     translate(this.pigobject.position.x,this.pigobject.position.y);
     rotate(this.pigobject.angle);
     fill("green");
     stroke("red");
     
     strokeWeight(4);
     imageMode(CENTER)
     image(this.image,0,0,this.width,this.height)
       //rectMode(CENTER)
    // rect(0,0,this.width,this.height)
    pop();
   }
   
   }*/
   class pig extends base
   {
     constructor(x,y,width,height)
     {
      super(x,y,width,height)
      this.image=loadImage("enemy.png")

     }

   }