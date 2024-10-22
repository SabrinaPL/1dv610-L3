/**
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 * 
 * @version 1.0.0
 */
import { PhotoAssistantService } from '../services/PhotoAssistantService.js'
import { PhotoModel } from '../model/PhotoModel.js'
import { UploadService } from '../services/UploadService.js'

export class PhotoGalleryController {
  #photoAssistantServiceInstance
  #uploadServiceInstance
  #photoGalleryElement
  #uploadedPhotosData = []
  #photos = []

  constructor (photoGalleryElement) {
    if (typeof photoGalleryElement !== HTMLElement || !photoGalleryElement) {
      this.#photoGalleryElement = photoGalleryElement
    }

    this.#photoAssistantServiceInstance = new PhotoAssistantService()
    this.#uploadServiceInstance = new UploadService()

    window.addEventListener('photosUploaded', () => {
      this.#addPhotosToGallery()
    })
  }

  uploadPhotos () {
    this.#uploadPhotos()
  }

  #uploadPhotos () {
    this.#uploadServiceInstance.uploadPhoto()
  }

  #addPhotosToGallery () {
    this.#fetchPhotoData()
    // this.#constructImageElement()
    // this.#constructPhotoGallery()
  }

  #fetchPhotoData () {
    this.#uploadedPhotosData = this.#uploadServiceInstance.getUploadedPhotosData()

    console.log(this.#uploadedPhotosData)
  }

  #constructImageElement () {
    if (this.#uploadedPhotosData.length > 0) {
      // extract data for each photo and construct image elements from it
    }
  }

  #constructPhotoGallery () {
    // this.#photoAssistantServiceInstance.addPhotoToGallery(this.#photo, this.#photoDescription)
  }
}
