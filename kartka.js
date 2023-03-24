import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

// wczytywanie obrazkow

loadSprite("tlo","mmc.png")
loadSprite("tlo2", "mmc3.png")
loadSprite("warstwa", "mmc2.png")

loadSound("muzyka","CICHA_NOC.mp3")

const w = add([
    sprite("tlo"),
    pos(0,0)
]);

onMouseRelease(()=>play("muzyka"))

//add([sprite("warstwa"), pos(0,0)])

let i = 0

let otwarte = true

loop(2, ()=>{
    
    if(otwarte) 
    
    {
      w.use(sprite("tlo2"))
      otwarte = false
    }

    

    else 

    {
      w.use(sprite("tlo"))
      otwarte = true
    }

    
})

