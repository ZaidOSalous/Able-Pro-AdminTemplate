<script>
  import Breadcrumb from '$lib/Components/Layouts/Partials/Breadcrumb.svelte';
  import dropzone from '$lib/assets/dropzone.js';
</script>

<svelte:head>
  <title>File Upload | Able Pro Dashboard Template</title>
  <link rel="stylesheet" href="/node_modules/dropzone/dist/dropzone.css" />
</svelte:head>
<!-- [ Main Content ] start -->
<div class="pc-container">
  <div class="pc-content">
    <!-- [ breadcrumb ] start -->
    <Breadcrumb item="Forms" itemActive="File Upload" />
    <!-- [ breadcrumb ] end -->
    <!-- [ Main Content ] start -->
    <div class="row">
      <!-- prettier-ignore -->
      <div class="col-md-10 col-xxl-9 mb-4">
            <h5>Dropzone</h5>
            <p class="text-muted">Dropzone.js is one of the most popular drag and drop JavaScript libraries. It is free, fully open source, and makes it easy for you to handle dropped files on your website.</p>
            <div>
              <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank" href="https://www.dropzone.dev/">
                <i class="ti ti-external-link me-1"></i>
                Reference
              </a>
            </div>
          </div>
    </div>
    <div class="row">
      <!-- [ file-upload ] start -->
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h5>File Upload</h5>
          </div>
          <div class="card-body">
            <form action="../assets/json/file-upload.php" class="dropzone" use:dropzone={'/forms/file-upload'}>
              <div class="fallback">
                <input name="file" type="file" multiple />
              </div>
            </form>
            <div class="text-center m-t-20">
              <button class="btn btn-primary">Upload Now</button>
            </div>
          </div>
        </div>
      </div>
      <!-- [ file-upload ] end -->
    </div>
    <!-- [ Main Content ] end -->
  </div>
</div>
