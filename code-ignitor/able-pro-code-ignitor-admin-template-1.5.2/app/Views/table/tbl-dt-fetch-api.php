<!DOCTYPE html>
<html lang="en">
  <!-- [Head] start -->
  <head>
    
    <?= $this->include('partials/head-page-meta') ?>
    <link rel="stylesheet" href="<?= base_url('assets/css/plugins/style.css') ?>" >
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
          <!-- [ basic-table ] start -->
          <div class="col-xl-12">
            <div class="card">
              <div class="card-header">
                <h5>Fetch API</h5>
              </div>
              <div class="card-body table-border-style">
                <div class="table-responsive">
                  <table class="table" id="pc-dt-fetchapi"> </table>
                </div>
              </div>
            </div>
          </div>
          <!-- [ basic-table ] end -->
        </div>
        <!-- [ Main Content ] end -->
      </div>
    </div>
    <!-- [ Main Content ] end -->
  <?= $this->include('partials/footer-block') ?>
  <?= $this->include('partials/footer-js') ?>
    <!-- [Page Specific JS] start -->
    <script src="<?= base_url('assets/js/plugins/simple-datatables.js') ?>"></script>
    <script>
      fetch('<?= base_url('assets/json/datatable.json') ?>')
        .then((response) => response.json())
        .then((data) => {
          if (!data.length) {
            return;
          }

          let table = new simpleDatatables.DataTable('#pc-dt-fetchapi', {
            data: {
              headings: Object.keys(data[0]),
              data: data.map((item) => Object.values(item))
            }
          });
        });
    </script>
    <!-- [Page Specific JS] end -->
  <?= $this->include('partials/customizer.php') ?>
</body>
  <!-- [Body] end -->
</html>
