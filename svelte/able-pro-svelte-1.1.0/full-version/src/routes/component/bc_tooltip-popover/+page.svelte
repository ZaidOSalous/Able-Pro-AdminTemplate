<script>
  import { onMount } from 'svelte';
  import ComponentBreadcrumb from '$lib/Components/Layouts/Partials/ComponentBreadcrumb.svelte';
  import 'animate.css/animate.min.css';
  import '$lib/assets/css/uikit.css';
  import bootstrap from 'bootstrap/dist/js/bootstrap.min.js?client';
  import codeComponent from '$lib/assets/component.js';

  onMount(() => {
    //copy btn and code btn
    codeComponent();
    // Initialize all tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Initialize all popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });
  });
</script>

<div class="row">
  <!-- prettier-ignore -->
  <ComponentBreadcrumb
						title={'Tooltip'}
						text={'Documentation and examples for adding custom Bootstrap tooltips with CSS and JavaScript using CSS3 for animations and data-bs-attributes for local title storage.'}
						link={'https://getbootstrap.com/docs/5.2/components/tooltips/'}
					/>
</div>
<!-- [ Main Content ] start -->
<div class="row">
  <!-- [ tooltip ] start -->
  <div class="col-md-6 col-sm-12">
    <div class="card">
      <div class="card-header">
        <h5>Tooltip</h5>
      </div>
      <div class="card-body btn-page pc-component">
        <button type="button" class="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="tooltip on top">Top</button>
        <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="left" title="tooltip on left">Left</button
        >
        <button type="button" class="btn btn-success" data-bs-toggle="tooltip" data-bs-placement="right" title="tooltip on right"
          >Right</button
        >
        <button type="button" class="btn btn-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="tooltip on bottom"
          >Bottom</button
        >
        <button
          type="button"
          class="btn btn-info"
          data-bs-toggle="tooltip"
          data-bs-html="true"
          title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">Html Tooltip</button
        >
      </div>
    </div>
  </div>
  <div class="col-md-6 col-sm-12">
    <div class="card">
      <div class="card-header">
        <h5>Popover</h5>
      </div>
      <div class="card-body btn-page pc-component">
        <button
          type="button"
          class="btn btn-danger"
          data-bs-toggle="popover"
          data-bs-placement="top"
          title=""
          data-bs-content="top by popover"
          data-original-title="popup on top">Top</button
        >
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="popover"
          data-bs-placement="left"
          title="popup on left"
          data-bs-content="left by popover">Left</button
        >
        <button
          type="button"
          class="btn btn-success"
          data-bs-toggle="popover"
          data-bs-placement="right"
          title="popup on right"
          data-bs-content="right by popover">Right</button
        >
        <button
          type="button"
          class="btn btn-warning"
          data-bs-toggle="popover"
          data-bs-placement="bottom"
          title="popup on bottom"
          data-bs-content="bottom by popover">Bottom</button
        >
        <button
          type="button"
          class="btn btn-info"
          data-bs-toggle="popover"
          data-bs-html="true"
          data-bs-placement="top"
          title="<em>popup</em> <u>with</u> <b>HTML</b>"
          data-bs-content="popup by HTML">Html popup</button
        >
      </div>
    </div>
  </div>
  <!-- [ tooltip ] end -->
</div>
