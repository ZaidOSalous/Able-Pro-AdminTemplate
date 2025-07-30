<script>
  import { chart } from 'svelte-apexcharts?client';
  import Breadcrumb from '../../../../lib/Components/Layouts/Partials/Breadcrumb.svelte';
  var all_earnings_graph = {
    chart: { type: 'bar', height: 50, sparkline: { enabled: true } },
    colors: ['#4680FF'],
    plotOptions: { bar: { borderRadius: 2, columnWidth: '80%' } },
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
  var page_views_graph = {
    chart: { type: 'bar', height: 50, sparkline: { enabled: true } },
    colors: ['#E58A00'],
    plotOptions: { bar: { borderRadius: 2, columnWidth: '80%' } },
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
  var total_task_graph = {
    chart: { type: 'bar', height: 50, sparkline: { enabled: true } },
    colors: ['#2CA87F'],
    plotOptions: { bar: { borderRadius: 2, columnWidth: '80%' } },
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
  var download_graph = {
    chart: { type: 'bar', height: 50, sparkline: { enabled: true } },
    colors: ['#DC2626'],
    plotOptions: { bar: { borderRadius: 2, columnWidth: '80%' } },
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
  var customer_rate_graph = {
    chart: {
      type: 'area',
      height: 230,
      toolbar: {
        show: false
      }
    },
    colors: ['#0d6efd'],
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
    stroke: {
      width: 1
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',
        borderRadius: 4
      }
    },
    grid: {
      strokeDashArray: 4
    },
    series: [
      {
        data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65]
      }
    ],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    }
  };
  var total_tasks_graph = {
    chart: {
      type: 'area',
      height: 60,
      stacked: true,
      sparkline: { enabled: true }
    },
    colors: ['#4680FF'],
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
    stroke: { curve: 'smooth', width: 2 },
    series: [{ data: [5, 25, 3, 10, 4, 50, 0] }]
  };
  var pending_tasks_graph = {
    chart: {
      type: 'area',
      height: 60,
      stacked: true,
      sparkline: { enabled: true }
    },
    colors: ['#DC2626'],
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
    stroke: { curve: 'smooth', width: 2 },
    series: [{ data: [0, 50, 4, 10, 3, 25, 5] }]
  };
  var total_income_graph = {
    chart: {
      height: 320,
      type: 'donut'
    },
    series: [27, 23, 20, 17],
    colors: ['#4680FF', '#E58A00', '#2CA87F', '#4680FF'],
    labels: ['Total income', 'Total rent', 'Download', 'Views'],
    fill: {
      opacity: [1, 1, 1, 0.3]
    },
    legend: {
      show: false
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
          labels: {
            show: true,
            name: {
              show: true
            },
            value: {
              show: true
            }
          }
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    responsive: [
      {
        breakpoint: 575,
        options: {
          chart: {
            height: 250
          },
          plotOptions: {
            pie: {
              donut: {
                size: '65%',
                labels: {
                  show: false
                }
              }
            }
          }
        }
      }
    ]
  };
  var new_orders_graph = {
    chart: { type: 'bar', height: 80, sparkline: { enabled: true } },
    colors: ['#4680FF'],
    plotOptions: { bar: { borderRadius: 4, columnWidth: '80%' } },
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
  var new_users_graph = {
    chart: { type: 'area', height: 80, sparkline: { enabled: true } },
    colors: ['#2CA87F'],
    stroke: {
      width: 1
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
  var visitors_graph = {
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
  var overview_chart_1_3 = {
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
  var overview_chart_2_4 = {
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
  var monthly_report_graph = {
    series: [
      {
        name: 'Deals',
        data: [44, 55, 41, 67, 52, 53, 13, 23, 20, 8, 13, 27]
      },
      {
        name: 'Income Report',
        data: [13, 23, 20, 8, 13, 27, 21, 7, 25, 13, 22, 8]
      },
      {
        name: 'Customer',
        data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14]
      },
      {
        name: 'Profits',
        data: [21, 7, 25, 13, 22, 3, 44, 55, 41, 67, 22, 12]
      }
    ],
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: false
      }
    },
    colors: ['#4680FF', '#4680FF', '#4680FF', '#E58A00'],
    fill: {
      opacity: [1, 0.7, 0.4, 0.3]
    },
    grid: {
      strokeDashArray: 4
    },
    dataLabels: {
      enabled: false
    },
    // responsive: [{
    //   breakpoint: 480,
    //   options: {

    //   }
    // }],
    plotOptions: {
      bar: {
        horizontal: false
        // dataLabels: {
        //   total: {
        //     enabled: true,
        //     style: {
        //       fontSize: '13px',
        //       fontWeight: 900
        //     }
        //   }
        // }
      }
    },
    xaxis: {
      categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    },
    legend: {
      show: false
    }
  };
  var sales_report_chart = {
    chart: {
      type: 'bar',
      height: 430,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '40%',
        borderRadius: 4
      }
    },
    stroke: {
      show: true,
      width: 8,
      colors: ['transparent']
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      show: true,
      fontFamily: `'Public Sans', sans-serif`,
      offsetX: 10,
      offsetY: 10,
      labels: {
        useSeriesColors: false
      },
      markers: {
        width: 10,
        height: 10,
        radius: '50%',
        offsexX: 2,
        offsexY: 2
      },
      itemMargin: {
        horizontal: 15,
        vertical: 5
      }
    },
    colors: ['#E58A00', '#4680FF'],
    series: [
      {
        name: 'Net Profit',
        data: [180, 90, 135, 114, 120, 145]
      },
      {
        name: 'Revenue',
        data: [120, 45, 78, 150, 168, 99]
      }
    ],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    }
  };
  var acquisition_chart = {
    chart: {
      type: 'bar',
      height: 250,
      stacked: true,
      toolbar: {
        show: false
      }
    },
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'left',
      offsetX: 10,
      markers: {
        width: 8,
        height: 8,
        radius: '50%'
      }
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      show: false
    },
    stroke: {
      colors: ['transparent'],
      width: 1
    },
    colors: ['#0F172A', '#4680FF', '#4680FF'],
    fill: {
      opacity: [1, 0.6, 1]
    },
    series: [
      {
        name: 'Direct',
        data: [21, 17, 15, 13, 15, 13, 16, 13, 8, 14, 11, 9, 7, 5, 3, 3, 7]
      },
      {
        name: 'Referral',
        data: [28, 30, 20, 26, 18, 27, 22, 28, 20, 21, 15, 14, 12, 10, 8, 18, 16]
      },
      {
        name: 'Social',
        data: [50, 51, 60, 54, 53, 48, 55, 40, 44, 42, 44, 44, 42, 40, 42, 32, 16]
      }
    ],
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false
      }
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false
      }
    }
  };
</script>

<svelte:head>
  <title>Chart Widget | Able Pro Dashboard Template</title>
</svelte:head>

<!-- [ Main Content ] start -->
<div class="pc-container">
  <div class="pc-content">
    <!-- [ breadcrumb ] start -->
    <Breadcrumb item="Widget" itemActive="Chart" />
    <div class="row">
      <div class="col-md-6 col-xxl-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <div class="avtar avtar-s bg-light-primary">
                  <i class="ti ti-wallet f-20"></i>
                </div>
              </div>
              <div class="flex-grow-1 ms-3">
                <h6 class="mb-0">All Earnings</h6>
              </div>
              <div class="dropdown">
                <a
                  class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none"
                  href="/widget/w_chart"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="ti ti-dots-vertical f-18"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" href="/widget/w_chart">Today</a>
                  <a class="dropdown-item" href="/widget/w_chart">Weekly</a>
                  <a class="dropdown-item" href="/widget/w_chart">Monthly</a>
                </div>
              </div>
            </div>
            <div class="bg-body p-3 mt-3 rounded">
              <div class="mt-3 row align-items-center">
                <div class="col-7">
                  <div id="all-earnings-graph" use:chart={all_earnings_graph}></div>
                </div>
                <div class="col-5">
                  <h5 class="mb-1">$30200</h5>
                  <p class="text-primary mb-0"><i class="ti ti-arrow-up-right"></i> 30.6%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xxl-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <div class="avtar avtar-s bg-light-warning">
                  <i class="ti ti-clipboard-list f-20"></i>
                </div>
              </div>
              <div class="flex-grow-1 ms-3">
                <h6 class="mb-0">Page Views</h6>
              </div>
              <div class="dropdown">
                <a
                  class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none"
                  href="/widget/w_chart"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="ti ti-dots-vertical f-18"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" href="/widget/w_chart">Today</a>
                  <a class="dropdown-item" href="/widget/w_chart">Weekly</a>
                  <a class="dropdown-item" href="/widget/w_chart">Monthly</a>
                </div>
              </div>
            </div>
            <div class="bg-body p-3 mt-3 rounded">
              <div class="mt-3 row align-items-center">
                <div class="col-7">
                  <div id="page-views-graph" use:chart={page_views_graph}></div>
                </div>
                <div class="col-5">
                  <h5 class="mb-1">290+</h5>
                  <p class="text-warning mb-0"><i class="ti ti-arrow-up-right"></i> 30.6%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xxl-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <div class="avtar avtar-s bg-light-success">
                  <i class="ti ti-calendar-event f-20"></i>
                </div>
              </div>
              <div class="flex-grow-1 ms-3">
                <h6 class="mb-0">Total Task</h6>
              </div>
              <div class="dropdown">
                <a
                  class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none"
                  href="/widget/w_chart"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="ti ti-dots-vertical f-18"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" href="/widget/w_chart">Today</a>
                  <a class="dropdown-item" href="/widget/w_chart">Weekly</a>
                  <a class="dropdown-item" href="/widget/w_chart">Monthly</a>
                </div>
              </div>
            </div>
            <div class="bg-body p-3 mt-3 rounded">
              <div class="mt-3 row align-items-center">
                <div class="col-7">
                  <div id="total-task-graph" use:chart={total_task_graph}></div>
                </div>
                <div class="col-5">
                  <h5 class="mb-1">14568</h5>
                  <p class="text-success mb-0"><i class="ti ti-arrow-up-right"></i> 30.6%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xxl-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <div class="avtar avtar-s bg-light-danger">
                  <i class="ti ti-cloud-download f-20"></i>
                </div>
              </div>
              <div class="flex-grow-1 ms-3">
                <h6 class="mb-0">Download</h6>
              </div>
              <div class="dropdown">
                <a
                  class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none"
                  href="/widget/w_chart"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="ti ti-dots-vertical f-18"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" href="/widget/w_chart">Today</a>
                  <a class="dropdown-item" href="/widget/w_chart">Weekly</a>
                  <a class="dropdown-item" href="/widget/w_chart">Monthly</a>
                </div>
              </div>
            </div>
            <div class="bg-body p-3 mt-3 rounded">
              <div class="mt-3 row align-items-center">
                <div class="col-7">
                  <div id="download-graph" use:chart={download_graph}></div>
                </div>
                <div class="col-5">
                  <h5 class="mb-1">$30200</h5>
                  <p class="text-danger mb-0"><i class="ti ti-arrow-up-right"></i> 30.6%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-8 col-xxl-9">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
              <h5 class="mb-0">Repeat customer rate</h5>
              <div class="dropdown">
                <a
                  class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none"
                  href="/widget/w_chart"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="ti ti-dots f-18"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" href="/widget/w_chart">Today</a>
                  <a class="dropdown-item" href="/widget/w_chart">Weekly</a>
                  <a class="dropdown-item" href="/widget/w_chart">Monthly</a>
                </div>
              </div>
            </div>
            <h5 class="text-end my-2">5.44% <span class="badge bg-success">+2.6%</span></h5>
            <div id="customer-rate-graph" use:chart={customer_rate_graph}></div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
              <h5 class="mb-0">Project overview</h5>
              <div class="dropdown">
                <a
                  class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none"
                  href="/widget/w_chart"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="ti ti-dots f-18"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" href="/widget/w_chart">Today</a>
                  <a class="dropdown-item" href="/widget/w_chart">Weekly</a>
                  <a class="dropdown-item" href="/widget/w_chart">Monthly</a>
                </div>
              </div>
            </div>
            <div class="row align-items-center justify-content-center">
              <div class="col-md-6 col-xl-4">
                <div class="mt-3 row align-items-center">
                  <div class="col-6">
                    <p class="text-muted mb-1">Total Tasks</p>
                    <h5 class="mb-0">34,686</h5>
                  </div>
                  <div class="col-6">
                    <div id="total-tasks-graph" use:chart={total_tasks_graph}></div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xl-4">
                <div class="mt-3 row align-items-center">
                  <div class="col-6">
                    <p class="text-muted mb-1">Pending Tasks</p>
                    <h5 class="mb-0">3,786</h5>
                  </div>
                  <div class="col-6">
                    <div id="pending-tasks-graph" use:chart={pending_tasks_graph}></div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xl-4">
                <div class="mt-3 d-grid">
                  <button class="btn btn-primary d-flex align-items-center justify-content-center"
                    ><i class="ti ti-plus"></i> Add project</button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6 col-md-12">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <div class="avtar avtar-s bg-light-secondary">
                    <i class="ti ti-currency-dollar f-20"></i>
                  </div>
                  <div class="dropdown">
                    <a
                      class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none"
                      href="/widget/w_chart"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="ti ti-dots-vertical f-18"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a class="dropdown-item" href="/widget/w_chart">Name</a>
                      <a class="dropdown-item" href="/widget/w_chart">Date</a>
                      <a class="dropdown-item" href="/widget/w_chart">Ratting</a>
                      <a class="dropdown-item" href="/widget/w_chart">Unread</a>
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
          <div class="col-xl-6 col-md-12">
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
      <div class="col-lg-4 col-xxl-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
              <h5 class="mb-0">New Orders</h5>
              <select class="form-select form-select-sm w-auto">
                <option>Today</option>
                <option>Weekly</option>
                <option selected>Monthly</option>
              </select>
            </div>
            <div class="my-3">
              <div id="new-orders-graph" use:chart={new_orders_graph}></div>
              <h5 class="text-center mt-3">
                $30200 <small class="text-primary"><i class="ti ti-arrow-up-right"></i> 30.6%</small>
              </h5>
            </div>
            <div class="d-grid">
              <button class="btn btn-outline-secondary">View more</button>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
              <h5 class="mb-0">New Users</h5>
              <select class="form-select form-select-sm w-auto">
                <option>Today</option>
                <option>Weekly</option>
                <option selected>Monthly</option>
              </select>
            </div>
            <div class="my-3">
              <div id="new-users-graph" use:chart={new_users_graph}></div>
              <h5 class="text-center mt-3">
                $30200 <small class="text-success"><i class="ti ti-arrow-up-right"></i> 30.6%</small>
              </h5>
            </div>
            <div class="d-grid">
              <button class="btn btn-outline-secondary">View more</button>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
              <h5 class="mb-0">Visitors</h5>
              <select class="form-select form-select-sm w-auto">
                <option>Today</option>
                <option>Weekly</option>
                <option selected>Monthly</option>
              </select>
            </div>
            <div class="my-3">
              <div id="visitors-graph" use:chart={visitors_graph}></div>
              <h5 class="text-center mt-3">
                $30200 <small class="text-danger"><i class="ti ti-arrow-down-right"></i> 30.6%</small>
              </h5>
            </div>
            <div class="d-grid">
              <button class="btn btn-outline-secondary">View more</button>
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
                  aria-selected="true">Overview</button
                >
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
                  aria-selected="false">Marketing</button
                >
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
                  aria-selected="false">Project</button
                >
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
                  aria-selected="false">Order</button
                >
              </li>
            </ul>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-7 col-xl-8">
                <ul class="list-inline mb-3 d-flex align-items-center justify-content-end">
                  <li class="list-inline-item">
                    <select class="form-select w-auto">
                      <option>Today</option>
                      <option>Weekly</option>
                      <option selected="">Monthly</option>
                    </select>
                  </li>
                  <li class="list-inline-item">
                    <a href="/widget/w_chart" class="avtar avtar-s btn-link-secondary border border-secondary">
                      <i class="ti ti-external-link f-18"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="/widget/w_chart" class="avtar avtar-s btn-link-secondary border border-secondary">
                      <i class="ti ti-arrows-diagonal f-18"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <div class="dropdown">
                      <a
                        class="avtar avtar-s btn-link-secondary border border-secondary dropdown-toggle arrow-none"
                        href="/widget/w_chart"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="ti ti-dots f-18"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="/widget/w_chart">Name</a>
                        <a class="dropdown-item" href="/widget/w_chart">Date</a>
                        <a class="dropdown-item" href="/widget/w_chart">Ratting</a>
                        <a class="dropdown-item" href="/widget/w_chart">Unread</a>
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
                    <div id="overview-chart-1" use:chart={overview_chart_1_3}></div>
                  </div>
                  <div class="tab-pane fade" id="analytics-tab-2-pane" role="tabpanel" aria-labelledby="analytics-tab-2" tabindex="0">
                    <div id="overview-chart-2" use:chart={overview_chart_2_4}></div>
                  </div>
                  <div class="tab-pane fade" id="analytics-tab-3-pane" role="tabpanel" aria-labelledby="analytics-tab-3" tabindex="0">
                    <div id="overview-chart-3" use:chart={overview_chart_1_3}></div>
                  </div>
                  <div class="tab-pane fade" id="analytics-tab-4-pane" role="tabpanel" aria-labelledby="analytics-tab-4" tabindex="0">
                    <div id="overview-chart-4" use:chart={overview_chart_2_4}></div>
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
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <h5 class="mb-0">Overview Product</h5>
              <div class="dropdown">
                <a
                  class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none"
                  href="/widget/w_chart"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="ti ti-dots-vertical f-18"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" href="/widget/w_chart">Name</a>
                  <a class="dropdown-item" href="/widget/w_chart">Date</a>
                  <a class="dropdown-item" href="/widget/w_chart">Ratting</a>
                  <a class="dropdown-item" href="/widget/w_chart">Unread</a>
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
                  <button class="btn btn-outline-secondary">View All</button>
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
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
              <h5 class="mb-0">Total Income</h5>
              <div class="dropdown">
                <a
                  class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none"
                  href="/widget/w_chart"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="ti ti-dots-vertical f-18"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" href="/widget/w_chart">Today</a>
                  <a class="dropdown-item" href="/widget/w_chart">Weekly</a>
                  <a class="dropdown-item" href="/widget/w_chart">Monthly</a>
                </div>
              </div>
            </div>
            <div id="total-income-graph" use:chart={total_income_graph}></div>
            <div class="row g-3 mt-3">
              <div class="col-sm-6">
                <div class="bg-body p-3 rounded">
                  <div class="d-flex align-items-center mb-2">
                    <div class="flex-shrink-0">
                      <span class="p-1 d-block bg-primary rounded-circle">
                        <span class="visually-hidden">New alerts</span>
                      </span>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="mb-0">Item01</p>
                    </div>
                  </div>
                  <h6 class="mb-0">
                    $23,876 <small class="text-muted"><i class="ti ti-chevrons-up"></i> +$763,43</small>
                  </h6>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="bg-body p-3 rounded">
                  <div class="d-flex align-items-center mb-2">
                    <div class="flex-shrink-0">
                      <span class="p-1 d-block bg-warning rounded-circle">
                        <span class="visually-hidden">New alerts</span>
                      </span>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="mb-0">Item01</p>
                    </div>
                  </div>
                  <h6 class="mb-0">
                    $23,876 <small class="text-muted"><i class="ti ti-chevrons-up"></i> +$763,43</small>
                  </h6>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="bg-body p-3 rounded">
                  <div class="d-flex align-items-center mb-2">
                    <div class="flex-shrink-0">
                      <span class="p-1 d-block bg-success rounded-circle">
                        <span class="visually-hidden">New alerts</span>
                      </span>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="mb-0">Item01</p>
                    </div>
                  </div>
                  <h6 class="mb-0">
                    $23,876 <small class="text-muted"><i class="ti ti-chevrons-up"></i> +$763,43</small>
                  </h6>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="bg-body p-3 rounded">
                  <div class="d-flex align-items-center mb-2">
                    <div class="flex-shrink-0">
                      <span class="p-1 d-block bg-light-primary rounded-circle">
                        <span class="visually-hidden">New alerts</span>
                      </span>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <p class="mb-0">Item01</p>
                    </div>
                  </div>
                  <h6 class="mb-0">
                    $23,876 <small class="text-muted"><i class="ti ti-chevrons-up"></i> +$763,43</small>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <h5 class="mb-0">Languages support</h5>
              <div class="dropdown">
                <a
                  class="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none"
                  href="/widget/w_chart"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="ti ti-dots-vertical f-18"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" href="/widget/w_chart">Name</a>
                  <a class="dropdown-item" href="/widget/w_chart">Date</a>
                  <a class="dropdown-item" href="/widget/w_chart">Ratting</a>
                  <a class="dropdown-item" href="/widget/w_chart">Unread</a>
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
                  Update version <span class="badge bg-light-success">V1.1.0</span>
                </h6>
              </div>
            </div>
            <div class="mt-2 mb-3">
              <div id="languages-graph" use:chart={languages_graph}></div>
            </div>
            <div class="row g-2">
              <div class="col-6">
                <div class="d-grid"><button class="btn btn-outline-secondary">React</button></div>
              </div>
              <div class="col-6">
                <div class="d-grid"><button class="btn btn-outline-secondary">Angular</button></div>
              </div>
              <div class="col-6">
                <div class="d-grid">
                  <button class="btn btn-outline-secondary">Bootstrap</button>
                </div>
              </div>
              <div class="col-6">
                <div class="d-grid"><button class="btn btn-outline-secondary">MUI</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <h5 class="mb-0">Monthly Report</h5>
              <select class="form-select w-auto">
                <option>Today</option>
                <option>Weekly</option>
                <option selected="">Monthly</option>
              </select>
            </div>
            <div class="mt-2">
              <div id="monthly-report-graph" use:chart={monthly_report_graph}></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 col-xl-7">
        <div class="card">
          <div class="card-body">
            <h5 class="mb-3">Sales Report</h5>
            <h6 class="mb-2 f-w-400 text-muted">This Week Statistics</h6>
            <h3 class="mb-0">$7,650</h3>
            <div id="sales-report-chart" use:chart={sales_report_chart}></div>
          </div>
        </div>
      </div>
      <div class="col-md-12 col-xl-5">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
              <div>
                <h6 class="mb-2">Acquisition Channels</h6>
                <p class="mb-0 text-muted">Marketing</p>
              </div>
              <h4 class="text-primary">-128</h4>
            </div>
            <div id="acquisition-chart" use:chart={acquisition_chart}></div>
          </div>
          <div class="list-group list-group-flush">
            <a href="/widget/w_chart" class="list-group-item list-group-item-action">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <div class="avtar avtar-s rounded-circle text-secondary bg-light-secondary">
                    <i class="ti ti-device-analytics f-18"></i>
                  </div>
                </div>
                <div class="flex-grow-1 ms-3">
                  <h6 class="mb-1">Top Channels</h6>
                  <p class="mb-0 text-muted">Today, 2:00 AM</p>
                </div>
                <div class="flex-shrink-0 text-end">
                  <h6 class="mb-1">+ $1,430</h6>
                  <p class="mb-0 text-muted">35%</p>
                </div>
              </div>
            </a>
            <a href="/widget/w_chart" class="list-group-item list-group-item-action">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <div class="avtar avtar-s rounded-circle text-primary bg-light-primary">
                    <i class="ti ti-file-text f-18"></i>
                  </div>
                </div>
                <div class="flex-grow-1 ms-3">
                  <h6 class="mb-1">Top Pages</h6>
                  <p class="mb-0 text-muted">Today 6:00 AM</p>
                </div>
                <div class="flex-shrink-0 text-end">
                  <h6 class="mb-1">- $1430</h6>
                  <p class="mb-0 text-muted">35%</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- [ Main Content ] end -->
</div>
