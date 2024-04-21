import setUpMovement from "./movement";
import abilities from "./abilities";
import loadPlayerSprite from "./sprite";
import playerComponent from "./component";
import setUpPlayerStateMachine from "./stateMachine";

export const setUpPlayer = (k) => {
  // Load assets first
  loadPlayerSprite(k);

  // Instantiate player
  const player = playerComponent(k);

  // Set up state machine
  setUpPlayerStateMachine(player);

  onUpdate(() => {
    camPos(player.pos);
  });

  // Set up Movement
  setUpMovement(player);

  // Set up abilities
  abilities.setUpJump(player);

  // Return player for use by other components
  return player;
};

export default {
  setUpPlayer,
}
