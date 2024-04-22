import { getMapData } from "../utils";

export default class Level {
  async drawMapLayout(tag) {
    const mapData = await getMapData(`sprites//${tag}.json`);

    const { layers } = mapData;

    const map = add([sprite(tag), pos(0), scale(4)]);

    layers.forEach(({ name, objects }) => {
      if (name === "collision") {
        objects.forEach(collisionObject => {
          map.add([
            area({
              shape: new Rect(vec2(0), collisionObject.width, collisionObject.height),
            }),
            body({ isStatic: true }),
            pos(collisionObject.x, collisionObject.y),
            collisionObject.name,
          ]);
        });
      }
    });
  }
};
