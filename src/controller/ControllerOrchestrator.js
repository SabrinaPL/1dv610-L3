// Will be responsible for delegating to the correct controller class, create an instance of the services and model and dependency inject those instances to the controller classes (to ensure that a single instance is created).
import { PhotoGalleryController } from './PhotoGalleryController.js'
import { PhotoEditorController } from './PhotoEditorController'
import { PhotoAssistantService } from '../services/PhotoAssistantService'
import { UploadService } from '../services/UploadService.js'

export class ControllerOrchestrator {
  #photoAssistantServiceInstance
  #uploadServiceInstance

  constructor () {
  
  }

  // add event listener to listen to events omitted from the view. Instantiate the necessary class instances then delegate and DI the appropriate controller class?

  this.#photoGalleryControllerInstance = new PhotoGalleryController(photoGalleryContainer)
}