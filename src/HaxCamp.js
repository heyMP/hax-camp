import { LitElement, html, css, unsafeCSS } from 'lit';
import './elements/hax-button.js';
import './elements/hax-character.js';
import './elements/hax-conversation.js';
import './elements/hax-section.js';

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

      .hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
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

      .registration {
        margin-top: 1rem;
        margin-bottom: 1rem;
      }

      footer {
        margin-top: 1rem;
        min-height: 2rem;
        background-color: #536894;
        width: 100%;
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
          <img src=${new URL('../assets/haxBanner.png', import.meta.url)} />
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
          <hax-section>
            <h2 slot="header" id="what-is-hax-camp">What is <strong>&lt; hax-camp &gt;</strong>?</h2>
            <p><strong>&lt; hax-camp &gt;</strong> is an <em>unconference</em> dedicated to <a href="https://open-wc.org/">all
                things web components</a>!</p>
            <p>Pennsylvania State College of Information Sciences and Technology is providing space for the event. It is a
              fusion of students, industry professionals, and educators. This year's event is being student-run and we
              anticipate there being discussions about openwc, lit, performance, element composition, css, hax.psu,
              pedagogy, and design systems. All communities are welcome to join us for this free event.</p>
            <p>This is the 2nd HAX camp to be held after a successful two days of sharing ideas about web components at Duke
              in 2019. <strong>&lt; hax-camp &gt;</strong>, named after the HAXTheWeb headless block editor, is an
              unconference dedicated to all things web components.</p>
            <p><strong>&lt; hax-camp &gt;</strong> PSU is a unique opportunity for those interested in front-end web
              development to learn and share equally with a mix of industry professionals, university members, and students
              about the web development industry. This event is focused on the W3C standard known as web components for
              reusability, platform-agnostic approach, and the career longevity of learning HTML, CSS, and Javascript.</p>
          </hax-section>
          <hax-section>
            <h2 slot="header" id="what-s-included">What's included?</h2>
            <p>Registration includes some giveaway items, but this is very much a free event. The cost of meals is not
              included, however, we’ll have a list of suggested locations where you are highly encouraged to share a bite
              and continue conversations.</p>
          </hax-section>
          <hax-section>
            <h2 slot="header" id="why-is-it-called-hax-camp">Why is it called <strong>&lt; hax-camp &gt;</strong> ?</h2>
            <p><a href="https://github.com/WICG/webcomponents">Web components</a> are a W3C standard way of allowing
              developers to create and attach their own, custom HTML element definitions. Their ability to stack like
              reusable lego pieces is the realization of the promise of a modular, reusable, and sustainable web. Working
              across libraries, they hack traditional ways of doing silo'ed front-end application development. And thus, we
              will all be HAX'ing how we used to work, building new reusable pieces that work across our applications!</p>
            <p>The founders of this event work on a project called <a href="https://haxtheweb.org/">HAXTheWeb</a>; short for
              Headless Authoring eXperience, which is built on top of hundreds of web components. By extending the web via
              web components, we'll extend the capabilities of HAX and so this event is dedicated to a mix of web components
              and HAX-specific discussions.</p>
          </hax-section>
          <hax-section>
            <h2 slot="header" id="why-is-it-called-hax-camp">Why is it called <strong>&lt; hax-camp &gt;</strong> ?</h2>
            <p><a href="https://github.com/WICG/webcomponents">Web components</a> are a W3C standard way of allowing
              developers to create and attach their own, custom HTML element definitions. Their ability to stack like
              reusable lego pieces is the realization of the promise of a modular, reusable, and sustainable web. Working
              across libraries, they hack traditional ways of doing silo'ed front-end application development. And thus, we
              will all be HAX'ing how we used to work, building new reusable pieces that work across our applications!</p>
            <p>The founders of this event work on a project called <a href="https://haxtheweb.org/">HAXTheWeb</a>; short for
              Headless Authoring eXperience, which is built on top of hundreds of web components. By extending the web via
              web components, we'll extend the capabilities of HAX and so this event is dedicated to a mix of web components
              and HAX-specific discussions.</p>
          </hax-section>
          <hax-section>
            <h2 slot="header" id="why-is-it-called-hax-camp">Why is it called <strong>&lt; hax-camp &gt;</strong> ?</h2>
            <p><strong>&lt; hax-camp &gt;</strong> will be held one block from Pennsylvania State University campus in a brand
              new co-working facility called the Innovation Hub- <a href="https://innovationhub.launchbox.psu.edu/">Happy
                Valley LaunchBox</a>. The closest parking lots to our locations are the <a
                href="https://www.google.com/maps/place/Fraser+Street+Parking+Garage/@40.7928821,-77.8618564,20z/data=!4m8!1m2!2m1!1sinnovation+hub+parking+garages!3m4!1s0x89cea898df61b223:0xc38cbf94bdf763a1!8m2!3d40.7928821!4d-77.8616338">Fraser
                Street Parking Garage</a> and the <a
                href="https://www.google.com/maps/place/Beaver+Ave+Parking+Garage/@40.7921306,-77.8616951,20.3z/data=!4m8!1m2!2m1!1sinnovation+hub+parking+garages!3m4!1s0x89cea898f0592745:0xc3dce64a97b95508!8m2!3d40.7921022!4d-77.8614117">Beaver
                Ave Parking Garage</a> across from the Hyatt Place State College. If you are taking public transportation,
              Uber, Lyft, Scooter, Spin Bike, etc, use the address: <a
                href="https://www.google.com/maps/place/Happy+Valley+LaunchBox+powered+by+PNC+Bank/@40.7922246,-77.8631356,20z/data=!4m5!3m4!1s0x89cea8989e2d42fb:0x71c7fcfc9df97861!8m2!3d40.7922763!4d-77.8628573">Innovation
                Hub</a>. Upon reaching your destination, take the elevator to the 6th floor of the building where the event
              will proceed.</p>
            <iframe width="500" height="500" id="gmap_canvas"
              src="https://maps.google.com/maps?q=Penn%20State%20Innovation%20Hub%20State%20College,%20Pennsylvania&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
              style="display: block; margin-left: auto; margin-right: auto; margin-top: 20px; width: 90%; max-width: 500px;"></iframe>
          </hax-section>
        </main>
      </div>
      
      <div class="registration"></div>
      <h2 id="register" class="hidden">Register</h2>
      <hax-button x-large>
        <a href="https://www.eventbrite.com/e/hax-camp-web-components-all-the-things-tickets-288109562457">Register</a>
      </hax-button>
      
      <footer></footer>
      
      <hax-character></hax-character>
    `;
  }
}
