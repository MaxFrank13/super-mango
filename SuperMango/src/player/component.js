const playerComponent = (k) => k.make([
	pos(120, 80),
	sprite("ninja-frog"),
  state("idle", ["idle", "run", "jump", "falling"]),
  area({
    shape: new Rect(vec2(10, 8), 14, 24)
  }),
  body({
    jumpForce: 900,
  }),
  scale(4),
  "player",
  {
    speed: 250,
    isMoving: false,
  },
]);

export default playerComponent;
