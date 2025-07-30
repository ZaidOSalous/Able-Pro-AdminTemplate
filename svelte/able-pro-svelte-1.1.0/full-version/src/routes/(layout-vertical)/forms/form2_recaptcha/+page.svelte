<script>
  import Breadcrumb from '../../../../lib/Components/Layouts/Partials/Breadcrumb.svelte';
</script>

<svelte:head>
  <title>ReCaptcha | Able Pro Dashboard Template</title>
</svelte:head>

<!-- [ Main Content ] start -->
<div class="pc-container">
  <div class="pc-content">
    <!-- [ breadcrumb ] start -->
    <Breadcrumb item="Forms" itemActive="ReCaptcha" />
    <!-- [ breadcrumb ] end -->

    <!-- [ Main Content ] start -->
    <div class="row">
      <!-- prettier-ignore -->
      <div class="col-md-10 col-xxl-9 mb-4">
            <h5>ReCaptcha</h5>
            <p class="text-muted">reCAPTCHA uses an advanced risk analysis engine and adaptive challenges to keep malicious software from engaging in abusive activities on your website.</p>
            <div>
              <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank" href="https://www.google.com/recaptcha/about/">
                <i class="ti ti-external-link me-1"></i>
                Reference
              </a>
            </div>
          </div>
    </div>
    <div class="row">
      <!-- [ form-element ] start -->
      <div class="col-sm-12">
        <div class="card">
          <div class="card-body">
            <form>
              <div class="row">
                <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">reCaptcha</label>
                <div class="col-lg-4 col-md-9 col-sm-12">
                  <div class="g-recaptcha" data-sitekey="6LdnLwgUAAAAAAIb9L3PQlHQgvSCi16sYgbMIMFR"></div>
                </div>
                <script src="https://www.google.com/recaptcha/api.js"></script>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- [ form-element ] end -->
  </div>
  <!-- [ Main Content ] end -->
</div>
<!-- [ Main Content ] end -->
