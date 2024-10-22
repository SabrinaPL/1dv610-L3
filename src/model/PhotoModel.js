/**
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 * 
 * @version 1.0.0
 */
export class PhotoModel {
  #url = ''
  #imageDescription = ''
  #constructedImageElement

  constructor(url, imageDescription) {
    if (!url || typeof url !== 'string' || !imageDescription || typeof imageDescription!== 'string') {
      throw new Error('Valid image url and image alt is required')
    }

    this.#url = url
    this.#imageDescription = imageDescription

    this.#constructImageElement()
  }

  #constructImageElement() {
    const img = new Image()

    img.src = this.#url
    img.alt = this.#imageDescription
    this.#constructedImageElement = img
  }

  getConstructedImageElement() {
    return this.#constructedImageElement
  }
}