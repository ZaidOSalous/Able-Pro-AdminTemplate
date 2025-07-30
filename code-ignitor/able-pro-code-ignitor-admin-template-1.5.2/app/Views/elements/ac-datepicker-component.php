<!DOCTYPE html>
<html lang="en">
  <!-- [Head] start -->
  <head>
    <?= $this->include('partials/head-page-meta') ?>
    <!-- [Page specific CSS] start -->
    <!-- Bootstrap DatePicker -->
    <link rel="stylesheet" href="<?= base_url('assets/css/plugins/datepicker-bs5.min.css') ?>" >
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
            <!-- [ bootstrap-datetimepicker ] start -->
            <div class="col-xl-4 col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Days of Week Disabled</h5>
                </div>
                <div class="card-body">
                  <input type="text" class="form-control" id="d_week" >
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Days of Week Highlighted</h5>
                </div>
                <div class="card-body">
                  <input type="text" class="form-control" id="d_highlight" >
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>AutoClose</h5>
                </div>
                <div class="card-body">
                  <input type="text" class="form-control" id="d_auto" >
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>DatesDisabled</h5>
                </div>
                <div class="card-body">
                  <input type="text" class="form-control" id="d_disable" >
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Today Highlight</h5>
                </div>
                <div class="card-body">
                  <input type="text" class="form-control" id="d_today" >
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Calendar Weeks</h5>
                </div>
                <div class="card-body">
                  <input type="text" class="form-control" id="disp_week" >
                </div>
              </div>
            </div>
            <div class="col-xl-8 col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Date Range</h5>
                </div>
                <div class="card-body">
                  <div class="input-daterange input-group" id="datepicker_range">
                    <input type="text" class="form-control text-left" placeholder="Start date" name="range-start" >
                    <input type="text" class="form-control text-end" placeholder="End date" name="range-end" >
                  </div>
                </div>
              </div>
            </div>
            <!-- [ bootstrap-datetimepicker ] End -->
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
<!-- DatePicker js -->
<script src="<?= base_url('assets/js/plugins/datepicker-full.min.js') ?>"></script>
<script src="<?= base_url('assets/js/elements/ac-datepicker.js') ?>"></script>
<!-- [Page Specific JS] end -->
<?= $this->include('partials/customizer.php') ?>
</body>

</html>
