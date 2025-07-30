<!DOCTYPE html>
<html lang="en">
  <!-- [Head] start -->
  <head>
    <?= $this->include('partials/head-page-meta') ?>
    <!-- [Page specific CSS] start -->
    <link rel="stylesheet" href="<?= base_url('assets/css/plugins/tiny-slider.css') ?>" >
    <!-- [Page specific CSS] end -->
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
            <!-- [ rangeslider ] start -->
            <div class="col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Slider1</h5>
                </div>
                <div class="card-body">
                  <div class="slider1 owl-carousel owl-theme">
                    <div class="item">
                      <img src="<?= base_url('assets/images/slider/img-slide-1.jpg') ?>" alt="" class="img-fluid">
                    </div>
                    <div class="item">
                      <img src="<?= base_url('assets/images/slider/img-slide-2.jpg') ?>" alt="" class="img-fluid">
                    </div>
                    <div class="item">
                      <img src="<?= base_url('assets/images/slider/img-slide-3.jpg') ?>" alt="" class="img-fluid">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Vertical</h5>
                </div>
                <div class="card-body">
                  <div class="slider2 owl-carousel owl-theme">
                    <div class="item">
                      <img src="<?= base_url('assets/images/slider/img-slide-1.jpg') ?>" alt="" class="img-fluid">
                    </div>
                    <div class="item">
                      <img src="<?= base_url('assets/images/slider/img-slide-2.jpg') ?>" alt="" class="img-fluid">
                    </div>
                    <div class="item">
                      <img src="<?= base_url('assets/images/slider/img-slide-3.jpg') ?>" alt="" class="img-fluid">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                  <h5>Customize</h5>
                </div>
                <div class="card-body">
                  <div id="slider3">
                    <div class="customize" id="customize">
                      <div>
                        <div>
                          <img src="<?= base_url('assets/images/slider/img-slide-1.jpg') ?>" alt="" class="img-fluid">
                        </div>
                      </div>
                      <div>
                        <div>
                          <img src="<?= base_url('assets/images/slider/img-slide-2.jpg') ?>" alt="" class="img-fluid">
                        </div>
                      </div>
                      <div>
                        <div>
                          <img src="<?= base_url('assets/images/slider/img-slide-3.jpg') ?>" alt="" class="img-fluid">
                        </div>
                      </div>
                      <div>
                        <div>
                          <img src="<?= base_url('assets/images/slider/img-slide-4.jpg') ?>" alt="" class="img-fluid">
                        </div>
                      </div>
                    </div>
                    <div class="customize-tools">
                      <ul class="thumbnails" id="customize-thumbnails">
                        <li>
                          <img src="<?= base_url('assets/images/slider/img-slide-1.jpg') ?>" alt="">
                        </li>
                        <li>
                          <img src="<?= base_url('assets/images/slider/img-slide-2.jpg') ?>" alt="">
                        </li>
                        <li>
                          <img src="<?= base_url('assets/images/slider/img-slide-3.jpg') ?>" alt="">
                        </li>
                        <li>
                          <img src="<?= base_url('assets/images/slider/img-slide-4.jpg') ?>" alt="">
                        </li>
                      </ul>
                      <ul class="controls" id="customize-controls">
                        <li class="prev">
                          <i class="feather icon-chevron-left"></i>
                        </li>
                        <li class="next">
                          <i class="feather icon-chevron-right"></i>
                        </li>
                      </ul>
                      <div class="playbutton-wrapper">
                        <button id="customize-toggle">Pause</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <!-- [ rangeslider ] end -->
            </div>
            <!-- [ Main Content ] end -->
          </div>
      </div>
    </div>
  </section>
  <!-- [ Main Content ] end -->
<?= $this->include('partials/footer-js') ?>
<?= $this->include('partials/component/layout-component-footer-js') ?>
<!-- [Page Specific JS] start -->
<script src="<?= base_url('assets/js/plugins/tiny-slider.js') ?>"></script>
<script src="<?= base_url('assets/js/elements/ac-slider.js') ?>"></script>
<!-- [Page Specific JS] end -->
<?= $this->include('partials/customizer.php') ?>
</body>

</html>
  