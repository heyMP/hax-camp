import { LitElement, html, css, unsafeCSS } from 'lit';
import './elements/hax-ascii.js';
import './elements/hax-character.js';
import './elements/hax-conversation.js';
import './elements/hax-hero.js';
import './aframe-components/asciiArt.js';

const boxSize = 1;
const boxColor = '#cfcff7';

const loop = number => {
  return Array.from(Array(number).keys());
};

export class HaxCamp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      artPixels: { type: Array },
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
    this.artPixels = [];
  }

  createRenderRoot() {
    return this;
  }

  async _loadArt({ file }) {
    const art = await fetch(new URL(file, import.meta.url)).then(res =>
      res.text()
    );
    // const values = Array.from(art);
    // const uniqueValues = new Set(values);
    const columns = art.split('\n').reverse();
    const artPixelsMatrix = columns.map((column, columnIndex) =>
      Array.from(column)
        .map((value, pixelIndex) => ({
          value,
          xPosition: pixelIndex,
          yPosition: columnIndex,
        }))
        .filter(item => [' ', '.'].includes(item.value))
    );

    const artPixels = artPixelsMatrix.flatMap(item => item);
    // console.log(artPixels);
    console.log(`${artPixels.length} pixels`);
    this.artPixels = artPixels;
  }

  firstUpdated() {
    this._loadArt({ file: '../assets/hax-hd.txt' });
  }

  // renderArtboardPosition(artPixels) {
  //   return `${Math.floor(
  //     (artPixels[artPixels.length - 1]?.xPosition || 0) * -1
  //   )} ${Math.floor(
  //     (artPixels[artPixels.length - 1]?.yPosition / 2 || 0) * -1
  //   )} 0`;
  // }

  render() {
    return html`
      <!-- <hax-ascii></hax-ascii> -->
      <a-scene>
        <a-assets> </a-assets>
        <a-entity id="ascii-art" position="0 0 0">
          <a-entity
            ascii-art
            scale="1 1 1"
            position="0 0 0"
            geometry="primitive:box; width:10; height:10; depth:.2;"
            material="opacity:0;"
          ></a-entity>
        </a-entity>
        <a-sky color="lightblue"></a-sky>
        <a-entity
          camera
          look-controls
          orbit-controls="target: 0 1.6 -0.5; minDistance: .5; maxDistance: 180; initialPosition: 0 5 15"
        ></a-entity>
      </a-scene>
    `;
  }
}
