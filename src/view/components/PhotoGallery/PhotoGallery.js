/**
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 *
 * @version 1.0.0
 */
import { PhotoGalleryController } from '../../../controller/PhotoGalleryController.js'

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
    #photoGalleryControllerInstance

    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))

      this.#photoUploadButton = this.shadowRoot.getElementById('photo-upload-button')
      const photoGalleryContainer = this.shadowRoot.getElementById('photo-gallery-container')

      this.#photoGalleryControllerInstance = new PhotoGalleryController(photoGalleryContainer)

      this.#photoUploadButton.addEventListener('click', () => {
        this.#uploadPhotos()
      })
    }

    #uploadPhotos () {
      this.#photoGalleryControllerInstance.uploadPhotos()
    }
  }
)
