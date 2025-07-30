<!DOCTYPE html>
<html lang="en">
  <!-- [Head] start -->
  <head>
    <?= $this->include('partials/head-page-meta') ?>
    <!-- [Page specific CSS] start -->
    <!-- jstree css -->
    <link rel="stylesheet" href="<?= base_url('assets/css/plugins/vanillatree.css') ?>" >
    <!-- Page specific CSS end  -->
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
              <div class="card">
                <div class="card-header">
                  <h5>HTML Demo</h5>
                </div>
                <div class="card-body">
                  <div id="tree-demo"> </div>
                  <p id="tree-msg"></p>
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
<!-- jstree Js -->
<script src="<?= base_url('assets/js/plugins/vanillatree.min.js') ?>"></script>
<script src="<?= base_url('assets/js/elements/ac-treeview.js') ?>"></script>
<!-- [Page Specific JS] end -->

<?= $this->include('partials/customizer.php') ?>
</body>

</html>
