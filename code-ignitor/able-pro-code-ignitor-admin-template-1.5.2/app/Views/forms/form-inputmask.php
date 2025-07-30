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
    <?= $this->include('partials/layout-vertical') ?>
    <!-- [ Main Content ] start -->
    <div class="pc-container">
      <div class="pc-content">
        <?= $this->include('partials/breadcrumb') ?>
        <!-- [ Main Content ] start -->
        <?= $this->include('partials/component/component-link') ?>
        <div class="row">
          <!-- [ date-form ] start -->
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h5>Date</h5>
                <span class="d-block m-t-5">Add class of <code>.date</code> with <code>data-mask</code> attribute</span>
              </div>
              <div class="card-body">
                <form>
                  <div class="mb-3 row">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Insert Date 1</label>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <input type="text" class="form-control date" data-mask="99/99/9999">
                    </div>
                  </div>
                  <div class="row mb-0">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Insert Date 2</label>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <input type="text" class="form-control date2" data-mask="99-99-9999">
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- [ date-form ] end -->
          <!-- [ Time-form ] start -->
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h5>Time</h5>
                <span class="d-block m-t-5">Add class of <code>.hour</code> with <code>data-mask</code> attribute</span>
              </div>
              <div class="card-body">
                <form>
                  <div class="mb-3 row">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Hour</label>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <input type="text" class="form-control hour" data-mask="99:99:99">
                    </div>
                  </div>
                  <div class="row mb-0">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Date & Hour</label>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <input type="text" class="form-control dateHour" data-mask="99/99/9999 99:99:99">
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- [ Time-form ] end -->
          <!-- [ phone-number ] start -->
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h5>Phone no.</h5>
                <span class="d-block m-t-5">Add class of <code>.mob_no</code> with <code>data-mask</code> attribute</span>
              </div>
              <div class="card-body">
                <form>
                  <div class="mb-3 row">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Mobile No.</label>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <input type="text" class="form-control mob_no" data-mask="9999-999-999">
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Telephone</label>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <input type="text" class="form-control phone" data-mask="9999-9999">
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Tel. with Code Area</label>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <input type="text" class="form-control telphone_with_code" data-mask="(99) 9999-9999">
                    </div>
                  </div>
                  <div class="row mb-0">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">US Telephone</label>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <input type="text" class="form-control us_telephone" data-mask="(999) 999-9999">
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- [ phone-number ] end -->
          <!-- [ network ] start -->
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h5>Network</h5>
                <span class="d-block m-t-5">Add class of <code>.ip</code> with <code>data-mask</code> attribute</span>
              </div>
              <div class="card-body">
                <form>
                  <div class="mb-3 row">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">IP Address</label>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <input type="text" class="form-control ip" data-mask="999.999.999.999">
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">IPV4</label>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <input type="text" class="form-control ipv4" data-mask="99/99/9999 99:99:99">
                    </div>
                  </div>
                  <div class="row mb-0">
                    <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">IPV6</label>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <input type="text" class="form-control ipv6" data-mask="9999:9999:9999:9:999:9999:9999:9999">
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- [ network ] end -->
        </div>
        <!-- [ Main Content ] end -->
      </div>
    </div>
    <!-- [ Main Content ] end -->
  <?= $this->include('partials/footer-block') ?>
  <?= $this->include('partials/footer-js') ?>
  <?= $this->include('partials/customizer.php') ?>
  <!-- [Page Specific JS] start -->
  <!-- Input mask Js -->
  <script src="<?= base_url('assets/js/plugins/imask.min.js') ?>"></script>
  <!-- form-picker-custom Js -->
  <script src="<?= base_url('assets/js/forms/form-masking-custom.js') ?>"></script>
  <!-- [Page Specific JS] end -->
</body>
  <!-- [Body] end -->
</html>
