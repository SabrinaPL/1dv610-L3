/**
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 *
 * @version 1.0.0
 */
import { ControllerOrchestrator } from '../../../controller/ControllerOrchestrator.js'

const template = document.createElement('template')
template.innerHTML = `
    <div class="photo-editor display-transition">
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

          <div id="canvas-container">
            <!-- Filtered photo to be appended here --> 
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
        background-color: #4F5D75;
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

      .hide-transition {
        transition: opacity 0.5s ease;
        opacity: 0;
        pointer-events: none;
      }

      .display-transition {
       opacity: 1;
       pointer-events: all; 
      }
    </style>`

customElements.define('photo-editor',
  class extends HTMLElement {
    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))

      const photoEditorModal = this.shadowRoot.querySelector('.photo-editor')
      const exitButton = this.shadowRoot.getElementById('exit-button-container')

      exitButton.addEventListener('click', (event) => {
        event.preventDefault()

        photoEditorModal.classList.add('hide-transition')
        photoEditorModal.classList.remove('display-transition')
      })
    }
  })
