import { PhotoAssistantService } from "../services/PhotoAssistantService"

/**
 * Controller class that receives user input from the PhotoEditor view class and is responsible for delegating and communicating this data to the model and service class and for communicating the result back to the view.
 * 
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 *
 * @version 1.0.0
 */
export class PhotoEditorController {
  #photoAssistantServiceInstance

  constructor (photoAssistantServiceInstance) {
    if (!this.#photoAssistantServiceInstance && (photoAssistantServiceInstance instanceof PhotoAssistantService)) {
      this.#photoAssistantServiceInstance = photoAssistantServiceInstance
    }
  }
}