<script>
  import Customizer from './../../lib/Components/Layouts/Partials/Customizer.svelte';
  import ComponentFooter from './../../lib/Components/Layouts/Partials/ComponentFooter.svelte';
  import ComponentMenuList from './../../lib/Components/Layouts/Partials/ComponentMenuList.svelte';
  import ComponentHeader from './../../lib/Components/Layouts/Partials/ComponentHeader.svelte';
  import Loader from './../../lib/Components/Layouts/Partials/Loader.svelte';

  import { onMount } from 'svelte';
  import '$lib/assets/css/uikit.css';

  onMount(() => {
    document.body.classList.add('component-page');
  });
</script>

<svelte:head>
  <script src="https://cdn.jsdelivr.net/npm/js-beautify@1.14.0/js/lib/beautify-html.js"></script>
</svelte:head>
<Loader />
<ComponentHeader />
<section class="component-block">
  <div class="container">
    <div class="row">
      <div class="col-xl-3"><ComponentMenuList /></div>
      <div class="col-xl-9">
        <slot />
      </div>
    </div>
  </div>
</section>
<ComponentFooter />
<Customizer />
