import { PhotoAssistantOrchestrator } from 'photo-assistant'

export class PhotoAssistantService {
  #photoAssistantInstance

  constructor () {
    this.#photoAssistantInstance = new PhotoAssistantOrchestrator()
  }

  #addPhoto (photo, photoDescription) {
    this.#photoAssistantInstance.addPhoto(photo, photoDescription)
  }

  // filter photo
  // display photos in gallery
}