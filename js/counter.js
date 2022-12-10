class MyCounter extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: "open"});
  }

  static get observedAttributes() {
    return ["count"];
  }

  set count(val) {
    this.setAttribute("count", val);
  }

  get count() {
    return this.getAttribute("count");
  }

  attributeChangedCallback(prop, oldVal, newValue) {
    if(prop === 'count') this.render()
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `<h1>Coutner</h1>;
    ${this.count}
    <button id='btn'>Increment</button>
    `
  }
}

customElements.define('my-counter', MyCounter);