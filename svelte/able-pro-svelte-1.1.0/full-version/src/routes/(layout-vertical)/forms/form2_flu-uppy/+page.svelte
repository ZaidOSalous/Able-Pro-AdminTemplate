<script>
  import { onMount } from 'svelte';
  import Breadcrumb from '../../../../lib/Components/Layouts/Partials/Breadcrumb.svelte';
  import 'uppy/dist/uppy.min.js?client';
  import 'uppy/dist/uppy.min.css';
  import { Uppy, Dashboard, Webcam, Tus, DragDrop, ProgressBar } from 'uppy/dist/uppy.min.mjs?client';

  onMount(() => {
    const onUploadSuccess = (elForUploadedFiles) => (file, response) => {
      const url = response.uploadURL;
      const fileName = file.name;

      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.appendChild(document.createTextNode(fileName));
      li.appendChild(a);

      document.querySelector(elForUploadedFiles).appendChild(li);
    };
    // for popup modal open and upload files
    const uppy = new Uppy({ debug: true, autoProceed: false })
      .use(Dashboard, { trigger: '#uppyModalOpener' })
      .use(Webcam, { target: Dashboard })
      .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' });

    uppy.on('success', (fileCount) => {
      console.log(`${fileCount} files uploaded`);
    });

    // for dashboard and upload files
    const uppy1 = new Uppy({ debug: true, autoProceed: false })
      .use(Dashboard, { target: '#pc-uppy-1', inline: true })
      .use(Webcam, { target: Dashboard })
      .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' });

    uppy1.on('success', (fileCount) => {
      console.log(`${fileCount} files uploaded`);
    });

    // for structure change upload files
    const uppy2 = new Uppy({ debug: true, autoProceed: true })
      .use(DragDrop, { target: '#files-drag-drop .for-DragDrop' })
      .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })
      .use(ProgressBar, { target: '#files-drag-drop .for-ProgressBar', hideAfterFinish: false })
      .on('upload-success', onUploadSuccess('#files-drag-drop .uploaded-files ol'));

    uppy2.on('success', (fileCount) => {
      console.log(`${fileCount} files uploaded`);
    });
  });
</script>

<svelte:head>
  <title>Uppy File Upload | Able Pro Dashboard Template</title>
</svelte:head>

<!-- [ Main Content ] start -->
<div class="pc-container">
  <div class="pc-content">
    <!-- [ breadcrumb ] start -->
    <Breadcrumb item="Forms" itemActive="Uppy" />
    <!-- [ breadcrumb ] end -->

    <!-- [ Main Content ] start -->
    <div class="row">
      <!-- prettier-ignore -->
      <div class="col-md-10 col-xxl-9 mb-4">
            <h5>Uppy</h5>
            <p class="text-muted">Uppy fetches files locally and from remote places like Dropbox or Instagram. With its seamless integration, reliability and ease of use, Uppy is truly your best friend in file uploading.</p>
            <div>
              <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank" href="https://uppy.io/">
                <i class="ti ti-external-link me-1"></i>
                Reference
              </a>
            </div>
          </div>
    </div>
    <div class="row">
      <!-- [ form-element ] start -->
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h5>Dashboard Example</h5>
          </div>
          <div class="card-body">
            <div class="pc-uppy" id="pc-uppy-1"></div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-header">
            <h5>Drag and Drop [ autoProceed is on ]</h5>
          </div>
          <div class="card-body">
            <div id="files-drag-drop">
              <div class="for-DragDrop"></div>
              <div class="for-ProgressBar"></div>
              <div class="uploaded-files mt-3">
                <h5>Uploaded files:</h5>
                <ol></ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-header">
            <h5>Popup Upload</h5>
          </div>
          <div class="card-body">
            <div class="text-center">
              <button class="pc-uppy-btn btn btn-light-primary" id="uppyModalOpener">Open Popup Window</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- [ form-element ] end -->
</div>
<!-- [ Main Content ] end -->
