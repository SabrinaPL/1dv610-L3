# Test report

The PhotoAssistant library has been tested with automatic unit tests (Jest) and also in a simple test application environment (found in the test-app folder) in the browser.

## System version

v 1.0.0

## System test

Manual testing (expected result) and automatic unit testing.

## Testing environment

Manual testing done in the test-app (run in the browser with Vite) and automatic testing done with Jest.

## Test cases (manual testing) and result

### Screenshots of test results from manual testing both locally and in production environment

![Uploading photos manual test result](./imageExamples/Uploading%20photos%20test.png)

Result from testing of photo uploading.

![Gallery display manual test result](./imageExamples/Gallery%20display%20test.png)

Result from gallery display test. Photos are displayed in a scattered pattern, a bug that will need to be solved for future versions.

![Adding photos to editing modal test result](./imageExamples/AddingPhotoToEditorTest.png)

Result from adding photos to the editing modal, after multiple failed attempts (solved by adding an App class in index.js and using dependency injection to avoid multiple instantiations).

![Photo filtering test result](./imageExamples/FilterTest.png)

Result from adding filter to uploaded photo.



