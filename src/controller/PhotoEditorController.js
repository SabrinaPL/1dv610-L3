/**
 * Controller class that receives user input from the PhotoEditor view class and is responsible for delegating and communicating this data to the model and service class and for communicating the result back to the view.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 *
 * @version 1.0.0
 */
export class PhotoEditorController {
  #photoAssistantServiceInstance
  #photoEditorViewInstance
  #filterMethod
  #filterValue
  #photoToBeFiltered

  /**
   * 
   * @param {InstanceType} photoAssistantServiceInstance
   * @param {InstanceType} photoEditorViewInstance
   */
  constructor (photoAssistantServiceInstance, photoEditorViewInstance) {
    this.#photoAssistantServiceInstance = photoAssistantServiceInstance
    this.#photoEditorViewInstance = photoEditorViewInstance
  }

  /**
   * 
   * @param {HTMLImageElement} photo - to be edited.
   */
  addPhotoToBeFiltered (photo) {
    this.#photoToBeFiltered = photo

    this.#displayPhotoInEditor()
  }

  #displayPhotoInEditor () {
    this.#photoEditorViewInstance.displayPhotoEditorModal(this.#photoToBeFiltered)
  }

  /**
   * 
   * @param {string} filterMethod 
   * @param {string} filterValue 
   */
  addFilter (filterMethod, filterValue) {
    this.#filterMethod = filterMethod
    this.#filterValue = filterValue

    this.#addPhotoFilter()
  }

  #addPhotoFilter () {
    this.#photoAssistantServiceInstance.addPhotoFilter(this.#filterMethod, this.#filterValue)
  }

  applyFilter () {
    this.#applyPhotoFilters()
  }

  #applyPhotoFilters () {
    this.#photoAssistantServiceInstance.applyPhotoFilters()
  }
}
