<script>
  import Breadcrumb from '$lib/Components/Layouts/Partials/Breadcrumb.svelte';
  import { onMount } from 'svelte';
  import { setLayout } from '$lib/stores/layoutStore.js';
  function removeClassByPrefix(element, prefix) {
    const classes = element.className.split(' ').filter((c) => !c.startsWith(prefix));
    element.className = classes.join(' ').trim();
  }
  function changebrand(presetColor) {
    removeClassByPrefix(document.querySelector('body'), 'preset-');
    document.querySelector('body').classList.add(presetColor);
  }

  onMount(() => {
    setLayout('color-header'); // Set the layout to vertical layout in the layout store. This will be used in the layout component.
  });
</script>

<svelte:head>
  <title>Layout 2 | Able Pro Dashboard Template</title>
</svelte:head>

<div class="pc-container">
  <div class="pc-content">
    <Breadcrumb item="Layout" itemActive="Layout 2" />
    <!-- [ Main Content ] start -->
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h5>Background Color</h5>
            <small
              >set background class in <code>.preset</code> and <code>.preset-*</code> in
              <code>&lt;body&gt;</code></small
            >
            <div class="row g-3 mt-3">
              <div class="col-auto">
                <a href="#!" class="avtar avtar-s preset preset-1" on:click={() => changebrand('preset-1')}>
                  <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                </a>
              </div>
              <div class="col-auto">
                <a href="#!" class="avtar avtar-s preset preset-2" on:click={() => changebrand('preset-2')}>
                  <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                </a>
              </div>
              <div class="col-auto">
                <a href="#!" class="avtar avtar-s preset preset-3" on:click={() => changebrand('preset-3')}>
                  <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                </a>
              </div>
              <div class="col-auto">
                <a href="#!" class="avtar avtar-s preset preset-4" on:click={() => changebrand('preset-4')}>
                  <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                </a>
              </div>
              <div class="col-auto">
                <a href="#!" class="avtar avtar-s preset preset-5" on:click={() => changebrand('preset-5')}>
                  <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                </a>
              </div>
              <div class="col-auto">
                <a href="#!" class="avtar avtar-s preset preset-6" on:click={() => changebrand('preset-6')}>
                  <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                </a>
              </div>
              <div class="col-auto">
                <a href="#!" class="avtar avtar-s preset preset-7" on:click={() => changebrand('preset-7')}>
                  <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                </a>
              </div>
              <div class="col-auto">
                <a href="#!" class="avtar avtar-s preset preset-8" on:click={() => changebrand('preset-8')}>
                  <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                </a>
              </div>
              <div class="col-auto">
                <a href="#!" class="avtar avtar-s preset preset-9" on:click={() => changebrand('preset-9')}>
                  <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                </a>
              </div>
              <div class="col-auto">
                <a href="#!" class="avtar avtar-s preset preset-10" on:click={() => changebrand('preset-10')}>
                  <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                </a>
              </div>
              <div class="col-auto">
                <a href="#!" class="avtar avtar-s preset preset-11" on:click={() => changebrand('preset-11')}>
                  <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h5>Background Gradient Color</h5>
            <small
              >set background class in <code>.preset</code> and <code>.preset-gradient-*</code> in
              <code>&lt;body&gt;</code></small
            >
            <div class="row g-3 mt-3">
              <div class="col-auto">
                <a href="#!" class="avtar avtar-s preset preset-gradient-1" on:click={() => changebrand('preset-gra}dient-1')}>
                  <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                </a>
              </div>
              <div class="col-auto">
                <a href="#!" class="avtar avtar-s preset preset-gradient-2" on:click={() => changebrand('preset-gra}dient-2')}>
                  <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                </a>
              </div>
              <div class="col-auto">
                <a href="#!" class="avtar avtar-s preset preset-gradient-3" on:click={() => changebrand('preset-gra}dient-3')}>
                  <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                </a>
              </div>
              <div class="col-auto">
                <a href="#!" class="avtar avtar-s preset preset-gradient-4" on:click={() => changebrand('preset-gra}dient-4')}>
                  <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                </a>
              </div>
              <div class="col-auto">
                <a href="#!" class="avtar avtar-s preset preset-gradient-5" on:click={() => changebrand('preset-gra}dient-5')}>
                  <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                </a>
              </div>
              <div class="col-auto">
                <a href="#!" class="avtar avtar-s preset preset-gradient-6" on:click={() => changebrand('preset-gra}dient-6')}>
                  <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                </a>
              </div>
              <div class="col-auto">
                <a href="#!" class="avtar avtar-s preset preset-gradient-7" on:click={() => changebrand('preset-gra}dient-7')}>
                  <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                </a>
              </div>
              <div class="col-auto">
                <a href="#!" class="avtar avtar-s preset preset-gradient-8" on:click={() => changebrand('preset-gra}dient-8')}>
                  <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                </a>
              </div>
              <div class="col-auto">
                <a href="#!" class="avtar avtar-s preset preset-gradient-9" on:click={() => changebrand('preset-gra}dient-9')}>
                  <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                </a>
              </div>
              <div class="col-auto">
                <a href="#!" class="avtar avtar-s preset preset-gradient-10" on:click={() => changebrand('preset-gra}dient-10')}>
                  <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                </a>
              </div>
              <div class="col-auto">
                <a href="#!" class="avtar avtar-s preset preset-gradient-11" on:click={() => changebrand('preset-gra}dient-11')}>
                  <i class="ph-duotone ph-paint-brush text-white f-18"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- [ sample-page ] end -->
      </div>
    </div>
    <!-- [ Main Content ] end -->
  </div>
</div>
