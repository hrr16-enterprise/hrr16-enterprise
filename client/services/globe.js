import topojson from 'topojson';

const autorotate = (degPerSec) => {
  return (planet) => {
    let lastTick = null;
    let paused = false;

    planet.plugins.autorotate = {
      pause: () => { paused = true; },
      resume: () => { paused = false; }
    };

    planet.onDraw(() => {
      if (paused || !lastTick) {
        lastTick = new Date();
      } else {
        const now = new Date();
        const delta = now - lastTick;
        const rotation = planet.projection.rotate();
        rotation[0] += degPerSec * delta / 1000;
        if (rotation[0] >= 180) rotation[0] -= 360;
        planet.projection.rotate(rotation);
        lastTick = now;
      }
    });
  };
};

let lakes = (options) => {
  options = options || {};
  lakes = null;

  return (planet) => {
    planet.onInit(() => {
      const world = planet.plugins.topojson.world;
      lakes = topojson.feature(world, world.objects.ne_110m_lakes);
    });

    planet.onDraw(() => {
      planet.withSavedContext((context) => {
        context.beginPath();
        planet.path.context(context)(lakes);
        context.fillStyle = options.fill || 'black';
        context.fill();

        if (options.stroke) {
          context.strokeStyle = options.stroke || 'black';
          context.lineWidth = 1;
          context.stroke();
        }
      });
    });
  };
};

module.exports = {
  autorotate,
  lakes
};
