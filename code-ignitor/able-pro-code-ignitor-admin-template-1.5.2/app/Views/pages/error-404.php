<!DOCTYPE html>
<html lang="en">
  <!-- [Head] start -->
  <head>
    
    <?= $this->include('partials/head-page-meta') ?>
    <?= $this->include('partials/head-css') ?>
    
  </head>
  <!-- [Head] end -->
  <!-- [Body] Start -->
  <body <?= BODY_SETUP ?>>
    <?= $this->include('partials/loader') ?>
    <!-- [ Main Content ] start -->
    <div class="maintenance-block">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="card error-card">
              <div class="card-body">
                <div class="error-image-block">
                  <img class="img-fluid" src="<?= base_url('assets/images/pages/img-error-404.svg') ?>" alt="img">
                </div>
                <div class="text-center">
                  <h1 class="mt-5"><b>Page Not Found</b></h1>
                  <p class="mt-2 mb-4 text-muted">The page you are looking was moved, removed,<br>  renamed, or might never exist!</p>
                  <a href="dashboard-default" class="btn btn-primary mb-3">Go to home</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- [ Main Content ] end -->
  <?= $this->include('partials/footer-js') ?>
  <?= $this->include('partials/customizer.php') ?>
</body>
  <!-- [Body] end -->
</html>
