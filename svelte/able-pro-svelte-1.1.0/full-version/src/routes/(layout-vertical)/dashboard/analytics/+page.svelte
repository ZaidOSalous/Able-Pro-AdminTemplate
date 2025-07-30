<script>
  import { chart } from 'svelte-apexcharts?client';
  import Breadcrumb from '../../../../lib/Components/Layouts/Partials/Breadcrumb.svelte';

  var new_users_options = {
    chart: { type: 'area', height: 80, sparkline: { enabled: true } },
    colors: ['#2CA87F'],
    stroke: {
      curve: 'straight',
      width: 2
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
    dataLabels: {
      enabled: false
    },
    series: [
      {
        data: [1, 1, 60, 1, 1, 50, 1, 1, 40, 1, 1, 25, 0]
      }
    ],
    tooltip: {
      fixed: { enabled: false },
      x: { show: false },
      y: {
        title: {
          formatter: function (seriesName) {
            return '';
          }
        }
      },
      marker: { show: false }
    }
  };
  var new_visitors_options = {
    series: [
      {
        data: [
          {
            x: '',
            y: [1, 6]
          },
          {
            x: '',
            y: [3, 7]
          },
          {
            x: '',
            y: [4, 8]
          },
          {
            x: '',
            y: [5, 9]
          },
          {
            x: '',
            y: [4, 8]
          },
          {
            x: '',
            y: [4, 7]
          },
          {
            x: '',
            y: [2, 5]
          }
        ]
      }
    ],
    chart: {
      type: 'rangeBar',
      height: 80,
      sparkline: { enabled: true },
      toolbar: {
        show: false
      }
    },
    colors: ['#E58A00'],
    plotOptions: {
      bar: {
        columnWidth: '30%',
        borderRadius: 5,
        horizontal: false
      }
    },
    yaxis: {
      tickAmount: 2,
      min: 0,
      max: 10
    },
    grid: {
      show: false,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    }
  };
  var new_orders_options = {
    chart: { type: 'bar', height: 80, sparkline: { enabled: true } },
    colors: ['#4680FF'],
    plotOptions: { bar: { columnWidth: '80%' } },
    series: [
      {
        data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25]
      }
    ],
    xaxis: { crosshairs: { width: 1 } },
    tooltip: {
      fixed: { enabled: false },
      x: { show: false },
      y: {
        title: {
          formatter: function (seriesName) {
            return '';
          }
        }
      },
      marker: { show: false }
    }
  };
  var overview_chart_1 = {
    chart: {
      height: 250,
      type: 'bar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 4,
        borderRadiusApplication: 'end'
      }
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left'
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#4680FF', '#4680FF'],
    stroke: {
      show: true,
      width: 3,
      colors: ['transparent']
    },
    fill: {
      colors: ['#4680FF', '#4680FF'],
      opacity: [1, 0.5]
    },
    grid: {
      strokeDashArray: 4
    },
    series: [
      {
        name: 'Net Profit',
        data: [76, 85, 101, 98, 87, 105, 91]
      },
      {
        name: 'Revenue',
        data: [44, 55, 57, 56, 61, 58, 63]
      }
    ],
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$ ' + val + ' thousands';
        }
      }
    }
  };
  var overview_chart_2 = {
    chart: {
      height: 250,
      type: 'bar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 4,
        borderRadiusApplication: 'end'
      }
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left'
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#4680FF', '#4680FF'],
    stroke: {
      show: true,
      width: 3,
      colors: ['transparent']
    },
    fill: {
      colors: ['#4680FF', '#4680FF'],
      opacity: [1, 0.5]
    },
    grid: {
      strokeDashArray: 4
    },
    series: [
      {
        name: 'Net Profit',
        data: [98, 87, 105, 91, 76, 85, 101]
      },
      {
        name: 'Revenue',
        data: [56, 61, 58, 63, 44, 55, 57]
      }
    ],
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$ ' + val + ' thousands';
        }
      }
    }
  };
  var overview_chart_3 = {
    chart: {
      height: 250,
      type: 'bar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 4,
        borderRadiusApplication: 'end'
      }
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left'
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#4680FF', '#4680FF'],
    stroke: {
      show: true,
      width: 3,
      colors: ['transparent']
    },
    fill: {
      colors: ['#4680FF', '#4680FF'],
      opacity: [1, 0.5]
    },
    grid: {
      strokeDashArray: 4
    },
    series: [
      {
        name: 'Net Profit',
        data: [76, 85, 101, 98, 87, 105, 91]
      },
      {
        name: 'Revenue',
        data: [44, 55, 57, 56, 61, 58, 63]
      }
    ],
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$ ' + val + ' thousands';
        }
      }
    }
  };
  var overview_chart_4 = {
    chart: {
      height: 250,
      type: 'bar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 4,
        borderRadiusApplication: 'end'
      }
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left'
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#4680FF', '#4680FF'],
    stroke: {
      show: true,
      width: 3,
      colors: ['transparent']
    },
    fill: {
      colors: ['#4680FF', '#4680FF'],
      opacity: [1, 0.5]
    },
    grid: {
      strokeDashArray: 4
    },
    series: [
      {
        name: 'Net Profit',
        data: [98, 87, 105, 91, 76, 85, 101]
      },
      {
        name: 'Revenue',
        data: [56, 61, 58, 63, 44, 55, 57]
      }
    ],
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$ ' + val + ' thousands';
        }
      }
    }
  };
  var income_graph = {
    chart: { type: 'bar', height: 80, sparkline: { enabled: true } },
    colors: ['#2CA87F'],
    plotOptions: { bar: { columnWidth: '80%' } },
    series: [
      {
        data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25]
      }
    ],
    xaxis: { crosshairs: { width: 1 } },
    tooltip: {
      fixed: { enabled: false },
      x: { show: false },
      y: {
        title: {
          formatter: function (seriesName) {
            return '';
          }
        }
      },
      marker: { show: false }
    }
  };
  var overview_product_graph = {
    chart: {
      height: 350,
      type: 'pie'
    },
    labels: ['Components', 'Widgets', 'Pages', 'Forms', 'Other', 'Apps'],
    series: [40, 20, 10, 15, 5, 10],
    colors: ['#4680FF', '#4680FF', '#212529', '#212529', '#212529', '#212529'],
    fill: {
      opacity: [1, 0.6, 0.4, 0.6, 0.8, 1]
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: false
      }
    },
    responsive: [
      {
        breakpoint: 575,
        options: {
          chart: {
            height: 250
          },
          dataLabels: {
            enabled: false
          }
        }
      }
    ]
  };
  var total_earning_graph_1 = {
    series: [30],
    chart: {
      height: 150,
      type: 'radialBar'
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '60%',
          background: 'transparent',
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: 'front'
        },
        track: {
          background: '#4680FF50',
          strokeWidth: '50%'
        },

        dataLabels: {
          show: true,
          name: {
            show: false
          },
          value: {
            formatter: function (val) {
              return parseInt(val);
            },
            offsetY: 7,
            color: '#4680FF',
            fontSize: '20px',
            fontWeight: '700',
            show: true
          }
        }
      }
    },
    colors: ['#4680FF'],
    fill: {
      type: 'solid'
    },
    stroke: {
      lineCap: 'round'
    }
  };
  var total_earning_graph_2 = {
    series: [30],
    chart: {
      height: 150,
      type: 'radialBar'
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '60%',
          background: 'transparent',
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: 'front'
        },
        track: {
          background: '#DC262650',
          strokeWidth: '50%'
        },

        dataLabels: {
          show: true,
          name: {
            show: false
          },
          value: {
            formatter: function (val) {
              return parseInt(val);
            },
            offsetY: 7,
            color: '#DC2626',
            fontSize: '20px',
            fontWeight: '700',
            show: true
          }
        }
      }
    },
    colors: ['#DC2626'],
    fill: {
      type: 'solid'
    },
    stroke: {
      lineCap: 'round'
    }
  };
  var languages_graph = {
    chart: { type: 'area', height: 130, sparkline: { enabled: true } },
    colors: ['#1890ff'],
    plotOptions: { bar: { columnWidth: '80%' } },
    series: [
      {
        data: [100, 140, 100, 250, 115, 125, 90, 100, 140, 100, 230, 115, 215, 90, 190, 100, 120, 180]
      }
    ],
    xaxis: { crosshairs: { width: 1 } },
    stroke: {
      // curve: 'straight',
      width: 1.5
    },
    tooltip: {
      fixed: { enabled: false },
      x: { show: false },
      y: {
        title: {
          formatter: function (seriesName) {
            return '';
          }
        }
      },
      marker: { show: false }
    }
  };
</script>

<div class="pc-container">
  <div class="pc-content">
    <Breadcrumb item="Dashboard" itemActive="Analytics" />
    <!-- [ Main Content ] start -->
    <div class="row">
      <div class="col-md-6 col-xxl-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
              <h5 class="mb-0">New Orders</h5>
              <select class="form-select rounded-3 form-select-sm w-auto">
                <option>Today</option>
                <option>Weekly</option>
                <option selected>Monthly</option>
              </select>
            </div>
            <div class="my-3">
              <div id="new-orders-graph" use:chart={new_orders_options}></div>
              <h5 class="text-center mt-3">
                $30200
                <small class="text-primary"><i class="ti ti-arrow-up-right"></i> 30.6%</small>
              </h5>
            </div>
            <div class="d-grid">
              <a class="btn btn-link-primary" role="button" href="!#">View More</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xxl-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
              <h5 class="mb-0">New Users</h5>
              <select class="form-select rounded-3 form-select-sm w-auto">
                <option>Today</option>
                <option>Weekly</option>
                <option selected>Monthly</option>
              </select>
            </div>
            <div class="my-3">
              <div id="new-users-graph" use:chart={new_users_options}></div>
              <h5 class="text-center mt-3">
                $30200
                <small class="text-success"><i class="ti ti-arrow-up-right"></i> 30.6%</small>
              </h5>
            </div>
            <div class="d-grid">
              <a class="btn btn-link-primary" role="button" href="!#">View More</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xxl-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
              <h5 class="mb-0">Visitors</h5>
              <select class="form-select rounded-3 form-select-sm w-auto">
                <option>Today</option>
                <option>Weekly</option>
                <option selected>Monthly</option>
              </select>
            </div>
            <div class="my-3">
              <div id="visitors-graph" use:chart={new_visitors_options}></div>
              <h5 class="text-center mt-3">
                $30200
                <small class="text-danger"><i class="ti ti-arrow-down-right"></i> 30.6%</small>
              </h5>
            </div>
            <div class="d-grid">
              <a class="btn btn-link-primary" role="button" href="!#">View More</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xxl-3">
        <div class="card bg-gray-800 dropbox-card mb-3">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
              <h5 class="text-white">Dropbox Storage</h5>
              <h4 class="text-white">150GB</h4>
            </div>
            <div class="mb-3">
              <div class="avtar avtar-s">
                <i class="ti ti-cloud f-18"></i>
              </div>
            </div>
            <small class="text-white">134,2GB of 150GB Users</small>
            <div class="progress mt-2 bg-transparent" style="height: 8px">
              <div
                class="progress-bar bg-danger"
                role="progressbar"
                style="width: 15%"
                aria-valuenow="15"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
              <div
                class="progress-bar bg-warning"
                role="progressbar"
                style="width: 20%"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
              <div
                class="progress-bar bg-light-primary"
                role="progressbar"
                style="width: 20%"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
              <div
                class="progress-bar bg-success"
                role="progressbar"
                style="width: 25%"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        <div class="card bg-primary available-balance-card">
          <div class="card-body p-3">
            <div class="d-flex align-items-center justify-content-between">
              <div>
                <p class="mb-0 text-white">Available Balance</p>
                <h4 class="mb-0 text-white">$1,234.90</h4>
              </div>
              <div class="avtar">
                <i class="ti ti-arrows-left-right f-18"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-header pb-0 pt-2">
            <ul class="nav nav-tabs analytics-tab" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="analytics-tab-1"
                  data-bs-toggle="tab"
                  data-bs-target="#analytics-tab-1-pane"
                  type="button"
                  role="tab"
                  aria-controls="analytics-tab-1-pane"
                  aria-selected="true"
                >
                  Overview
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="analytics-tab-2"
                  data-bs-toggle="tab"
                  data-bs-target="#analytics-tab-2-pane"
                  type="button"
                  role="tab"
                  aria-controls="analytics-tab-2-pane"
                  aria-selected="false"
                >
                  Marketing
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="analytics-tab-3"
                  data-bs-toggle="tab"
                  data-bs-target="#analytics-tab-3-pane"
                  type="button"
                  role="tab"
                  aria-controls="analytics-tab-3-pane"
                  aria-selected="false"
                >
                  Project
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="analytics-tab-4"
                  data-bs-toggle="tab"
                  data-bs-target="#analytics-tab-4-pane"
                  type="button"
                  role="tab"
                  aria-controls="analytics-tab-4-pane"
                  aria-selected="false"
                >
                  Order
                </button>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-7 col-xl-8">
                <ul class="list-inline mb-3 d-flex align-items-center justify-content-end">
                  <li class="list-inline-item">
                    <div class="d-flex">
                      <button type="button" class="btn btn-sm me-1 btn-secondary"> This week </button>
                      <button type="button" class="btn btn-sm me-1 btn-light"> Last week </button>
                    </div>
                  </li>
                  <li class="list-inline-item">
                    <a href="!#" class="avtar avtar-s btn-link-secondary border border-secondary">
                      <i class="ti ti-external-link f-18"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="!#" class="avtar avtar-s btn-link-secondary border border-secondary">
                      <i class="ti ti-arrows-diagonal f-18"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <div class="dropdown">
                      <a
                        href="!#"
                        class="avtar avtar-s btn-link-secondary border border-secondary dropdown-toggle arrow-none"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="ti ti-dots f-18"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="!#">Name</a>
                        <a class="dropdown-item" href="!#">Date</a>
                        <a class="dropdown-item" href="!#">Ratting</a>
                        <a class="dropdown-item" href="!#">Unread</a>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="analytics-tab-1-pane"
                    role="tabpanel"
                    aria-labelledby="analytics-tab-1"
                    tabindex="0"
                  >
                    <div id="overview-chart-1" use:chart={overview_chart_1}></div>
                  </div>
                  <div class="tab-pane fade" id="analytics-tab-2-pane" role="tabpanel" aria-labelledby="analytics-tab-2" tabindex="0">
                    <div id="overview-chart-2" use:chart={overview_chart_2}></div>
                  </div>
                  <div class="tab-pane fade" id="analytics-tab-3-pane" role="tabpanel" aria-labelledby="analytics-tab-3" tabindex="0">
                    <div id="overview-chart-3" use:chart={overview_chart_3}></div>
                  </div>
                  <div class="tab-pane fade" id="analytics-tab-4-pane" role="tabpanel" aria-labelledby="analytics-tab-4" tabindex="0">
                    <div id="overview-chart-4" use:chart={overview_chart_4}></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 col-xl-4">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <div class="avtar avtar-s bg-light-secondary">
                          <i class="ti ti-chart-bar f-20"></i>
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <div class="row g-1">
                          <div class="col-6">
                            <p class="text-muted mb-1">Total Sales</p>
                            <h6 class="mb-0">1,800</h6>
                          </div>
                          <div class="col-6 text-end">
                            <h6 class="mb-1">- 245</h6>
                            <p class="text-danger mb-0">
                              <i class="ti ti-arrow-down-left"></i> 30.6%
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <div class="avtar avtar-s bg-light-secondary">
                          <i class="ti ti-chart-arrows-vertical f-20"></i>
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <div class="row g-1">
                          <div class="col-6">
                            <p class="text-muted mb-1">Revenue</p>
                            <h6 class="mb-0">$5667</h6>
                          </div>
                          <div class="col-6 text-end">
                            <h6 class="mb-1">+$2100</h6>
                            <p class="text-success mb-0">
                              <i class="ti ti-arrow-up-right"></i> 30.6%
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <div class="avtar avtar-s bg-light-secondary">
                          <i class="ti ti-shopping-cart f-20"></i>
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <div class="row g-1">
                          <div class="col-6">
                            <p class="text-muted mb-1">Abandon Cart</p>
                            <h6 class="mb-0">128</h6>
                          </div>
                          <div class="col-6 text-end">
                            <h6 class="mb-1">-26</h6>
                            <p class="text-warning mb-0">
                              <i class="ti ti-arrows-left-right"></i> 5%
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <div class="avtar avtar-s bg-light-secondary">
                          <i class="ti ti-ad f-20"></i>
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <div class="row g-1">
                          <div class="col-6">
                            <p class="text-muted mb-1">Ads Spent</p>
                            <h6 class="mb-0">$2500</h6>
                          </div>
                          <div class="col-6 text-end">
                            <h6 class="mb-1">$200</h6>
                            <p class="text-success mb-0">
                              <i class="ti ti-arrow-up-right"></i> 10.6%
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xxl-3 col-md-12">
        <div class="row">
          <div class="col-md-6 col-xxl-12">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <div class="avtar avtar-s bg-light-secondary">
                    <i class="ti ti-currency-dollar f-20"></i>
                  </div>
                  <div class="dropdown">
                    <a
                      class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none"
                      href="!#"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="ti ti-dots-vertical f-18"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a class="dropdown-item" href="!#">Name</a>
                      <a class="dropdown-item" href="!#">Date</a>
                      <a class="dropdown-item" href="!#">Ratting</a>
                      <a class="dropdown-item" href="!#">Unread</a>
                    </div>
                  </div>
                </div>
                <h5 class="mb-0">$30,200.00</h5>
                <p class="text-muted mb-0">Income</p>
                <div class="mt-2">
                  <div id="income-graph" use:chart={income_graph}></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xxl-12">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <h5 class="mb-0">Languages support</h5>
                  <div class="dropdown">
                    <a
                      class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none"
                      href="!#"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="ti ti-dots-vertical f-18"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a class="dropdown-item" href="!#">Name</a>
                      <a class="dropdown-item" href="!#">Date</a>
                      <a class="dropdown-item" href="!#">Ratting</a>
                      <a class="dropdown-item" href="!#">Unread</a>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <div class="avtar avtar-xs bg-light-secondary">
                      <i class="ti ti-arrow-big-right f-18"></i>
                    </div>
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h6 class="mb-0">
                      Update version
                      <span class="badge bg-light-success">V1.1.0</span>
                    </h6>
                  </div>
                </div>
                <div class="mt-2 mb-3">
                  <div id="languages-graph" use:chart={languages_graph}></div>
                </div>
                <div class="row g-2">
                  <div class="col-6">
                    <div class="d-grid">
                      <button class="btn btn-outline-secondary"> React </button>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="d-grid">
                      <button class="btn btn-outline-secondary"> Angular </button>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="d-grid">
                      <button class="btn btn-outline-secondary"> Bootstrap </button>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="d-grid">
                      <button class="btn btn-outline-secondary">MUI</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xxl-6 col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <h5 class="mb-0">Overview Product</h5>
              <div class="dropdown">
                <a
                  class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none"
                  href="!#"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="ti ti-dots-vertical f-18"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" href="!#">Name</a>
                  <a class="dropdown-item" href="!#">Date</a>
                  <a class="dropdown-item" href="!#">Ratting</a>
                  <a class="dropdown-item" href="!#">Unread</a>
                </div>
              </div>
            </div>
            <div class="my-3">
              <div id="overview-product-graph" use:chart={overview_product_graph}></div>
            </div>
            <div class="row g-3 text-center">
              <div class="col-6 col-lg-4 col-xxl-4">
                <div class="overview-product-legends">
                  <p class="text-dark mb-1"><span>Apps</span></p>
                  <h6 class="mb-0">10+</h6>
                </div>
              </div>
              <div class="col-6 col-lg-4 col-xxl-4">
                <div class="overview-product-legends">
                  <p class="text-dark mb-1"><span>Other</span></p>
                  <h6 class="mb-0">5+</h6>
                </div>
              </div>
              <div class="col-6 col-lg-4 col-xxl-4">
                <div class="overview-product-legends">
                  <p class="text-secondary mb-1"><span>Widgets</span></p>
                  <h6 class="mb-0">150+</h6>
                </div>
              </div>
              <div class="col-6 col-lg-4 col-xxl-4">
                <div class="overview-product-legends">
                  <p class="text-secondary mb-1"><span>Forms</span></p>
                  <h6 class="mb-0">50+</h6>
                </div>
              </div>
              <div class="col-6 col-lg-4 col-xxl-4">
                <div class="overview-product-legends">
                  <p class="text-primary mb-1"><span>Components</span></p>
                  <h6 class="mb-0">200+</h6>
                </div>
              </div>
              <div class="col-6 col-lg-4 col-xxl-4">
                <div class="overview-product-legends">
                  <p class="text-primary mb-1"><span>Pages</span></p>
                  <h6 class="mb-0">150+</h6>
                </div>
              </div>
            </div>
            <div class="row g-2 text-center mt-4">
              <div class="col-sm-6">
                <div class="d-grid">
                  <button class="btn btn-outline-secondary"> View All </button>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="d-grid">
                  <button class="btn btn-primary">Create new Page</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xxl-3 col-md-12">
        <div class="row">
          <div class="col-md-6 col-xxl-12">
            <div class="card">
              <div class="card-body pb-0">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <h5 class="mb-0">Payment History</h5>
                  <a class="avtar avtar-s btn-link-secondary">
                    <i class="ti ti-plus f-18"></i>
                  </a>
                </div>
              </div>
              <ul class="list-group list-group-flush border-top-0">
                <li class="list-group-item">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <div class="avtar avtar-s bg-light-secondary">
                        <img src="/assets/images/widget/img-paypal.png" alt="img" class="img-fluid" />
                      </div>
                    </div>
                    <div class="flex-grow-1 mx-2">
                      <p class="mb-1">Paypal</p>
                      <h6 class="mb-0">
                        +210,000 <small class="text-success">+ 30.6%</small>
                      </h6>
                    </div>
                    <div class="flex-shrink-0">
                      <div class="dropdown">
                        <a
                          class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none"
                          href="!#"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="ti ti-dots-vertical f-18"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item" href="!#">Name</a>
                          <a class="dropdown-item" href="!#">Date</a>
                          <a class="dropdown-item" href="!#">Ratting</a>
                          <a class="dropdown-item" href="!#">Unread</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <div class="avtar avtar-s bg-light-secondary">
                        <img src="/assets/images/widget/img-gpay.png" alt="img" class="img-fluid" />
                      </div>
                    </div>
                    <div class="flex-grow-1 mx-2">
                      <p class="mb-1">Gpay</p>
                      <h6 class="mb-0">
                        -$2,000 <small class="text-danger">- 30.6%</small>
                      </h6>
                    </div>
                    <div class="flex-shrink-0">
                      <div class="dropdown">
                        <a
                          class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none"
                          href="!#"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="ti ti-dots-vertical f-18"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item" href="!#">Name</a>
                          <a class="dropdown-item" href="!#">Date</a>
                          <a class="dropdown-item" href="!#">Ratting</a>
                          <a class="dropdown-item" href="!#">Unread</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <div class="avtar avtar-s bg-light-secondary">
                        <img src="/assets/images/widget/img-phonepay.png" alt="img" class="img-fluid" />
                      </div>
                    </div>
                    <div class="flex-grow-1 mx-2">
                      <p class="mb-1">Phone Pay</p>
                      <h6 class="mb-0">
                        -$2,000 <small class="text-danger">- 30.6%</small>
                      </h6>
                    </div>
                    <div class="flex-shrink-0">
                      <div class="dropdown">
                        <a
                          class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none"
                          href="!#"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="ti ti-dots-vertical f-18"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item" href="!#">Name</a>
                          <a class="dropdown-item" href="!#">Date</a>
                          <a class="dropdown-item" href="!#">Ratting</a>
                          <a class="dropdown-item" href="!#">Unread</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="card-footer">
                <div class="d-grid">
                  <button class="btn btn-outline-secondary"> View all </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xxl-12">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <div class="my-n4" style="width: 130px">
                      <div id="total-earning-graph-1" use:chart={total_earning_graph_1}></div>
                    </div>
                  </div>
                  <div class="flex-grow-1 mx-2">
                    <p class="mb-1">Total Earning</p>
                    <h6 class="mb-0">$45,890</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <div class="my-n4" style="width: 130px">
                      <div id="total-earning-graph-2" use:chart={total_earning_graph_2}></div>
                    </div>
                  </div>
                  <div class="flex-grow-1 mx-2">
                    <p class="mb-1">Total Earning</p>
                    <h6 class="mb-0">$45,890</h6>
                  </div>
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
