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
      <div class="auth-wrapper v1">
        <div class="auth-form">
          <div class="card my-5">
            <div class="card-body">
              <a href="#"><img src="<?= base_url('assets/images/logo-dark.svg') ?>" class="mb-4 img-fluid" alt="img"></a>
              <div class="mb-4">
                <h3 class="mb-2"><b>Hi, Check Your Mail</b></h3>
                <p class="text-muted">We have sent a password recover instructions to your email.</p>
              </div>
              <div class="d-grid mt-3">
                <button type="button" class="btn btn-primary">Sign in</button>
              </div>
              <div class="saprator mt-3">
                <span>Sign up with</span>
              </div>
              <div class="row g-2">
                <div class="col-4">
                  <div class="d-grid">
                    <button type="button" class="btn mt-2 btn-light-primary bg-light text-muted">
                      <img src="<?= base_url('assets/images/authentication/google.svg') ?>" alt="img"> <span class="d-none d-sm-inline-block"> Google</span>
                    </button>
                  </div>
                </div>
                <div class="col-4">
                  <div class="d-grid">
                    <button type="button" class="btn mt-2 btn-light-primary bg-light text-muted">
                      <img src="<?= base_url('assets/images/authentication/twitter.svg') ?>" alt="img"> <span class="d-none d-sm-inline-block">
                        Twitter</span>
                    </button>
                  </div>
                </div>
                <div class="col-4">
                  <div class="d-grid">
                    <button type="button" class="btn mt-2 btn-light-primary bg-light text-muted">
                      <img src="<?= base_url('assets/images/authentication/facebook.svg') ?>" alt="img"> <span class="d-none d-sm-inline-block">
                        Facebook</span>
                    </button>
                  </div>
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
