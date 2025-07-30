<script>
  import { onMount } from 'svelte';
  import Breadcrumb from '../../../../lib/Components/Layouts/Partials/Breadcrumb.svelte';
  onMount(async () => {
    const { default: Quill } = await import('quill');
    var quill = new Quill('#pc-quil-1', {
      modules: {
        toolbar: [
          [
            {
              header: [1, 2, false]
            }
          ],
          ['bold', 'italic', 'underline'],
          ['image', 'code-block']
        ]
      },
      placeholder: 'Type your text here...',
      theme: 'snow'
    });
    var Delta = Quill.import('delta');
    var quill = new Quill('#pc-quil-2', {
      modules: {
        toolbar: true
      },
      placeholder: 'Type your text here...',
      theme: 'bubble'
    });
  });
</script>

<svelte:head>
  <title>Quill Editor | Able Pro Dashboard Template</title>
  <link rel="stylesheet" href="/node_modules/quill/dist/quill.core.css" />
  <link rel="stylesheet" href="/node_modules/quill/dist/quill.snow.css" />
  <link rel="stylesheet" href="/node_modules/quill/dist/quill.bubble.css" />
</svelte:head>
<!-- [ Main Content ] start -->
<div class="pc-container">
  <div class="pc-content">
    <!-- [ breadcrumb ] start -->
    <Breadcrumb item="Forms" itemActive="Quill Editor" />
    <!-- [ breadcrumb ] end -->

    <!-- [ Main Content ] start -->
    <div class="row">
      <!-- prettier-ignore -->
      <div class="col-md-10 col-xxl-9 mb-4">
            <h5>Quill</h5>
            <p class="text-muted">The best way to get started is to try a simple example. Quill is initialized with a DOM element to contain the editor. The contents of that element will become the initial contents of Quill.</p>
            <div>
              <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank" href="https://www.tiny.cloud/">
                <i class="ti ti-external-link me-1"></i>
                Reference
              </a>
            </div>
          </div>
    </div>
    <div class="row">
      <!-- [ form-element ] start -->
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h5>Basic snow theme</h5>
          </div>
          <div class="card-body">
            <div id="pc-quil-1" style="height: 325px">
              <h1 class="ql-align-center">Quill Rich Text Editor</h1>
              <p><br /></p>
              <p>
                Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built for the modern web. With
                its
                <a href="https://quilljs.com/docs/modules/">modular architecture</a>
                and expressive
                <a href="https://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.
              </p>
              <p><br /></p>
              <iframe
                class="ql-video ql-align-center"
                src="https://player.vimeo.com/video/253905163"
                width="500"
                height="280"
                allowfullscreen
              ></iframe>
              <p><br /></p>
              <h2 class="ql-align-center">Getting Started is Easy</h2>
              <p><br /></p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h5>bubble Theme</h5>
          </div>
          <div class="card-body">
            <div id="pc-quil-2" style="height: 325px">
              <h1 class="ql-align-center">Quill Rich Text Editor</h1>
              <p><br /></p>
              <p>
                Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built for the modern web. With
                its
                <a href="https://quilljs.com/docs/modules/">modular architecture</a>
                and expressive
                <a href="https://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.
              </p>
              <p><br /></p>
              <iframe
                class="ql-video ql-align-center"
                src="https://player.vimeo.com/video/253905163"
                width="500"
                height="280"
                allowfullscreen
              ></iframe>
              <p><br /></p>
              <h2 class="ql-align-center">Getting Started is Easy</h2>
              <p><br /></p>
            </div>
          </div>
        </div>
      </div>
      <!-- [ form-element ] end -->
    </div>
    <!-- [ Main Content ] end -->
  </div>
</div>
<!-- [ Main Content ] end -->
