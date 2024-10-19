/**
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 * 
 * @version 1.0.0
 */
import { PhotoAssistantOrchestrator } from 'photo-assistant'

export class PhotoAssistantService {
  #photoAssistantInstance

  constructor () {
    this.#photoAssistantInstance = new PhotoAssistantOrchestrator()
  }

  addPhoto (photo, photoDescription) {
    if (typeof photo !== HTMLImageElement || photo === null || photoDescription === '' || typeof photoDescription !== 'string') {
      throw new Error('Valid image element and photo description are required')
    }

    this.#photoAssistantInstance.addPhoto(photo, photoDescription)
  }

  displayPhotosInGallery (columns, galleryElement) {
    if (columns === null || typeof columns !== 'number' || typeof galleryElement !== HTMLElement) {
      throw new Error('Valid column value and HTML element are required')
    }

    this.#photoAssistantInstance.displayPhotosInGallery(columns, galleryElement)
  }

  filterPhotos () {
    this.#photoAssistantInstance.chosenFiltersToAdd()
    this.#photoAssistantInstance.applyChosenFilters()
  }
}