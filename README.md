# Image TODO App

## Description

Image TODO App is a versatile drag-and-drop image uploader with descriptions. Easily manage your image collection and enjoy persistent data storage across sessions. Users can upload images, add descriptions, and save data locally for a seamless experience across sessions.

## Features

- Initial display carousel with transition effect (optional)
- Drag-and-drop or browse-and-upload functionality
- Thumbnail display with description input
- Persistent data storage using local storage
- Delete functionality for images
 ## [Live](https://nidhishcu.github.io/Image-TODO-App/)
 ![image](https://github.com/NidhishCU/Image-TODO-App/assets/98959174/404ca368-d275-4cfd-b755-771016dc2870)


## Tasks

### Initial Display [Optional]

1. The app must have a carousel displaying two images at the beginning, with a transition effect between them (optional).
2. The main app interface should include a drop zone area for uploading images and a list to display uploaded files with their respective thumbnails and description boxes.
3. The carousel should have a class `carousel`.
4. Images in the carousel should have the class `carousel-item`.

### Image Upload Functionality

1. Users should be able to upload images by dragging and dropping them into the drop zone or by clicking the drop zone to browse and select files from their device.
2. The drop zone should respond to drag over, drag leave, and drop events with respective visual feedback.
3. Users should be able to upload a maximum of 5 images, and an alert should be displayed when trying to upload more.
4. The file upload should validate that selected files are images and below 1 MB in size.
5. The drop zone should have the class and id `dropzone`.
6. The file input should have the type `file` and id `fileInput`.

### Image Display and Description

1. Upon uploading, each image should be displayed as a thumbnail in a file list below the drop zone.
2. Users should be able to add descriptions to each uploaded image through a textarea element.
3. Next to each thumbnail and description, a check icon and a delete icon should be present.
4. On clicking the check icon, an alert box should pop up saying that the description has been added. Once a checkbox has been clicked, the user should not be able to change the description.
5. On clicking the delete icon, the respective image should be deleted from the list.
6. The file list should have the class `file-list` and id `fileList`.

### Local Storage

1. The app should utilize local storage to save and load image data and descriptions across sessions.
2. The image data and descriptions should be saved to local storage every time a new image is uploaded, a description is added/changed, or an image is deleted.
3. Previously uploaded images and their descriptions should be displayed in the file list when the page is reloaded.

## Getting Started

### Prerequisites

- Web browser (Chrome, Firefox, Safari, etc.)
- Text editor or IDE (VSCode, Sublime Text, etc.)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/image-todo-app.git
   ```
2 Project folder:
  ```
    cd image-todo-app
  ```
### Usage
1. Open `index.html` in your preferred web browser.
2. Drag and drop images into the drop zone or click to browse and upload images.
3. Add descriptions to uploaded images, and the data will be saved locally for persistence across sessions.

### Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch)`.
6. Open a pull request.

### Acknowledgments
- Inspired by various drag-and-drop image uploaders and description managers.
- Thanks to the open-source community for providing excellent resources and libraries.
