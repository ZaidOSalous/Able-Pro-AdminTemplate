<!DOCTYPE html>
<html lang="en">
  <!-- [Head] start -->
  <head>
    <?= $this->include('partials/head-page-meta') ?>
    <?= $this->include('partials/head-css') ?>
    <link rel="stylesheet" href="<?= base_url('assets/css/uikit.css') ?>" >
  </head>
  <!-- [Head] end -->
  <body class="component-page">
    <!-- [ Main Content ] start -->
    <?= $this->include('partials/loader') ?>
    <?= $this->include('partials/component/component-header') ?>

    <section class="component-block">
      <div class="container">
        <div class="row">
          <div class="col-xl-3">
            <?= $this->include('partials/component/component-menu-list') ?>
          </div>
          <div class="col-xl-9">    
            <div class="row">
              <?= $this->include('partials/component/component-breadcrumb') ?>
            </div>
            <!-- [ Main Content ] start -->
          <div class="row">
            <!-- [ spinner ] start -->
            <div class="col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Border spinner</h5>
                </div>
                <div class="card-body pc-component">
                  <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Border spinner [ Colors ]</h5>
                </div>
                <div class="card-body pc-component">
                  <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                  <div class="spinner-border text-secondary" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                  <div class="spinner-border text-success" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                  <div class="spinner-border text-danger" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                  <div class="spinner-border text-warning" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                  <div class="spinner-border text-info" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                  <div class="spinner-border text-light" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                  <div class="spinner-border text-dark" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Growing spinner</h5>
                </div>
                <div class="card-body pc-component">
                  <div class="spinner-grow" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Growing spinner [ Colors ]</h5>
                </div>
                <div class="card-body pc-component">
                  <div class="spinner-grow text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                  <div class="spinner-grow text-secondary" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                  <div class="spinner-grow text-success" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                  <div class="spinner-grow text-danger" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                  <div class="spinner-grow text-warning" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                  <div class="spinner-grow text-info" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                  <div class="spinner-grow text-light" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                  <div class="spinner-grow text-dark" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Placement</h5>
                </div>
                <div class="card-body pc-component">
                  <h6>Start</h6>
                  <div class="d-flex justify-content-start">
                    <div class="spinner-border" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>
                  <hr>
                  <h6>Center</h6>
                  <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>
                  <hr>
                  <h6>End</h6>
                  <div class="d-flex justify-content-end">
                    <div class="spinner-border" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Size</h5>
                </div>
                <div class="card-body pc-component">
                  <h6>Small</h6>
                  <div class="spinner-border spinner-border-sm" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                  <div class="spinner-grow spinner-grow-sm" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                  <hr>
                  <h6>Custom</h6>
                  <div class="spinner-border" style="width: 3rem; height: 3rem" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                  <div class="spinner-grow" style="width: 3rem; height: 3rem" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5>Buttons</h5>
                </div>
                <div class="card-body pc-component">
                  <div class="row g-4">
                    <div class="col-sm-6">
                      <div class="row g-3">
                        <div class="col-12">
                          <button class="btn btn-primary lh-1" type="button" disabled>
                            <span class="spinner-border spinner-border-sm" role="status"></span>
                            <span class="sr-only">Loading...</span>
                          </button>
                        </div>
                        <div class="col-12">
                          <button class="btn btn-primary lh-1" type="button" disabled>
                            <span class="spinner-border spinner-border-sm" role="status"></span>
                            Loading...
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="row g-3">
                        <div class="col-12">
                          <button class="btn btn-primary lh-1" type="button" disabled>
                            <span class="spinner-grow spinner-grow-sm" role="status"></span>
                            <span class="sr-only">Loading...</span>
                          </button>
                        </div>
                        <div class="col-12">
                          <button class="btn btn-primary lh-1" type="button" disabled>
                            <span class="spinner-grow spinner-grow-sm" role="status"></span>
                            Loading...
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- [ spinner ] end -->
          </div>
            <!-- [ Main Content ] end -->
          </div>
      </div>
    </div>
  </section>
  <!-- [ Main Content ] end -->
<?= $this->include('partials/footer-js') ?>
<?= $this->include('partials/component/layout-component-footer-js') ?>
<?= $this->include('partials/customizer.php') ?>
</body>

</html>