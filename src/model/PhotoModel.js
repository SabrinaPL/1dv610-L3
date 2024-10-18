export class PhotoModel {
  #url = ''
  #image

  constructor(url) {
    if (!url || typeof url !== 'string') {
      throw new Error('Valid image url is required')
    }

    this.#url = url

    this.#constructImageElement()
  }

  #constructImageElement() {
    const img = new Image()
    img.src = this.#url
    this.#image = img
  }

  getImageElement() {
    return this.#image
  }
}