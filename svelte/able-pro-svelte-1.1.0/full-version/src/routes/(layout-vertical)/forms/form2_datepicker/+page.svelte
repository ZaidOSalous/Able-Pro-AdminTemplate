<script>
  import datepicker from '$lib/assets/datepicker.js';
  import Breadcrumb from '../../../../lib/Components/Layouts/Partials/Breadcrumb.svelte';
  let pc_datepicker = {
    buttonClass: 'btn'
  };
  let pc_datepicker_3 = {
    buttonClass: 'btn',
    todayBtn: true,
    clearBtn: true
  };
  let pc_datepicker_4_1 = {
    buttonClass: 'btn',
    orientation: 'top left'
  };
  let pc_datepicker_4_2 = {
    buttonClass: 'btn',
    orientation: 'top right'
  };
  let pc_datepicker_4_3 = {
    buttonClass: 'btn',
    orientation: 'bottom left'
  };
  let pc_datepicker_4_4 = {
    buttonClass: 'btn',
    orientation: 'bottom right'
  };
</script>

<svelte:head>
  <title>Date Picker | Able Pro Dashboard Template</title>
  <link rel="stylesheet" href="/node_modules/vanillajs-datepicker/dist/css/datepicker-bs5.min.css" />
</svelte:head>
<!-- [ Main Content ] start -->
<div class="pc-container">
  <div class="pc-content">
    <!-- [ breadcrumb ] start -->
    <Breadcrumb item="Forms" itemActive="Date Picker" />
    <!-- [ breadcrumb ] end -->
    <!-- [ Main Content ] start -->
    <div class="row">
      <!-- prettier-ignore -->
      <div class="col-md-10 col-xxl-9 mb-4">
            <h5>Date Picker</h5>
            <p class="text-muted">A vanilla JavaScript remake of bootstrap-datepicker is written from scratch as ECMAScript modules/Sass stylesheets to reproduce similar usability to bootstrap-datepicker.</p>
            <div>
              <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank" href="https://mymth.github.io/vanillajs-datepicker/#/">
                <i class="ti ti-external-link me-1"></i>
                Reference
              </a>
            </div>
          </div>
    </div>
    <div class="row">
      <!-- [ form-element ] start -->
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h5>Preview</h5>
          </div>
          <div class="card-body">
            <form>
              <div class="mb-3 row">
                <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Simple Input</label>
                <div class="col-lg-4 col-md-9 col-sm-12">
                  <input type="text" class="form-control" id="pc-datepicker-1" placeholder="Select date" use:datepicker={pc_datepicker} />
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">With Input Group</label>
                <div class="col-lg-4 col-md-9 col-sm-12">
                  <div class="input-group date">
                    <input type="text" class="form-control" placeholder="Select date" id="pc-datepicker-2" use:datepicker={pc_datepicker} />
                    <span class="input-group-text">
                      <i class="feather icon-calendar"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Helper Button</label>
                <div class="col-lg-4 col-md-9 col-sm-12">
                  <div class="input-group date">
                    <input type="text" class="form-control" value="05/20/2017" id="pc-datepicker-3" use:datepicker={pc_datepicker_3} />
                    <span class="input-group-text">
                      <i class="feather icon-calendar"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Range Picker</label>
                <div class="col-lg-4 col-md-9 col-sm-12">
                  <div class="input-daterange input-group" id="pc-datepicker-5">
                    <input
                      type="text"
                      class="form-control text-left"
                      placeholder="Start date"
                      name="range-start"
                      use:datepicker={pc_datepicker}
                    />
                    <span class="input-group-text">to</span>
                    <input
                      type="text"
                      class="form-control text-end"
                      placeholder="End date"
                      name="range-end"
                      use:datepicker={pc_datepicker}
                    />
                  </div>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Inline Mode</label>
                <div class="col-lg-4 col-md-9 col-sm-12">
                  <div class id="pc-datepicker-6" use:datepicker={pc_datepicker}></div>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Position</label>
                <div class="col-lg-4 col-md-9 col-sm-12">
                  <div class="input-group date mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Top left"
                      id="pc-datepicker-4_1"
                      use:datepicker={pc_datepicker_4_1}
                    />
                    <span class="input-group-text">
                      <i class="feather icon-calendar"></i>
                    </span>
                  </div>
                  <div class="input-group date mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Top right"
                      id="pc-datepicker-4_2"
                      use:datepicker={pc_datepicker_4_2}
                    />
                    <span class="input-group-text">
                      <i class="feather icon-calendar"></i>
                    </span>
                  </div>
                  <div class="input-group date mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Bottom left"
                      id="pc-datepicker-4_3"
                      use:datepicker={pc_datepicker_4_3}
                    />
                    <span class="input-group-text">
                      <i class="feather icon-calendar"></i>
                    </span>
                  </div>
                  <div class="input-group date mb-0">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Bottom right"
                      id="pc-datepicker-4_4"
                      use:datepicker={pc_datepicker_4_4}
                    />
                    <span class="input-group-text">
                      <i class="feather icon-calendar"></i>
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- [ form-element ] end -->
    </div>
    <!-- [ Main Content ] end -->
  </div>
</div>
<!-- [ Main Content ] end -->
