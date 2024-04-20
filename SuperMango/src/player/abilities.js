  // TODO: figure out how to do better key mappings
  // This is also important for movement keys

export const setUpJump = (player) => {
  onKeyPress("space", () => {
    // .isGrounded() is provided by body()
    if (player.isGrounded()) {
      player.enterState("jump");
    }
  });
}
export default {
  setUpJump,
}
