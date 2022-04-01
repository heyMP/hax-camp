const loadArt = async file => {
  const art = await fetch(file).then(res => res.text());
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

const round = number => {
  return Math.round((number + Number.EPSILON) * 100) / 100;
};

AFRAME.registerComponent('ascii-art', {
  schema: {
    scale: { default: 0.05 },
    speed: { default: 0.01 },
    time: { default: 0.01 },
    file: { default: null, type: 'string' },
  },

  update: async function () {
    this.t = 0;
    const scale = this.data.scale;
    this.artPixels = await loadArt(
      new URL('../../assets/hax-hd.txt', import.meta.url)
    );

    // measure how tall and wide by finding the largest number for each
    const pixelXValues = this.artPixels.map(pixel => pixel.xPosition);
    const pixelYValues = this.artPixels.map(pixel => pixel.yPosition);
    const pixelXMin = Math.min(...pixelXValues);
    const pixelXMax = Math.max(...pixelXValues);
    const pixelYMin = Math.min(...pixelYValues);
    const pixelYMax = Math.max(...pixelYValues);

    const containerMesh = this.el.getObject3D('mesh');
    const containerWidth = containerMesh.geometry.parameters.width;
    const containerHeight = containerMesh.geometry.parameters.height;
    const adjustedWidth = containerWidth / pixelXMax;
    const adjustedHeight = containerHeight / pixelYMax;

    this.artPixels.forEach((pixel, index) => {
      var material = new THREE.MeshBasicMaterial({ color: 'blue' });
      var geometry = new THREE.BoxGeometry(
        adjustedWidth,
        adjustedHeight,
        containerMesh.geometry.parameters.depth
      );
      var cube = new THREE.Mesh(geometry, material);
      cube.position.x = pixel.xPosition * adjustedWidth - containerWidth * 0.5;
      cube.position.y = pixel.yPosition * adjustedHeight - containerWidth * 0.5;

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
