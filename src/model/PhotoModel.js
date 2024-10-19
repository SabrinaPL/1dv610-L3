export class PhotoModel {
  #url = ''
  #imageDescription = ''
  #image

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
    this.#image = img
  }

  getImageElement() {
    return this.#image
  }
}