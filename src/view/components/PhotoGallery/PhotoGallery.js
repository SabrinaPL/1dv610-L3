// Displays a button for uploading images.
// Displays added images in grid gallery format.
import { UploadService } from "../../../services/UploadService.js"

const template = document.createElement('template')
template.innerHTML = `
    <div>

    </div>
  
    <style>

    </style>`

customElements.define('PhotoGallery',
  class extends HTMLElement {
    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
  }
)