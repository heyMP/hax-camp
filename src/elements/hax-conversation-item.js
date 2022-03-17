import { LitElement, css, html } from 'lit';

export class HaxConversationItem extends LitElement {
  static styles = css`
    :host {
      display: contents;
    }
    [part='base'] {
      display: contents;
    }
    [part~='question'],
    [part~='answer'] {
      opacity: 0;
      font-size: var(--size-fluid-3);
    }
    :host [part~='question'] {
      left: 0;
      top: 0;
      grid-area: question;
    }
    :host [part~='answer'] {
      right: 0;
      bottom: 0;
      grid-area: answer;
      justify-self: end;
      align-self: flex-end;
      text-align: right;
    }
    :host([show-question]) [part~='question'] {
      animation: fadequestion 1s both;
    }
    :host([show-answer]) [part~='answer'] {
      animation: fadeanswer 1s both;
    }
    @keyframes fadequestion {
      from {
        opacity: 0;
        transform: translate(-2rem, -2rem);
      }
      to {
        opacity: 1;
        transform: translate(0, 0);
      }
    }
    @keyframes fadeanswer {
      from {
        opacity: 0;
        transform: translate(2rem, 2rem);
      }
      to {
        opacity: 1;
        transform: translate(0, 0);
      }
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <div part="base">
        <div part="question"><slot name="question"></slot></div>
        <div part="answer"><slot name="answer"></slot></div>
      </div>
    `;
  }
}

customElements.define('hax-conversation-item', HaxConversationItem);
