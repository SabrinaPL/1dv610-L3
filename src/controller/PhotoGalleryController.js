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
  #photoUrl = ''
  #photoName = ''
  #photos = []

  constructor (photoGalleryElement) {
    if (typeof photoGalleryElement !== HTMLElement || !photoGalleryElement) {
      this.#photoGalleryElement = photoGalleryElement
    }

    this.#photoAssistantServiceInstance = new PhotoAssistantService()
    this.#uploadServiceInstance = new UploadService()

    window.addEventListener('photosUploaded', () => {
      this.#fetchPhotoData()
      this.#createPhotoFromData()
      this.#constructPhotoGallery()
    })
  }

  uploadPhotos () {
    this.#uploadPhotos()
  }

  #uploadPhotos () {
    this.#uploadServiceInstance.uploadPhoto()
  }

  #fetchPhotoData () {
    this.#uploadedPhotosData = this.#uploadServiceInstance.getUploadedPhotosData()
  }

  // Breaking Clean Code-principles here (nested control statements)!
  #createPhotoFromData () {
    if (this.#uploadedPhotosData.length > 0) {
      for (let i = 0; i < this.#uploadedPhotosData.length; i++) { 
        this.#uploadedPhotosData.forEach(photoDataObject => {
        this.#photoUrl = photoDataObject[i].photoUrl
        this.#photoName = photoDataObject[i].photoName

        const photoModel = new PhotoModel(this.#photoUrl, this.#photoName)

        const photo = photoModel.getConstructedImageElement()

        this.#photos.push(photo)
      })
    }
  }
}

  #constructPhotoGallery () {
    // this.#photoAssistantServiceInstance.addPhotoToGallery(this.#photo, this.#photoDescription)
  }
}
