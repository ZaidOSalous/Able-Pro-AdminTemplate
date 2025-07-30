<!DOCTYPE html>
<html lang="en">
  <!-- [Head] start -->
  <head>
    
    <?= $this->include('partials/head-page-meta') ?>
    <!-- [Page specific CSS] start -->
    <!-- fileupload-custom css -->
    <link rel="stylesheet" href="<?= base_url('assets/css/plugins/dropzone.min.css') ?>" >
    <!-- [Page specific CSS] end -->
    <?= $this->include('partials/head-css') ?>
    
  </head>
  <!-- [Head] end -->
  <!-- [Body] Start -->
  <body <?= BODY_SETUP ?>>
    <?= $this->include('partials/layout-vertical') ?>
    <!-- [ Main Content ] start -->
    <div class="pc-container">
      <div class="pc-content">
        <?= $this->include('partials/breadcrumb') ?>
        <!-- [ Main Content ] start -->
        <?= $this->include('partials/component/component-link') ?>
        <div class="row">
          <!-- [ file-upload ] start -->
          <div class="col-sm-12">
            <div class="card">
              <div class="card-header">
                <h5>File Upload</h5>
              </div>
              <div class="card-body">
                <form action="<?= base_url('assets/json/file-upload.php') ?>" class="dropzone">
                  <div class="fallback">
                    <input name="file" type="file" multiple>
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
    <!-- [ Main Content ] end -->
  <?= $this->include('partials/footer-block') ?>
  <?= $this->include('partials/footer-js') ?>
    <!-- [Page Specific JS] start -->
    <!-- file-upload Js -->
    <script src="<?= base_url('assets/js/plugins/dropzone-amd-module.min.js') ?>"></script>
    <!-- [Page Specific JS] end -->
  <?= $this->include('partials/customizer.php') ?>
</body>
  <!-- [Body] end -->
</html>
