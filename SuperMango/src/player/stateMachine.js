// TODO: need to establish a pattern for how state machine is used
// Does it just control the animations?
// What else belongs in these callbacks?
// Should other components just call "enterState" and have this callback handle the rest?

export const setUpPlayerStateMachine = (player) => {
  player.onStateEnter("run", () => {
    if (player.curAnim() !== "run") player.play("run");
    player.isMoving = true;
  });
  player.onStateEnter("idle", () => {
    player.play("idle");
    player.isMoving = false;
  });
  player.onStateEnter("falling", () => {
    player.play("falling");
  });
  player.onStateEnter("jump", () => {
    player.play("jump");
    player.jump();
  });

  player.onGround(() => {
    if (!player.isMoving) {
      player.enterState("idle");
    } else {
      player.speed = 50;
      // TODO: We may need a landed state? Or at least an animation to stall and prevent idle from playing
      player.enterState("run")
      wait(0.2, () => player.speed = 250);
    }
  })
  // player.onStateUpdate("falling", () => {
  //   if (player.isGrounded()) {
  //     if (player.isMoving) {
  //       player.speed = 50;
  //       wait(0.2, () => {
  //         player.enterState("run")
  //         player.speed = 250;
  //       });
  //     } else {
  //       player.enterState("idle");
  //     }
  //   }
  // });
};

export default setUpPlayerStateMachine;
  