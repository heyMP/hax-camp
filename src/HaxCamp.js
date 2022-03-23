import { LitElement, html, css, unsafeCSS } from 'lit';
import './elements/hax-character.js';
import './elements/hax-conversation.js';
import './elements/hax-hero.js';

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

  render() {
    return html`
      <a-scene>
        <a-assets>
          <a-asset-item id="treeModel" src="${new URL(
            '../assets/tree.glb',
            import.meta.url
          )}"></a-asset-item>
          <a-asset-item id="haxModel" src="${new URL(
            '../assets/hax.glb',
            import.meta.url
          )}"></a-asset-item>
          <a-mixin id="tree" position="0 10 0" gltf-model="#treeModel" scale=".1 .1 .1" visible="true"></a-mixin>
          <img id="hax-banner" src=${new URL(
            '../assets/haxBanner.svg',
            import.meta.url
          )}>
          <a-mixin id="hax" position="0 1.62368 -5" rotation="90 0 0" gltf-model="#haxModel" scale="10 10 10" visible="true"></a-mixin>
        </a-assets>

        <!-- behind -->
        <!-- ${this.renderTrees(80, 0, 10)} -->
        <!-- ${this.renderTrees(80, -10, -2, 'left')} -->
        <!-- ${this.renderTrees(80, 2, 10)} -->

        <a-entity id="hax" position="-1.95129 1.01699 -3.27237" scale=".5 .5 .5">
          <a-entity id="h" position="0 0 0">
            <a-box id="h-left" geometry="height:4; width:.1;"></a-box>
            <a-box id="h-mid" geometry="height:.1; width:2;" position="1 0 0"></a-box>
            <a-box id="h-right" geometry="height:4; width:.1;" position="2 0 0"></a-box>
          </a-entity>
          <a-entity id="a" position="3 0 0">
            <a-box id="a-left" geometry="height:4; width:.1;" rotation="0 0 -15"></a-box>
            <a-box id="a-mid" geometry="height:.1; width:1.1;" position=".54 0 0"></a-box>
            <a-box id="a-right" geometry="height:4; width:.1;" position="1.1 0 0" rotation="0 0 15"></a-box>
          </a-entity>
          <a-entity id="x" position="6 0 0">
            <a-box id="x-left" geometry="height:4; width:.1;" rotation="0 0 -30"></a-box>
          </a-entity>
        </a-entity>

        <a-plane
          position="0 0 -4"
          rotation="-90 0 0"
          width="40"
          height="40"
          color="#7BC8A4"
        ></a-plane>
        <!-- <a-plane src="#hax-banner" height="100" width="100" rotation="0 0 0" position="0 0 -150"></a-plane> -->
        <a-sky color="lightblue"></a-sky>
        <a-camera position="" touchEnabled="false" wasd-controls-enabled="false" look-controls-enabled="true" touchEnabled="true">
      </a-scene>
    `;
  }
}
