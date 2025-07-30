<script>
  import { onMount } from 'svelte';
  import Breadcrumb from '../../../../lib/Components/Layouts/Partials/Breadcrumb.svelte';
  import { DataTable, convertCSV } from 'simple-datatables?client';
  import 'simple-datatables/dist/style.css';

  onMount(() => {
    const dataTable = new DataTable('#pc-dt-dynamic-import');
    const convertedData = convertCSV({
      type: 'csv',
      data: 'Name,Ext.,City,Start Date|Hammett Gordon,8101,Wah,1998/06/09|Kyra Moses,3796,Quenast,1998/07/07|Kelly Cameron,4836,Fontaine-Valmont,1999/02/07|Theodore Duran,8971,Dhanbad,1999/04/07|Hammett Gordon,8101,Wah,1998/06/09|Kyra Moses,3796,Quenast,1998/07/07|Kelly Cameron,4836,Fontaine-Valmont,1999/02/07|Theodore Duran,8971,Dhanbad,1999/04/07|Hammett Gordon,8101,Wah,1998/06/09|Kyra Moses,3796,Quenast,1998/07/07|Kelly Cameron,4836,Fontaine-Valmont,1999/02/07|Theodore Duran,8971,Dhanbad,1999/04/07|Hammett Gordon,8101,Wah,1998/06/09|Kyra Moses,3796,Quenast,1998/07/07|Kelly Cameron,4836,Fontaine-Valmont,1999/02/07|Theodore Duran,8971,Dhanbad,1999/04/07',
      headings: true,
      columnDelimiter: ',',
      lineDelimiter: '|'
    });
    dataTable.insert(convertedData);
  });
</script>

<svelte:head>
  <title>Dynamic Import | Able Pro Dashboard Template</title>
</svelte:head>

<!-- [ Main Content ] start -->
<div class="pc-container">
  <div class="pc-content">
    <!-- [ breadcrumb ] start -->
    <Breadcrumb item="Table" itemActive="Dynamic Import" />
    <!-- [ breadcrumb ] end -->
    <!-- [ Main Content ] start -->
    <div class="row">
      <!-- [ Dynamic Import ] start -->
      <div class="col-xl-12">
        <div class="card">
          <div class="card-header">
            <h5>Dynamic Import</h5>
          </div>
          <div class="card-body table-border-style">
            <div class="table-responsive">
              <table class="table" id="pc-dt-dynamic-import"> </table>
            </div>
          </div>
        </div>
      </div>
      <!-- [ Dynamic Import ] end -->
    </div>
    <!-- [ Main Content ] end -->
  </div>
</div>
<!-- [ Main Content ] end -->
