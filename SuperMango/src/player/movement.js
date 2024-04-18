const setUpMovement = (player) => {
  // This is to make sure the correct anim plays while in air and when landing
  // TODO: consider making an "in air" state?
  onKeyPress("left", () => {
    player.enterState("run");
  });
  onKeyPress("right", () => {
    player.enterState("run");
  });

  // onKeyDown() registers an event that runs every frame as long as user is holding a certain key
  onKeyDown("left", () => {
    // .move() is provided by pos() component, move by pixels per second
    player.move(-player.speed, 0);
    player.flipX = true;
  });
  
  onKeyDown("right", () => {
    player.move(player.speed, 0);
    player.flipX = false;
  });

  // TODO: should this go in an "idle.js" file?
  onKeyRelease("left", () => {
    player.enterState("idle");
  });

  onKeyRelease("right", () => {
    player.enterState("idle");
  });
};

export default setUpMovement;