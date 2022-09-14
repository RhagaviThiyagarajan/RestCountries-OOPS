function Circle(radius,color)
{
    this.radius=1.0;
    this.color="red";


    if(typeof(radius)!=='undefined')
    {
        this.radius=radius;
    }
    if(typeof(color)!=='undefined')
    {
        this.color=color;
    }
}

Circle.prototype.getRadius=function()
{
    return this.radius;
}
Circle.prototype.setRadius=function()
{
    return this.radius;
}
Circle.prototype.getColor=function()
{
    return this.color;
}
Circle.prototype.setColor=function()
{
    return this.color;
}


Circle.prototype.toString=function()
{
    return 'Radius:' +this.radius + 'Color:' +this.color;
}

Circle.prototype.getArea=function()
{
    return (2*(Math.PI)*this.radius);
}


Circle.prototype.getCircumferance=function()
{
    return(2*this.radius);
    
};
return Circle;



var c1=new Circle();
console.log('constructor with no params' + c1.toString());


c3.setRadius(3.3);
console.log('Radius value is:'+ c3.getRadius());

c3.setColor('pink');
console.log('new color is' +c3.getColor());
console.log(c3.toString());


console.log('area'+ c3.getArea());
console.log('circumferance:'+ c3.getCircumferance());
