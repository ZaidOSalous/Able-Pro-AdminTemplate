<script>
  import Breadcrumb from '../../../../lib/Components/Layouts/Partials/Breadcrumb.svelte';
  import { onMount } from 'svelte';
  import DataTable from 'datatables.net?client';
  import 'datatables.net-scroller-bs5?client';
  import 'datatables.net-bs5/js/dataTables.bootstrap5.min.js?client';
  import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
  import 'datatables.net-scroller-bs5/css/scroller.bootstrap5.min.css';

  onMount(() => {
    new DataTable('#basic-scroller', {
      ajax: '/assets/json/2500.txt',
      deferRender: true,
      scrollY: 200,
      scrollCollapse: true,
      scroller: true,
      dom: 'Bfrtip'
    });

    new DataTable('#state-scroller', {
      ajax: '/assets/json/2500.txt',
      deferRender: true,
      scrollY: 200,
      scrollCollapse: true,
      scroller: true,
      stateSave: true
    });

    // [ API scroller ]
    new DataTable('#api-scroller', {
      ajax: '/assets/json/2500.txt',
      deferRender: true,
      scrollY: 200,
      scrollCollapse: true,
      scroller: true
    });
  });
</script>

<svelte:head>
  <title>Scroller | Able Pro Dashboard Template</title>
</svelte:head>

<div class="pc-container">
  <div class="pc-content">
    <!-- [ breadcrumb ] start -->
    <Breadcrumb item="DataTable" itemActive="Scroller" />
    <!-- [ breadcrumb ] end -->

    <!-- [ Main Content ] start -->
    <div class="row">
      <!-- prettier-ignore -->
      <div class="col-md-10 col-xxl-9 mb-4">
            <h5>DataTables Extensions</h5>
            <p class="text-muted">The features that DataTables provides can be greatly enhanced by the use of the plug-ins available on this page, which give many new user interaction and configuration options.</p>
            <div>
              <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank" href="https://datatables.net/extensions/index">
                <i class="ti ti-external-link me-1"></i>
                Reference
              </a>
            </div>
          </div>
    </div>
    <div class="row">
      <!-- Basic scroll table start -->
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h5>Basic Table Scroll</h5>
            <small
              >This example shows how Scroller for DataTables can be initialised, when the Scroller Javascript file is included, by simply
              setting the scroller option to true.
            </small>
          </div>
          <div class="card-body">
            <div class="dt-responsive table-responsive">
              <table id="basic-scroller" class="table table-striped table-bordered nowrap">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>ZIP / Post code</th>
                    <th>Country</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- Basic Scroll table end -->
      <!-- State saving scroll table start -->
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h5>State Saving</h5>
            <small
              >Scroller will automatically integrate with DataTables in order to save the scrolling position of the table, if state saving
              is enabled in the DataTable</small
            >
          </div>
          <div class="card-body">
            <div class="dt-responsive table-responsive">
              <table id="state-scroller" class="table table-striped table-bordered nowrap">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>ZIP / Post code</th>
                    <th>Country</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- State saving Scroll table end -->
      <!-- Using APi scroll table start -->
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h5>API</h5>
            <small
              >This example shows a trivial use of the API methods that Scroller adds to the DataTables API to scroll to a row once the
              table's data has been loaded.</small
            >
          </div>
          <div class="card-body">
            <div class="dt-responsive table-responsive">
              <table id="api-scroller" class="table table-striped table-bordered nowrap">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>ZIP / Post code</th>
                    <th>Country</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- Using API Scroll table end -->
    </div>
    <!-- [ Main Content ] end -->
  </div>
</div>
