const gameState = {

}

function preload()
{
  this.load.image('test1','assets/yeet.png');
  this.load.image('enemy','assets/zombie1.png');
  //this.load.spritesheet('run','assets/run2.png', { frameWidth: 37, frameHeight: 69 });
  this.load.spritesheet('runner','assets/sheet.png', { frameWidth: 90, frameHeight: 150 });
}

function create()
{
gameState.active = true;

//gameState.player = this.physics.add.sprite(100,100,'test1');
gameState.enemy = this.physics.add.sprite(100,100,'enemy').setScale(.8);
//gameState.run2 = this.physics.add.sprite(150,150,'run');
gameState.run = this.physics.add.sprite(200,200,'runner');

this.physics.add.collider(gameState.run, gameState.enemy, function (){
  
})
gameState.enemy.setCollideWorldBounds(true);
gameState.run.setCollideWorldBounds(true);

//gameState.player.setScale(1);
//gameState.run2.setScale(1);
//gameState.run2.setSize(37,69,0);

gameState.cursors = this.input.keyboard.createCursorKeys();
gameState.cursors.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
gameState.cursors.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
gameState.cursors.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
gameState.cursors.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

this.anims.create({
  key: 'run',
  frames: this.anims.generateFrameNumbers('runner', { start: 2, end: 5}),
      frameRate: 3,
      repeat: -1
});

this.anims.create({
  key:'idle',
  frames: this.anims.generateFrameNumbers('runner', { start:0, end: 1}),
      frameRate: 3,
      repeat: -1
});

this.anims.create({
  key:'up',
  frames: this.anims.generateFrameNumbers('runner', { start:6, end: 7}),
      frameRate: 3,
      repeat: -1
});

this.anims.create({
  key:'down',
  frames: this.anims.generateFrameNumbers('runner', { start:8, end: 11}),
      frameRate: 3,
      repeat: -1
});


}


function update()
{
if (gameState.active){
if (gameState.cursors.keyA.isDown) {
    gameState.run.setVelocityX(-100);
    gameState.run.anims.play('run',true);
    gameState.run.flipX = true;
  } else if (gameState.cursors.keyD.isDown) {
    gameState.run.setVelocityX(100);
    gameState.run.anims.play('run',true);
    gameState.run.flipX = false;
  } else {
    gameState.run.setVelocityX(0);
    gameState.run.anims.play('idle',true);
  }

if (gameState.cursors.keyW.isDown) {
    gameState.run.setVelocityY(-100);
     gameState.run.anims.play('up',true);
  } else if (gameState.cursors.keyS.isDown) {
    gameState.run.setVelocityY(100);
     gameState.run.anims.play('down',true);
  } else {
    gameState.run.setVelocityY(0);
     gameState.run.anims.play('idle',true);
  }
}

}


const config = 
{
    type: Phaser.AUTO,
    width: 1500,
    height: 1500,
    backgroundColor: '#f9f9f9',
    scene: 
    {
        preload: preload,
        create: create,
        update: update,
    },
    physics: {
    default: 'arcade',
    arcade: {
      enableBody: true,
      debug: true
    },
    }
};

const game = new Phaser.Game(config);