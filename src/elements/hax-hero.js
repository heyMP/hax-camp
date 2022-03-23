import { css, html, LitElement } from 'lit';
import {
  Scene,
  BoxGeometry,
  PerspectiveCamera,
  WebGLRenderer,
  MeshBasicMaterial,
  Mesh,
  PlaneGeometry,
  Path,
  BufferGeometry,
  Curve,
  TubeGeometry,
  Vector3,
  CatmullRomCurve3,
  Clock,
} from 'three';

export class HaxHero extends LitElement {
  static styles = [css``];

  firstUpdated() {
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.shadowRoot.appendChild(renderer.domElement);

    class CustomSinCurve extends Curve {
      constructor(scale = 1) {
        super();
        this.scale = scale;
      }

      getPoint(t, optionalTarget = new Vector3()) {
        const tx = t * 3 - 1.5;
        const ty = Math.sin(2 * Math.PI * t);
        const tz = 0;
        return optionalTarget.set(tx, ty, tz).multiplyScalar(this.scale);
      }
    }
    const curve = new CustomSinCurve(10);

    const geometry = new TubeGeometry(curve, 20, 2, 8, false);
    const material = new MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
    });
    const tube = new Mesh(geometry, material);
    scene.add(tube);
    camera.position.z = 50;

    const clock = new Clock();
    function animate() {
      const t = clock.getElapsedTime();

      const x = tube.geometry.attributes.position.getX();
      const xsin = Math.sin(x * t);
      tube.geometry.attributes.position.setY(xsin);
      tube.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    animate();
  }

  render() {
    return html``;
  }
}

customElements.define('hax-hero', HaxHero);
