// TODO: learn about esbuild or change to vite?
// TODO: make an init function for all of this

import kaboom from "kaboom";
import { setUpPlayer } from "./player";

// Start kaboom
const k = kaboom();

// Load bg image
k.loadSprite("yellow-bg", "sprites//backgrounds/Yellow.png");

// Add bg image
add([
  sprite("yellow-bg"),
  pos(),
  // Allow the background to be scaled
  scale(20),
  // Keep the background position fixed even when the camera moves
  fixed(),
]);

// Set fallback bg color
setBackground(Color.fromHex('#5ba69f'));

// Set the gravity acceleration (pixels per second)
setGravity(1600);

const player = setUpPlayer(k);

onKeyDown("enter", () => {
  console.log("enter keyed down", player)
});

// debug.inspect = true;

// Add a platform to hold the player
add([
	rect(width(), 75),
	outline(4),
	area(),
	pos(0, height() - 80),
	// Give objects a body() component if you don't want other solid objects pass through
	body({ isStatic: true }),
]);

add([
	rect(width(), 75),
	outline(4),
	area(),
	pos(500, height() - 200),
	// Give objects a body() component if you don't want other solid objects pass through
	body({ isStatic: true }),
]);

