// Will be responsible for delegating to the correct controller class, create an instance of the services and model and dependency inject those instances to the controller classes (to ensure that a single instance is created).
import { PhotoGalleryController } from './PhotoGalleryController.js'
import { PhotoEditorController } from './PhotoEditorController'
import { PhotoAssistantService } from '../services/PhotoAssistantService'
import { UploadService } from '../services/UploadService.js'

export class ControllerOrchestrator {
  #photoAssistantServiceInstance
  #uploadServiceInstance
  #photoGalleryControllerInstance

  constructor () {
    // Control statements to avoid multiple instantiations.
    if (!this.#photoAssistantServiceInstance) {
      this.#photoAssistantServiceInstance = new PhotoAssistantService()
    } 
    
    if (!this.#uploadServiceInstance) {
      this.#uploadServiceInstance = new UploadService()   
    }
  }

  constructPhotoGallery (columns, photoGalleryElement) {
    this.#photoGalleryControllerInstance = new PhotoGalleryController(columns, photoGalleryElement, this.#photoAssistantServiceInstance, this.#uploadServiceInstance)
  }

  uploadPhotos () {
    this.#photoGalleryControllerInstance.uploadPhotos()
  }
}
