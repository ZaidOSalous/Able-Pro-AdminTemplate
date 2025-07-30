<script>
  import dataTable from '$lib/assets/datatable.js';
  import Breadcrumb from '../../../../lib/Components/Layouts/Partials/Breadcrumb.svelte';
  import 'simple-datatables/dist/style.css';
  let pc_dt_simple = {
    sortable: true,
    perPage: 10
  };
</script>

<svelte:head>
  <title>Membership List | Able Pro Dashboard Template</title>
</svelte:head>
<!-- [ Main Content ] start -->
<div class="pc-container">
  <div class="pc-content">
    <!-- [ breadcrumb ] start -->
    <Breadcrumb item="Membership" itemActive="Membership List" />
    <!-- [ breadcrumb ] end -->

    <!-- [ Main Content ] start -->
    <div class="row">
      <div class="col-12">
        <div class="card table-card">
          <div class="card-header">
            <h5>Membership list</h5>
          </div>
          <div class="card-body pt-3">
            <div class="table-responsive">
              <table class="table table-hover" id="pc-dt-simple" use:dataTable={pc_dt_simple}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Start Date</th>
                    <th>Status</th>
                    <th>Plan</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <img src="/assets/images/user/avatar-1.jpg" alt="img" class="img-radius wid-40" />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-0">Airi Satou</h6>
                        </div>
                      </div>
                    </td>
                    <td>(123) 4567 890</td>
                    <td>2023/02/07 <span class="text-muted text-sm d-block">09:05 PM</span></td>
                    <td class="text-success"><i class="fas fa-circle f-10 m-r-10"></i> Active</td>
                    <td><span class="badge text-bg-success">Casual</span></td>
                    <td>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-eye f-20"></i>
                      </a>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-edit f-20"></i>
                      </a>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-trash f-20"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <img src="/assets/images/user/avatar-2.jpg" alt="img" class="img-radius wid-40" />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-0">Ashton Cox</h6>
                        </div>
                      </div>
                    </td>
                    <td>(123) 4567 890</td>
                    <td>2023/02/01 <span class="text-muted text-sm d-block">02:14 PM</span></td>
                    <td class="text-secondary"><i class="fas fa-circle f-10 m-r-10"></i> Inactive</td>
                    <td><span class="badge text-bg-primary">Addicted</span></td>
                    <td>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-eye f-20"></i>
                      </a>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-edit f-20"></i>
                      </a>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-trash f-20"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <img src="/assets/images/user/avatar-3.jpg" alt="img" class="img-radius wid-40" />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-0">Bradley Greer</h6>
                        </div>
                      </div>
                    </td>
                    <td>(123) 4567 890</td>
                    <td>2023/01/22 <span class="text-muted text-sm d-block">10:32 AM</span></td>
                    <td class="text-success"><i class="fas fa-circle f-10 m-r-10"></i> Active</td>
                    <td><span class="badge text-bg-warning">Diehard</span></td>
                    <td>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-eye f-20"></i>
                      </a>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-edit f-20"></i>
                      </a>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-trash f-20"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <img src="/assets/images/user/avatar-4.jpg" alt="img" class="img-radius wid-40" />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-0">Brielle Williamson</h6>
                        </div>
                      </div>
                    </td>
                    <td>(123) 4567 890</td>
                    <td>2023/02/07 <span class="text-muted text-sm d-block">09:05 PM</span></td>
                    <td class="text-success"><i class="fas fa-circle f-10 m-r-10"></i> Active</td>
                    <td><span class="badge text-bg-success">Casual</span></td>
                    <td>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-eye f-20"></i>
                      </a>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-edit f-20"></i>
                      </a>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-trash f-20"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <img src="/assets/images/user/avatar-5.jpg" alt="img" class="img-radius wid-40" />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-0">Airi Satou</h6>
                        </div>
                      </div>
                    </td>
                    <td>(123) 4567 890</td>
                    <td>2023/02/07 <span class="text-muted text-sm d-block">09:05 PM</span></td>
                    <td class="text-success"><i class="fas fa-circle f-10 m-r-10"></i> Active</td>
                    <td><span class="badge text-bg-success">Casual</span></td>
                    <td>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-eye f-20"></i>
                      </a>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-edit f-20"></i>
                      </a>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-trash f-20"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <img src="/assets/images/user/avatar-6.jpg" alt="img" class="img-radius wid-40" />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-0">Ashton Cox</h6>
                        </div>
                      </div>
                    </td>
                    <td>(123) 4567 890</td>
                    <td>2023/02/01 <span class="text-muted text-sm d-block">02:14 PM</span></td>
                    <td class="text-secondary"><i class="fas fa-circle f-10 m-r-10"></i> Inactive</td>
                    <td><span class="badge text-bg-primary">Addicted</span></td>
                    <td>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-eye f-20"></i>
                      </a>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-edit f-20"></i>
                      </a>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-trash f-20"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <img src="/assets/images/user/avatar-7.jpg" alt="img" class="img-radius wid-40" />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-0">Bradley Greer</h6>
                        </div>
                      </div>
                    </td>
                    <td>(123) 4567 890</td>
                    <td>2023/01/22 <span class="text-muted text-sm d-block">10:32 AM</span></td>
                    <td class="text-success"><i class="fas fa-circle f-10 m-r-10"></i> Active</td>
                    <td><span class="badge text-bg-warning">Diehard</span></td>
                    <td>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-eye f-20"></i>
                      </a>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-edit f-20"></i>
                      </a>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-trash f-20"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <img src="/assets/images/user/avatar-8.jpg" alt="img" class="img-radius wid-40" />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-0">Brielle Williamson</h6>
                        </div>
                      </div>
                    </td>
                    <td>(123) 4567 890</td>
                    <td>2023/02/07 <span class="text-muted text-sm d-block">09:05 PM</span></td>
                    <td class="text-success"><i class="fas fa-circle f-10 m-r-10"></i> Active</td>
                    <td><span class="badge text-bg-success">Casual</span></td>
                    <td>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-eye f-20"></i>
                      </a>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-edit f-20"></i>
                      </a>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-trash f-20"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <img src="/assets/images/user/avatar-9.jpg" alt="img" class="img-radius wid-40" />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-0">Airi Satou</h6>
                        </div>
                      </div>
                    </td>
                    <td>(123) 4567 890</td>
                    <td>2023/02/07 <span class="text-muted text-sm d-block">09:05 PM</span></td>
                    <td class="text-success"><i class="fas fa-circle f-10 m-r-10"></i> Active</td>
                    <td><span class="badge text-bg-success">Casual</span></td>
                    <td>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-eye f-20"></i>
                      </a>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-edit f-20"></i>
                      </a>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-trash f-20"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <img src="/assets/images/user/avatar-10.jpg" alt="img" class="img-radius wid-40" />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-0">Ashton Cox</h6>
                        </div>
                      </div>
                    </td>
                    <td>(123) 4567 890</td>
                    <td>2023/02/01 <span class="text-muted text-sm d-block">02:14 PM</span></td>
                    <td class="text-secondary"><i class="fas fa-circle f-10 m-r-10"></i> Inactive</td>
                    <td><span class="badge text-bg-primary">Addicted</span></td>
                    <td>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-eye f-20"></i>
                      </a>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-edit f-20"></i>
                      </a>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-trash f-20"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <img src="/assets/images/user/avatar-4.jpg" alt="img" class="img-radius wid-40" />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-0">Bradley Greer</h6>
                        </div>
                      </div>
                    </td>
                    <td>(123) 4567 890</td>
                    <td>2023/01/22 <span class="text-muted text-sm d-block">10:32 AM</span></td>
                    <td class="text-success"><i class="fas fa-circle f-10 m-r-10"></i> Active</td>
                    <td><span class="badge text-bg-warning">Diehard</span></td>
                    <td>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-eye f-20"></i>
                      </a>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-edit f-20"></i>
                      </a>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-trash f-20"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <img src="/assets/images/user/avatar-6.jpg" alt="img" class="img-radius wid-40" />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-0">Brielle Williamson</h6>
                        </div>
                      </div>
                    </td>
                    <td>(123) 4567 890</td>
                    <td>2023/02/07 <span class="text-muted text-sm d-block">09:05 PM</span></td>
                    <td class="text-success"><i class="fas fa-circle f-10 m-r-10"></i> Active</td>
                    <td><span class="badge text-bg-success">Casual</span></td>
                    <td>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-eye f-20"></i>
                      </a>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-edit f-20"></i>
                      </a>
                      <a href="/admins/membership-list" class="avtar avtar-xs btn-link-secondary">
                        <i class="ti ti-trash f-20"></i>
                      </a>
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
<!-- [ Main Content ] end -->
