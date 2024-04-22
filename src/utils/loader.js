import { playerSpriteConfig } from "../player";

export const load = {
  assets: () => {
    loadSprite("aardvark_01_level", "sprites//aardvark_01_level.png");
    loadSprite("ninja-frog", "sprites//ninja-frog/ninja-frog-spritesheet.png", playerSpriteConfig);
  }
};

export default load;