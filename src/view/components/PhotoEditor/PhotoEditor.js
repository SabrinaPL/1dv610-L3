/**
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 *
 * @version 1.0.0
 */
import { ControllerOrchestrator } from '../../../controller/ControllerOrchestrator.js'

const template = document.createElement('template')
template.innerHTML = `
    <div class="photo-editor hide-transition display-transition">
      <div id="photo-editor-container">
        <div id="choice-menu-container">
          <form id="filter-image-form">
            <h2>Add filter effect to photos</h2>
            <p>Select the filter effect and input the filter value of the filter you wish to apply to the photos:</p>

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
      </div>
    </div>
  
    <style>
      #photo-editor-container,
      #choice-menu-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F7B2B7;
        margin-top: 5%;
        margin-left: 30%;
        margin-bottom: 5%;
        margin-right: 30%;
        padding: 10px;
        border-radius: 15px;
      }

      .hide-transition {
        display: none;
      }

      .display-transition {
        
      }
    </style>`

customElements.define('photo-editor',
  class extends HTMLElement {
    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))

      // this.addEventListener('')
    }
  }
)
