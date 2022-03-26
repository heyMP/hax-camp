const loadArt = async file => {
  const art = await fetch(new URL(file, import.meta.url)).then(res =>
    res.text()
  );
  const values = Array.from(art);
  const uniqueValues = new Set(values);
  const columns = art.split('\n').reverse();
  const artPixelsMatrix = columns.map((column, columnIndex) =>
    Array.from(column)
      .map((value, pixelIndex) => ({
        value,
        xPosition: pixelIndex,
        yPosition: columnIndex,
      }))
      .filter(item => [' '].includes(item.value))
  );

  return artPixelsMatrix.flatMap(item => item);
};

AFRAME.registerComponent('ascii-art', {
  schema: {
    scale: { default: 1 },
    speed: { default: 1 },
    time: { default: 0.01 },
    file: { default: null, type: 'string' },
  },

  init: async function () {
    this.t = 0;
    const scale = this.data.scale;
    this.artPixels = await loadArt('../../assets/hax-hd.txt');
    this.artPixels.forEach((pixel, index) => {
      var material = new THREE.MeshBasicMaterial({ color: 'blue' });
      var geometry = new THREE.BoxGeometry(1 * scale, 1 * scale, 5 * scale);
      var cube = new THREE.Mesh(geometry, material);
      cube.position.x = pixel.xPosition * scale;
      cube.position.y = pixel.yPosition * scale;
      this.el.setObject3D('mesh' + index, cube); //unique name for each object
    });
  },

  // update: function () {},

  tick: function (time, timeDelta) {
    // // console.log('timeDelta:', timeDelta)
    // const currentPosition = this.el.object3D.position; // Reference to the component's entity.
    // // https://stackoverflow.com/questions/23541879/move-object-along-splinecircle-in-three-js
    // this.t += this.data.time;
    // const speed = this.data.speed;
    // this.el.setAttribute('position', {
    //   x: currentPosition.x, //these to strings make it work
    //   y:
    //     Math.sin(this.t * (2 * Math.PI) * -(1 / 4)) * speed + currentPosition.y, //these to strings make it work
    //   z: Math.cos(this.t * (2 * Math.PI) * (1 / 4)) * speed + currentPosition.z, //these to strings make it work
    // });
  },
});
