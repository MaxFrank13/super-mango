// TODO: figure out how to do better key mappings
// This is also important for movement keys

export const setUpJump = (player) => {
  onKeyPress("space", () => {
    // .isGrounded() is provided by body()
    if (player.isGrounded()) {
      player.play("jump");
      player.jump();
    }
  });
}
export default {
  setUpJump,
}
