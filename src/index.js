import './view/components/PhotoEditorView/index.js'
import './view/components/PhotoGalleryView/index.js'
import { ControllerOrchestrator } from './controller/ControllerOrchestrator.js'
import { PhotoEditorView } from './view/components/PhotoEditorView/PhotoEditorView.js'
import { PhotoGalleryView } from './view/components/PhotoGalleryView/PhotoGalleryView.js'

class App {
  #controllerOrchestratorInstance
  #photoGalleryViewInstance
  #photoEditorViewInstance

  constructor () {
    this.#controllerOrchestratorInstance = new ControllerOrchestrator()
    this.#photoGalleryViewInstance = new PhotoGalleryView(this.#controllerOrchestratorInstance)
    this.#photoEditorViewInstance = new PhotoEditorView(this.#controllerOrchestratorInstance)

    this.#controllerOrchestratorInstance.setupPhotoEditorInstances(this.#photoEditorViewInstance)
  }

  start () {
    const appContainer = document.getElementById('app')

    appContainer.appendChild(this.#photoGalleryViewInstance)
    appContainer.appendChild(this.#photoEditorViewInstance)
  }

  static main () {
    const app = new App()
    app.start()
  }
}

App.main()
