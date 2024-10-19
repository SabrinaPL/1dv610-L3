// When clicking on an image in the grid gallery, an editing modal should appear.

const template = document.createElement('template')
template.innerHTML = ` 
    <div class="photo-editor">
      <div id="photo-editor-container">
      </div>
    </div>
  
    <style>

    </style>`

customElements.define('photo-editor',
  class extends HTMLElement {
    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
  }
)