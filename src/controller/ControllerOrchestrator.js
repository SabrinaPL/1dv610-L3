/**
 * Controller class responsible for delegating tasks to the correct controller class, create an instance of the services and dependency inject those instances to the controller classes (to avoid multiple instantiation of instances).
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 *
 * @version 1.0.0
 */
import { PhotoGalleryController } from './PhotoGalleryController.js'
import { PhotoEditorController } from './PhotoEditorController'
import { PhotoAssistantService } from '../services/PhotoAssistantService'
import { UploadService } from '../services/UploadService.js'

export class ControllerOrchestrator {
  #photoAssistantServiceInstance
  #uploadServiceInstance
  #photoGalleryControllerInstance
  #photoEditorControllerInstance
  #photoEditorViewInstance

  constructor () {
    this.#photoAssistantServiceInstance = new PhotoAssistantService()
    this.#uploadServiceInstance = new UploadService()
  }

  /**
   *
   * @param {InstanceType} photoEditorViewInstance
   */
  setupPhotoEditorInstances (photoEditorViewInstance) {
    this.#photoEditorViewInstance = photoEditorViewInstance

    this.#photoEditorControllerInstance = new PhotoEditorController(this.#photoAssistantServiceInstance, this.#photoEditorViewInstance)
  }

  /**
   *
   * @param {number} columns
   * @param {HTMLElement} photoGalleryElement - element to which the gallery will be appended.
   */
  constructPhotoGallery (columns, photoGalleryElement) {
    try {
      this.#photoGalleryControllerInstance = new PhotoGalleryController(this.#photoAssistantServiceInstance, this.#uploadServiceInstance)

      this.#photoGalleryControllerInstance.setupPhotoGallery(columns, photoGalleryElement)
    } catch (error) {
      console.error(error)
    }
  }

  uploadPhotos () {
    this.#photoGalleryControllerInstance.uploadPhotos()
  }

  /**
   *
   * @param {HTMLImageElement} photo
   */
  editPhoto (photo) {
    this.#photoEditorControllerInstance.addPhotoToBeFiltered(photo)
  }

  /**
   *
   * @param {string} filterMethod
   * @param {string} filterValue
   */
  addFilter (filterMethod, filterValue) {
    this.#photoEditorControllerInstance.addFilter(filterMethod, filterValue)
  }

  applyFilter () {
    this.#photoEditorControllerInstance.applyFilter()
  }
}
