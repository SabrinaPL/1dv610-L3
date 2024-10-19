/**
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 * 
 * @version 1.0.0
 */
// Service that interacts with photo uploading widget.
export class UploadService {
  #uploadedPhotos = []
  #photoFiles

  uploadPhoto () {
    this.#openUploadWidget()
  }

  async #openUploadWidget () {
    const photoFiles = await Bytescale.UploadWidget.open({
      apiKey: "free",
      maxFileCount: 4
    })

    this.#addUploadedPhotos()
  }

  #addUploadedPhotos () {
    // loop through the photoFiles, extract url + image description, construct new objects and push to uploadedPhotos-array.
  }

  getPhotoUrls () {
    // Return the url + the originalFileName - extension.
  }
}