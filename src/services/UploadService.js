/**
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 * 
 * @version 1.0.0
 */
export class UploadService {
  #uploadedPhotosData = []
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
        const photoUrl = photoFile.fileUrl
        const photoDescription = photoFile.originalFile.originalFileName
        const timestamp = photoFile.originalFile.metadata.tags[0]
        const timestampParts = timestamp.split("/")
        const dateTaken = timestampParts[1]
        const timeTaken = timestampParts[2]

        const photoData = {
          photoUrl,
          photoDescription,
          dateTaken,
          timeTaken
        }

        this.#uploadedPhotosData.push(photoData)
      })
    }
  }

  getPhotoUrls() {
    if (this.#uploadedPhotosData.length > 0) {
      const uploadedPhotosData = new Array(this.#uploadedPhotosData)

      return uploadedPhotosData
    }
  }
}