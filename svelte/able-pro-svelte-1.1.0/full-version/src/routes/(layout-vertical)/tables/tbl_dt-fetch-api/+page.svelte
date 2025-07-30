<script>
  import { onMount } from 'svelte';
  import Breadcrumb from '../../../../lib/Components/Layouts/Partials/Breadcrumb.svelte';
  import { DataTable } from 'simple-datatables';
  import 'simple-datatables/dist/style.css';
  onMount(() => {
    fetch('/assets/json/datatable.json')
      .then((response) => response.json())
      .then((data) => {
        if (!data.length) {
          return;
        }
        new DataTable('#pc-dt-fetchapi', {
          data: {
            headings: Object.keys(data[0]),
            data: data.map((item) => Object.values(item))
          }
        });
      });
  });
</script>

<svelte:head>
  <title>Fetch API | Able Pro Dashboard Template</title>
</svelte:head>

<!-- [ Main Content ] start -->
<div class="pc-container">
  <div class="pc-content">
    <!-- [ breadcrumb ] start -->
    <Breadcrumb item="Table" itemActive="Fetch API" />
    <!-- [ breadcrumb ] end -->
    <!-- [ Main Content ] start -->
    <div class="row">
      <!-- prettier-ignore -->
      <div class="col-md-10 col-xxl-9 mb-4">
            <h5>Simple-datatables</h5>
            <p class="text-muted">A lightweight, extendable, JavaScript HTML table library written in TypeScript and transpilled to Vanilla JavaScript. Similar to jQuery DataTables for use in modern browsers, but without the jQuery dependency.</p>
            <div>
              <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank" href="https://github.com/fiduswriter/simple-datatables">
                <i class="ti ti-external-link me-1"></i>
                Reference
              </a>
            </div>
          </div>
    </div>
    <div class="row">
      <!-- [ basic-table ] start -->
      <div class="col-xl-12">
        <div class="card">
          <div class="card-header">
            <h5>Fetch API</h5>
          </div>
          <div class="card-body table-border-style">
            <div class="table-responsive">
              <table class="table" id="pc-dt-fetchapi"> </table>
            </div>
          </div>
        </div>
      </div>
      <!-- [ basic-table ] end -->
    </div>
    <!-- [ Main Content ] end -->
  </div>
</div>
<!-- [ Main Content ] end -->
