/**
 * Controller class that receives user input from the PhotoEditor view class and is responsible for delegating and communicating this data to the model and service class and for communicating the result back to the view.
 * 
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 *
 * @version 1.0.0
 */
export class PhotoEditorController {
  #photoAssistantServiceInstance
  #filterMethod
  #filterValue
  #photoToBeFiltered
  #filteredPhoto

  constructor (photoAssistantServiceInstance) {
    if (!this.#photoAssistantServiceInstance) {
      this.#photoAssistantServiceInstance = photoAssistantServiceInstance
    }
  }

  addFilter (filterMethod, filterValue) {
    if (typeof (filterMethod) !== 'string' || filterMethod === '' || typeof (filterValue) !== 'string' || filterValue === '') {
      throw new Error('Invalid filter method or filter value')
    }

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

