// TODO: learn about esbuild or change to vite?
// TODO: make an init function for all of this
import kaboom from "kaboom";

// TODO: NEXT: make Player class
import { createPlayer } from "./player";
import { Camera, Level } from "./lib";
import { load } from "./utils";

const init = () => {
  kaboom({
    height: 768,
    width: 1024,
    touchToMouse: true,
    canvas: document.querySelector('#super_mango'),
  });

  // debug.inspect = true;

  load.assets();

  // Set fallback bg color
  setBackground(Color.fromHex('#5ba69f'));

  // Set the gravity acceleration (pixels per second)
  setGravity(1600);

  const scenes = {
    aardvark_01_level: async () => {
      const level = new Level();
      // await to fetch data so player is added after
      await level.drawMapLayout("aardvark_01_level");
      const player = createPlayer();
      add(player);

      const camera = new Camera();
      camera.attach(player);
    },
    // Add more scenes here
  };

  Object.keys(scenes).forEach((tag) => {
    scene(tag, scenes[tag]);
  });

  go("aardvark_01_level");

  /** To resize cam with viewport?
   *
   * onResize(() => {
       setCamScale(k);
     });
   */

  // Add a platform to hold the player
  // add([
  // 	rect(width(), 75),
  // 	outline(4),
  // 	area(),
  // 	pos(0, height() - 80),
  // 	// Give objects a body() component if you don't want other solid objects pass through
  // 	body({ isStatic: true }),
  // ]);
};

init();
