import { connect } from 'react-redux';
import GlobeComponent from '../components/Globe';

const mapDispatchToProps = (dispatch) => {
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

  const lakes = (options) => {
    options = options || {};
    let lakes = null;

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
        });
      });
    };
  };

  return {
    instantiateGlobe: () => {
      const globe = planetaryjs.planet();
        globe.loadPlugin(autorotate(10));
        globe.loadPlugin(planetaryjs.plugins.earth({
          topojson: { file: 'https://raw.githubusercontent.com/darul75/ng-planetaryjs/master/public/world-110m-withlakes.json' },
          oceans: { fill: '#000080' },
          land: { fill: '#339966' },
          borders: { stroke: '#008000' }
        }));
        globe.loadPlugin(lakes({
          fill: '#000080'
        }));
        globe.loadPlugin(planetaryjs.plugins.pings());
        globe.loadPlugin(planetaryjs.plugins.zoom({
          scaleExtent: [100, 300]
        }));
        globe.loadPlugin(planetaryjs.plugins.drag({
          onDragStart: () => {
            this.plugins.autorotate.pause();
          },
          onDragEnd: () => {
            this.plugins.autorotate.resume();
          }
        }));
        globe.projection.scale(175).translate([175, 175]).rotate([0, -10, 0]);

        const colors = ['red', 'yellow', 'white', 'orange', 'green', 'cyan', 'pink'];
        setInterval(() => {
          const lat = Math.random() * 170 - 85;
          const lng = Math.random() * 360 - 180;
          const color = colors[Math.floor(Math.random() * colors.length)];
          globe.plugins.pings.add(lng, lat, { color: color, ttl: 2000, angle: Math.random() * 10 });
        }, 150);

        const canvas = document.getElementById('basicGlobe');
        canvas.width = 800;
        canvas.height = 800;
        const context = canvas.getContext('2d');
        context.scale(2, 2);
        globe.draw(canvas);
    }
  };
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    ui: state.ui
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobeComponent);
