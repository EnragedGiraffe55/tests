const gameState = {

}

function preload()
{
  this.load.image('test1','assets/yeet.png');
  this.load.spritesheet('run2','assets/run.png', { frameWidth: 72, frameHeight: 90 });
  this.load.spritesheet('run','assets/run2.png', { frameWidth: 240, frameHeight: 450 });
}

function create()
{
gameState.active = true;

gameState.player = this.physics.add.sprite(100,100,'test1');
//gameState.run = this.physics.add.sprite(200,200,'run');
gameState.run2 = this.physics.add.sprite(150,150,'run2');

gameState.player.setScale(1);
gameState.run2.setScale(.2);

gameState.cursors = this.input.keyboard.createCursorKeys();
gameState.cursors.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
gameState.cursors.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
gameState.cursors.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
gameState.cursors.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

this.anims.create({
  key: 'run',
  frames: this.anims.generateFrameNumbers('run', { start: 0, end: 2 }),
      frameRate: 3,
      repeat: -1
})
}


function update()
{
if (gameState.active){
if (gameState.cursors.keyA.isDown) {
    gameState.run2.setVelocityX(-160);
    gameState.run2.anims.play('run',true);
    gameState.run2.flipX = true;
  } else if (gameState.cursors.keyD.isDown) {
    gameState.run2.setVelocityX(160);
    gameState.run2.anims.play('run',true);
    gameState.run2.flipX = false;
  } else {
    gameState.run2.setVelocityX(0);
    gameState.run2.anims.play('run',false);
  }

if (gameState.cursors.keyW.isDown) {
    gameState.run2.setVelocityY(-160);
  } else if (gameState.cursors.keyS.isDown) {
    gameState.run2.setVelocityY(160);
  } else {
    gameState.run2.setVelocityY(0);
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
    },
    }
};

const game = new Phaser.Game(config);