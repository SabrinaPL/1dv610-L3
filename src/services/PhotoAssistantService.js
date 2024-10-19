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
    this.#photoAssistantInstance.addPhoto(photo, photoDescription)
  }

  displayPhotosInGallery (columns, galleryElement) {

  }

  // filter photo
  // display photos in gallery
}