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
