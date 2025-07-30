<script>
  import { tns } from 'tiny-slider?client';
  import { onMount } from 'svelte';
  import ComponentBreadcrumb from '$lib/Components/Layouts/Partials/ComponentBreadcrumb.svelte';
  import 'tiny-slider/dist/tiny-slider.css';
  import '$lib/assets/css/uikit.css';

  onMount(() => {
    tns({
      container: '.slider1',
      items: 1,
      slideBy: 'page',
      autoplay: true
    });

    // [ Only-Nav slider ]
    tns({
      container: '.slider2',
      items: 1,
      axis: 'vertical',
      slideBy: 'page',
      autoplay: true
    });

    // [ Only-Dots slider ]
    tns({
      container: '#customize',
      items: 3,
      center: true,
      gutter: 10,
      controlsContainer: '#customize-controls',
      navContainer: '#customize-thumbnails',
      navAsThumbnails: true,
      autoplay: true,
      autoplayTimeout: 1000,
      autoplayButton: '#customize-toggle'
    });
  });
</script>

<svelte:head>
  <title>Able | Able Pro Dashboard Template</title>
</svelte:head>

<div class="row">
  <!-- prettier-ignore -->
  <ComponentBreadcrumb
						title={'Slider'}
						text={'tiny-slider works with static content and it works in the browser only. If the HTML is loaded dynamically.'}
						link={'http://ganlanyuan.github.io/tiny-slider/demo/'}
					/>
</div>
<!-- [ Main Content ] start -->
<div class="row">
  <!-- [ rangeslider ] start -->
  <div class="col-md-6">
    <div class="card">
      <div class="card-header">
        <h5>Slider1</h5>
      </div>
      <div class="card-body">
        <div class="slider1 owl-carousel owl-theme">
          <div class="item">
            <img src="../assets/images/slider/img-slide-1.jpg" alt="" class="img-fluid" />
          </div>
          <div class="item">
            <img src="../assets/images/slider/img-slide-2.jpg" alt="" class="img-fluid" />
          </div>
          <div class="item">
            <img src="../assets/images/slider/img-slide-3.jpg" alt="" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card">
      <div class="card-header">
        <h5>Vertical</h5>
      </div>
      <div class="card-body">
        <div class="slider2 owl-carousel owl-theme">
          <div class="item">
            <img src="../assets/images/slider/img-slide-1.jpg" alt="" class="img-fluid" />
          </div>
          <div class="item">
            <img src="../assets/images/slider/img-slide-2.jpg" alt="" class="img-fluid" />
          </div>
          <div class="item">
            <img src="../assets/images/slider/img-slide-3.jpg" alt="" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">
        <h5>Customize</h5>
      </div>
      <div class="card-body">
        <div id="slider3">
          <div class="customize" id="customize">
            <div>
              <div>
                <img src="../assets/images/slider/img-slide-1.jpg" alt="" class="img-fluid" />
              </div>
            </div>
            <div>
              <div>
                <img src="../assets/images/slider/img-slide-2.jpg" alt="" class="img-fluid" />
              </div>
            </div>
            <div>
              <div>
                <img src="../assets/images/slider/img-slide-3.jpg" alt="" class="img-fluid" />
              </div>
            </div>
            <div>
              <div>
                <img src="../assets/images/slider/img-slide-4.jpg" alt="" class="img-fluid" />
              </div>
            </div>
          </div>
          <div class="customize-tools">
            <ul class="thumbnails" id="customize-thumbnails">
              <li>
                <img src="../assets/images/slider/img-slide-1.jpg" alt="" />
              </li>
              <li>
                <img src="../assets/images/slider/img-slide-2.jpg" alt="" />
              </li>
              <li>
                <img src="../assets/images/slider/img-slide-3.jpg" alt="" />
              </li>
              <li>
                <img src="../assets/images/slider/img-slide-4.jpg" alt="" />
              </li>
            </ul>
            <ul class="controls" id="customize-controls">
              <li class="prev">
                <i class="feather icon-chevron-left"></i>
              </li>
              <li class="next">
                <i class="feather icon-chevron-right"></i>
              </li>
            </ul>
            <div class="playbutton-wrapper">
              <button id="customize-toggle">Pause</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- [ rangeslider ] end -->
</div>
