// When clicking on an image in the grid gallery, an editing modal should appear.

const template = document.createElement('template')
template.innerHTML = ` 
    <div>
    </div>
  
    <style>

    </style>`

customElements.define('PhotoEditor',
  class extends HTMLElement {
    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
  }
)