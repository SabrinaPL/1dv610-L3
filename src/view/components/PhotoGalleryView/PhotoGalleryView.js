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
      </div><br><br>

      <div id="photo-gallery-container">
        <!-- Grid gallery will be appended here -->
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

      #photo-upload-button {
        font-size: 1.2rem;
        padding: 10px;
        background-color: #305cde;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }

      #photo-upload-button:hover {
        opacity: 0.8;
      }
    </style>`

class PhotoGalleryView extends HTMLElement {
  #photoUploadButton
  #controllerOrchestratorInstance

  /**
   *
   * @param {InstanceType} controllerOrchestratorInstance
   */
  constructor (controllerOrchestratorInstance) {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.#controllerOrchestratorInstance = controllerOrchestratorInstance

    this.#photoUploadButton = this.shadowRoot.getElementById('photo-upload-button')
    const photoGalleryContainer = this.shadowRoot.getElementById('photo-gallery-container')

    // columns will be dynamically fetched from user input later, hardcoded now only for testing purposes and for now photos will be displayed in a single column (until the bug with photos being displayed in a scattered pattern has been solved).
    const columns = 1

    this.#controllerOrchestratorInstance.constructPhotoGallery(columns, photoGalleryContainer)

    this.#photoUploadButton.addEventListener('click', () => {
      this.#uploadPhotos()
    })

    window.addEventListener('photosUploaded', async () => {
      const imageElements = this.shadowRoot.querySelectorAll('img')

      imageElements.forEach(imageElement => {
        imageElement.addEventListener('click', () => {
          this.#controllerOrchestratorInstance.editPhoto(imageElement)
        })
      })
    })
  }

  #uploadPhotos () {
    this.#controllerOrchestratorInstance.uploadPhotos()
  }
}

customElements.define('photo-gallery-view', PhotoGalleryView)

export { PhotoGalleryView }
