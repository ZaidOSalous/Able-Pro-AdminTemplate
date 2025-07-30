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
      <div class="row">
        
        <div class="col-sm-12">
          <div class="card table-card">
            <div class="card-body">
              <div class="text-end p-4 pb-sm-2">
                <a href="ecom-product-add" class="btn btn-primary d-inline-flex align-items-center gap-2">
                  <i class="ti ti-plus f-18"></i> Add Product
                </a>
              </div>
              <div class="table-responsive">
                <table class="table table-hover" id="pc-dt-simple">
                  <thead>
                    <tr>
                      <th class="text-end">#</th>
                      <th>Product Detail</th>
                      <th>Categories</th>
                      <th class="text-end">Price</th>
                      <th class="text-end">Qty</th>
                      <th>Status</th>
                      <th class="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-end">7</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="<?= base_url('assets/images/application/img-prod-1.jpg') ?>" alt="user-image"
                              class="wid-40 rounded">
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Apple Series 4 GPS A38 MM Space</h6>
                            <p class="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p>
                          </div>
                        </div>
                      </td>
                      <td>Electronics, Laptop</td>
                      <td class="text-end">$14.59</td>
                      <td class="text-end">70</td>
                      <td><span class="badge bg-light-success  f-12">In Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="ecom-product-add" class="avtar avtar-xs btn-link-success btn-pc-default">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>

                      <td class="text-end">2</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="<?= base_url('assets/images/application/img-prod-2.jpg') ?>" alt="user-image"
                              class="wid-40 rounded">
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Boat On-Ear Wireless</h6>
                            <p class="text-muted f-12 mb-0">Mic(Bluetooth 4.2, Rockerz 450R</p>
                          </div>
                        </div>
                      </td>
                      <td>Electronics, Headphones</td>
                      <td class="text-end">$81.99</td>
                      <td class="text-end">45</td>
                      <td><span class="badge bg-light-danger  f-12">Out of Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="ecom-product-add" class="avtar avtar-xs btn-link-success btn-pc-default">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>

                      <td class="text-end">5</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="<?= base_url('assets/images/application/img-prod-3.jpg') ?>" alt="user-image"
                              class="wid-40 rounded">
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Fitbit MX30 Smart Watch</h6>
                            <p class="text-muted f-12 mb-0">(MX30- waterproof) watch</p>
                          </div>
                        </div>
                      </td>
                      <td>Fashion, Watch</td>
                      <td class="text-end">$49.9</td>
                      <td class="text-end">21</td>
                      <td><span class="badge bg-light-success  f-12">In Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="ecom-product-add" class="avtar avtar-xs btn-link-success btn-pc-default">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>

                      <td class="text-end">7</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="<?= base_url('assets/images/application/img-prod-4.jpg') ?>" alt="user-image"
                              class="wid-40 rounded">
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Apple Series 4 GPS A38 MM Space</h6>
                            <p class="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p>
                          </div>
                        </div>
                      </td>
                      <td>Electronics, Laptop</td>
                      <td class="text-end">$14.59</td>
                      <td class="text-end">70</td>
                      <td><span class="badge bg-light-success  f-12">In Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="ecom-product-add" class="avtar avtar-xs btn-link-success btn-pc-default">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>

                      <td class="text-end">2</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="<?= base_url('assets/images/application/img-prod-5.jpg') ?>" alt="user-image"
                              class="wid-40 rounded">
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Boat On-Ear Wireless</h6>
                            <p class="text-muted f-12 mb-0">Mic(Bluetooth 4.2, Rockerz 450R</p>
                          </div>
                        </div>
                      </td>
                      <td>Electronics, Headphones</td>
                      <td class="text-end">$81.99</td>
                      <td class="text-end">45</td>
                      <td><span class="badge bg-light-danger  f-12">Out of Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="ecom-product-add" class="avtar avtar-xs btn-link-success btn-pc-default">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>

                      <td class="text-end">5</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="<?= base_url('assets/images/application/img-prod-6.jpg') ?>" alt="user-image"
                              class="wid-40 rounded">
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Fitbit MX30 Smart Watch</h6>
                            <p class="text-muted f-12 mb-0">(MX30- waterproof) watch</p>
                          </div>
                        </div>
                      </td>
                      <td>Fashion, Watch</td>
                      <td class="text-end">$49.9</td>
                      <td class="text-end">21</td>
                      <td><span class="badge bg-light-success  f-12">In Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="ecom-product-add" class="avtar avtar-xs btn-link-success btn-pc-default">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>

                      <td class="text-end">7</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="<?= base_url('assets/images/application/img-prod-7.jpg') ?>" alt="user-image"
                              class="wid-40 rounded">
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Apple Series 4 GPS A38 MM Space</h6>
                            <p class="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p>
                          </div>
                        </div>
                      </td>
                      <td>Electronics, Laptop</td>
                      <td class="text-end">$14.59</td>
                      <td class="text-end">70</td>
                      <td><span class="badge bg-light-success  f-12">In Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="ecom-product-add" class="avtar avtar-xs btn-link-success btn-pc-default">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>

                      <td class="text-end">2</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="<?= base_url('assets/images/application/img-prod-8.jpg') ?>" alt="user-image"
                              class="wid-40 rounded">
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Boat On-Ear Wireless</h6>
                            <p class="text-muted f-12 mb-0">Mic(Bluetooth 4.2, Rockerz 450R</p>
                          </div>
                        </div>
                      </td>
                      <td>Electronics, Headphones</td>
                      <td class="text-end">$81.99</td>
                      <td class="text-end">45</td>
                      <td><span class="badge bg-light-danger  f-12">Out of Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="ecom-product-add" class="avtar avtar-xs btn-link-success btn-pc-default">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>

                      <td class="text-end">7</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="<?= base_url('assets/images/application/img-prod-1.jpg') ?>" alt="user-image"
                              class="wid-40 rounded">
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Apple Series 4 GPS A38 MM Space</h6>
                            <p class="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p>
                          </div>
                        </div>
                      </td>
                      <td>Electronics, Laptop</td>
                      <td class="text-end">$14.59</td>
                      <td class="text-end">70</td>
                      <td><span class="badge bg-light-success  f-12">In Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="ecom-product-add" class="avtar avtar-xs btn-link-success btn-pc-default">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>

                      <td class="text-end">2</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="<?= base_url('assets/images/application/img-prod-2.jpg') ?>" alt="user-image"
                              class="wid-40 rounded">
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Boat On-Ear Wireless</h6>
                            <p class="text-muted f-12 mb-0">Mic(Bluetooth 4.2, Rockerz 450R</p>
                          </div>
                        </div>
                      </td>
                      <td>Electronics, Headphones</td>
                      <td class="text-end">$81.99</td>
                      <td class="text-end">45</td>
                      <td><span class="badge bg-light-danger  f-12">Out of Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="ecom-product-add" class="avtar avtar-xs btn-link-success btn-pc-default">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>

                      <td class="text-end">5</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="<?= base_url('assets/images/application/img-prod-3.jpg') ?>" alt="user-image"
                              class="wid-40 rounded">
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Fitbit MX30 Smart Watch</h6>
                            <p class="text-muted f-12 mb-0">(MX30- waterproof) watch</p>
                          </div>
                        </div>
                      </td>
                      <td>Fashion, Watch</td>
                      <td class="text-end">$49.9</td>
                      <td class="text-end">21</td>
                      <td><span class="badge bg-light-success  f-12">In Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="ecom-product-add" class="avtar avtar-xs btn-link-success btn-pc-default">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>

                      <td class="text-end">7</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="<?= base_url('assets/images/application/img-prod-4.jpg') ?>" alt="user-image"
                              class="wid-40 rounded">
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Apple Series 4 GPS A38 MM Space</h6>
                            <p class="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p>
                          </div>
                        </div>
                      </td>
                      <td>Electronics, Laptop</td>
                      <td class="text-end">$14.59</td>
                      <td class="text-end">70</td>
                      <td><span class="badge bg-light-success  f-12">In Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="ecom-product-add" class="avtar avtar-xs btn-link-success btn-pc-default">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>

                      <td class="text-end">2</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="<?= base_url('assets/images/application/img-prod-5.jpg') ?>" alt="user-image"
                              class="wid-40 rounded">
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Boat On-Ear Wireless</h6>
                            <p class="text-muted f-12 mb-0">Mic(Bluetooth 4.2, Rockerz 450R</p>
                          </div>
                        </div>
                      </td>
                      <td>Electronics, Headphones</td>
                      <td class="text-end">$81.99</td>
                      <td class="text-end">45</td>
                      <td><span class="badge bg-light-danger  f-12">Out of Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="ecom-product-add" class="avtar avtar-xs btn-link-success btn-pc-default">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>

                      <td class="text-end">5</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="<?= base_url('assets/images/application/img-prod-6.jpg') ?>" alt="user-image"
                              class="wid-40 rounded">
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Fitbit MX30 Smart Watch</h6>
                            <p class="text-muted f-12 mb-0">(MX30- waterproof) watch</p>
                          </div>
                        </div>
                      </td>
                      <td>Fashion, Watch</td>
                      <td class="text-end">$49.9</td>
                      <td class="text-end">21</td>
                      <td><span class="badge bg-light-success  f-12">In Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="ecom-product-add" class="avtar avtar-xs btn-link-success btn-pc-default">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>

                      <td class="text-end">7</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="<?= base_url('assets/images/application/img-prod-7.jpg') ?>" alt="user-image"
                              class="wid-40 rounded">
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Apple Series 4 GPS A38 MM Space</h6>
                            <p class="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p>
                          </div>
                        </div>
                      </td>
                      <td>Electronics, Laptop</td>
                      <td class="text-end">$14.59</td>
                      <td class="text-end">70</td>
                      <td><span class="badge bg-light-success  f-12">In Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="ecom-product-add" class="avtar avtar-xs btn-link-success btn-pc-default">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>

                      <td class="text-end">2</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="<?= base_url('assets/images/application/img-prod-8.jpg') ?>" alt="user-image"
                              class="wid-40 rounded">
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Boat On-Ear Wireless</h6>
                            <p class="text-muted f-12 mb-0">Mic(Bluetooth 4.2, Rockerz 450R</p>
                          </div>
                        </div>
                      </td>
                      <td>Electronics, Headphones</td>
                      <td class="text-end">$81.99</td>
                      <td class="text-end">45</td>
                      <td><span class="badge bg-light-danger  f-12">Out of Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="ecom-product-add" class="avtar avtar-xs btn-link-success btn-pc-default">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>

                      <td class="text-end">7</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="<?= base_url('assets/images/application/img-prod-1.jpg') ?>" alt="user-image"
                              class="wid-40 rounded">
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Apple Series 4 GPS A38 MM Space</h6>
                            <p class="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p>
                          </div>
                        </div>
                      </td>
                      <td>Electronics, Laptop</td>
                      <td class="text-end">$14.59</td>
                      <td class="text-end">70</td>
                      <td><span class="badge bg-light-success  f-12">In Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="ecom-product-add" class="avtar avtar-xs btn-link-success btn-pc-default">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>

                      <td class="text-end">2</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="<?= base_url('assets/images/application/img-prod-2.jpg') ?>" alt="user-image"
                              class="wid-40 rounded">
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Boat On-Ear Wireless</h6>
                            <p class="text-muted f-12 mb-0">Mic(Bluetooth 4.2, Rockerz 450R</p>
                          </div>
                        </div>
                      </td>
                      <td>Electronics, Headphones</td>
                      <td class="text-end">$81.99</td>
                      <td class="text-end">45</td>
                      <td><span class="badge bg-light-danger  f-12">Out of Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="ecom-product-add" class="avtar avtar-xs btn-link-success btn-pc-default">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>

                      <td class="text-end">5</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="<?= base_url('assets/images/application/img-prod-3.jpg') ?>" alt="user-image"
                              class="wid-40 rounded">
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Fitbit MX30 Smart Watch</h6>
                            <p class="text-muted f-12 mb-0">(MX30- waterproof) watch</p>
                          </div>
                        </div>
                      </td>
                      <td>Fashion, Watch</td>
                      <td class="text-end">$49.9</td>
                      <td class="text-end">21</td>
                      <td><span class="badge bg-light-success  f-12">In Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="ecom-product-add" class="avtar avtar-xs btn-link-success btn-pc-default">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>

                      <td class="text-end">7</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="<?= base_url('assets/images/application/img-prod-4.jpg') ?>" alt="user-image"
                              class="wid-40 rounded">
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Apple Series 4 GPS A38 MM Space</h6>
                            <p class="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p>
                          </div>
                        </div>
                      </td>
                      <td>Electronics, Laptop</td>
                      <td class="text-end">$14.59</td>
                      <td class="text-end">70</td>
                      <td><span class="badge bg-light-success  f-12">In Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="ecom-product-add" class="avtar avtar-xs btn-link-success btn-pc-default">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>

                      <td class="text-end">2</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="<?= base_url('assets/images/application/img-prod-5.jpg') ?>" alt="user-image"
                              class="wid-40 rounded">
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Boat On-Ear Wireless</h6>
                            <p class="text-muted f-12 mb-0">Mic(Bluetooth 4.2, Rockerz 450R</p>
                          </div>
                        </div>
                      </td>
                      <td>Electronics, Headphones</td>
                      <td class="text-end">$81.99</td>
                      <td class="text-end">45</td>
                      <td><span class="badge bg-light-danger  f-12">Out of Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="ecom-product-add" class="avtar avtar-xs btn-link-success btn-pc-default">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>

                      <td class="text-end">5</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="<?= base_url('assets/images/application/img-prod-6.jpg') ?>" alt="user-image"
                              class="wid-40 rounded">
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Fitbit MX30 Smart Watch</h6>
                            <p class="text-muted f-12 mb-0">(MX30- waterproof) watch</p>
                          </div>
                        </div>
                      </td>
                      <td>Fashion, Watch</td>
                      <td class="text-end">$49.9</td>
                      <td class="text-end">21</td>
                      <td><span class="badge bg-light-success  f-12">In Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="ecom-product-add" class="avtar avtar-xs btn-link-success btn-pc-default">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>

                      <td class="text-end">7</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="<?= base_url('assets/images/application/img-prod-7.jpg') ?>" alt="user-image"
                              class="wid-40 rounded">
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Apple Series 4 GPS A38 MM Space</h6>
                            <p class="text-muted f-12 mb-0">Apple Watch SE Smartwatch </p>
                          </div>
                        </div>
                      </td>
                      <td>Electronics, Laptop</td>
                      <td class="text-end">$14.59</td>
                      <td class="text-end">70</td>
                      <td><span class="badge bg-light-success  f-12">In Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="ecom-product-add" class="avtar avtar-xs btn-link-success btn-pc-default">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>

                      <td class="text-end">2</td>
                      <td>
                        <div class="row">
                          <div class="col-auto pe-0">
                            <img src="<?= base_url('assets/images/application/img-prod-8.jpg') ?>" alt="user-image"
                              class="wid-40 rounded">
                          </div>
                          <div class="col">
                            <h6 class="mb-1">Boat On-Ear Wireless</h6>
                            <p class="text-muted f-12 mb-0">Mic(Bluetooth 4.2, Rockerz 450R</p>
                          </div>
                        </div>
                      </td>
                      <td>Electronics, Headphones</td>
                      <td class="text-end">$81.99</td>
                      <td class="text-end">45</td>
                      <td><span class="badge bg-light-danger  f-12">Out of Stock</span> </td>
                      <td class="text-center">
                        <ul class="list-inline me-auto mb-0">
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="View">
                            <a href="#" class="avtar avtar-xs btn-link-secondary btn-pc-default" data-bs-toggle="modal"
                              data-bs-target="#cust-modal">
                              <i class="ti ti-eye f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Edit">
                            <a href="ecom-product-add" class="avtar avtar-xs btn-link-success btn-pc-default">
                              <i class="ti ti-edit-circle f-18"></i>
                            </a>
                          </li>
                          <li class="list-inline-item align-bottom" data-bs-toggle="tooltip" title="Delete">
                            <a href="#" class="avtar avtar-xs btn-link-danger btn-pc-default">
                              <i class="ti ti-trash f-18"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <!-- [ Main Content ] end -->
    </div>
  </div>
  <div class="modal fade" id="cust-modal" data-bs-keyboard="false" tabindex="-1"
    aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header border-0 pb-0 justify-content-between">
          <h5 class="mb-0">Product Details</h5>
          <a href="#" class="avtar avtar-s btn-link-danger btn-pc-default" data-bs-dismiss="modal">
            <i class="ti ti-x f-20"></i>
          </a>
        </div>
        <div class="modal-body">
          <div class="row align-items-center">
            <div class="col-sm-4">
              <div class="bg-light rounded position-relative">
                <div class="text-center">
                  <div class="chat-avtar d-inline-flex mx-auto">
                    <img class="img-fluid rounded" src="<?= base_url('assets/images/application/img-prod-4.jpg') ?>"
                      alt="User image">
                  </div>
                </div>
                <div class="position-absolute end-0 top-0 p-3">
                  <span class="badge bg-success">In Stock</span>
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <h5>Canon EOS 1500D 24.1 Digital</h5>
              <p class="text-muted">Image Enlargement: After shooting, you can enlarge photographs of the objects for clear zoomed view. Change In Aspect Ratio: Boldly crop the subject and save it with a composition that has impact.</p>
              <div class="table-responsive">
                <table class="table w-auto table-borderless">
                  <tbody>
                    <tr>
                      <td class="text-muted py-1">Categories</td>
                      <td class="py-1">Electronics, Camera</td>
                    </tr>
                    <tr>
                      <td class="text-muted py-1">Qty</td>
                      <td class="py-1">21</td>
                    </tr>
                    <tr>
                      <td class="text-muted py-1">Price</td>
                      <td class="py-1"><h5 class="mb-0">$399</h5></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <?= $this->include('partials/footer-block') ?>
  <?= $this->include('partials/footer-js') ?>
  <!-- [Page Specific JS] start -->
  <script src="<?= base_url('assets/js/plugins/simple-datatables.js') ?>"></script>
  <script>
    const dataTable = new simpleDatatables.DataTable('#pc-dt-simple', {
      sortable: false,
      perPage: 5
    });
  </script>
  <!-- [Page Specific JS] end -->
  <?= $this->include('partials/customizer.php') ?>
</body>
  <!-- [Body] end -->
</html>
