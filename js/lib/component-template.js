//https://www.google.com/search?channel=fs&client=ubuntu&q=javascript+components+tutorial#fpstate=ive&vld=cid:c199875d,vid:PCWaFLy3VUo


//Inharitance of HTMLElement to make a custom html tags
class LoginBox extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({mode: open});
  }

  //called every time when component is connected
  connectedCallback();

  //called every time when component is disconnected
  disconnectedCallback();

  //called every time when attribute changes
  attributeChangedCallback(attributeName, oldValue, newValue);
}

//attach component to webpage
window.customElements.define('login-box', LoginBox); 