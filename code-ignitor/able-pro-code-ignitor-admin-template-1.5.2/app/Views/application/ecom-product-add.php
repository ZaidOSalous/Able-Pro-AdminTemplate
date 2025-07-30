<!DOCTYPE html>
<html lang="en">
  <!-- [Head] start -->
  <head>
    
    <?= $this->include('partials/head-page-meta') ?>
    <!-- [Page specific CSS] start -->
    <!-- calender css -->
    <link rel="stylesheet" href="<?= base_url('assets/css/plugins/main.css') ?>">
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
        <div class="row">
          
          <div class="col-sm-12">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Product Name</label>
                      <input type="text" class="form-control" placeholder="Enter Product Name">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Product Description</label>
                      <input type="text" class="form-control" placeholder="Enter Product Description">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Category</label>
                      <input type="text" class="form-control" placeholder="Enter Product Category">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Price</label>
                      <select class="form-select">
                        <option>$ 100</option>
                        <option>$ 200</option>
                        <option>$ 300</option>
                        <option>$ 400</option>
                        <option>$ 500</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Qty</label>
                      <select class="form-select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Status</label>
                      <select class="form-select">
                        <option>In Stock</option>
                        <option>Out of Stock</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <p><span class="text-danger">*</span> Recommended resolution is 640*640 with file size</p>
                      <label class="btn btn-outline-secondary" for="flupld"><i class="ti ti-upload me-2"></i> Click to Upload</label>
                      <input type="file" id="flupld" class="d-none">
                    </div>
                    <div class="text-end btn-page mb-0 mt-4">
                      <button class="btn btn-outline-secondary">Cancel</button>
                      <button class="btn btn-primary">Add new Product</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <!-- [ Main Content ] end -->
      </div>
    </div>
    <!-- [ Main Content ] end -->
  <?= $this->include('partials/footer-block') ?>
  <?= $this->include('partials/footer-js') ?>
  <?= $this->include('partials/customizer.php') ?>
</body>
  <!-- [Body] end -->
</html>
