# InstaGallery

InstaGallery is a simple web app, inspired by similar apps such as Instagram, that offers uploading of photos, displaying of uploaded photos in a grid gallery format in alphabetical order (based on image alt descriptions) and filtering of uploaded photos (with a single or multiple filters).

![InstaGallery example before](./imageExamples/Before%20filtering.png)
![InstaGallery example after](./imageExamples/After%20applied%20filter.png)

This is an early beta version of InstaGallery which means that only basic functionality has been added and there are also known bugs that the developer team is working to solve for future versions. More features are also planned for future releases.

## Features to be added in future versions

* User login and registration.
* Persistence - storing of the photos that have been added to the app for rerendering next time the app is opened.
* Delete functionality - deleting photos from the app.
* Commenting on photos and viewing other users photo galleries.
* AI photo editing assistant (for pro photo editing tips).
* Save functionality - drawing of filtered photos to a canvas element, which will enable saving of edited photo.
* Improved UX/UI-design.

### Testing

InstaGallery has been tested using manual testing of some common use cases and edge cases locally and in production environment.

### Bugs

* Photos are displayed in a scattered pattern in the grid gallery.
* Adding filters to multiple photos affects the other photos in the gallery aswell (filters are added to all photos, this is a bug in the library that needs to be solved - logic needs to be updated for future versions so that only the selected photo is filtered and also reset filter-functionality needs to be added).

### Credits

* [Upload-widget](https://www.npmjs.com/package/@bytescale/upload-widget) by @Bytescale.
* [Photo Assistant Library](https://www.npmjs.com/package/photo-assistant) created by Sabrina Prichard-Lybeck.

### License

This code is licensed under the MIT license.
