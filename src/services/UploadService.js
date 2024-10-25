/**
 * Service class that handles interaction with @bytescale upload-widget to enable photo uploading and storage functionality and fetch photo data.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 *
 * @version 1.0.0
 */
export class UploadService {
  #uploadedPhotosData = []
  #photoFiles = []

  uploadPhoto () {
    this.#openUploadWidget()
  }

  async #openUploadWidget () {
    this.#photoFiles = await Bytescale.UploadWidget.open({
      apiKey: 'public_12a1z9YCw4rDV8kDMUABfihezDwv',
      maxFileCount: 10,
      mimeTypes: ["image/*"],
    })

    this.#addUploadedPhotos()
  }

  #addUploadedPhotos () {
    if (this.#photoFiles.length > 0) {
      this.#photoFiles.forEach(photoFile => {
        const photoUrl = photoFile.fileUrl
        const photoName = photoFile.originalFile.originalFileName
        const timestamp = photoFile.originalFile.metadata.tags[0]
        const timestampParts = timestamp.split('/')
        const dateUploaded = timestampParts[1]
        const timeUploaded = timestampParts[2]

        const photoData = {
          photoUrl,
          photoName,
          dateUploaded,
          timeUploaded
        }

        this.#uploadedPhotosData.push(photoData)

        const photosUploadedEvent = new CustomEvent('photosUploaded')
        window.dispatchEvent(photosUploadedEvent)
      })
    } else {
      throw new Error('No photos have been uploaded.')
    }
  }

  getUploadedPhotosData () {
    if (this.#uploadedPhotosData.length > 0) {
      const uploadedPhotosData = [...this.#uploadedPhotosData]

      return uploadedPhotosData
    }
  }
}
