import { LitElement, html, css, unsafeCSS } from 'lit';
import './elements/hax-character.js';
import './elements/hax-conversation.js';

export class HaxCamp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        /* open props */
        --size-fluid-1: clamp(0.5rem, 1vw, 1rem);
        --size-fluid-2: clamp(1rem, 2vw, 1.5rem);
        --size-fluid-3: clamp(1.5rem, 3vw, 2rem);
        --size-fluid-4: clamp(2rem, 4vw, 3rem);
        --size-fluid-5: clamp(4rem, 5vw, 5rem);
        --size-fluid-6: clamp(5rem, 7vw, 7.5rem);
        --size-fluid-7: clamp(7.5rem, 10vw, 10rem);
        --size-fluid-8: clamp(10rem, 20vw, 15rem);
        --size-fluid-9: clamp(15rem, 30vw, 20rem);
        --size-fluid-10: clamp(20rem, 40vw, 30rem);

        /* internal variables */
        --_color-primary: var(--color-primary, #9aa9c4);
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

  render() {
    return html`
      <div>
        <div class="hero">
          <img src=${new URL('/assets/haxBanner.png', import.meta.url)} />
        </div>
        <main>
          <h1>
            Get ready for Camp! We're excited to bring HAXCamp to Penn State on
            May 9-10, 2022.
          </h1>
          <hax-conversation auto>
            <hax-conversation-item>
              <p slot="question">
                Want to learn more about
                <strong>LitElement, VanillaJS,</strong> and others?
              </p>
              <p slot="answer">Come learn with us!</p>
            </hax-conversation-item>
            <hax-conversation-item>
              <p slot="question">
                Interested in framework-agnostic components you can use in your
                existing <strong>React, Angular, Vue, Backbone,</strong> and
                <strong>CMS</strong> projects?
              </p>
              <p slot="answer">It's all we're talking about!</p>
            </hax-conversation-item>
            <hax-conversation-item>
              <p slot="question">
                Have you made some cool web components and want to show them
                off?
              </p>
              <p slot="answer">Join us!</p>
            </hax-conversation-item>
            <hax-conversation-item>
              <p slot="question">
                Need to figure out
                <strong>tooling, building, SEO, polyfills,</strong> and other
                considerations?
              </p>
              <p slot="answer">Let's figure it out together!</p>
            </hax-conversation-item>
            <hax-conversation-item>
              <p slot="question">
                Do you want to learn more about web components from top to
                bottom?
              </p>
              <p slot="answer">Join us as we all discover together!</p>
            </hax-conversation-item>
            <hax-conversation-item>
              <p slot="question">
                Want to learn more about
                <strong>HAX, HAXcms, and all things HAXTheWeb?</strong>
              </p>
              <p slot="answer">Join us and find out!</p>
            </hax-conversation-item>
          </hax-conversation>
          <p>
            <strong>&lt; hax-camp &gt;</strong> provides a space for
            collaboration, discussion, and sharing of best practices for those
            exploring web components. Whether you are using HAX, or anything
            else, you’ll learn and share valuable knowledge about web components
            at <strong>&lt; hax-camp &gt;</strong>.
          </p>
        </main>
      </div>
      <hax-character></hax-character>
    `;
  }
}
