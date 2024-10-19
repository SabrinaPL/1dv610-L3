/**
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 * 
 * @version 1.0.0
 */
export class UploadService {
  #uploadedPhotos = []
  #photoFiles

  uploadPhoto () {
    this.#openUploadWidget()
  }

  async #openUploadWidget () {
    this.#photoFiles = await Bytescale.UploadWidget.open({
      apiKey: "free",
      maxFileCount: 10
    })

    this.#addUploadedPhotos()
  }

  #addUploadedPhotos () {
    this.#photoFiles.forEach(photoFile => {
      const photoUrl = photoFile.fileUrl
      const photoDescription = photoFile.mimeType

      const photo = {
        photoUrl,
        photoDescription
      }

      this.#uploadedPhotos.push(photo)

      console.log(this.#uploadedPhotos)
    })

    // loop through the photoFiles, extract url + image description, construct new objects and push to uploadedPhotos-array.
  }

  getPhotoUrls () {
    if (this.#uploadedPhotos.length > 0) {
      const uploadedPhotos = new Array(this.#uploadedPhotos)

      return uploadedPhotos
    }
  }
}