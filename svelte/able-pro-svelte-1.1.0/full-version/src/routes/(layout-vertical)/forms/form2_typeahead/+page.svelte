<script>
  import Breadcrumb from '../../../../lib/Components/Layouts/Partials/Breadcrumb.svelte';
</script>

<svelte:head>
  <title>TypeAhead | Able Pro Dashboard Template</title>
</svelte:head>

<!-- [ Main Content ] start -->
<div class="pc-container">
  <div class="pc-content">
    <!-- [ breadcrumb ] start -->
    <Breadcrumb item="Forms" itemActive="TypeAhead" />
    <!-- [ breadcrumb ] end -->

    <!-- [ Main Content ] start -->
    <div class="row">
      <!-- prettier-ignore -->
      <div class="col-md-10 col-xxl-9 mb-4">
            <h5>typeahead.js</h5>
            <p class="text-muted">a flexible JavaScript library that provides a strong foundation for building robust typeaheads</p>
            <div>
              <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank" href="https://twitter.github.io/typeahead.js/">
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
          <div class="card-body">
            <form>
              <div class="row">
                <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Simple Demo</label>
                <div class="col-lg-5 col-md-9 col-sm-12">
                  <div class="typeahead">
                    <input class="form-control" id="pc-typeahead-1" type="text" dir="ltr" placeholder="States of USA" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- [ Main Content ] end -->
  </div>
</div>
