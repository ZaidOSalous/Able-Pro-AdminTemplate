<script>
  import { onMount } from 'svelte';
  let isLoading = true;
  onMount(async () => {
    isLoading = false;
  });
</script>

<!-- [ Pre-loader ] start -->
{#if isLoading}
  <div class="page-loader">
    <div class="bar"></div>
  </div>
{/if}
<!-- [ Pre-loader ] End -->
