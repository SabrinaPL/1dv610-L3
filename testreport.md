# Test report

The PhotoAssistant library has been tested with automatic unit tests (Jest) and also in a simple test application environment (found in the test-app folder) in the browser.

## System version

v 1.0.0

## System test

Manual testing (expected result).

## Testing environment

Manual testing done locally (run in the browser with Vite) and in production environment (Netlify).

## Test cases (manual testing) and result

| Test case                                      | Description                                                                                       | Expected result                                                                                      | Result |
|-----------------------------------------------|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|--------|
| Upload files of different types               | Test uploading images in formats such as JPEG, PNG, and another file type such as PDF.               | Images and other file types are accepted and uploaded without errors.                               |  Result is as expected, config added to upload-widget to enable only image files to be uploaded (tested successfully after updated config).       |
| Apply a single filter to an image             | Apply a single filter (e.g., sepia or grayscale) to an image to verify that filtering works correctly. | Image is displayed with the applied filter without any errors.                      |    Single filter is applied successfully to the image.    |
| Apply multiple filters to an image            | Apply multiple filters to an image to test that filters combine correctly.                        | Image displays with all selected filters applied, with no visual errors.             |   Bug found! Filters accumulate and are added to all images in the gallery (tested filtering single image multiple times aswell with the same result).    |
| Save filtered image                           | Save the filtered image to verify it saves without loss of filter effects.                        | Image is saved correctly with all applied filters intact.                                            |    This test wasn't performed since the photo canvas functionality (which would enable filtered photo to be saved) wasn't added due to time constraints.    |
| Sort images                                   | Test that images can be sorted by alphabetical order (based on alt description).        | Images display in the selected sorting order without issues.                                        |   Sorting successful! Also added dateUploaded + timeUploaded data to uploaded image data (to expand with more sorting criteria and functionality in future versions).     |
| Display images in a gallery with different amount of columns | Display images in a gallery layout with varying column widths (e.g., 2, 3, 4 columns) to test layout. | Images are displayed correctly across different column sizes without layout issues or overlap.      |   Bug found! Photos are displayed in a scattered pattern!      |
| Input invalid filter value. | Input other values than numbers in the filter value text field, such as letters. | An error to be thrown.  |   Bug found! Nothing happens, no error is thrown and it's no longer possible to submit the form in the editor modal. Bug solved by adding text input validation (which I had forgotten), also added error handling and an alert (for user feedback). |

### Screenshots of test results from manual testing both locally and in production environment

![Uploading photos manual test result](./imageExamples/Uploading%20photos%20test.png)

Result from testing of photo uploading.

![Gallery display manual test result](./imageExamples/Gallery%20display%20test.png)

Result from gallery display test. Bug found! Photos are displayed in a scattered pattern, a bug that will need to be solved in future versions!

![Adding photos to editing modal test result](./imageExamples/AddingPhotoToEditorTest.png)

Result from adding photos to the editing modal, after multiple failed attempts (solved by adding an App class in index.js and using dependency injection to avoid multiple instantiations).

![Photo filtering test result](./imageExamples/FilterTest.png)

Result from adding filter to uploaded photo.

![Photo filtering bug found](./imageExamples/Filter%20added%20to%20add%20uploaded%20photos%20test.png)

Result from filtering more than one photo - another bug found! Filter values accumulate and affect all photos in the gallery, this will need to be solved in future versions!

![Test to see if filter effect remains when photo is reopened from gallery](./imageExamples/Filter%20effect%20remaining%20when%20reopening%20editor%20modal%20test.png)

Result from testing to see if filter effect remains when photo is reopened from the gallery.

![Photo filtering before](./imageExamples/Before%20filtering.png)

Result of testing photo filter modal before filtering.

![Photo filtering after](./imageExamples/After%20applied%20filter.png)

Result of testing photo filtering modal after filtering.

![Filtered photo rendered in gallery after editing](./imageExamples/Filtered%20photo%20reappears%20in%20gallery%20after%20editing%20modal%20has%20closed.png)

Result of testing to see that filtered photo rerenders in photo gallery when photo editing modal has been closed.

![Alphabetical ordering of photos in gallery before](./imageExamples/Alphabet%20ordering%20of%20photos%20test.png)

Before photos are displayed in alphabetical order (image to showcase file names).

![Alphabetical ordering of photos in gallery result](./imageExamples/alphabet%20order%20result1.png)
![Alphabetical ordering of photos in gallery result](./imageExamples/alphabet%20order%20result2.png)

Result of testing successful. The photos are displayed in the gallery in alphabetical order:

1. garden
2. monkey
3. nagoya_castle
4. nara
5. osaka
