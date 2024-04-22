const makePlayer = () => make([
  // TODO: get position from map data - pass as argument? or just make Player class?
  pos(39, 263.5),
  sprite("ninja-frog"),
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

export default makePlayer;
