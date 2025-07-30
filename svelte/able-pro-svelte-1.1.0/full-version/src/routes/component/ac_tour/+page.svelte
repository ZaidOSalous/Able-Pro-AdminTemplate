<script>
  import { onMount } from 'svelte';
  import ComponentBreadcrumb from '$lib/Components/Layouts/Partials/ComponentBreadcrumb.svelte';
  import 'intro.js/minified/introjs.min.css';
  import '$lib/assets/css/uikit.css';
  import introJs from 'intro.js/minified/intro.min.js?client';

  onMount(() => {
    introJs()
      .setOptions({
        steps: [
          {
            intro: 'Hello world!'
          },
          {
            element: document.querySelector('.step1'),
            intro: 'This is Card'
          },
          {
            element: document.querySelector('.step2'),
            intro: 'This is Card header'
          },
          {
            element: document.querySelector('.step3'),
            intro: 'This is Card Title'
          },
          {
            element: document.querySelector('.step4'),
            intro: 'This is Card Body'
          }
        ]
      })
      .start();
  });
</script>

<svelte:head>
  <title>Able | Able Pro Dashboard Template</title>
</svelte:head>

<div class="row">
  <!-- prettier-ignore -->
  <ComponentBreadcrumb
						title={'Tour'}
						text={'Intro.js is a lightweight JavaScript library for creating step-by-step and powerful customer onboarding tours'}
						link={'https://introjs.com/'}
					/>
</div>
<!-- [ Main Content ] start -->
<div class="row">
  <!-- [ rangeslider ] start -->
  <div class="col-sm-12">
    <div class="card step1">
      <div class="card-header step2">
        <h5 class="step3">Hello card</h5>
      </div>
      <div class="card-body step4">
        <h1>H1 Admin Template</h1>
        <h2>H2 Admin Template</h2>
        <h3>H3 Admin Template</h3>
        <h4>H4 Admin Template</h4>
        <h5>H5 Admin Template</h5>
        <h6>H6 Admin Template</h6>
        <p>p Admin Template</p>
        <strong>p Admin Template</strong>
      </div>
    </div>
  </div>
  <!-- [ rangeslider ] end -->
</div>
