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
        <button id="photo-upload-button">Enter</button>
      </div>

      <div id="gallery-container">
      </div>
    </div>
  
    <style>

    </style>`

customElements.define('photo-gallery',
  class extends HTMLElement {
    #photoUploadButton
    #photoGalleryControllerInstance
  
    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))

      this.#photoUploadButton = this.shadowRoot.getElementById('photo-upload-button')
      const photoGalleryElement = this.shadowRoot.getElementById('photo-gallery')

      this.#photoGalleryControllerInstance = new PhotoGalleryController(photoGalleryElement)

      this.#photoUploadButton.addEventListener('click', () => {
        this.#addPhotosToGallery()
      })
    }

    #addPhotosToGallery () {
      this.#photoGalleryControllerInstance.addPhotosToGallery()    
    }
  }
)