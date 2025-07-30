<!DOCTYPE html>
<html lang="en">
  <!-- [Head] start -->
  <head>
    <?= $this->include('partials/head-page-meta') ?>
    <!-- [Page specific CSS] start -->
    <!-- enjoyhint css -->
    <link rel="stylesheet" href="<?= base_url('assets/css/plugins/introjs.min.css') ?>" >
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
            <div class="col-sm-12">
              <div class="card step1">
                <div class="card-header step2">
                  <h5 class="step3">Hello card</h5>
                </div>
                <div class="card-body step4">
                  <h1>H1 Admin Template</h1>
                  <h2>H2 Admin Template</h2>
                  <h3>H3 Admin Template</h3>
                  <h4>H4 Admin Template</h4>
                  <h5>H5 Admin Template</h5>
                  <h6>H6 Admin Template</h6>
                  <p>p Admin Template</p>
                  <strong>p Admin Template</strong>
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
<!-- tour Js -->
<script src="<?= base_url('assets/js/plugins/intro.min.js') ?>"></script>
<script src="<?= base_url('assets/js/elements/ac-tour.js') ?>"></script>
<!-- [Page Specific JS] end -->
<?= $this->include('partials/customizer.php') ?>
</body>

</html>

