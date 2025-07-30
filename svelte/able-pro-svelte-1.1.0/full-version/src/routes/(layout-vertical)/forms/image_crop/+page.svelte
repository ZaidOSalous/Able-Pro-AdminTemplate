<script>
  import Breadcrumb from '../../../../lib/Components/Layouts/Partials/Breadcrumb.svelte';
  import { onMount } from 'svelte';
  import Croppr from 'croppr?client';
  import 'croppr/dist/croppr.min.css';
  onMount(() => {
    // Create Croppr instance
    var croppr = new Croppr('#croppr', {
      startSize: [80, 80, '%'],
      onCropMove: function onCropMove(value) {
        updateValue(value.x, value.y, value.width, value.height);
      }
    });

    // Aspect Ratio
    var ratioCheckbox = document.getElementById('cb-ratio');
    var ratioInput = document.getElementById('input-ratio');

    ratioCheckbox.addEventListener('change', function (event) {
      if (!event.target.checked) {
        croppr.options.aspectRatio = null;
        ratioInput.disabled = true;
        ratioInput.classList.remove('is-danger');
        croppr.reset();
        return;
      }

      ratioInput.disabled = false;
      var value = ratioInput.value;
      if (!isNumber(value)) {
        if (value !== '') {
          ratioInput.classList.add('is-danger');
        }
        return;
      } else {
        ratioInput.classList.remove('is-danger');
      }
      croppr.options.aspectRatio = Number(value);

      croppr.reset();
    });

    ratioInput.addEventListener('input', function (event) {
      if (!ratioCheckbox.checked) {
        return;
      }
      var value = ratioInput.value;
      if (!isNumber(value)) {
        ratioInput.classList.add('is-danger');
        return;
      } else {
        ratioInput.classList.remove('is-danger');
        value = Number(value);
        croppr.options.aspectRatio = value;
        croppr.reset();
      }
    });

    // Maximum size
    var maxCheckbox = document.getElementById('max-checkbox');
    var maxInputs = [
      document.getElementById('max-input-width'),
      document.getElementById('max-input-height'),
      document.getElementById('max-input-unit')
    ];

    maxCheckbox.addEventListener('change', function (event) {
      if (!event.target.checked) {
        croppr.options.maxSize = {
          width: null,
          height: null
        };
        maxInputs.map(function (el) {
          el.disabled = true;
          el.classList.remove('is-danger');
        });
        croppr.reset();
        return;
      } else {
        maxInputs.map(function (el) {
          el.disabled = false;
        });
      }

      var values = maxInputs.map(parseElementValues);
      croppr.options.maxSize = {
        width: Number(values[0]),
        height: Number(values[1]),
        unit: values[2]
      };
      croppr.reset();
    });

    maxInputs.map(function (el) {
      el.addEventListener('input', handleChange(croppr, 'maxSize', maxInputs));
    });

    // Minimum size
    var minCheckbox = document.getElementById('min-checkbox');
    var minInputs = [
      document.getElementById('min-input-width'),
      document.getElementById('min-input-height'),
      document.getElementById('min-input-unit')
    ];

    minCheckbox.addEventListener('change', function (event) {
      if (!event.target.checked) {
        croppr.options.minSize = {
          width: null,
          height: null
        };
        minInputs.map(function (el) {
          el.disabled = true;
          el.classList.remove('is-danger');
        });
        croppr.reset();
        return;
      } else {
        minInputs.map(function (el) {
          el.disabled = false;
        });
      }

      var values = minInputs.map(parseElementValues);
      croppr.options.minSize = {
        width: Number(values[0]),
        height: Number(values[1]),
        unit: values[2]
      };
      croppr.reset();
    });

    minInputs.map(function (el) {
      el.addEventListener('input', handleChange(croppr, 'minSize', minInputs));
    });

    var value = croppr.getValue();
    updateValue(value.x, value.y, value.width, value.height);
  });
  /** Functions */
  function updateValue(x, y, w, h) {
    document.getElementById('valX').innerHTML = '<strong class="font-weight-bold">x : </strong>&nbsp;' + x;
    document.getElementById('valY').innerHTML = '<strong class="font-weight-bold">y : </strong>&nbsp;' + y;
    document.getElementById('valW').innerHTML = '<strong class="font-weight-bold">width : </strong>&nbsp;' + w;
    document.getElementById('valH').innerHTML = '<strong class="font-weight-bold">height : </strong>&nbsp;' + h;
  }

  // check number
  function isNumber(value) {
    if (isNaN(parseInt(value))) {
      return false;
    }
    if (value === '') {
      return false;
    }
    return true;
  }

  // parce value
  function parseElementValues(element) {
    var value = element.value;
    if (element.tagName !== 'SELECT') {
      if (!isNumber(value)) {
        if (value !== '') {
          element.classList.add('is-danger');
        }
        return null;
      } else {
        element.classList.remove('is-danger');
        return value;
      }
    } else {
      return value;
    }
  }
  //  change event
  function handleChange(croppr, option, elements) {
    return function () {
      var values = elements.map(parseElementValues);
      croppr.options[option] = {
        width: Number(values[0]),
        height: Number(values[1]),
        unit: values[2]

        // Convert to pixels
      };
      if (values[2] === '%') {
        croppr.options.convertToPixels(croppr.cropperEl);
      }

      croppr.reset();
    };
  }
</script>

<svelte:head>
  <title>Image Cropper | Able Pro Dashboard Template</title>
</svelte:head>
<!-- [ Main Content ] start -->
<div class="pc-container">
  <div class="pc-content">
    <!-- [ breadcrumb ] start -->
    <Breadcrumb item="Forms" itemActive="Image Cropper" />
    <!-- [ breadcrumb ] end -->

    <!-- [ Main Content ] start -->
    <div class="row">
      <!-- prettier-ignore -->
      <div class="col-md-10 col-xxl-9 mb-4">
            <h5>Cropper</h5>
            <p class="text-muted">JavaScript image cropper for image or canvas element for cropping</p>
            <div>
              <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank" href="https://fengyuanchen.github.io/cropperjs/">
                <i class="ti ti-external-link me-1"></i>
                Reference
              </a>
            </div>
          </div>
    </div>
    <div class="row">
      <!-- [ Form Validation ] start -->
      <div class="col-sm-12">
        <!-- Image cropper plugin start -->
        <div class="card">
          <div class="card-header">
            <h5>Image Cropper Plugin</h5>
          </div>
          <div class="card-body">
            <div class="container">
              <div class="row">
                <div class="col-md-7 mb-3 mb-md-0">
                  <div class="cropper">
                    <img src="../assets/images/light-box/l1.jpg" alt="image" id="croppr" />
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="rounded bg-light px-4 py-3 mb-3">
                    <h5>Selection value</h5>
                    <div class="row">
                      <div class="col-6">
                        <p id="valX"><strong>x: </strong>&nbsp;500</p>
                        <p class="mb-1" id="valY"><strong>y: </strong>&nbsp;500</p>
                      </div>
                      <div class="col-6">
                        <p id="valW"><strong>width: </strong>&nbsp;500</p>
                        <p class="mb-1" id="valH"><strong>height: </strong>&nbsp;500</p>
                      </div>
                    </div>
                  </div>
                  <div class="row mb-1">
                    <div class="col">
                      <h6>Aspect Ratio</h6>
                    </div>
                    <div class="col-auto">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="cb-ratio" />
                        <label class="form-check-label" for="cb-ratio"> Enable </label>
                      </div>
                    </div>
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text">A</span>
                    <input type="text" class="form-control" id="input-ratio" value="1.0" disabled="disabled" />
                  </div>
                  <div class="row mb-1">
                    <div class="col">
                      <h6>Maximum size</h6>
                    </div>
                    <div class="col-auto">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="max-checkbox" />
                        <label class="form-check-label" for="max-checkbox"> Enable </label>
                      </div>
                    </div>
                  </div>
                  <div class="row g-1 g-sm-3 mb-4">
                    <div class="col-4">
                      <div class="input-group">
                        <span class="input-group-text">W</span>
                        <input type="text" class="form-control" id="max-input-width" value="150" disabled="disabled" />
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="input-group">
                        <span class="input-group-text">H</span>
                        <input type="text" class="form-control" id="max-input-height" value="150" disabled="disabled" />
                      </div>
                    </div>
                    <div class="col-4">
                      <select id="max-input-unit" disabled="disabled" class="form-control">
                        <option>px</option>
                        <option value="%">%</option>
                      </select>
                    </div>
                  </div>

                  <div class="row mb-1">
                    <div class="col">
                      <h6>Minimum size</h6>
                    </div>
                    <div class="col-auto">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="min-checkbox" />
                        <label class="form-check-label" for="min-checkbox"> Enable </label>
                      </div>
                    </div>
                  </div>
                  <div class="row g-1 g-sm-3">
                    <div class="col-4">
                      <div class="input-group">
                        <span class="input-group-text">W</span>
                        <input type="text" class="form-control" id="min-input-width" value="150" disabled="disabled" />
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="input-group">
                        <span class="input-group-text">H</span>
                        <input type="text" class="form-control" id="min-input-height" value="150" disabled="disabled" />
                      </div>
                    </div>
                    <div class="col-4">
                      <select id="min-input-unit" disabled="disabled" class="form-control">
                        <option> px </option>
                        <option value="%"> % </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Image cropper plugin end -->
      </div>
      <!-- [ Form Validation ] end -->
    </div>
    <!-- [ Main Content ] end -->
  </div>
</div>
<!-- [ Main Content ] end -->
