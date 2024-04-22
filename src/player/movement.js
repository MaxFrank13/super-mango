// TODO: NEXT fix key mapping

const setUpMovement = (player) => {
  // onKeyDown() registers an event that runs every frame as long as user is holding a certain key
  onKeyDown("left", () => {
    if (player.curAnim() !== "run" && player.isGrounded()) player.play("run");
    player.isMoving = true
    // .move() is provided by pos() component, move by pixels per second
    player.move(-player.speed, 0);
    player.flipX = true;
  });

  onKeyDown("right", () => {
    if (player.curAnim() !== "run" && player.isGrounded()) player.play("run");
    player.isMoving = true
    player.move(player.speed, 0);
    player.flipX = false;
  });

  onKeyRelease(() => {
    if (isKeyReleased("right") || isKeyReleased("left")) {
      player.isMoving = false;
      if (player.isGrounded()) player.play("idle");
    }
  });
};

export default setUpMovement;