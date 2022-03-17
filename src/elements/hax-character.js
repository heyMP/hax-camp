import { css } from 'lit';
import { RpgCharacter } from 'https://unpkg.com/@lrnwebcomponents/rpg-character/rpg-character.js?module';

export class HaxCharacter extends RpgCharacter {
  static styles = [
    ...super.styles,
    css`
      img {
        display: block;
      }
    `,
  ];
}

customElements.define('hax-character', HaxCharacter);
