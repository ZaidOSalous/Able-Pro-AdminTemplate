<script>
  import { onMount } from 'svelte';
  import ComponentBreadcrumb from '$lib/Components/Layouts/Partials/ComponentBreadcrumb.svelte';
  import datepicker from '$lib/assets/datepicker.js';
  import '$lib/assets/css/uikit.css';

  const d_week = {
    buttonClass: 'btn',
    daysOfWeekDisabled: [0, 6]
  };

  const d_highlight = {
    buttonClass: 'btn',
    daysOfWeekHighlighted: [1]
  };

  const d_auto = {
    buttonClass: 'btn',
    autohide: true
  };

  const d_disable = {
    buttonClass: 'btn',
    datesDisabled: ['02/18/2022', '02/22/2022']
  };

  const d_today = {
    buttonClass: 'btn',
    todayHighlight: true
  };

  const disp_week = {
    buttonClass: 'btn',
    calendarWeeks: true
  };

  const datepicker_range = {
    buttonClass: 'btn'
  };
</script>

<svelte:head>
  <title>DatePicker | Able Pro Dashboard Template</title>
  <link rel="stylesheet" href="/node_modules/vanillajs-datepicker/dist/css/datepicker-bs5.min.css" />
</svelte:head>

<div class="row">
  <!-- prettier-ignore -->
  <ComponentBreadcrumb
						title={'DatePicker'}
						text={'Bootstrap-datepicker provides a flexible datepicker widget in the Bootstrap style.'}
						link={'https://bootstrap-datepicker.readthedocs.io/en/latest/'}
					/>
</div>
<!-- [ Main Content ] start -->
<div class="row">
  <!-- [ bootstrap-datetimepicker ] start -->
  <div class="col-xl-4 col-md-6">
    <div class="card">
      <div class="card-header">
        <h5>Days of Week Disabled</h5>
      </div>
      <div class="card-body">
        <input type="text" class="form-control" id="d_week" use:datepicker={d_week} />
      </div>
    </div>
  </div>
  <div class="col-xl-4 col-md-6">
    <div class="card">
      <div class="card-header">
        <h5>Days of Week Highlighted</h5>
      </div>
      <div class="card-body">
        <input type="text" class="form-control" id="d_highlight" use:datepicker={d_highlight} />
      </div>
    </div>
  </div>
  <div class="col-xl-4 col-md-6">
    <div class="card">
      <div class="card-header">
        <h5>AutoClose</h5>
      </div>
      <div class="card-body">
        <input type="text" class="form-control" id="d_auto" use:datepicker={d_auto} />
      </div>
    </div>
  </div>
  <div class="col-xl-4 col-md-6">
    <div class="card">
      <div class="card-header">
        <h5>DatesDisabled</h5>
      </div>
      <div class="card-body">
        <input type="text" class="form-control" id="d_disable" use:datepicker={d_disable} />
      </div>
    </div>
  </div>
  <div class="col-xl-4 col-md-6">
    <div class="card">
      <div class="card-header">
        <h5>Today Highlight</h5>
      </div>
      <div class="card-body">
        <input type="text" class="form-control" id="d_today" use:datepicker={d_today} />
      </div>
    </div>
  </div>
  <div class="col-xl-4 col-md-6">
    <div class="card">
      <div class="card-header">
        <h5>Calendar Weeks</h5>
      </div>
      <div class="card-body">
        <input type="text" class="form-control" id="disp_week" use:datepicker={disp_week} />
      </div>
    </div>
  </div>
  <div class="col-xl-8 col-md-6">
    <div class="card">
      <div class="card-header">
        <h5>Date Range</h5>
      </div>
      <div class="card-body">
        <div class="input-daterange input-group" id="datepicker_range">
          <input type="text" class="form-control text-left" placeholder="Start date" name="range-start" use:datepicker={datepicker_range} />
          <input type="text" class="form-control text-end" placeholder="End date" name="range-end" use:datepicker={datepicker_range} />
        </div>
      </div>
    </div>
  </div>
  <!-- [ bootstrap-datetimepicker ] End -->
</div>
