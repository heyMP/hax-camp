import { css } from 'lit';
import { RpgCharacter } from '@lrnwebcomponents/rpg-character';

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
