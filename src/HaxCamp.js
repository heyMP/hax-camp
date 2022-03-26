import { LitElement, html, css, unsafeCSS } from 'lit';
import './elements/hax-character.js';
import './elements/hax-conversation.js';
import './elements/hax-hero.js';

const boxSize = 1;
const boxColor = '#cfcff7';

const loop = number => {
  return Array.from(Array(number).keys());
};

export class HaxCamp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        /* internal variables */
        --_color-primary: var(--color-primary, #9aa9c4);
        --_color-secondary: var(--color-secondary, #001e44);
        --_content-max-width: var(--content-max-width, 1200px);
        --_side-margin: var(--side-margin, clamp(2rem, 5vw, 8rem));

        font-family: 'Roboto Mono', Consolas, Monospace;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 100%;
        margin: 0 auto;
        background-color: var(--_color-primary);
      }

      .text-bold {
        font-family: 'Press Start 2P', cursive;
      }

      main {
        flex-grow: 1;
        padding-left: var(--_side-margin);
        padding-right: var(--_side-margin);
        max-width: var(--_content-max-width);
      }

      .hero {
        background-color: var(--_color-primary);
        width: 100%;
        position: relative;
        margin-top: var();
        margin-bottom: var();
      }

      /* .hero::after {
        content: '';
        display: block;
        height: 87px;
        width: 100%;
        position: absolute;
        background-color: black;
        bottom: 0;
      } */

      .hero img {
        width: 100%;
      }

      hax-character {
        position: absolute;
        top: 0;
        right: 0;
      }

      h1:is(.bold) {
        text-align: center;
        margin: 2.5rem auto;
      }
    `;
  }

  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  renderTrees(amount, min, max, direction = 'right') {
    const getRandomArbitrary = () => {
      return Math.random() * (max - min) + min;
    };

    const _direction = direction === 'right' ? Number(-1) : Number(1);

    return html`
      ${Array.from(Array(amount).keys()).map(
        item =>
          html`
            <a-entity
              position="${getRandomArbitrary()} .5 ${getRandomArbitrary() *
              _direction}"
              mixin="tree"
            ></a-entity>
          `
      )}
    `;
  }

  renderBoxedContainer({ scale = 1, count, offset = 0 }) {
    return html`
      ${loop(count).map(
        index => html`
          <a-entity
            scale="${scale} ${scale} ${scale}"
            mixin="hax-box"
            position="${index * boxSize + offset} 0 0"
          ></a-entity>
        `
      )}
      ${loop(count).map(
        index => html`
          <a-entity
            scale="${scale} ${scale} ${scale}"
            mixin="hax-box"
            position="0 ${index * boxSize + offset} 0"
          ></a-entity>
        `
      )}
      ${loop(count).map(
        index => html`
          <a-entity
            scale="${scale} ${scale} ${scale}"
            mixin="hax-box"
            position="${count + offset + boxSize} ${index * boxSize + offset} 0"
          ></a-entity>
        `
      )}
      ${loop(count).map(
        index => html`
          <a-entity
            scale="${scale} ${scale} ${scale}"
            mixin="hax-box"
            position="${index * boxSize + offset} ${count + offset + boxSize} 0"
          ></a-entity>
        `
      )}
    `;
  }

  render() {
    return html`
      <a-scene>
        <a-assets>
          <a-asset-item
            id="treeModel"
            src="${new URL('../assets/tree.glb', import.meta.url)}"
          ></a-asset-item>
          <a-asset-item
            id="haxModel"
            src="${new URL('../assets/hax.glb', import.meta.url)}"
          ></a-asset-item>
          <a-mixin
            id="tree"
            position="0 10 0"
            gltf-model="#treeModel"
            scale=".1 .1 .1"
            visible="true"
          ></a-mixin>
          <img
            id="hax-banner"
            src=${new URL('../assets/haxBanner.svg', import.meta.url)}
          />
          <a-mixin
            id="hax"
            position="0 1.62368 -5"
            rotation="90 0 0"
            gltf-model="#haxModel"
            scale="10 10 10"
            visible="true"
          ></a-mixin>
          <a-mixin
            id="hax-box"
            geometry="primitive:box; width:${boxSize}; height:${boxSize}; depth:${boxSize};"
            material="color:${boxColor};"
          ></a-mixin>
        </a-assets>

        <!-- behind -->
        <!-- ${this.renderTrees(80, 0, 10)} -->
        <!-- ${this.renderTrees(80, -10, -2, 'left')} -->
        <!-- ${this.renderTrees(80, 2, 10)} -->

        <a-entity id="hax-logo">
          <a-entity id="hax-logo-container" class="letter" position="-12 -12 0">
            ${this.renderBoxedContainer({
              scale: 2,
              count: 30,
              offset: 5,
            })}
          </a-entity>

          <a-entity id="hax-logo-h" class="letter" position="-8 8 0">
            <a-entity>
              ${this.renderBoxedContainer({ scale: 2, count: 8 })}
            </a-entity>
          </a-entity>
          <a-entity id="hax-logo-a" class="letter">
            <a-entity>
              ${this.renderBoxedContainer({ scale: 2, count: 8 })}
            </a-entity>
          </a-entity>
          <a-entity id="hax-logo-x" class="letter" position="8 -8 0">
            <a-entity>
              ${this.renderBoxedContainer({ scale: 2, count: 8 })}
            </a-entity>
          </a-entity>
        </a-entity>

        <!-- <a-plane src="#hax-banner" height="100" width="100" rotation="0 0 0" position="0 0 -150"></a-plane> -->
        <a-sky color="lightblue"></a-sky>
        <a-entity
          camera
          look-controls
          orbit-controls="target: 0 1.6 -0.5; minDistance: 0.5; maxDistance: 180; initialPosition: 0 5 45"
        ></a-entity>
      </a-scene>
    `;
  }
}
