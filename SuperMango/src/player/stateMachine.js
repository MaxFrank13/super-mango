// TODO: need to establish a pattern for how state machine is used
// Does it just control the animations?
// What else belongs in these callbacks?
// Should other components just call "enterState" and have this callback handle the rest?

export const setUpPlayerStateMachine = (player) => {
  player.onStateEnter("idle", () => {
    player.play("idle");
    player.isMoving = false;
  });
  player.onStateEnter("jump", () => {
    player.play("jump");
    player.jump();
  });

  onUpdate("player", (player) => {
    if (player.isFalling()) {
      player.play("falling");
    }
  })

  player.onGround(() => {
    if (player.isMoving) {
      player.speed = 50;
      // TODO: Animation to stall and prevent idle from playing
      wait(0.05, () => player.speed = 250);
    } else {
      player.enterState("idle");
    }
  });
};

export default setUpPlayerStateMachine;
  