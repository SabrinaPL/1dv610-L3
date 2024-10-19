// Service that interacts with photo uploading widget.

export class UploadService {
  #photoUrls = []

  async uploadPhoto () {
    const photoFiles = await Bytescale.UploadWidget.open({
      apiKey: "free",
      maxFileCount: 4
    })

    console.log(photoFiles)
  }

  getPhotoUrls () {
    // Return the url + the originalFileName - extension.
  }
}