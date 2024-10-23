/**
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 *
 * @version 1.0.0
 */
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

    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))

      this.#photoUploadButton = this.shadowRoot.getElementById('photo-upload-button')
      const photoGalleryContainer = this.shadowRoot.getElementById('photo-gallery-container')

      this.#photoUploadButton.addEventListener('click', () => {
        const uploadPhotosEvent = new CustomEvent('uploadPhotos', {
          detail: photoGalleryContainer
        })

      // omit an event for the controllerOrchestrator to listen to, including the photoGalleryContainer as an event detail. This makes the viewindependent from the photoGalleryController, decreases coupling and decreases the risk of multiple instances being created making state management easier - works similarly to the observer pattern.
      document.dispatchEvent(uploadPhotosEvent)
    })
  }
})
