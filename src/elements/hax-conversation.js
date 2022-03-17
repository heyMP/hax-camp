import { LitElement, css, html } from 'lit';
import './hax-character.js';
import './hax-conversation-item.js';

export class HaxConversation extends LitElement {
  static styles = css`
    :host {
      position: relative;
      display: block;
      height: clamp(300px, 5vw, 500px);
      --_hax-character-size: 113px;
    }

    [part='base'] {
      display: grid;
      grid-template-areas: 'question answer';
    }

    hax-character {
      position: absolute;
      bottom: 0;
      right: 0;
      display: none;
    }
  `;

  static get properties() {
    return {
      auto: { type: Boolean },
    };
  }

  firstUpdated() {
    this.gatherConversationItems();
    this.slotChangeHandler = this.addEventListener(
      'slotchange',
      this.gatherConversationItems.bind(this)
    );

    if (this.auto) {
      setTimeout(() => {
        this.rotateAttributes('show-question');
        this._questionInterval = setInterval(
          () => this.rotateAttributes('show-question'),
          4000
        );
      }, 2000);
      this._answerInterval = setInterval(
        () => this.rotateAttributes('show-answer'),
        4000
      );
    }
  }

  rotateAttributes(attribute) {
    console.log(attribute);
    const activeItemIndex = this.conversationItems.findIndex(i =>
      i.hasAttribute(attribute)
    );
    if (activeItemIndex === -1) {
      this.conversationItems[0].setAttribute(attribute, '');
    } else {
      // calculate if we should loop around to the begining
      const nextIndex =
        activeItemIndex === this.conversationItems.length - 1
          ? 0
          : activeItemIndex + 1;
      // move show-question attribute
      this.conversationItems[activeItemIndex].removeAttribute(attribute);
      this.conversationItems[nextIndex].setAttribute(attribute, '');
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this._questionInterval);
    clearInterval(this._answerInterval);
    this.removeEventListener(
      'slotchange',
      this.gatherConversationItems.bind(this)
    );
  }

  gatherConversationItems() {
    this.conversationItems = [
      ...this.shadowRoot.querySelector('slot').assignedElements(),
    ];
  }

  render() {
    return html`
      <div part="base">
        <slot></slot>
        <hax-character></hax-character>
      </div>
    `;
  }
}

customElements.define('hax-conversation', HaxConversation);
