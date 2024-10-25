/**
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 *
 * @version 1.0.0
 */
import { ControllerOrchestrator } from '../../../controller/ControllerOrchestrator.js'

const template = document.createElement('template')
template.innerHTML = `
    <div id="photo-editor-modal">
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
        </form>
        <div id="photo-container">
            <!-- Photo to be appended here --> 
        </div>
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

      #photo-editor-modal {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
      }

      .hide-transition {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
      }

      .display-transition {
       opacity: 1;
       visibility: visible;
       pointer-events: all; 
       transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
      }

      #photo-container img {
        width: 100%;
        display: block; 
      }
    </style>`

  class PhotoEditorView extends HTMLElement {
    #photoEditorModal
    #photoContainer

    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))

      this.#photoEditorModal = this.shadowRoot.getElementById('photo-editor-modal')
      this.#photoContainer = this.shadowRoot.getElementById('photo-container')
      const exitButton = this.shadowRoot.getElementById('exit-button')

      exitButton.addEventListener('click', (event) => {
        event.preventDefault()

        this.#hideModal()
      })
    }

    #hideModal () { 
      this.#photoEditorModal.classList.add('hide-transition')
      this.#photoEditorModal.classList.remove('display-transition')   
    }

    displayPhotoEditor (photo) {
      if (!photo || !(photo instanceof HTMLImageElement)) {
        throw new Error('Valid photo is required')
      }

      const displayModalEvent = new CustomEvent('display-modal')
      this.dispatchEvent(displayModalEvent)

      this.#displayModal()

      this.#photoContainer.appendChild(photo)
    }

    #displayModal () {
      console.log(this.#photoEditorModal)

      this.#photoEditorModal.classList.remove('hide-transition')
      this.#photoEditorModal.classList.add('display-transition')

      console.log(this.#photoEditorModal.classList)
    }
  }

  customElements.define('photo-editor-view', PhotoEditorView)

  export { PhotoEditorView }



  
