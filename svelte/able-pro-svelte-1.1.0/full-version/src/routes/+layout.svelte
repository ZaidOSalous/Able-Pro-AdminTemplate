<script>
  import '$lib/assets/scss/style.scss';
  import '$lib/assets/scss/style-preset.scss';
  import bootstrap from 'bootstrap/dist/js/bootstrap.min.js?client';
  import { beforeUpdate, onMount } from 'svelte';
  import feather from 'feather-icons?client';
  import { setBodyAttributes, layoutStore } from '../lib/stores/layoutStore';

  function updateLayout() {
    setBodyAttributes();
  }

  function initTooltip() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  onMount(() => {
    updateLayout();
    feather.replace();
    initTooltip();
  });
  beforeUpdate(() => {
    updateLayout();
    feather.replace();
  });
</script>

<slot />
<div id="svg-container" class="d-none"></div>
