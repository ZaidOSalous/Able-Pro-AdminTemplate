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
    <div class="maintenance-block construction-card-1">
      <div class="container">
        <div class="row">
          
          <div class="col-sm-12">
            <div class="card construction-card">
              <div class="card-body">
                <div class="construction-image-block">
                  <div class="row justify-content-center align-items-center construction-card-bottom">
                    <div class="col-md-6">
                      <div class="text-center">
                        <h1 class="mt-4"><b>Under Construction</b></h1>
                        <p class="mt-4 text-muted">Hey! Please check out this site later. We are doing <br> some maintenance on it right now.</p>
                        <a href="dashboard-default" class="btn btn-primary mb-3">Back To Home</a>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <img class="img-fluid" src="<?= base_url('assets/images/pages/img-cunstruct-1.svg') ?>" alt="img">
                    </div>
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
