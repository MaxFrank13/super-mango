import setUpMovement from "./movement";
import abilities from "./abilities";
import makePlayer from "./component";
import playerSpriteConfig from "./sprite";

const createPlayer = () => {
  // Instantiate player
  const player = makePlayer();

  onUpdate("player", (player) => {
    if (player.isFalling()) {
      player.play("falling");
    }
    player.onGround(() => {
      if (!player.isMoving) {
        player.play("idle");
      }
    });
  });

  // Set up Movement
  setUpMovement(player);

  // Set up abilities
  abilities.setUpJump(player);

  // Return player for use by other components
  return player;
};

export {
  createPlayer,
  playerSpriteConfig,
}
