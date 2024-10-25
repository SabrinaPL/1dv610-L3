/**
 * Service class that is responsible for interaction with the photo-assistant lib for photo filtering, sorting (alphabetically), construction of canvas elements and display of photos in grid gallery format functionality.
 * 
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 *
 * @version 1.0.0
 */
import { PhotoAssistantOrchestrator } from 'photo-assistant'

export class PhotoAssistantService {
  #photoAssistantInstance
  #photo
  #photoGalleryElement
  #columns
  #filterMethod = ''
  #filterValue = ''

  constructor () {
    this.#photoAssistantInstance = new PhotoAssistantOrchestrator()
  }

  /**
   *
   * @param {HTMLImageElement} photo
   * @param {String} photoDescription
   */
  addPhotoToGallery (photo, photoDescription) {
    this.#validatePhoto(photo, photoDescription)

    this.#photo = photo

    this.#addPhoto()
  }

  #validatePhoto (photo, photoDescription) {
    if (!(photo instanceof HTMLImageElement) || !photo || photoDescription === '' || typeof (photoDescription) !== 'string') {
      throw new Error('Valid image element and photo description are required')
    }
  }

  #addPhoto () {
    this.#photoAssistantInstance.saveImage(this.#photo)
  }

  /**
   *
   * @param {number} columns
   * @param {HTMLElement} photoGalleryElement
   */
  displayGallery (columns, photoGalleryElement) {
    this.#validateGalleryArguments(columns, photoGalleryElement)

    this.#columns = columns
    this.#photoGalleryElement = photoGalleryElement

    this.#displayPhotosInGallery()
  }

  #validateGalleryArguments (columns, galleryElement) {
    if (!columns || typeof (columns) !== 'number' || !(galleryElement instanceof HTMLElement)) {
      throw new Error('Valid column value and HTML element are required')
    }
  }

  #displayPhotosInGallery () {
    this.#photoAssistantInstance.displayPhotosInGallery(this.#columns, this.#photoGalleryElement)
  }

  sortPhotosAlphabetically () {
    this.#sortPhotos()
  }

  #sortPhotos () {
    this.#photoAssistantInstance.sortPhotos()
  }

  addPhotoFilter (filterMethod, filterValue) {
    if (typeof (filterMethod) !== 'string' || filterMethod === '' || typeof (filterValue) !== 'string' || filterValue === '') {
      throw new Error('Invalid filter method or filter value')
    }

    this.#filterMethod = filterMethod
    this.#filterValue = filterValue
    
    this.#addFilter()
  }

  #addFilter () {

    console.log(typeof this.#filterMethod)
    console.log(typeof this.#filterValue)

    this.#photoAssistantInstance.chosenFiltersToAdd(this.#filterMethod, this.#filterValue)  
  }

  applyPhotoFilters () {
    this.#filterPhotos()
  }

  #filterPhotos () {
    this.#photoAssistantInstance.applyChosenFilters()
  }
}
