<script>
  export let isContainer = true;
</script>

<header id="home" style="background-image: url(/assets/images/landing/img-headerbg.jpg)">
  <nav class="navbar navbar-expand-md navbar-light default">
    <div class="container">
      <a class="navbar-brand" href="/pages/landing">
        <img src="../assets/images/logo-dark.svg" alt="logo" />
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
            <a class="nav-link" href="/dashboard/index">Live Preview</a>
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
  {#if isContainer}
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10 text-center">
          <h1 class="mb-4 wow fadeInUp" data-wow-delay="0.2s">
            Explore One of the
            <span class="hero-text-gradient">Featured Dashboard</span>
            Template in Themeforest
          </h1>
          <div class="row justify-content-center wow fadeInUp" data-wow-delay="0.3s">
            <div class="col-md-8">
              <p class="text-muted f-16 mb-0">
                Able Pro is the one of the Featured admin dashboard template in Envato Marketplace and used by over 2.5K+ Customers
                wordwide.
              </p>
            </div>
          </div>
          <div class="my-4 my-sm-5 wow fadeInUp" data-wow-delay="0.4s">
            <a href="/component/bc_alert" class="btn btn-outline-secondary me-2">Explore Components</a>
            <a href="/dashboard/index" class="btn btn-primary">Live Preview</a>
          </div>
          <div class="row g-5 justify-content-center text-center wow fadeInUp" data-wow-delay="0.5s">
            <div class="col-auto head-rating-block">
              <div class="star mb-2">
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star-half-alt text-warning"></i>
              </div>
              <h4 class="mb-0">4.7/5 <small class="text-muted f-w-400"> Ratings</small></h4>
            </div>
            <div class="col-auto">
              <h5 class="mb-2">
                <small class="text-muted f-w-400"> Sales</small>
              </h5>
              <h4 class="mb-0">2.5K+</h4>
            </div>
          </div>
          <div class="row g-5 mt-1 justify-content-center text-center wow fadeInUp" data-wow-delay="1s">
            <div class="col-auto">
              <p class="mb-4 text-muted">- Click Below Icon to Preview Each Tech Demos -</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="technology-block">
      <ul class="list-inline mb-0">
        <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Click to Preview Bootstrap 5">
          <a href="../dashboard/index" target="_blank"
            ><img src="../assets/images/landing/tech-bootstrap.svg" alt="img" class="img-fluid" /></a
          >
        </li>
        <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Click to Preview React MUI">
          <a href="https://ableproadmin.com/react/" target="_blank"
            ><img src="../assets/images/landing/tech-react.svg" alt="img" class="img-fluid" /></a
          >
        </li>
        <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Click to Preview Angular Material UI">
          <a href="https://ableproadmin.com/angular/default/" target="_blank"
            ><img src="../assets/images/landing/tech-angular.svg" alt="img" class="img-fluid" /></a
          >
        </li>
        <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Click to Preview CodeIgniter">
          <a href="https://ableproadmin.com/codeigniter/default/public/" target="_blank"
            ><img src="../assets/images/landing/tech-codeigniter.svg" alt="img" class="img-fluid" /></a
          >
        </li>
        <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Click to Preview ASP.net">
          <a href="https://able-pro.azurewebsites.net/" target="_blank"
            ><img src="../assets/images/landing/tech-net.svg" alt="img" class="img-fluid" /></a
          >
        </li>
        <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Figma Design System">
          <a
            href="https://www.figma.com/file/6XqmRhRmkr33w0EFD49acY/Able-Pro--v9.0-Figma-Preview?type=design&node-id=46-226114&mode=design&t=4FS2Lw6WxsmJ3RLm-0"
            target="_blank"><img src="../assets/images/landing/tech-figma.svg" alt="img" class="img-fluid" /></a
          >
        </li>
        <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Click to Preview Next js">
          <a href="https://able-pro-material-next-ts-navy.vercel.app/"
            ><img src="../assets/images/landing/tech-nextjs.svg" alt="img" class="img-fluid" /></a
          >
        </li>
        <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Click to Preview Vue">
          <a href="https://ableproadmin.com/vue/"><img src="../assets/images/landing/tech-vuetify.svg" alt="img" class="img-fluid" /></a>
        </li>
      </ul>
    </div>
  {/if}
</header>
