<script>
  import flatPickr from '$lib/assets/flatPickr.js';
  import Breadcrumb from '../../../../lib/Components/Layouts/Partials/Breadcrumb.svelte';
  import 'flatpickr/dist/flatpickr.min.css';

  let timepicker_1_2 = {
    enableTime: true,
    noCalendar: true
  };
  let timepicker_3 = {
    enableTime: true,
    noCalendar: true,
    time_24hr: true
  };
  let timepicker_4 = {
    enableTime: true,
    noCalendar: true,
    minTime: '16:00',
    maxTime: '22:30'
  };
  let timepicker_5 = {
    enableTime: true,
    noCalendar: true,
    defaultDate: '13:45'
  };
</script>

<svelte:head>
  <title>Timepicker | Able Pro Dashboard Template</title>
</svelte:head>

<!-- [ Main Content ] start -->
<div class="pc-container">
  <div class="pc-content">
    <!-- [ breadcrumb ] start -->
    <Breadcrumb item="Forms" itemActive="Timepicker" />
    <!-- [ breadcrumb ] end -->

    <!-- [ Main Content ] start -->
    <div class="row">
      <!-- prettier-ignore -->
      <div class="col-md-10 col-xxl-9 mb-4">
            <h5>Time Picker</h5>
            <p class="text-muted">flatpickr is a lightweight and powerful datetime picker. Lean, UX-driven, and extensible, yet it doesn’t depend on any libraries. There’s minimal UI but many themes. Rich, exposed APIs and event system make it suitable for any environment.</p>
            <div>
              <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank" href="https://flatpickr.js.org/examples/">
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
                  <input class="form-control" id="pc-timepicker-1" placeholder="Select time" type="text" use:flatPickr={timepicker_1_2} />
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">With Input Group</label>
                <div class="col-lg-4 col-md-9 col-sm-12">
                  <div class="input-group timepicker">
                    <input class="form-control" id="pc-timepicker-2" placeholder="Select time" type="text" use:flatPickr={timepicker_1_2} />
                    <span class="input-group-text">
                      <i class="feather icon-clock"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">24 Hours</label>
                <div class="col-lg-4 col-md-9 col-sm-12">
                  <input class="form-control" id="pc-timepicker-3" type="text" placeholder="Select time" use:flatPickr={timepicker_3} />
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Time Picker w/ Limits</label>
                <div class="col-lg-4 col-md-9 col-sm-12">
                  <input class="form-control" id="pc-timepicker-4" type="text" placeholder="Select time" use:flatPickr={timepicker_4} />
                </div>
              </div>
              <div class="row">
                <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Preloading Time</label>
                <div class="col-lg-4 col-md-9 col-sm-12">
                  <input class="form-control" id="pc-timepicker-5" type="text" placeholder="Select time" use:flatPickr={timepicker_5} />
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
