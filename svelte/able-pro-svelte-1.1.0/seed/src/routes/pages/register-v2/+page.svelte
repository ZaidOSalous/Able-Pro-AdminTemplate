<script>
  import Customizer from './../../../lib/Components/Layouts/Partials/Customizer.svelte';
</script>

<svelte:head>
  <title>Register | Able Pro Dashboard Template</title>
</svelte:head>

<div class="auth-main">
  <div class="auth-wrapper v2">
    <div class="auth-sidecontent">
      <img src="/assets/images/authentication/img-auth-sideimg.jpg" alt="images" class="img-fluid img-auth-side" />
    </div>
    <div class="auth-form">
      <div class="card my-5">
        <div class="card-body">
          <div class="text-center">
            <a href="/pages/register-v2"><img src="/assets/images/logo-dark.svg" alt="img" /></a>
            <div class="d-grid my-3">
              <button type="button" class="btn mt-2 btn-light-primary bg-light text-muted">
                <img src="/assets/images/authentication/facebook.svg" alt="img" />
                <span> Sign Up with Facebook</span>
              </button>
              <button type="button" class="btn mt-2 btn-light-primary bg-light text-muted">
                <img src="/assets/images/authentication/twitter.svg" alt="img" />
                <span> Sign Up with Twitter</span>
              </button>
              <button type="button" class="btn mt-2 btn-light-primary bg-light text-muted">
                <img src="/assets/images/authentication/google.svg" alt="img" />
                <span> Sign Up with Google</span>
              </button>
            </div>
          </div>
          <div class="saprator my-3">
            <span>OR</span>
          </div>
          <h4 class="text-center f-w-500 mb-3">Sign up with your work email.</h4>
          <div class="row">
            <div class="col-sm-6">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="First Name" />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Last Name" />
              </div>
            </div>
          </div>
          <div class="mb-3">
            <input type="email" class="form-control" placeholder="Email Address" />
          </div>
          <div class="mb-3">
            <input type="password" class="form-control" placeholder="Password" />
          </div>
          <div class="mb-3">
            <input type="password" class="form-control" placeholder="Confirm Password" />
          </div>
          <div class="d-flex mt-1 justify-content-between">
            <div class="form-check">
              <input class="form-check-input input-primary" type="checkbox" id="customCheckc1" checked="true" />
              <label class="form-check-label text-muted" for="customCheckc1">I agree to all the Terms & Condition</label>
            </div>
          </div>
          <div class="d-grid mt-4">
            <button type="button" class="btn btn-primary">Sign up</button>
          </div>
          <div class="d-flex justify-content-between align-items-end mt-4">
            <h6 class="f-w-500 mb-0">Already have an Account?</h6>
            <a href="/pages/login-v2" class="link-primary">Login here</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Customizer />
