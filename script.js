const gameState = {

}

function preload()
{
  this.load.image('test1','assets/yeet.png');
  this.load.image('test2','assets/yeet.png');
  this.load.spritesheet('run','assets/run.png', { frameWidth: 72, frameHeight: 90 })
}

function create()
{
gameState.active = true

gameState.player = this.physics.add.sprite(100,100,'test1');
gameState.run = this.physics.add.sprite(200,200,'run');

gameState.player.setScale(1);

gameState.cursors = this.input.keyboard.createCursorKeys();
gameState.cursors.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
gameState.cursors.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
gameState.cursors.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
gameState.cursors.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

this.anims.create({
  key: 'run',
  frames: this.anims.generateFrameNumbers('run', { start: 0, end: 3 }),
      frameRate: 5,
      repeat: -1
})
}


function update()
{
if (gameState.active){
if (gameState.cursors.keyA.isDown) {
    gameState.run.setVelocityX(-160);
    gameState.run.anims.play('run',true);
    gameState.run.flipX = true;
  } else if (gameState.cursors.keyD.isDown) {
    gameState.run.setVelocityX(160);
    gameState.run.anims.play('run',true);
    gameState.run.flipX = false;
  } else {
    gameState.run.setVelocityX(0);
    gameState.run.anims.play('run',false);
  }

if (gameState.cursors.keyW.isDown) {
    gameState.run.setVelocityY(-160);
  } else if (gameState.cursors.keyS.isDown) {
    gameState.run.setVelocityY(160);
  } else {
    gameState.run.setVelocityY(0);
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