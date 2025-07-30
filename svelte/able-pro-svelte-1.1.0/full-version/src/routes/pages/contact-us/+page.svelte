<script>
  import Customizer from './../../../lib/Components/Layouts/Partials/Customizer.svelte';
    import '$lib/assets/scss/landing.scss';
</script>

<svelte:head>
  <title>Contact Us | Able Pro Dashboard Template</title>
</svelte:head>

<!-- [ Main Content ] start -->
<section class="contact-hero" style="background-image: url(/assets/images/landing/img-headerbg.jpg)">
  <!-- [ Nav ] start -->
  <!-- [ Nav ] start -->
  <nav class="navbar navbar-expand-md navbar-light default">
    <div class="container">
      <a class="navbar-brand" href="../index.html">
        <img src="/assets/images/logo-dark.svg" alt="logo" />
      </a>
      <button
        class="navbar-toggler rounded"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
          <li class="nav-item px-1">
            <a class="nav-link" href="https://phoenixcoded.gitbook.io/able-pro/" target="_blank">Documentation</a>
          </li>
          <li class="nav-item px-1">
            <a class="nav-link" href="../dashboard/index.html">Live Preview</a>
          </li>
          <li class="nav-item px-1 me-2 mb-2 mb-md-0">
            <a
              class="btn btn-icon btn-light-dark"
              target="_blank"
              href="https://github.com/phoenixcoded/able-pro-free-admin-dashboard-template"><i class="ti ti-brand-github"></i></a
            >
          </li>
          <li class="nav-item">
            <a class="btn btn btn-success" target="_blank" href="https://1.envato.market/zNkqj6"
              >Purchase Now <i class="ti ti-external-link"></i></a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- [ Nav ] start -->

  <!-- [ Nav ] start -->
  <div class="container">
    <div class="row justify-content-center text-center">
      <div class="col-md-5">
        <h2>Talk to our Expert</h2>
        <p class="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  </div>
</section>
<section class="contact-form bg-white">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12"><h2 class="sr-only">contact form</h2></div>
      <div class="col-xxl-6 col-md-8 col-sm-10">
        <div class="row my-4">
          <div class="col-sm-6">
            <div class="mb-3">
              <label class="form-label">First name</label>
              <input type="text" class="form-control" placeholder="First name" />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="mb-3">
              <label class="form-label">Last name</label>
              <input type="text" class="form-control" placeholder="Last name" />
            </div>
          </div>
          <div class="col-12">
            <div class="mb-3">
              <label class="form-label">Email id</label>
              <input type="email" class="form-control" placeholder="Email id" />
            </div>
          </div>
          <div class="col-12">
            <div class="mb-3">
              <label class="form-label">Phone Number</label>
              <input type="text" class="form-control" placeholder="Phone Number" />
            </div>
          </div>
          <div class="col-12">
            <div class="mb-3">
              <label class="form-label">Company size</label>
              <select class="form-select mb-3">
                <option selected>1 - 5</option>
                <option value="1">5 - 10</option>
                <option value="2">10+</option>
              </select>
            </div>
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
              <label class="form-check-label" for="flexCheckChecked">I agree to all the Terms & Condition</label>
            </div>
            <div class="mt-4 d-grid">
              <button type="button" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<footer class="footer">
  <div class="container title mb-0">
    <div class="row align-items-center wow fadeInUp" data-wow-delay="0.2s">
      <div class="col-md-8">
        <h2 class="mb-3">Be the first to know</h2>
        <p class="mb-4 mb-md-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s
        </p>
      </div>
      <div class="col-md-4">
        <div class="row">
          <div class="col">
            <input type="email" class="form-control" placeholder="Enter your email" />
          </div>
          <div class="col-auto"><button class="btn btn-primary">Submit</button></div>
        </div>
      </div>
    </div>
  </div>
  <div class="border-top border-bottom footer-center">
    <div class="container">
      <div class="row">
        <div class="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
          <img src="/assets/images/logo-dark.svg" alt="img" class="img-fluid mb-3" />
          <p class="mb-4">
            Phoenixcoded has gained the trust of over 5.5K customers since 2015, thanks to our commitment to delivering high-quality
            products. Our experienced team players are responsible for managing Able Pro.
          </p>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-sm-4 wow fadeInUp" data-wow-delay="0.6s">
              <h5 class="mb-sm-4 mb-2">Company</h5>
              <ul class="list-unstyled footer-link">
                <li>
                  <a href="https://themeforest.net/user/phoenixcoded" target="_blank">Profile</a>
                </li>
                <li>
                  <a href="https://themeforest.net/user/phoenixcoded/portfolio" target="_blank">Portfolio</a>
                </li>
                <li>
                  <a href="https://themeforest.net/user/phoenixcoded/followers" target="_blank">Follow Us</a>
                </li>
                <li><a href="https://phoenixcoded.net" target="_blank">Website</a></li>
              </ul>
            </div>
            <div class="col-sm-4 wow fadeInUp" data-wow-delay="0.8s">
              <h5 class="mb-sm-4 mb-2 mt-sm-0 mt-2">Help & Support</h5>
              <ul class="list-unstyled footer-link">
                <li>
                  <a href="https://phoenixcoded.gitbook.io/able-pro/" target="_blank">Documentation</a>
                </li>
                <li>
                  <a href="https://phoenixcoded.gitbook.io/able-pro/" target="_blank">Feature Request</a>
                </li>
                <li>
                  <a href="https://phoenixcoded.gitbook.io/able-pro/" target="_blank">RoadMap</a>
                </li>
                <li><a href="https://phoenixcoded.authordesk.app/" target="_blank">Support</a></li>
                <li>
                  <a href="https://themeforest.net/user/phoenixcoded#contact" target="_blank">Email Us</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-4 wow fadeInUp" data-wow-delay="1s">
              <h5 class="mb-sm-4 mb-2 mt-sm-0 mt-2">Useful Resources</h5>
              <ul class="list-unstyled footer-link">
                <li>
                  <a href="https://themeforest.net/page/item_support_policy" target="_blank">Support Policy</a>
                </li>
                <li>
                  <a href="https://themeforest.net/licenses/standard" target="_blank">Licenses Term</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row align-items-center">
      <div class="col my-1 wow fadeInUp" data-wow-delay="0.4s">
        <p class="mb-0">
          © Handcrafted by Team <a href="https://themeforest.net/user/phoenixcoded" target="_blank">Phoenixcoded</a>
        </p>
      </div>
      <div class="col-auto my-1">
        <ul class="list-inline footer-sos-link mb-0">
          <li class="list-inline-item wow fadeInUp" data-wow-delay="0.4s">
            <a href="https://fb.com/phoenixcoded">
              <svg class="pc-icon">
                <use xlink:href="#custom-facebook"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
<Customizer />
