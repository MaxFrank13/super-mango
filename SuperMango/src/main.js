// TODO: learn about esbuild or change to vite?
// TODO: make an init function for all of this

import k from "./kaboomContext";
import { setUpPlayer } from "./player";

// Load bg image
k.loadSprite("level_01", "sprites//aardvark_map_01.png");

// Add bg image
// k.loadSprite("yellow-bg", "sprites//backgrounds/Yellow.png");
// add([
//   sprite("yellow-bg"),
//   pos(width() / 2, height() / 2),
//   // Allow the background to be scaled
//   scale(25),
//   // Keep the background position fixed even when the camera moves
//   fixed(),
//   // TODO: try out anchor() component
//   anchor("center"),
// ]);

// Set fallback bg color
setBackground(Color.fromHex('#5ba69f'));

// // Set the gravity acceleration (pixels per second)
setGravity(1600);

k.scene("aardvark_level_01", async () => {
  const mapData = await (await fetch("sprites//aardvark_map_01.json")).json();
  const layers = mapData.layers;

  const map = k.add([k.sprite("level_01"), k.pos(0), k.scale(20)]);

  const player = setUpPlayer(k);

  layers.forEach(({ name, objects }) => {
    if (name === "collision") {
      objects.forEach(collisionObject => {
        map.add([
          area({
            shape: new Rect(vec2(0), collisionObject.width, collisionObject.height),
          }),
          body({ isStatic: true }),
          k.pos(collisionObject.x, collisionObject.y),
          collisionObject.name,
        ]);
      });
    }
  });

  k.add(player);
});

k.go("aardvark_level_01");


/** To resize cam with viewport?
 * k.onResize(() => {
    setCamScale(k);
  });
 */

// debug.inspect = true;

// TODO: NEXT: create map using Tiled & json file method from first tutorial
// Add a platform to hold the player
// add([
// 	rect(width(), 75),
// 	outline(4),
// 	area(),
// 	pos(0, height() - 80),
// 	// Give objects a body() component if you don't want other solid objects pass through
// 	body({ isStatic: true }),
// ]);

// add([
// 	rect(width(), 75),
// 	outline(4),
// 	area(),
// 	pos(500, height() - 200),
// 	// Give objects a body() component if you don't want other solid objects pass through
// 	body({ isStatic: true }),
// ]);

