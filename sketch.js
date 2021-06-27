var knight;
var monster;

function preload() {
    knightimg = loadAnimation("images/knight1.png");
    bgimg = loadImage("images/forest_bg.png");
    knightjimg = loadAnimation("images/j_1.png", "images/j_2.png", "images/j_3.png",
        "images/j_4.png", "images/j_5.png", "images/j_6.png", "images/j_7.png", "images/j_8.png", "images/j_9.png")
        monster_std= loadAnimation("images/monster_stding.png")
        monster_attck=loadAnimation("images/monster_attk1.png","images/monster_attk2.png","images/monster_attk3.png",
                                   "images/monster_attk4.png","images/monster_attk5.png")
}

function setup() {
    createCanvas(800, 400);
    knight = createSprite(100, 290, 10, 10);
    knight.shapeColor = "blue";
    knight.addAnimation("knight",knightimg);
    knight.addAnimation("knightjumping",knightjimg);
    
    monster = createSprite(600,290,10,10);
    monster.addAnimation("monsterstanding",monster_std);
    monster.addAnimation("monsterattack",monster_attck);
    monster.scale= 02;
     monster.debug= true;
     monster.setCollider("rectangle", 0,0, 200,100)
 
    forestbg = createSprite(350, 290, 760, 50)
    forestbg.visible = false
    //forestbg.velocityX= -5
    //forestbg.addImage(bgimg);
    //forestbg.scale= 02;
}
function draw() {
    background(bgimg);
    //if(forestbg.x < 0){
    //  forestbg.x= 250;
    // }
  
    knight.collide(forestbg);

    if (keyDown(RIGHT_ARROW)) {
        knight.x += 5;
    }

    if (keyDown(LEFT_ARROW)) {
        knight.x += -5;

    }

    if (keyWentDown(UP_ARROW)) {
        knight.velocityY = -5;
        knight.changeAnimation("knightjumping",knightjimg);
        knight.scale = 1.4

    }
    knight.velocityY += 0.2;



    
    drawSprites();
}