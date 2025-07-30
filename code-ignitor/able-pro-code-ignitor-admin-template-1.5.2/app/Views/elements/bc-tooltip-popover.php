<!DOCTYPE html>
<html lang="en">
  <!-- [Head] start -->
  <head>
    <?= $this->include('partials/head-page-meta') ?>
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
            <!-- [ tooltip ] start -->
            <div class="col-md-6 col-sm-12">
              <div class="card">
                <div class="card-header">
                  <h5>Tooltip</h5>
                </div>
                <div class="card-body btn-page pc-component">
                  <button type="button" class="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top"
                    title="tooltip on top">Top</button>
                  <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="left"
                    title="tooltip on left">Left</button>
                  <button type="button" class="btn btn-success" data-bs-toggle="tooltip" data-bs-placement="right"
                    title="tooltip on right">Right</button>
                  <button type="button" class="btn btn-warning" data-bs-toggle="tooltip" data-bs-placement="bottom"
                    title="tooltip on bottom">Bottom</button>
                  <button type="button" class="btn btn-info" data-bs-toggle="tooltip" data-bs-html="true"
                    title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">Html Tooltip</button>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="card">
                <div class="card-header">
                  <h5>Popover</h5>
                </div>
                <div class="card-body btn-page pc-component">
                  <button type="button" class="btn btn-danger" data-bs-toggle="popover" data-bs-placement="top" title=""
                    data-bs-content="top by popover" data-original-title="popup on top">Top</button>
                  <button type="button" class="btn btn-primary" data-bs-toggle="popover" data-bs-placement="left"
                    title="popup on left" data-bs-content="left by popover">Left</button>
                  <button type="button" class="btn btn-success" data-bs-toggle="popover" data-bs-placement="right"
                    title="popup on right" data-bs-content="right by popover">Right</button>
                  <button type="button" class="btn btn-warning" data-bs-toggle="popover" data-bs-placement="bottom"
                    title="popup on bottom" data-bs-content="bottom by popover">Bottom</button>
                  <button type="button" class="btn btn-info" data-bs-toggle="popover" data-bs-html="true"
                    data-bs-placement="top" title="<em>popup</em> <u>with</u> <b>HTML</b>"
                    data-bs-content="popup by HTML">Html popup</button>
                </div>
              </div>
            </div>
            <!-- [ tooltip ] end -->
          </div>
            <!-- [ Main Content ] end -->
          </div>
      </div>
    </div>
  </section>
  <!-- [ Main Content ] end -->
<?= $this->include('partials/footer-js') ?>
<?= $this->include('partials/component/layout-component-footer-js') ?>
<?= $this->include('partials/customizer.php') ?>
</body>

</html>