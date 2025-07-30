<script>
  import Breadcrumb from '$lib/Components/Layouts/Partials/Breadcrumb.svelte';
  import { onMount } from 'svelte';
  import { setLayout } from '$lib/stores/layoutStore.js';
  onMount(() => {
    setLayout('tab'); // Set the layout to vertical layout in the layout store. This will be used in the layout component.
  });
</script>

<svelte:head>
  <title>Tab Layout | Able Pro Dashboard Template</title>
</svelte:head>

<div class="pc-container">
  <div class="pc-content">
    <Breadcrumb item="Layout" itemActive="Tab Layout" />

    <!-- [ Main Content ] start -->
    <div class="row">
      <!-- [ sample-page ] start -->
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h5>Hello card</h5>
          </div>
          <div class="card-body">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </div>
      </div>
      <!-- [ sample-page ] end -->
    </div>
    <!-- [ Main Content ] end -->
  </div>
</div>
