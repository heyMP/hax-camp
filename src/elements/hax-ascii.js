import { html, css, LitElement } from 'lit';

export class HaxAscii extends LitElement {
  static get tag() {
    return `hax-ascii`;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        font-size: 0.2rem;
        word-wrap: none;
      }
    `;
  }

  // static get properties() {
  //   return {
  //     name: { type: String },
  //   };
  // }

  constructor() {
    super();
    // this.name = 'Somebody';
  }

  firstUpdated() {
    fetch(new URL('../../assets/hax-hd.txt', import.meta.url))
      .then(res => res.text())
      .then(res => (this.renderRoot.innerHTML = `<pre>${res}</pre>`));
  }

  render() {
    return html``;
  }
}

customElements.define(HaxAscii.tag, HaxAscii);
