/**
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 * 
 * @version 1.0.0
 */

// Displays a button for uploading images.
// Displays added images in grid gallery format.
import { PhotoAssistantService } from "../../../services/PhotoAssistantService.js"
import { UploadService } from "../../../services/UploadService.js"

const template = document.createElement('template')
template.innerHTML = `
    <div class="photo-gallery">
      <div id="photo-upload-container">
        <button id="photo-upload-button">Enter</button>
      </div>

      <div id="gallery-container">
      </div>
    </div>
  
    <style>

    </style>`

customElements.define('photo-gallery',
  class extends HTMLElement {
    #photos = []
    #photoUploadButton
    #uploadServiceInstance
    #photoAssistantServiceInstance

    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))

      this.#photoUploadButton = this.shadowRoot.getElementById('photo-upload-button')
      this.#uploadServiceInstance = new UploadService()
      this.#photoAssistantServiceInstance = new PhotoAssistantService()

      this.#photoUploadButton.addEventListener('click', () => {
        this.#uploadPhotos()
      })
    }

    async #uploadPhotos () {
      this.#uploadServiceInstance.uploadPhoto()        
    }

    #addPhotosToGallery () {
      this.#photoAssistantServiceInstance.addPhoto()
    }
  }
)