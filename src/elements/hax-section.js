import { html, css, LitElement } from 'lit';

export class HaxSection extends LitElement {
	static get tag() {
		return `hax-section`;
	}

	static get styles() {
		return css`
			:host {
				display: block;
			}

			.base {
				display: contents;
			}
		`;
	}

	static get properties() {
		return {
			name: { type: String }
		}
	}

	constructor() {
		super();
		this.name = 'Somebody';
	}

	render() {
		return html`
			<div class="base" part="base">
				<slot name="header"></slot>
				<slot></slot>
			</div>
		`;
	}
}

customElements.define(HaxSection.tag, HaxSection);