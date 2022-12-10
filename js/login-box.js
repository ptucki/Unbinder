//https://www.youtube.com/watch?v=K4dzx5jfyJo

const template = document.createElement('template');
template.innerHTML = `
  <style>
    h3 {
      color: coral;
    }
  </style>
  <div class="user-card">
    <h3></h3>
  </div>
`;


class LoginBox extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h3').innerHTML = this.getAttribute('name');


    this.innerHTML = ``;
    
  }

  // connectedCallback();

  // disconnectedCallback();

  // attributeChangedCallback(attributeName, oldValue, newValue);
}

window.customElements.define('login-box', LoginBox);