class rope
{
 constructor(ob1,ob2)
 {
  var options={
      bodyA:ob1.body,
      bodyB:ob2.body,
      length:10,
      stiffness:0.04
      

  }
  this.object1=Constraint.create(options)
  World.add(world,this.object1);


 }
 display()
 {
     line(this.object1.ob1.body.position.x,this.object1.ob1.body.position.y,this.object1.ob2.body.position.x,this.object1.ob2.body.position.y)
 }

}