<script>
  import Customizer from './../../../lib/Components/Layouts/Partials/Customizer.svelte';
</script>

<svelte:head>
  <title>Code verification | Able Pro Dashboard Template</title>
</svelte:head>

<div class="auth-main">
  <div class="auth-wrapper v1">
    <div class="auth-form">
      <div class="card my-5">
        <div class="card-body">
          <div class="mb-4">
            <a href="/pages/code-verification-v1"><img src="/assets/images/logo-dark.svg" class="mb-4 img-fluid" alt="img" /></a>
            <h3 class="mb-2"><b>Enter Verification Code</b></h3>
            <p class="text-muted mb-4">We send you on mail.</p>
            <p class="">We`ve send you code on jone. ****@company.com</p>
          </div>
          <form class="row my-4 text-center">
            <div class="col">
              <input type="number" class="form-control text-center code-input" placeholder="0" />
            </div>
            <div class="col">
              <input type="number" class="form-control text-center code-input" placeholder="0" />
            </div>
            <div class="col">
              <input type="number" class="form-control text-center code-input" placeholder="0" />
            </div>
            <div class="col">
              <input type="number" class="form-control text-center code-input" placeholder="0" />
            </div>
          </form>
          <div class="d-grid mt-4">
            <button type="button" class="btn btn-primary">Continue</button>
          </div>
          <div class="d-flex justify-content-start align-items-end mt-3">
            <p class="mb-0">Did not receive the email?</p>
            <a href="/pages/code-verification-v1" class="link-primary ms-2">Resend code</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Customizer />
