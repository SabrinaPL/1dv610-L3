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
  #columns = 3 // Having a hardcoded number of columns is a shortcut which makes the app less dynamic!

  constructor (photoGalleryElement) {
    if (!(photoGalleryElement instanceof HTMLElement) || !photoGalleryElement) {
      throw new Error('Invalid photo gallery element')
    }

    this.#photoGalleryElement = photoGalleryElement

    this.#photoAssistantServiceInstance = new PhotoAssistantService()
    this.#uploadServiceInstance = new UploadService()

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
    console.log('in construct photo gallery' + this.#photos)

    this.#photos.forEach(photo => {
      const photoDescription = photo.alt

      this.#photoAssistantServiceInstance.addPhotoToGallery(photo, photoDescription)

      console.log(photo)
    })
  }

  #sortPhotosAlphabetically () {
    this.#photoAssistantServiceInstance.sortPhotosAlphabetically()
  }

  #displayConstructedGallery () {
    this.#photoAssistantServiceInstance.displayGallery(this.#columns, this.#photoGalleryElement)
  }
}
