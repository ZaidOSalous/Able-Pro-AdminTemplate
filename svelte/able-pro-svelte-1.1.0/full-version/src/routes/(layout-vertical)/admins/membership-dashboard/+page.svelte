<script>
  import { chart } from 'svelte-apexcharts?client';
  import Breadcrumb from '../../../../lib/Components/Layouts/Partials/Breadcrumb.svelte';

  var revenue_analytics_chart = {
    chart: {
      type: 'area',
      height: 300,
      toolbar: {
        show: false
      }
    },
    colors: ['#e58a00', '#4680ff'],
    dataLabels: {
      enabled: false
    },
    legend: {
      show: true,
      position: 'top'
    },
    markers: {
      size: 1,
      colors: ['#fff', '#fff', '#fff'],
      strokeColors: ['#e58a00', '#4680ff'],
      strokeWidth: 1,
      shape: 'circle',
      hover: {
        size: 4
      }
    },
    stroke: {
      width: 1,
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        type: 'vertical',
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0
      }
    },
    grid: {
      show: false
    },
    series: [
      {
        name: 'Revenue',
        data: [200, 320, 320, 275, 275, 400, 400, 300, 440, 320, 320, 275, 275, 400, 300, 440]
      },
      {
        name: 'Sales',
        data: [200, 250, 240, 300, 340, 320, 320, 400, 350, 250, 240, 300, 340, 320, 400, 350]
      }
    ],
    xaxis: {
      labels: {
        hideOverlappingLabels: true
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    }
  };
  var membership_state_chart_option = {
    series: [76],
    chart: {
      type: 'radialBar',
      offsetY: -20,
      sparkline: {
        enabled: true
      }
    },
    colors: ['#4680ff'],
    plotOptions: {
      radialBar: {
        startAngle: -95,
        endAngle: 95,
        hollow: {
          margin: 15,
          size: '40%'
        },
        track: {
          background: '#4680ff25',
          strokeWidth: '97%',
          margin: 10
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            offsetY: 0,
            fontSize: '20px'
          }
        }
      }
    },
    grid: {
      padding: {
        top: 10
      }
    },
    stroke: {
      lineCap: 'round'
    },
    labels: ['Average Results']
  };
  var activity_line_chart_options = {
    chart: {
      type: 'line',
      height: 150,
      toolbar: {
        show: false
      }
    },
    colors: ['#2ca87f', '#2ca87f'],
    dataLabels: {
      enabled: false
    },
    legend: {
      show: true,
      position: 'top'
    },
    markers: {
      size: 1,
      colors: ['#fff', '#fff'],
      strokeColors: ['#2ca87f', '#2ca87f'],
      strokeWidth: 1,
      shape: 'circle',
      hover: {
        size: 4
      }
    },
    fill: {
      opacity: [1, 0.3]
    },
    stroke: {
      width: 3,
      curve: 'smooth'
    },
    grid: {
      show: false
    },
    series: [
      {
        name: 'Active',
        data: [20, 90, 65, 85, 20, 80, 30]
      },
      {
        name: 'Inactive',
        data: [70, 30, 40, 15, 60, 40, 95]
      }
    ],
    xaxis: {
      labels: {
        hideOverlappingLabels: true
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    }
  };
</script>

<svelte:head>
  <title>Membership | Able Pro Dashboard Template</title>
</svelte:head>
<!-- [ Main Content ] start -->
<div class="pc-container">
  <div class="pc-content">
    <!-- [ breadcrumb ] start -->
    <Breadcrumb item="Membership" itemActive="Dashboard" />
    <!-- [ breadcrumb ] end -->
    <!-- [ Main Content ] start -->
    <div class="row">
      <div class="col-xxl-3 col-md-6">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="flex-grow-1 me-3">
                <p class="mb-1 fw-medium text-muted">Registrations</p>
                <h4 class="mb-1">980+</h4>
                <p class="mb-0 text-sm">May 23 - June 01 (2018)</p>
              </div>
              <div class="flex-shrink-0">
                <div class="avtar avtar-l bg-light-primary rounded-circle">
                  <i class="ph-duotone ph-book-bookmark f-28"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xxl-3 col-md-6">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="flex-grow-1 me-3">
                <p class="mb-1 fw-medium text-muted">Renewals</p>
                <h4 class="mb-1">1,563</h4>
                <p class="mb-0 text-sm">May 23 - June 01 (2018)</p>
              </div>
              <div class="flex-shrink-0">
                <div class="avtar avtar-l bg-light-success rounded-circle">
                  <i class="ph-duotone ph-rocket f-28"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xxl-3 col-md-6">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="flex-grow-1 me-3">
                <p class="mb-1 fw-medium text-muted">Revenue</p>
                <h4 class="mb-1">42.6%</h4>
                <p class="mb-0 text-sm">May 23 - June 01 (2018)</p>
              </div>
              <div class="flex-shrink-0">
                <div class="avtar avtar-l bg-light-warning rounded-circle">
                  <i class="ph-duotone ph-credit-card f-28"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xxl-3 col-md-6">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="flex-grow-1 me-3">
                <p class="mb-1 fw-medium text-muted">Cancellations</p>
                <h4 class="mb-1">42.6%</h4>
                <p class="mb-0 text-sm">May 23 - June 01 (2018)</p>
              </div>
              <div class="flex-shrink-0">
                <div class="avtar avtar-l bg-light-danger rounded-circle">
                  <i class="ph-duotone ph-user-minus f-28"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-7 col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-start justify-content-between">
              <h5 class="mb-0">Revenue analytics</h5>
              <select class="form-select rounded-3 form-select-sm w-auto">
                <option>Today</option>
                <option>Weekly</option>
                <option selected>Monthly</option>
              </select>
            </div>
            <div id="revenue-analytics-chart" use:chart={revenue_analytics_chart}></div>
          </div>
        </div>
      </div>
      <div class="col-lg-5 col-md-12">
        <div class="card">
          <div class="card-body">
            <h5 class="mb-0">Calendar</h5>
            <div id="carouselExample" class="carousel slide">
              <div class="d-flex align-items-center justify-content-end my-1">
                <button
                  class="carousel-control-prev position-relative"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <div class="avtar avtar-xs bg-light-secondary">
                    <i class="ti ti-chevron-left f-14"></i>
                  </div>
                </button>
                <button
                  class="carousel-control-next position-relative"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <div class="avtar avtar-xs bg-light-secondary">
                    <i class="ti ti-chevron-right f-14"></i>
                  </div>
                </button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <p>Aug 10, Mon <span class="badge text-bg-primary">TODAY</span></p>
                  <div class="card overflow-hidden mb-2">
                    <div class="card-body px-3 py-2 border-start border-4 border-success">
                      <h6>Realize offers!</h6>
                      <p class="mb-0">16:00</p>
                    </div>
                  </div>
                  <div class="card overflow-hidden mb-2">
                    <div class="card-body px-3 py-2 border-start border-4 border-warning">
                      <h6>Add new members.</h6>
                      <p class="mb-0">14:00</p>
                    </div>
                  </div>
                  <div class="card overflow-hidden mb-2">
                    <div class="card-body px-3 py-2 border-start border-4 border-primary">
                      <h6>Add new benefit list.</h6>
                      <p class="mb-0">13:00</p>
                    </div>
                  </div>
                  <div class="card overflow-hidden mb-2">
                    <div class="card-body px-3 py-2 border-start border-4 border-danger">
                      <h6>Second offer is end!</h6>
                      <p class="mb-0">09:00</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <p>Aug 9, Mon</p>
                  <div class="card overflow-hidden mb-2">
                    <div class="card-body px-3 py-2 border-start border-4 border-warning">
                      <h6>Add new members.</h6>
                      <p class="mb-0">14:00</p>
                    </div>
                  </div>
                  <div class="card overflow-hidden mb-2">
                    <div class="card-body px-3 py-2 border-start border-4 border-success">
                      <h6>Realize offers!</h6>
                      <p class="mb-0">16:00</p>
                    </div>
                  </div>
                  <div class="card overflow-hidden mb-2">
                    <div class="card-body px-3 py-2 border-start border-4 border-primary">
                      <h6>Add new benefit list.</h6>
                      <p class="mb-0">13:00</p>
                    </div>
                  </div>
                  <div class="card overflow-hidden mb-2">
                    <div class="card-body px-3 py-2 border-start border-4 border-danger">
                      <h6>Second offer is end!</h6>
                      <p class="mb-0">09:00</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <p>Aug 8, Mon</p>
                  <div class="card overflow-hidden mb-2">
                    <div class="card-body px-3 py-2 border-start border-4 border-primary">
                      <h6>Add new benefit list.</h6>
                      <p class="mb-0">13:00</p>
                    </div>
                  </div>
                  <div class="card overflow-hidden mb-2">
                    <div class="card-body px-3 py-2 border-start border-4 border-warning">
                      <h6>Add new members.</h6>
                      <p class="mb-0">14:00</p>
                    </div>
                  </div>
                  <div class="card overflow-hidden mb-2">
                    <div class="card-body px-3 py-2 border-start border-4 border-success">
                      <h6>Realize offers!</h6>
                      <p class="mb-0">16:00</p>
                    </div>
                  </div>
                  <div class="card overflow-hidden mb-2">
                    <div class="card-body px-3 py-2 border-start border-4 border-danger">
                      <h6>Second offer is end!</h6>
                      <p class="mb-0">09:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-start justify-content-between mb-3">
              <h5 class="mb-0">Membership State</h5>
              <select class="form-select rounded-3 form-select-sm w-auto">
                <option>Today</option>
                <option>Weekly</option>
                <option selected>Monthly</option>
              </select>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div id="membership-state-chart" use:chart={membership_state_chart_option}></div>
              </div>
              <div class="col-md-6">
                <div class="rounded border p-3 mb-2">
                  <span class="d-block"><i class="fas fa-circle text-primary f-10 m-r-10"></i>New Membership</span>
                </div>
                <div class="rounded border p-3">
                  <span class="d-block"><i class="fas fa-circle text-primary text-opacity-25 f-10 m-r-10"></i>Repeat Membership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-start justify-content-between mb-3">
              <h5 class="mb-0">Activity</h5>
              <select class="form-select rounded-3 form-select-sm w-auto">
                <option>Today</option>
                <option>Weekly</option>
                <option selected>Monthly</option>
              </select>
            </div>
            <div id="activity-line-chart" use:chart={activity_line_chart_options}></div>
          </div>
        </div>
      </div>

      <div class="col-lg-7 col-md-12">
        <div class="card table-card">
          <div class="card-header">
            <div class="d-flex align-items-center justify-content-between">
              <h5 class="mb-0">Latest Signup List</h5>
              <button class="btn btn-sm btn-link-primary">View All</button>
            </div>
          </div>
          <div class="card-body pb-0">
            <div class="table-responsive">
              <table class="table table-hover mb-0">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Joining Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <img src="/assets/images/user/avatar-4.jpg" alt="img" class="img-radius wid-40 align-top m-r-15" />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-0">Airi Satou</h6>
                        </div>
                      </div>
                    </td>
                    <td>satou123@gmail.com</td>
                    <td>2023/09/12</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <img src="/assets/images/user/avatar-1.jpg" alt="img" class="img-radius wid-40 align-top m-r-15" />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-0">Ashton Cox</h6>
                        </div>
                      </div>
                    </td>
                    <td>ashton@gmail.com</td>
                    <td>2023/12/24</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <img src="/assets/images/user/avatar-2.jpg" alt="img" class="img-radius wid-40 align-top m-r-15" />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-0">Bradley Greer</h6>
                        </div>
                      </div>
                    </td>
                    <td>greer05@gmail.com</td>
                    <td>2022/09/19</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <img src="/assets/images/user/avatar-3.jpg" alt="img" class="img-radius wid-40 align-top m-r-15" />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-0">Brielle Williamson</h6>
                        </div>
                      </div>
                    </td>
                    <td>bw23@gmail.com</td>
                    <td>2022/08/22</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <img src="/assets/images/user/avatar-5.jpg" alt="img" class="img-radius wid-40 align-top m-r-15" />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-0">Colleen Hurst</h6>
                        </div>
                      </div>
                    </td>
                    <td>hurst006@gmail.com</td>
                    <td>202a2/06/26</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-5 col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <h5 class="mb-0">Notifications</h5>
              <div class="dropdown">
                <a
                  class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none"
                  href="/admins/membership-dashboard"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="ti ti-dots-vertical f-18"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" href="/admins/membership-dashboard">Today</a>
                  <a class="dropdown-item" href="/admins/membership-dashboard">Weekly</a>
                  <a class="dropdown-item" href="/admins/membership-dashboard">Monthly</a>
                </div>
              </div>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item px-0 py-2">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img src="/assets/images/user/avatar-1.jpg" alt="img" class="wid-40 rounded-circle" />
                  </div>
                  <div class="flex-grow-1 mx-3">
                    <h6 class="mb-0">Brieley join casual membership..</h6>
                  </div>
                  <div class="flex-shrink-0">
                    <p class="mb-0 text-muted">Today | 9:00 AM</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item px-0 py-2">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img src="/assets/images/user/avatar-2.jpg" alt="img" class="wid-40 rounded-circle" />
                  </div>
                  <div class="flex-grow-1 mx-3">
                    <h6 class="mb-0">Ashton end membership planing</h6>
                  </div>
                  <div class="flex-shrink-0">
                    <p class="mb-0 text-muted">Yesterday | 6:30 PM</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item px-0 py-2">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img src="/assets/images/user/avatar-3.jpg" alt="img" class="wid-40 rounded-circle" />
                  </div>
                  <div class="flex-grow-1 mx-3">
                    <h6 class="mb-1">Airi canceled in 2 months membership</h6>
                  </div>
                  <div class="flex-shrink-0">
                    <p class="mb-0 text-muted">05 Feb | 3:45 PM</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item px-0 py-2">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img src="/assets/images/user/avatar-4.jpg" alt="img" class="wid-40 rounded-circle" />
                  </div>
                  <div class="flex-grow-1 mx-3">
                    <h6 class="mb-1">Colleen join Addicted membership</h6>
                  </div>
                  <div class="flex-shrink-0">
                    <p class="mb-0 text-muted">05 Feb | 4:00 PM</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item px-0 py-2">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img src="/assets/images/user/avatar-5.jpg" alt="img" class="wid-40 rounded-circle" />
                  </div>
                  <div class="flex-grow-1 mx-3">
                    <h6 class="mb-1">Airi canceled in 2 months membership</h6>
                  </div>
                  <div class="flex-shrink-0">
                    <p class="mb-0 text-muted">05 Feb | 3:45 PM</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item px-0 py-2">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img src="/assets/images/user/avatar-6.jpg" alt="img" class="wid-40 rounded-circle" />
                  </div>
                  <div class="flex-grow-1 mx-3">
                    <h6 class="mb-1">Colleen join Addicted membership</h6>
                  </div>
                  <div class="flex-shrink-0">
                    <p class="mb-0 text-muted">05 Feb | 4:00 PM</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- [ Main Content ] end -->
  </div>
</div>
<!-- [ Main Content ] end -->
