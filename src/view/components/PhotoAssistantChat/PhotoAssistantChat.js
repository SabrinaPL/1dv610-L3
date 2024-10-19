// A chat modal.
const template = document.createElement('template')
template.innerHTML = ` 
    <div>
    </div>
  
    <style>

    </style>`

customElements.define('PhotoAssistantChat',
  class extends HTMLElement {
    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
  }
)