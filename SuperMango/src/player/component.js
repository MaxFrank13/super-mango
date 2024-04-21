const playerComponent = (k) => k.make([
	pos(39, 263.5),
	sprite("ninja-frog"),
  state("idle", ["idle", "run", "jump", "falling"]),
  area({
    shape: new Rect(vec2(10, 8), 14, 24)
  }),
  body({
    jumpForce: 1000,
  }),
  scale(4),
  "player",
  {
    speed: 300,
    isMoving: false,
  },
]);

export default playerComponent;
