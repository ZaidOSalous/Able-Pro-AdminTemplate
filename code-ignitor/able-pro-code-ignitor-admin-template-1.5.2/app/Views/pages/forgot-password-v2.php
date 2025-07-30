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
              <div class="d-flex justify-content-between align-items-end mb-4">
                <h3 class="mb-0"><b>Forgot Password</b></h3>
                <a href="login-v2" class="link-primary">Back to Login</a>
              </div>
              <div class="mb-3">
                <label class="form-label">Email Address</label>
                <input type="email" class="form-control" id="floatingInput" placeholder="Email Address">
              </div>
              <p class="mt-4 text-sm text-muted">Do not forgot to check SPAM box.</p>
              <div class="d-grid mt-3">
                <button type="button" class="btn btn-primary">Send Password Reset Email</button>
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
