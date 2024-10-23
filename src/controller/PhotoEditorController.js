/**
 * Controller class that receives user input from the PhotoEditor view class and is responsible for delegating and communicating this data to the model and service class and for communicating the result back to the view.
 * 
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 *
 * @version 1.0.0
 */
import { PhotoAssistantService } from '../services/PhotoAssistantService.js'

export class PhotoEditorController {
  #photoAssistantServiceInstance

  constructor (PhotoAssistantServiceInstance) {
    if (!(PhotoAssistantServiceInstance instanceof PhotoAssistantService) || !PhotoAssistantServiceInstance) {
      throw new Error('Instance of PhotoAssistantService is required')
    }

    this.#photoAssistantServiceInstance = PhotoAssistantServiceInstance
  }
}
