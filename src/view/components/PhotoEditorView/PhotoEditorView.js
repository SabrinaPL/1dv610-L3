/**
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 *
 * @version 1.0.0
 */
import { ControllerOrchestrator } from '../../../controller/ControllerOrchestrator.js'

const template = document.createElement('template')
template.innerHTML = `
    <div class="photo-editor">
      <div id="photo-editor-container">
        <div id="choice-menu-container">
          <form id="filter-image-form">
            <div id="exit-button-container">
              <button id="exit-button">X</button>
            </div>
              <h2>Add filter effect to photo</h2>
              <p>Select the filter effect and input the filter value of the filter you wish to apply to the photo:</p>

              <input type="radio" name="filter" id="brightness" value="brightness" checked>
              <label for="brightness">Brightness</label><br>
              <input type="radio" name="filter" id="contrast" value="contrast">
              <label for="contrast">Contrast</label><br>
              <input type="radio" name="filter" id="sepia" value="sepia">
              <label for="sepia">Sepia</label><br>
              <input type="radio" name="filter" id="grayscale" value="grayscale">
              <label for="grayscale">Grayscale</label><br>
              <input type="radio" name="filter" id="opacity" value="opacity">
              <label for="opacity">Opacity</label><br>
              <input type="radio" name="filter" id="saturate" value="saturate">
              <label for="saturate">Saturation</label><br>
              <input type="radio" name="filter" id="blur" value="blur">
              <label for="blur" name="filter">Blur</label><br><br>
              <label for="filterValue">Add filter value:</label>
              <input type="text" name="filterValue" id="filterValue"> % (px for blur)<br><br>

            <button type="submit" id="displayFilteredImageBtn">Display</button>

          <div id="photo-container">
            <!-- Photo to be appended here --> 
          </div>
        </form>
      </div>
    </div>
  
    <style>
      #photo-editor-container,
      #choice-menu-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        margin-top: 5%;
        margin-left: 10%;
        margin-bottom: 5%;
        margin-right: 10%;
        padding: 10px;
        border-radius: 15px;
      }

      #exit-button-container {
        display: flex;
        justify-content: flex-end;
        margin-right: 5%;
      }

      .photo-editor {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
      }

      .hide-transition {
        opacity: 0;
        pointer-events: none;
      }

      .display-transition {
       opacity: 1;
       pointer-events: all; 
      }
    </style>`

  class PhotoEditorView extends HTMLElement {
    #photoEditorModal
    #photoContainer

    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))

      this.#photoEditorModal = this.shadowRoot.querySelector('.photo-editor')

      this.#photoContainer = this.shadowRoot.getElementById('photo-container')
      const exitButton = this.shadowRoot.getElementById('exit-button-container')

      exitButton.addEventListener('click', (event) => {
        event.preventDefault()

        this.#photoEditorModal.classList.add('hide-transition')
        this.#photoEditorModal.classList.remove('display-transition')
      })
    }

    displayPhotoEditor (photo) {
      if (!photo || !(photo instanceof HTMLImageElement)) {
        throw new Error('Valid photo is required')
      }

      this.#photoEditorModal.classList.add('display-transition')
      this.#photoEditorModal.classList.remove('hide-transition')

      console.log('appending photo to: ', this.#photoContainer)
      this.#photoContainer.appendChild(photo)
    }
  }

  customElements.define('photo-editor-view', PhotoEditorView)

  export { PhotoEditorView }



  
