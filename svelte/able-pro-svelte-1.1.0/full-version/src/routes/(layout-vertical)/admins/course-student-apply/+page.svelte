<script>
  import Breadcrumb from '../../../../lib/Components/Layouts/Partials/Breadcrumb.svelte';
  import dataTable from '$lib/assets/datatable.js';
  import 'simple-datatables/dist/style.css';
  let pc_dt_simple = {
    sortable: true,
    perPage: 10
  };
</script>

<title>Student Apply | Able Pro Dashboard Template</title>
<svelte:head>
  <title>Student Apply | Able Pro Dashboard Template</title>
</svelte:head>
<!-- [ Main Content ] start -->
<div class="pc-container">
  <div class="pc-content">
    <!-- [ breadcrumb ] start -->
    <Breadcrumb item="Online Courses" itemActive="Student Apply" />
    <!-- [ breadcrumb ] end -->
    <!-- [ Main Content ] start -->
    <div class="row">
      <div class="col-12">
        <div class="card table-card">
          <div class="card-header">
            <h5 class="mb-0">Apply Student list</h5>
          </div>
          <div class="card-body pt-3">
            <div class="table-responsive">
              <table class="table table-hover" id="pc-dt-simple" use:dataTable={pc_dt_simple}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Qualification</th>
                    <th>Email</th>
                    <th>Date/Time</th>
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
                    <td>B.COM., M.COM.</td>
                    <td>Info@123.com</td>
                    <td>2023/09/12 <span class="text-muted text-sm d-block">09:05 PM</span></td>
                    <td>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-success">
                        <i class="ti ti-check f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-danger">
                        <i class="ti ti-x f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-secondary">
                        <i class="ti ti-dots-vertical f-20"></i>
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
                    <td>B.COM., M.COM.</td>
                    <td>Info@123.com</td>
                    <td>2023/12/24 <span class="text-muted text-sm d-block">09:05 PM</span></td>
                    <td>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-success">
                        <i class="ti ti-check f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-danger">
                        <i class="ti ti-x f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-secondary">
                        <i class="ti ti-dots-vertical f-20"></i>
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
                    <td>B.A, B.C.A</td>
                    <td>Info@123.com</td>
                    <td>2022/09/19 <span class="text-muted text-sm d-block">09:05 PM</span></td>
                    <td>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-success">
                        <i class="ti ti-check f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-danger">
                        <i class="ti ti-x f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-secondary">
                        <i class="ti ti-dots-vertical f-20"></i>
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
                    <td>B.A, B.C.A</td>
                    <td>Info@123.com</td>
                    <td>2022/08/22 <span class="text-muted text-sm d-block">09:05 PM</span></td>
                    <td>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-success">
                        <i class="ti ti-check f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-danger">
                        <i class="ti ti-x f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-secondary">
                        <i class="ti ti-dots-vertical f-20"></i>
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
                    <td>B.COM., M.COM.</td>
                    <td>Info@123.com</td>
                    <td>2023/09/12 <span class="text-muted text-sm d-block">09:05 PM</span></td>
                    <td>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-success">
                        <i class="ti ti-check f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-danger">
                        <i class="ti ti-x f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-secondary">
                        <i class="ti ti-dots-vertical f-20"></i>
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
                    <td>B.COM., M.COM.</td>
                    <td>Info@123.com</td>
                    <td>2023/12/24 <span class="text-muted text-sm d-block">09:05 PM</span></td>
                    <td>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-success">
                        <i class="ti ti-check f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-danger">
                        <i class="ti ti-x f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-secondary">
                        <i class="ti ti-dots-vertical f-20"></i>
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
                    <td>B.A, B.C.A</td>
                    <td>Info@123.com</td>
                    <td>2022/09/19 <span class="text-muted text-sm d-block">09:05 PM</span></td>
                    <td>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-success">
                        <i class="ti ti-check f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-danger">
                        <i class="ti ti-x f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-secondary">
                        <i class="ti ti-dots-vertical f-20"></i>
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
                    <td>B.A, B.C.A</td>
                    <td>Info@123.com</td>
                    <td>2022/08/22 <span class="text-muted text-sm d-block">09:05 PM</span></td>
                    <td>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-success">
                        <i class="ti ti-check f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-danger">
                        <i class="ti ti-x f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-secondary">
                        <i class="ti ti-dots-vertical f-20"></i>
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
                          <h6 class="mb-0">Brielle Williamson</h6>
                        </div>
                      </div>
                    </td>
                    <td>(123) 4567 890</td>
                    <td>B.A, B.C.A</td>
                    <td>Info@123.com</td>
                    <td>2022/08/22 <span class="text-muted text-sm d-block">09:05 PM</span></td>
                    <td>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-success">
                        <i class="ti ti-check f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-danger">
                        <i class="ti ti-x f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-secondary">
                        <i class="ti ti-dots-vertical f-20"></i>
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
                          <h6 class="mb-0">Airi Satou</h6>
                        </div>
                      </div>
                    </td>
                    <td>(123) 4567 890</td>
                    <td>B.COM., M.COM.</td>
                    <td>Info@123.com</td>
                    <td>2023/09/12 <span class="text-muted text-sm d-block">09:05 PM</span></td>
                    <td>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-success">
                        <i class="ti ti-check f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-danger">
                        <i class="ti ti-x f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-secondary">
                        <i class="ti ti-dots-vertical f-20"></i>
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
                    <td>B.COM., M.COM.</td>
                    <td>Info@123.com</td>
                    <td>2023/12/24 <span class="text-muted text-sm d-block">09:05 PM</span></td>
                    <td>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-success">
                        <i class="ti ti-check f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-danger">
                        <i class="ti ti-x f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-secondary">
                        <i class="ti ti-dots-vertical f-20"></i>
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
                    <td>B.A, B.C.A</td>
                    <td>Info@123.com</td>
                    <td>2022/09/19 <span class="text-muted text-sm d-block">09:05 PM</span></td>
                    <td>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-success">
                        <i class="ti ti-check f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-danger">
                        <i class="ti ti-x f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-secondary">
                        <i class="ti ti-dots-vertical f-20"></i>
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
                    <td>B.A, B.C.A</td>
                    <td>Info@123.com</td>
                    <td>2022/08/22 <span class="text-muted text-sm d-block">09:05 PM</span></td>
                    <td>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-success">
                        <i class="ti ti-check f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-danger">
                        <i class="ti ti-x f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-secondary">
                        <i class="ti ti-dots-vertical f-20"></i>
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
                    <td>B.COM., M.COM.</td>
                    <td>Info@123.com</td>
                    <td>2023/09/12 <span class="text-muted text-sm d-block">09:05 PM</span></td>
                    <td>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-success">
                        <i class="ti ti-check f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-danger">
                        <i class="ti ti-x f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-secondary">
                        <i class="ti ti-dots-vertical f-20"></i>
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
                    <td>B.COM., M.COM.</td>
                    <td>Info@123.com</td>
                    <td>2023/12/24 <span class="text-muted text-sm d-block">09:05 PM</span></td>
                    <td>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-success">
                        <i class="ti ti-check f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-danger">
                        <i class="ti ti-x f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-secondary">
                        <i class="ti ti-dots-vertical f-20"></i>
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
                    <td>B.A, B.C.A</td>
                    <td>Info@123.com</td>
                    <td>2022/09/19 <span class="text-muted text-sm d-block">09:05 PM</span></td>
                    <td>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-success">
                        <i class="ti ti-check f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-danger">
                        <i class="ti ti-x f-20"></i>
                      </a>
                      <a href="/admins/course-student-apply" class="avtar avtar-xs btn-light-secondary">
                        <i class="ti ti-dots-vertical f-20"></i>
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
