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
    <div class="maintenance-block soon-card-1">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="card soon-card mb-0">
              <div class="card-body p-0">
                <div class="row justify-content-center align-items-center">
                  <div class="col-md-6">
                    <h4 class="mb-0 mt-4"><b>Coming Soon</b></h4>
                    <h2 class="mt-3 mb-4"><span class="text-primary">Able Pro</span> - The Bootstrap Admin Template</h2>
                    <p>Presenting Material-UI based React Dashboard Template to build performance centric websites and applications.</p>
                    <div class="row d-flex my-4 my-md-5">
                      <div class="col">
                        <input type="email" class="form-control" placeholder="Email Address" />
                      </div>
                      <div class="col-auto">
                        <div class="d-grid">
                          <button class="btn btn-primary d-flex align-items-center"><i class="ti ti-bell-ringing me-2"></i>Notify Me</button>
                        </div>
                      </div>
                    </div>
                    <ul class="list-inline d-flex align-items-center justify-content-start mb-4">
                      <li class="list-inline-item"
                        ><a href="#" class="btn btn-icon btn-light bg-white">
                          <svg class="pc-icon">
                            <use xlink:href="#custom-facebook"></use>
                          </svg> </a
                      ></li>
                      <li class="list-inline-item"
                        ><a href="#" class="btn btn-icon btn-light bg-white">
                          <svg class="pc-icon">
                            <use xlink:href="#custom-google"></use>
                          </svg> </a
                      ></li>
                    </ul>
                  </div>
                  <div class="col-md-6 text-end">
                    <img class="img-fluid" src="<?= base_url('assets/images/pages/img-soon-1.png') ?>" alt="img" />
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
