<!DOCTYPE html>
<html lang="en">
  <!-- [Head] start -->
  <head>
    
    <?= $this->include('partials/head-page-meta') ?>
    <!-- [Page specific CSS] start -->
    <link rel="stylesheet" href="<?= base_url('assets/css/plugins/flatpickr.min.css') ?>">
    <!-- [Page specific CSS] end -->
    <?= $this->include('partials/head-css') ?>
    
  </head>
  <!-- [Head] end -->
  <!-- [Body] Start -->
  <body <?= BODY_SETUP ?>>
    <?= $this->include('partials/layout-vertical') ?>
    <!-- [ Main Content ] start -->
    <div class="pc-container">
      <div class="pc-content">
        <?= $this->include('partials/breadcrumb') ?>
        <!-- [ Main Content ] start -->
        <?= $this->include('partials/component/component-link') ?>
        <div class="row">
          <!-- [ form-element ] start -->
          <div class="col-sm-12">
            <div class="card">
              <div class="card-header">
                <h5>Preview</h5>
              </div>
              <div class="card-body">
                <form>
                  <div class="mb-3 row">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Simple Input</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <input class="form-control" id="pc-timepicker-1" placeholder="Select time" type="text">
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">With Input Group</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <div class="input-group timepicker">
                        <input class="form-control" id="pc-timepicker-2" placeholder="Select time" type="text">
                        <span class="input-group-text">
                          <i class="feather icon-clock"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">24 Hours</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <input class="form-control" id="pc-timepicker-3" type="text" placeholder="Select time">
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Time Picker w/ Limits</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <input class="form-control" id="pc-timepicker-4" type="text" placeholder="Select time">
                    </div>
                  </div>
                  <div class="row mb-0">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Preloading Time</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <input class="form-control" id="pc-timepicker-5" type="text" placeholder="Select time">
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- [ form-element ] end -->
        </div>
        <!-- [ Main Content ] end -->
      </div>
    </div>
    <!-- [ Main Content ] end -->
  <?= $this->include('partials/footer-block') ?>
  <?= $this->include('partials/footer-js') ?>
  <?= $this->include('partials/customizer.php') ?>
  <!-- [Page Specific JS] start -->
  <!-- Time picker -->
  <script src="<?= base_url('assets/js/plugins/flatpickr.min.js') ?>"></script>
    <script>
      document.querySelector('#pc-timepicker-1').flatpickr({
        enableTime: true,
        noCalendar: true
      });
      document.querySelector('#pc-timepicker-2').flatpickr({
        enableTime: true,
        noCalendar: true
      });
      document.querySelector('#pc-timepicker-3').flatpickr({
        enableTime: true,
        noCalendar: true,
        time_24hr: true
      });
      document.querySelector('#pc-timepicker-4').flatpickr({
        enableTime: true,
        noCalendar: true,
        minTime: '16:00',
        maxTime: '22:30'
      });
      document.querySelector('#pc-timepicker-5').flatpickr({
        enableTime: true,
        noCalendar: true,
        defaultDate: '13:45'
      });
    </script>
  <!-- [Page Specific JS] end -->
</body>
  <!-- [Body] end -->
</html>
