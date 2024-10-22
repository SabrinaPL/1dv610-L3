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
  #photoDescription = ''

  constructor () {
    this.#photoAssistantInstance = new PhotoAssistantOrchestrator()
  }

  addPhotoToGallery (photo, photoDescription, photoGalleryElement) {
    this.#validatePhoto(photo, photoDescription)

    this.#photo = photo
    this.#photoDescription = photoDescription
    this.#photoGalleryElement = photoGalleryElement

    this.#addPhoto()
    this.#displayPhotosInGallery()
  }

  #validatePhoto () {
    if (typeof photo !== HTMLImageElement || !photo || photoDescription === '' || typeof photoDescription !== 'string') {
      throw new Error('Valid image element and photo description are required')
    }   
  }

  #addPhoto () {
    this.#photoAssistantInstance.addPhoto(this.#photo, this.#photoDescription)
  }

  #displayPhotosInGallery (columns, galleryElement) {
    this.#validateGalleryArguments(columns, galleryElement)

    this.#photoAssistantInstance.displayPhotosInGallery(columns, galleryElement)
  }

  #validateGalleryArguments (columns, galleryElement) {
    if (!columns || typeof columns !== 'number' || typeof galleryElement !== HTMLElement) {
      throw new Error('Valid column value and HTML element are required')
    }
  }

  #filterPhotos () {
    this.#photoAssistantInstance.chosenFiltersToAdd()
    this.#photoAssistantInstance.applyChosenFilters()
  }
}