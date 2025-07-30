<!-- [ Nav ] start -->
<nav class="navbar navbar-expand-md navbar-light default">
  <div class="container">
    <a class="navbar-brand" href="dashboard-default">
      <img src="<?= base_url('assets/images/logo-dark.svg') ?>" alt="logo" >
      <span class="badge bg-light-success rounded-pill ms-2 theme-version"><?= VERSION ?></span>
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
        <li class="nav-item px-1 tech-link">
          <a class="nav-link" href="dashboard-default" target="_blank">Dashboard</a>
        </li>
        <li class="nav-item px-1 tech-link">
          <a class="nav-link" href="bc-alert" target="_blank">Component</a>
        </li>
        <li class="nav-item px-1">
          <a class="nav-link" href="https://phoenixcoded.gitbook.io/able-pro" target="_blank">Documentation</a>
        </li>
        <li class="nav-item px-1 dropdown">
          <a class="nav-link dropdown-toggle arrow-none d-inline-flex align-items-center" data-bs-toggle="dropdown" href="#"
            >Live Preview <i class="ti ti-chevron-down"></i
          ></a>
          <div class="dropdown-menu drp-technology nav-drp-tech-scrollble">
            <a class="dropdown-item gap-2" href="https://ableproadmin.com/tailwind/dashboard/index.html" target="_blank"
              ><img src="<?= base_url('assets/images/landing/tech-tailwind.svg') ?>" alt="img" class="img-fluid wid-30" />Tailwind</a
            >
            <a class="dropdown-item gap-2" href="https://ableproadmin.com/dashboard/index.html" target="_blank"
              ><img src="<?= base_url('assets/images/landing/tech-bootstrap.svg') ?>" alt="img" class="img-fluid wid-30" />Bootstrap 5</a
            >
            <a class="dropdown-item gap-2" href="https://ableproadmin.com/react/dashboard/default" target="_blank"
              ><img src="<?= base_url('assets/images/landing/tech-react.svg') ?>" alt="img" class="img-fluid wid-30" />React MUI</a
            >
            <a class="dropdown-item gap-2" href="https://ableproadmin.com/angular/default/dashboard/default" target="_blank"
              ><img src="<?= base_url('assets/images/landing/tech-angular.svg') ?>" alt="img" class="img-fluid wid-30" />Angular Material</a
            >
            <a class="dropdown-item gap-2" href="dashboard-default" target="_blank"
              ><img src="<?= base_url('assets/images/landing/tech-codeigniter.svg') ?>" alt="img" class="img-fluid wid-30" />CodeIgniter</a
            >
            <a class="dropdown-item gap-2" href="https://able-pro.azurewebsites.net/Dashboard/Index" target="_blank"
              ><img src="<?= base_url('assets/images/landing/tech-net.svg') ?>" alt="img" class="img-fluid wid-30" />ASP.net</a
            >
            <a class="dropdown-item gap-2" href="https://able-pro-material-next-ts-navy.vercel.app/dashboard/default" target="_blank"
              ><img src="<?= base_url('assets/images/landing/tech-nextjs.svg') ?>" alt="img" class="img-fluid wid-30" />NextJS</a
            >
            <a class="dropdown-item gap-2" href="https://ableproadmin.com/vue/dashboard/default" target="_blank"
              ><img src="<?= base_url('assets/images/landing/tech-vuetify.svg') ?>" alt="img" class="img-fluid wid-30" />Vue</a
            >
            <a class="dropdown-item gap-2" href="https://phplaravel-207002-4524103.cloudwaysapps.com/build/dashboards/default" target="_blank"
              ><img src="<?= base_url('assets/images/landing/tech-l-v.svg') ?>" alt="img" class="img-fluid wid-30" />Vue+Laravel</a
            >
            <a class="dropdown-item gap-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Live Preview not available"><img src="<?= base_url('assets/images/landing/tech-django.svg') ?>" alt="img" class="img-fluid wid-30" />Django</a>
            <a class="dropdown-item gap-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Live Preview not available"><img src="<?= base_url('assets/images/landing/tech-flask.svg') ?>" alt="img" class="img-fluid wid-30" />Flask</a>
            <a class="dropdown-item gap-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Live Preview not available"><img src="<?= base_url('assets/images/landing/tech-nodejs.svg') ?>" alt="img" class="img-fluid wid-30" />NodeJS</a>
            <a class="dropdown-item gap-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Live Preview not available"><img src="<?= base_url('assets/images/landing/tech-l-b.svg') ?>" alt="img" class="img-fluid wid-30" />Laravel Bootstrap</a>
            <a class="dropdown-item gap-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Live Preview not available"><img src="<?= base_url('assets/images/landing/tech-svelteKit.svg') ?>" alt="img" class="img-fluid wid-30" />SvelteKit</a>
            <!-- <a
              class="dropdown-item gap-2" target="_blank"
              href="https://www.figma.com/file/6XqmRhRmkr33w0EFD49acY/Able-Pro--v9.0-Figma-Preview?type=design&node-id=46-226114&mode=design&t=4FS2Lw6WxsmJ3RLm-0"
              ><img src="<?= base_url('assets/images/landing/tech-figma.svg') ?>" alt="img" class="img-fluid wid-30" />Figma</a
            > -->
          </div>
        </li>
        <li class="nav-item px-1 me-2 mb-2 mb-md-0">
          <a
            class="btn btn-icon btn-light-dark"
            target="_blank"
            href="https://github.com/phoenixcoded/able-pro-free-admin-dashboard-template"
            ><i class="ti ti-brand-github"></i
          ></a>
        </li>
        <li class="nav-item">
          <a
            class="btn btn-success"
            target="_blank"
            href="https://1.envato.market/zNkqj6"
            >Purchase Now <i class="ti ti-external-link"></i></a
          >
        </li>
      </ul>
    </div>
  </div>
</nav>
<!-- [ Nav ] start -->
