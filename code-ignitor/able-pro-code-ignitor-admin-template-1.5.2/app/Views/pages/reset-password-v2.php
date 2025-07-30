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
    <div class="auth-main">
      <div class="auth-wrapper v2">
        <div class="auth-sidecontent">
          <img src="<?= base_url('assets/images/authentication/img-auth-sideimg.jpg') ?>" alt="images"
            class="img-fluid img-auth-side">
        </div>
        <div class="auth-form">
          <div class="card my-5">
            <div class="card-body">
              <a href="#"><img src="<?= base_url('assets/images/logo-dark.svg') ?>" class="mb-4 img-fluid" alt="img"></a>
              <div class="mb-4">
                <h3 class="mb-2"><b>Reset Password</b></h3>
                <p class="text-muted">Please choose your new password</p>
              </div>
              <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" id="floatingInput" placeholder="Password">
              </div>
              <div class="mb-3">
                <label class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="floatingInput1" placeholder="Confirm Password">
              </div>
              <div class="d-grid mt-4">
                <button type="button" class="btn btn-primary">Reset Password</button>
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
