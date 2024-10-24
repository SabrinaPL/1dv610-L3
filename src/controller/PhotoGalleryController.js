/**
 * Controller class that receives user input from the PhotoGallery view class and is responsible for delegating and communicating this data to the model class and service classes and for communicating the result back to the view.
 * 
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 *
 * @version 1.0.0
 */
import { PhotoModel } from '../model/PhotoModel.js'
import { PhotoAssistantService } from '../services/PhotoAssistantService.js'
import { UploadService } from '../services/UploadService.js'

export class PhotoGalleryController {
  #photoAssistantServiceInstance
  #uploadServiceInstance
  #photoGalleryElement
  #uploadedPhotosData = []
  #photoUrl = ''
  #photoName = ''
  #photos = []
  #columns

  // Here I'm breaking a function rule of clean code in having too many arguments (but breaking it on purpose, for dependency injection). Create a separate function for handling columns and photoGalleryElement?
  constructor (columns, photoGalleryElement, photoAssistantServiceInstance, uploadServiceInstance) {
    if (!(photoGalleryElement instanceof HTMLElement) || !photoGalleryElement || columns === null || typeof (columns) !== 'number') {
      throw new Error('Valid column value and photo gallery element are required')
    }

    if (!this.#photoAssistantServiceInstance && (photoAssistantServiceInstance instanceof PhotoAssistantService)) {
      this.#photoAssistantServiceInstance = photoAssistantServiceInstance
    }

    if (!this.#uploadServiceInstance && (uploadServiceInstance instanceof UploadService)) {
      this.#uploadServiceInstance = uploadServiceInstance
    }

    this.#photoGalleryElement = photoGalleryElement
    this.#columns = columns

    window.addEventListener('photosUploaded', () => {
      this.#fetchPhotoData()
      this.#createPhotoFromData()
      this.#constructPhotoGallery()
      this.#sortPhotosAlphabetically()
      this.#displayConstructedGallery()
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

  #createPhotoFromData () {
    if (this.#uploadedPhotosData.length > 0) {
      this.#uploadedPhotosData.forEach(photoDataObject => {
        this.#photoUrl = photoDataObject.photoUrl
        this.#photoName = photoDataObject.photoName

        const photoModel = new PhotoModel(this.#photoUrl, this.#photoName)
        const photo = photoModel.getConstructedImageElement()

        this.#photos.push(photo)
      })
    }
  }

  #constructPhotoGallery () {
    this.#photos.forEach(photo => {
      const photoDescription = photo.alt

      this.#photoAssistantServiceInstance.addPhotoToGallery(photo, photoDescription)
    })
  }

  #sortPhotosAlphabetically () {
    this.#photoAssistantServiceInstance.sortPhotosAlphabetically()
  }

  #displayConstructedGallery () {
    this.#photoAssistantServiceInstance.displayGallery(this.#columns, this.#photoGalleryElement)
  }
}

