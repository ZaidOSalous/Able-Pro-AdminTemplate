<script>
  import Loader from './../lib/Components/Layouts/Partials/Loader.svelte';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import 'clipboard/dist/clipboard.min.js?client';

  onMount(() => {
    goto('/dashboard/index');
  });
</script>

<Loader />
