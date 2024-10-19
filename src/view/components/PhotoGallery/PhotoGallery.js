// Displays a button for uploading images.
// Displays added images in grid gallery format.
import { UploadService } from "../../../services/UploadService.js"

const template = document.createElement('template')
template.innerHTML = `
    <div class="photo-gallery">
      <div id="gallery-container">
        <!-- photo gallery to be appended here, if possible to send an element from the shadow root as argument to photo-assistant lib? -->
      </div>
    </div>
  
    <style>

    </style>`

customElements.define('photo-gallery',
  class extends HTMLElement {
    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
  }
)