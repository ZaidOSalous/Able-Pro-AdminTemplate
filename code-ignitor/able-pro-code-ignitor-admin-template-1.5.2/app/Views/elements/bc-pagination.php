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
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header">
                  <h5>Pagination</h5>
                </div>
                <div class="card-body pc-component">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      <li class="page-item"><a class="page-link" href="#!">Previous</a></li>
                      <li class="page-item"><a class="page-link" href="#!">1</a></li>
                      <li class="page-item"><a class="page-link" href="#!">2</a></li>
                      <li class="page-item"><a class="page-link" href="#!">3</a></li>
                      <li class="page-item"><a class="page-link" href="#!">Next</a></li>
                    </ul>
                  </nav>
                  <h5 class="mt-4 mb-0">Working with Icons</h5>
                  <hr class="mt-2">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      <li class="page-item"><a class="page-link" href="#!" aria-label="Previous"><span
                            aria-hidden="true">&laquo;</span><span class="sr-only">Previous</span></a>
                      </li>
                      <li class="page-item"><a class="page-link" href="#!">1</a></li>
                      <li class="page-item"><a class="page-link" href="#!">2</a></li>
                      <li class="page-item"><a class="page-link" href="#!">3</a></li>
                      <li class="page-item"><a class="page-link" href="#!" aria-label="Next"><span
                            aria-hidden="true">&raquo;</span><span class="sr-only">Next</span></a></li>
                    </ul>
                  </nav>
                  <h5 class="mt-4 mb-0">Disabled and Active States</h5>
                  <hr class="mt-2">
                  <nav aria-label="...">
                    <ul class="pagination">
                      <li class="page-item disabled"><span class="page-link">Previous</span></li>
                      <li class="page-item"><a class="page-link" href="#!">1</a></li>
                      <li class="page-item active"><span class="page-link">2<span
                            class="sr-only">(current)</span></span>
                      </li>
                      <li class="page-item"><a class="page-link" href="#!">3</a></li>
                      <li class="page-item"><a class="page-link" href="#!">Next</a></li>
                    </ul>
                  </nav>
                  <h5 class="mt-4 mb-0">Sizing</h5>
                  <hr class="mt-2">
                  <nav class="mb-3" aria-label="...">
                    <ul class="pagination pagination-lg">
                      <li class="page-item disabled">
                        <a class="page-link" href="#!" tabindex="-1">1</a>
                      </li>
                      <li class="page-item"><a class="page-link" href="#!">2</a></li>
                      <li class="page-item"><a class="page-link" href="#!">3</a></li>
                    </ul>
                  </nav>
                  <nav aria-label="...">
                    <ul class="pagination pagination-sm">
                      <li class="page-item disabled">
                        <a class="page-link" href="#!" tabindex="-1">1</a>
                      </li>
                      <li class="page-item"><a class="page-link" href="#!">2</a></li>
                      <li class="page-item"><a class="page-link" href="#!">3</a></li>
                    </ul>
                  </nav>
                  <h5 class="mt-4 mb-0">Alignment</h5>
                  <hr class="mt-2">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                      <li class="page-item disabled">
                        <a class="page-link" href="#!" tabindex="-1">Previous</a>
                      </li>
                      <li class="page-item"><a class="page-link" href="#!">1</a></li>
                      <li class="page-item"><a class="page-link" href="#!">2</a></li>
                      <li class="page-item"><a class="page-link" href="#!">3</a></li>
                      <li class="page-item">
                        <a class="page-link" href="#!">Next</a>
                      </li>
                    </ul>
                  </nav>
                  <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                      <li class="page-item disabled">
                        <a class="page-link" href="#!" tabindex="-1">Previous</a>
                      </li>
                      <li class="page-item"><a class="page-link" href="#!">1</a></li>
                      <li class="page-item"><a class="page-link" href="#!">2</a></li>
                      <li class="page-item"><a class="page-link" href="#!">3</a></li>
                      <li class="page-item">
                        <a class="page-link" href="#!">Next</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>  
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