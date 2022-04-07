/**
 * Ripped off from https://codepen.io/tstoik/pen/EjMzRZ
 */
import { html, css, LitElement } from 'lit';

export class HaxButton extends LitElement {
	static get tag() {
		return `hax-button`;
	}

	static get styles() {
		return css`
			:host {
				overflow: hidden;
			}

			:host([medium]) {
				--scale: 1.5;
			}

			:host([large]) {
				--scale: 2;
			}

			:host([x-large]) {
				--scale: 2.5;
			}

			.base {
				margin: calc(1rem * var(--scale, 1));
				transform: scale(var(--scale, 1));
			}

			a {
				text-decoration: none;
				transition: color 0.3s;
			}

			.btn {
				position: relative;
				display: inline-block;
				margin: 5px 10px;
				padding: 17px 22px;
				width: 120px;
				z-index: 1;
				border: 0;
				outline: 0;
				cursor: pointer;
				font-size: var(--font-size, 14px);
				font-size: 0.6875rem;
				color: #fff;
				text-align: center;
				line-height: normal;
				letter-spacing: 0.05em;
				text-transform: uppercase;
				font-weight: bold;
			}
			.btn .hover {
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				z-index: -1;
				overflow: hidden;
			}
			.btn .hover span {
				position: relative;
				display: block;
				left: -15px;
				height: 10px;
				width: 0;
				content: "";
			}
			.btn .hover span:after {
				position: absolute;
				display: block;
				right: -10px;
				width: 10px;
				height: 10px;
				background: #fff;
				content: "";
			}
			.btn .hover span:nth-child(odd):after {
				background: rgba(0, 0, 0, 0.35);
			}
			.btn .hover span:first-child {
				left: -75px;
				transition: all 0.3s steps(8);
			}
			.btn .hover span:nth-child(2) {
				left: -45px;
				transition: all 0.325s steps(8);
			}
			.btn .hover span:nth-child(3) {
				left: -55px;
				transition: all 0.35s steps(8);
			}
			.btn .hover span:nth-child(4) {
				transition: all 0.4s steps(8);
			}
			.btn .hover span:nth-child(5) {
				left: -25px;
				transition: all 0.375s steps(8);
			}
			.btn:after {
				position: absolute;
				right: 0;
				bottom: 0;
				left: 0;
				height: 4px;
				z-index: -2;
				content: "";
			}
			.btn:hover {
				color: #fff;
			}
			.btn:hover, .btn:focus {
				color: #fff;
			}
			.btn:hover .hover span:first-child, .btn:focus .hover span:first-child {
				width: calc(100% + 76px);
			}
			.btn:hover .hover span:first-child:after, .btn:focus .hover span:first-child:after {
				animation: whiteBlack 0.3s 0s 1;
			}
			.btn:hover .hover span:nth-child(2), .btn:focus .hover span:nth-child(2) {
				width: calc(100% + 46px);
				transition: all 0.375s steps(8);
			}
			.btn:hover .hover span:nth-child(2):after, .btn:focus .hover span:nth-child(2):after {
				animation: whiteBlack 0.3s 0.06s 1 reverse backwards;
			}
			.btn:hover .hover span:nth-child(3), .btn:focus .hover span:nth-child(3) {
				width: calc(100% + 56px);
				transition: all 0.35s steps(8);
			}
			.btn:hover .hover span:nth-child(3):after, .btn:focus .hover span:nth-child(3):after {
				animation: whiteBlack 0.3s 0.05s 1 forwards;
			}
			.btn:hover .hover span:nth-child(4), .btn:focus .hover span:nth-child(4) {
				width: calc(100% + 16px);
				transition: all 0.3s steps(8);
			}
			.btn:hover .hover span:nth-child(4):after, .btn:focus .hover span:nth-child(4):after {
				animation: whiteBlack 0.3s 0s 1 reverse backwards;
			}
			.btn:hover .hover span:nth-child(5), .btn:focus .hover span:nth-child(5) {
				width: calc(100% + 26px);
				transition: all 0.325s steps(8);
			}
			.btn:hover .hover span:nth-child(5):after, .btn:focus .hover span:nth-child(5):after {
				animation: whiteBlack 0.3s 0.07s 1 forwards;
			}
			.btn.red {
				background: #ff5747;
			}
			.btn.red span, .btn.red:after {
				background: #cb4539;
			}
			.btn.green {
				background: #2bdc33;
			}
			.btn.green span, .btn.green:after {
				background: #23b32a;
			}
			.btn.blue {
				background: #16bfff;
			}
			.btn.blue span, .btn.blue:after {
				background: #129acd;
			}

			@keyframes whiteBlack {
				0%, 24% {
					background: #fff;
				}
				25%, 49% {
					background: rgba(0, 0, 0, 0.35);
				}
				50%, 74% {
					background: #fff;
				}
				75%, 100% {
					background: rgba(0, 0, 0, 0.35);
				}
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

	firstUpdated() {
		this.updateAnchorTag();
		this.addEventListener('slotchange', this.updateAnchorTag.bind(this))
	}

	updateAnchorTag() {
		const anchor = this.querySelector('a');
		const shadowAnchor = this.renderRoot.querySelector('a');
		if (anchor) {
			[...anchor.attributes].forEach(attribute => {
				shadowAnchor.setAttribute(attribute.name, attribute.value);
			});
		}
	}

	render() {
		return html`
			<div class="base">
				<a class="btn blue" href="#">
					<div class="hover"><span></span><span></span><span></span><span></span><span></span></div>
					Register
				</a>
			</div>
			
			<slot hidden></slot>
		`;
	}
}

customElements.define(HaxButton.tag, HaxButton);