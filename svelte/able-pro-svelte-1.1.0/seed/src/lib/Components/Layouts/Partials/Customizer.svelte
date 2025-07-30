<script>
  import {
    change_box_container,
    layoutStore,
    setLayout,
    preset_change,
    layout_caption_change,
    layout_change,
    layout_change_default,
    layout_rtl_change,
    layout_theme_contrast_change
  } from '$lib/stores/layoutStore.js';
  import { onMount } from 'svelte';

  onMount(async () => {
    if (document.querySelector('.pct-body')) {
      const SimpleBarModule = await import('simplebar'); // Import the module
      const SimpleBar = SimpleBarModule.default;
      new SimpleBar(document.querySelector('.pct-body'));
    }
  });
</script>

<div class="pct-c-btn">
  <a href="#!" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_pc_layout">
    <i class="ph-duotone ph-gear-six"></i>
  </a>
</div>
<div class="offcanvas border-0 pct-offcanvas offcanvas-end" tabindex="-1" id="offcanvas_pc_layout">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Settings</h5>
    <button type="button" class="btn btn-icon btn-link-danger ms-auto" data-bs-dismiss="offcanvas" aria-label="Close">
      <i class="ti ti-x"></i>
    </button>
  </div>
  <div class="pct-body customizer-body">
    <div class="offcanvas-body py-0">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <div class="pc-dark">
            <h6 class="mb-1">Theme Mode</h6>
            <p class="text-muted text-sm">Choose light or dark mode or Auto</p>
            <div class="row theme-color theme-layout">
              <div class="col-4">
                <div class="d-grid">
                  <button
                    class="preset-btn btn active"
                    data-value="true"
                    on:click={() => layout_change('light')}
                    data-bs-toggle="tooltip"
                    title="Light"
                  >
                    <svg class="pc-icon text-warning">
                      <use xlink:href="#custom-sun-1"></use>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="col-4">
                <div class="d-grid">
                  <button
                    class="preset-btn btn"
                    data-value="false"
                    on:click={() => layout_change('dark')}
                    data-bs-toggle="tooltip"
                    title="Dark"
                  >
                    <svg class="pc-icon">
                      <use xlink:href="#custom-moon"></use>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="col-4">
                <div class="d-grid">
                  <button
                    class="preset-btn btn"
                    data-value="default"
                    on:click={() => layout_change_default()}
                    data-bs-toggle="tooltip"
                    title="Automatically sets the theme based on user's operating system's color scheme."
                  >
                    <span class="pc-lay-icon d-flex align-items-center justify-content-center">
                      <i class="ph-duotone ph-cpu"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <h6 class="mb-1">Theme Contrast</h6>
          <p class="text-muted text-sm">Choose theme contrast</p>
          <div class="row theme-contrast">
            <div class="col-6">
              <div class="d-grid">
                <button
                  class="preset-btn btn"
                  data-value="true"
                  on:click={() => layout_theme_contrast_change('yes')}
                  data-bs-toggle="tooltip"
                  title="True"
                >
                  <svg class="pc-icon">
                    <use xlink:href="#custom-mask"></use>
                  </svg>
                </button>
              </div>
            </div>
            <div class="col-6">
              <div class="d-grid">
                <button
                  class="preset-btn btn active"
                  data-value="false"
                  on:click={() => layout_theme_contrast_change('no')}
                  data-bs-toggle="tooltip"
                  title="False"
                >
                  <svg class="pc-icon">
                    <use xlink:href="#custom-mask-1-outline"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <h6 class="mb-1">Custom Theme</h6>
          <p class="text-muted text-sm">Choose your primary theme color</p>
          <div class="theme-color preset-color">
            <a
              on:click={() => preset_change('preset-1')}
              href="#!"
              data-bs-toggle="tooltip"
              title="Blue"
              class="active"
              data-value="preset-1"><i class="ti ti-checks"></i></a
            >
            <a on:click={() => preset_change('preset-2')} href="#!" data-bs-toggle="tooltip" title="Indigo" data-value="preset-2"
              ><i class="ti ti-checks"></i></a
            >
            <a on:click={() => preset_change('preset-3')} href="#!" data-bs-toggle="tooltip" title="Purple" data-value="preset-3"
              ><i class="ti ti-checks"></i></a
            >
            <a on:click={() => preset_change('preset-4')} href="#!" data-bs-toggle="tooltip" title="Pink" data-value="preset-4"
              ><i class="ti ti-checks"></i></a
            >
            <a on:click={() => preset_change('preset-5')} href="#!" data-bs-toggle="tooltip" title="Red" data-value="preset-5"
              ><i class="ti ti-checks"></i></a
            >
            <a on:click={() => preset_change('preset-6')} href="#!" data-bs-toggle="tooltip" title="Orange" data-value="preset-6"
              ><i class="ti ti-checks"></i></a
            >
            <a on:click={() => preset_change('preset-7')} href="#!" data-bs-toggle="tooltip" title="Yellow" data-value="preset-7"
              ><i class="ti ti-checks"></i></a
            >
            <a on:click={() => preset_change('preset-8')} href="#!" data-bs-toggle="tooltip" title="Green" data-value="preset-8"
              ><i class="ti ti-checks"></i></a
            >
            <a on:click={() => preset_change('preset-9')} href="#!" data-bs-toggle="tooltip" title="Teal" data-value="preset-9"
              ><i class="ti ti-checks"></i></a
            >
            <a on:click={() => preset_change('preset-10')} href="#!" data-bs-toggle="tooltip" title="Cyan" data-value="preset-10"
              ><i class="ti ti-checks"></i></a
            >
          </div>
        </li>
        <li class="list-group-item">
          <h6 class="mb-1">Theme layout</h6>
          <p class="text-muted text-sm">{$layoutStore.themeLayout}Choose your layout</p>
          <div class="theme-main-layout d-flex align-center gap-1 w-100">
            <a
              on:click={(e) => setLayout('vertical')}
              href="#!"
              data-bs-dismiss="offcanvas"
              data-bs-toggle="tooltip"
              title="Vertical"
              data-value="vertical"
              class={`${$layoutStore.themeLayout === 'vertical' ? 'active' : ''}`}
            >
              <img src="/assets/images/customizer/caption-on.svg" alt="img" class="img-fluid" />
            </a>
            <a
              on:click={(e) => setLayout('horizontal')}
              href="#!"
              data-bs-dismiss="offcanvas"
              data-bs-toggle="tooltip"
              title="Horizontal"
              data-value="horizontal"
              class={`${$layoutStore.themeLayout === 'horizontal' ? 'active' : ''}`}
            >
              <img src="/assets/images/customizer/horizontal.svg" alt="img" class="img-fluid" />
            </a>
            <a
              on:click={(e) => setLayout('color-header')}
              href="#!"
              data-bs-dismiss="offcanvas"
              data-bs-toggle="tooltip"
              title="Color Header"
              data-value="color-header"
              class={`${$layoutStore.themeLayout === 'color-header' ? 'active' : ''}`}
            >
              <img src="/assets/images/customizer/color-header.svg" alt="img" class="img-fluid" />
            </a>
            <a
              on:click={(e) => setLayout('compact')}
              href="#!"
              data-bs-dismiss="offcanvas"
              data-bs-toggle="tooltip"
              title="Compact"
              data-value="compact"
              class={`${$layoutStore.themeLayout === 'compact' ? 'active' : ''}`}
            >
              <img src="/assets/images/customizer/compact.svg" alt="img" class="img-fluid" />
            </a>
            <a
              on:click={(e) => setLayout('tab')}
              href="#!"
              data-bs-dismiss="offcanvas"
              data-bs-toggle="tooltip"
              title="Tab"
              data-value="tab"
              class={`${$layoutStore.themeLayout === 'tab' ? 'active' : ''}`}
            >
              <img src="/assets/images/customizer/tab.svg" alt="img" class="img-fluid" />
            </a>
          </div>
        </li>
        <li class="list-group-item">
          <h6 class="mb-1">Sidebar Caption</h6>
          <p class="text-muted text-sm">Sidebar Caption Hide/Show</p>
          <div class="row theme-color theme-nav-caption">
            <div class="col-6">
              <div class="d-grid">
                <button
                  class="preset-btn btn-img btn active"
                  data-value="true"
                  on:click={() => layout_caption_change('yes')}
                  data-bs-toggle="tooltip"
                  title="Caption Show"
                >
                  <img src="/assets/images/customizer/caption-on.svg" alt="img" class="img-fluid" />
                </button>
              </div>
            </div>
            <div class="col-6">
              <div class="d-grid">
                <button
                  class="preset-btn btn-img btn"
                  data-value="false"
                  on:click={() => layout_caption_change('no')}
                  data-bs-toggle="tooltip"
                  title="Caption Hide"
                >
                  <img src="/assets/images/customizer/caption-off.svg" alt="img" class="img-fluid" />
                </button>
              </div>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="pc-rtl">
            <h6 class="mb-1">Theme Layout</h6>
            <p class="text-muted text-sm">LTR/RTL</p>
            <div class="row theme-color theme-direction">
              <div class="col-6">
                <div class="d-grid">
                  <button
                    class="preset-btn btn-img btn active"
                    data-value="ltr"
                    on:click={() => layout_rtl_change('ltr')}
                    data-bs-toggle="tooltip"
                    title="LTR"
                  >
                    <img src="/assets/images/customizer/ltr.svg" alt="img" class="img-fluid" />
                  </button>
                </div>
              </div>
              <div class="col-6">
                <div class="d-grid">
                  <button
                    class="preset-btn btn-img btn"
                    data-value="rtl"
                    on:click={() => layout_rtl_change('rtl')}
                    data-bs-toggle="tooltip"
                    title="RTL"
                  >
                    <img src="/assets/images/customizer/rtl.svg" alt="img" class="img-fluid" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="list-group-item pc-box-width">
          <div class="pc-container-width">
            <h6 class="mb-1">Layout Width</h6>
            <p class="text-muted text-sm">Choose Full or Container Layout</p>
            <div class="row theme-color theme-container">
              <div class="col-6">
                <div class="d-grid">
                  <button
                    class="preset-btn btn-img btn active"
                    data-value="no"
                    on:click={() => change_box_container('no')}
                    data-bs-toggle="tooltip"
                    title="Full Width"
                  >
                    <img src="/assets/images/customizer/full.svg" alt="img" class="img-fluid" />
                  </button>
                </div>
              </div>
              <div class="col-6">
                <div class="d-grid">
                  <button
                    class="preset-btn btn-img btn"
                    data-value="yes"
                    on:click={() => change_box_container('yes')}
                    data-bs-toggle="tooltip"
                    title="Fixed Width"
                  >
                    <img src="/assets/images/customizer/fixed.svg" alt="img" class="img-fluid" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
