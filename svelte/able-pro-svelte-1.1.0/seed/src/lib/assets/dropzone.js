export default async function dropzone(node, url) {
  if (typeof window !== 'undefined') {
    const { default: Dropzone } = await import('dropzone');

    const dropzoneOptions = {
      url,
      maxFilesize: 2, // Maximum file size in MB
      acceptedFiles: 'image/*', // Accept only images
      init: function () {
        this.on('addedfile', function (file) {
          console.log('File added:', file);
        });

        this.on('success', function (file, response) {
          console.log('File uploaded successfully:', response);
        });

        this.on('error', function (file, errorMessage) {
          console.log('Error uploading file:', errorMessage);
        });
      }
    };

    const dropzone = new Dropzone(node, dropzoneOptions);

    return () => {
      dropzone.destroy();
    };
  }
}
