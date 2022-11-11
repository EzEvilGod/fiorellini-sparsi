let w = 600
let h = 300
let x
let y 
let d
let Vx
let Vy

function setup() 
{
    x = random(w)
    y = random(h)
    d = random(25,64)
    Vx = - 10
    Vy = 5
    createCanvas(w, h);
}

function draw()
{
    background("pink");
    fiore(x,y,d)
    x = x + Vx
    y = y + Vy
    if(x < 0)
        {
        Vx = + 1
        }
    if(x > w)
        {
        Vx = - 1
        }
    if(y < 0)
        {
        Vy = + 1
        }
    if(y > h)
        {
        Vy = - 1 
        }
}


function fiore(x,y,d)
{
  
  let x1 = x - d/2
  
  let x2 = x + d/2

  let y1 = y - d/2
  
  let y2 = y + d/2

  circle(x1,y1,d)
  fill("yellow")
  circle(x2,y1,d)
  fill("yellow")
  circle(x1,y2,d)
  fill("yellow")
  circle(x2,y2,d)
  fill("red")
  circle(x,y,d)
  fill("yellow")

  
}