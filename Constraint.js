/*class Rope{

    constructor(bodyA, bodyB){

        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:1
        }

        //this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world,this.rope);

    }

    release(){
        this.rope.bodyA=null;
    }

    display(){

            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyA.position;
            stroke(255);
            strokeWeight(6);
            
            line(pointA.x, pointA.y, pointB.x,pointB.y);



        }


    }


*/
class Rope{

    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;

        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        
        }

        this.rope = Constraint.create(options);
        World.add(world,this.rope);


    }

    display(){

        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        stroke(20);
        line(pointA.x, pointB.x, pointA.y, pointB.y)
        

    }











}
