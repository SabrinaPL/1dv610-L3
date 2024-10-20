/**
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 * 
 * @version 1.0.0
 */
export class UploadService {
  #uploadedPhotos = []
  #photoFiles = []

  uploadPhoto() {
    this.#openUploadWidget()
  }

  async #openUploadWidget() {
    this.#photoFiles = await Bytescale.UploadWidget.open({
      apiKey: "free",
      maxFileCount: 10
    })

    this.#addUploadedPhotos()
  }

  #addUploadedPhotos() {
    if (this.#photoFiles.length > 0) {
      this.#photoFiles.forEach(photoFile => {
        console.log(photoFile)
  
        const photoUrl = photoFile.fileUrl
        const photoDescription = photoFile.originalFile.originalFileName

        const photo = {
          photoUrl,
          photoDescription
        }

        this.#uploadedPhotos.push(photo)

        console.log(this.#uploadedPhotos)
      })
    }
  }

  getPhotoUrls() {
    if (this.#uploadedPhotos.length > 0) {
      const uploadedPhotos = new Array(this.#uploadedPhotos)

      return uploadedPhotos
    }
  }
}