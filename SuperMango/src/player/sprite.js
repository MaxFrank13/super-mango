// TODO: is this too much extraction? maybe just the config options should live here?
const loadPlayerSprite = (k) => k.loadSprite("ninja-frog", "sprites//ninja-frog/ninja-frog-spritesheet.png", {
  sliceX: 12,
  sliceY: 4,
  anims: {
    idle: {
      from: 0,
      to: 10,
      loop: true,
    },
    run: {
      from: 12,
      to: 23,
      loop: true,
    },
    jump: {
      from: 36,
      to: 36,
    },
    falling: {
      from: 37,
      to: 37,
    },
  },
});

export default loadPlayerSprite;
