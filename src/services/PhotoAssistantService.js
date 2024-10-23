/**
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
    console.log('in validate photo' + photo)
    console.log(photoDescription)

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

  #filterPhotos () {
    this.#photoAssistantInstance.chosenFiltersToAdd()
    this.#photoAssistantInstance.applyChosenFilters()
  }
}
