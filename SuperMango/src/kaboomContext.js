import kaboom from "kaboom";

console.log(document);

const k = kaboom({
  height: 768,
  width: 1024,
  touchToMouse: true,
  canvas: document.querySelector('#super_mango'),
});

export default k;
