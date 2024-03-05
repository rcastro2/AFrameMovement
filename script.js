let player, scene;
let floatingPlatforms = [], platforms = [], droppingPlatforms = [];
let maze = [
  "--xxxxx-----xxxxxxxxxx",
  "------x-----x--------x",
  "------x-----x--------x",
  "--x---xxxxxxx----xx--x",
  "--x-----xxx------xx--x",
  "--x--------------xx--x",
  "--x---xxxxxxxxxxxxx--x",
  "--xx---xxx--------x--x",
  "---xx---xxxxxxx---x--x",
  "----xx-------xx---x--x",
  "-----xx-----xx----x--x",
  "------xx---xxxxxxxx--x",
  "-------xx------------x",
  "--------x------------x",
  "--------xxxxxxxxxxxxxx",
];

window.onload = function(){
  scene = document.querySelector("a-scene");
  player = new Player("a-camera");

  for(let z = 0; z < maze.length; z++){
    let cols = maze[z].split("");
    for(let x = 0; x < cols.length; x++){
      if(cols[x] == "x"){
        let b = new Block(x-4,0.5,z-4);
        b.removable = true;
      }
    }
  }

  for(let z = 0; z < maze.length; z++){
    
      new Block(0,z / 4,-z-4);

  }

  for(let i = 2; i < 8; i++){
    let p = new Platform(-5,i,-i * 1.5);
    if(i % 2 == 0){
      p.dy = -p.dy;
    } 
    floatingPlatforms.push(p);
  }

  for(let i = 12; i <= 28; i+=4){
    droppingPlatforms.push(new Platform(i,1,0))
  }

  platforms.push(new Platform(28,1,5));
  platforms.push(new Platform(24,1,5));
  platforms.push(new Platform(20,1,5));
  platforms.push(new Platform(16,1,5));
  platforms.push(new Platform(12,1,5));
  
  setTimeout(loop,100);
}

function loop(){
  player.update();  

  for(let platform of platforms){
    platform.cameraLanded(player);
  }
  for(let platform of floatingPlatforms){
    platform.float();
  }
  for(let platform of droppingPlatforms){
    if(platform.cameraLanded(player)){
      platform.drop = true;
    }
   platform.fall(0.03);
  }
  window.requestAnimationFrame(loop);
}