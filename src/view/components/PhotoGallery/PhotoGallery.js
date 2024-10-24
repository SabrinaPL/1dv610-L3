/**
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 *
 * @version 1.0.0
 */
import { ControllerOrchestrator } from '../../../controller/ControllerOrchestrator.js'

const template = document.createElement('template')
template.innerHTML = `
    <div class="photo-gallery">
      <div id="photo-upload-container">
        <button id="photo-upload-button">Upload photos</button>
      </div>

      <div id="photo-gallery-container">
      </div>
    </div>
  
    <style>
      img {
        width: 100%;
      }

      #photo-upload-container,
      #photo-gallery-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    </style>`

customElements.define('photo-gallery',
  class extends HTMLElement {
    #photoUploadButton
    #controllerOrchestrator

    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))

      this.#controllerOrchestrator = new ControllerOrchestrator()

      this.#photoUploadButton = this.shadowRoot.getElementById('photo-upload-button')
      const photoGalleryContainer = this.shadowRoot.getElementById('photo-gallery-container')

      // columns will be dynamically fetched from user input later, hardcoded now only for testing purposes.
      const columns = 3

      this.#controllerOrchestrator.constructPhotoGallery(columns, photoGalleryContainer)

      this.#photoUploadButton.addEventListener('click', () => {
        this.#uploadPhotos()
      })
    }

    #uploadPhotos () {
      this.#controllerOrchestrator.uploadPhotos()
    }
  }
)
