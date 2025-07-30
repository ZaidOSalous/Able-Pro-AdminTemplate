<script>
  import jQuery from 'jquery?client';
  import Footer2 from '$lib/Components/Layouts/Partials/Footer2.svelte';
  import 'jquery.marquee/jquery.marquee.min.js?client';
  import Header from '$lib/Components/Layouts/Partials/Header.svelte';
  import Customizer from '$lib/Components/Layouts/Partials/Customizer.svelte';
  import { onMount } from 'svelte';
  import WOW from 'wow.js/dist/wow.min.js?client';
  import owlCarousel from '$lib/assets/owlCarousel.js?client';
  import 'owl.carousel/dist/assets/owl.carousel.min.css';
  import 'animate.css/animate.min.css';
  import '$lib/assets/scss/landing.scss';

  let screen_slide = {
    loop: true,
    margin: 30,
    center: true,
    nav: false,
    dotsContainer: '.app_dotsContainer',
    URLhashListener: true,
    items: 1
  };
  let marquee_options = {
    duration: 500000,
    pauseOnHover: true,
    startVisible: true,
    duplicated: true
  };
  let marquee_options2 = {
    duration: 500000,
    pauseOnHover: true,
    startVisible: true,
    duplicated: true,
    direction: 'right'
  };
  onMount(() => {
    let ost = 0;
    document.addEventListener('scroll', function () {
      let cost = document.documentElement.scrollTop;
      if (cost == 0) {
        document.querySelector('.navbar').classList.add('top-nav-collapse');
      } else if (cost > ost) {
        document.querySelector('.navbar').classList.add('top-nav-collapse');
        document.querySelector('.navbar').classList.remove('default');
      } else {
        document.querySelector('.navbar').classList.add('default');
        document.querySelector('.navbar').classList.remove('top-nav-collapse');
      }
      ost = cost;
    });
    var wow = new WOW({
      animateClass: 'animated'
    });
    wow.init();

    // marquee start
    jQuery('.marquee').marquee(marquee_options);
    jQuery('.marquee-1').marquee(marquee_options2);

    // setting the design
    document.body.classList.add('landing-page');
  });
</script>

<svelte:head>
  <title>Live Preview | Able Pro Dashboard Template</title>
</svelte:head>
<Header />
<!-- [ Technologies ] start -->
<section id="technologies">
  <div class="container title">
    <div class="row justify-content-center text-center wow fadeInUp" data-wow-delay="0.2s">
      <div class="col-md-8 col-xl-6">
        <h2 class="mb-3">Available Technologies</h2>
        <p class="mb-0">Explore the Demos of Able Pro in multiple technologies.</p>
      </div>
    </div>
  </div>
  <div class="container technology-block">
    <!-- Row 1 -->
    <div class="row align-items-center justify-content-start mb-4 mb-sm-2">
      <div class="col-md-6 col-lg-4">
        <div class="card">
          <div class="card-body">
            <img src="../assets/images/landing/tech-bootstrap.svg" alt="img" class="img-fluid" />
            <h4 class="mb-3 mt-2">Bootstrap 5</h4>
            <p class="text-muted">
              Able Pro - Boost your project's visual appeal and functionality with our Bootstrap 5 dashboard template.
            </p>
            <a class="btn btn-light-dark mt-2" href="/dashboard/index" target="_blank"
              ><i class="ti ti-external-link"></i> Preview Bootstrap</a
            >
            <a
              class="btn btn-icon btn-light mt-2"
              target="_blank"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Click to Download Free Able Pro Bootstrap 5 Admin Template"
              href="https://links.codedthemes.com/vYUWM"><i class="ti ti-brand-github"></i></a
            >
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4">
        <div class="card">
          <div class="card-body">
            <img src="../assets/images/landing/tech-react-1.svg" alt="img" class="img-fluid" />
            <h4 class="mb-3 mt-2">React Material-UI</h4>
            <p class="text-muted">
              Able Pro React dashboard template is a powerful tool that utilizes the Material-UI component library to create stunning and
              intuitive user interfaces.
            </p>
            <a class="btn btn-light-dark mt-2" href="https://ableproadmin.com/react" target="_blank"
              ><i class="ti ti-external-link"></i> Preview React</a
            >
            <a
              class="btn btn-icon btn-light mt-2"
              target="_blank"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Click to Download Free Able Pro React Dashboard Template"
              href="https://links.codedthemes.com/vYUWM"><i class="ti ti-brand-github"></i></a
            >
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4">
        <div class="card">
          <div class="card-body">
            <img src="../assets/images/landing/tech-net.svg" alt="img" class="img-fluid" />
            <h4 class="mb-3 mt-2">Asp.net</h4>
            <p class="text-muted">
              Able Pro .NET version is a robust dashboard template designed specifically for .NET developers. Its comes with a wide range of
              pre-built components.
            </p>
            <a class="btn btn-light-dark mt-2" href="https://able-pro.azurewebsites.net/" target="_blank"
              ><i class="ti ti-external-link"></i> Preview .net</a
            >
            <a
              class="btn btn-icon btn-light mt-2"
              target="_blank"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Click to Download Free Able Pro ASP.net Dashboard Template"
              href="https://links.codedthemes.com/vYUWM"><i class="ti ti-brand-github"></i></a
            >
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4">
        <div class="card">
          <div class="card-body">
            <img src="../assets/images/landing/tech-codeigniter.svg" alt="img" class="img-fluid" />
            <h4 class="mb-3 mt-2">CodeIgniter</h4>
            <p class="text-muted">
              Able Pro CodeIgniter version is a powerful dashboard template built specifically for developers who use the CodeIgniter PHP
              framework.
            </p>
            <a class="btn btn-light-dark mt-2" href="https://ableproadmin.com/codeigniter/default/public/" target="_blank"
              ><i class="ti ti-external-link"></i> Preview CodeIgniter</a
            >
            <a
              class="btn btn-icon btn-light mt-2"
              target="_blank"
              data-bs-toggle="tooltip"
              disabled
              data-bs-placement="top"
              title="Click to Download Free Able Pro CodeIgniter Dashboard Template"
              href="https://links.codedthemes.com/vYUWM"><i class="ti ti-brand-github"></i></a
            >
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4">
        <div class="card">
          <div class="card-body">
            <img src="../assets/images/landing/tech-angular.svg" alt="img" class="img-fluid" />
            <h4 class="mb-3 mt-2">Angular Material-UI</h4>
            <p class="text-muted">
              Able Pro Angular dashboard template is a powerful tool that utilizes the Material-UI component library to create stunning and
              intuitive user interfaces.
            </p>
            <a class="btn btn-light-dark mt-2" href="https://ableproadmin.com/angular/default/" target="_blank"
              ><i class="ti ti-external-link"></i> Preview Angular</a
            >
            <a
              class="btn btn-icon btn-light mt-2"
              target="_blank"
              data-bs-toggle="tooltip"
              disabled
              data-bs-placement="top"
              title="Click to Download Free Able Pro Angular Dashboard Template"
              href="https://github.com/phoenixcoded/able-pro-free-admin-dashboard-template/tree/master"
              ><i class="ti ti-brand-github"></i></a
            >
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4">
        <div class="card">
          <div class="card-body">
            <img src="../assets/images/landing/tech-figma.svg" alt="img" class="img-fluid" />
            <h4 class="mb-3 mt-2">Figma</h4>
            <p class="text-muted">
              Able Pro comes with a Figma design file that allows you to customize and fine-tune your dashboard to meet your specific needs.
            </p>
            <a class="btn btn-light-dark mt-2" href="https://links.codedthemes.com/mQZrX" target="_blank"
              ><i class="ti ti-external-link"></i> Preview Figma</a
            >
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4">
        <div class="card">
          <div class="card-body">
            <img src="../assets/images/landing/tech-nextjs.svg" alt="img" class="img-fluid" />
            <h4 class="mb-3 mt-2">Next Js</h4>
            <p class="text-muted">
              Able Pro Next Js dashboard template is a powerful tool that utilizes the Material-UI component library to create stunning and
              intuitive user interfaces.
            </p>
            <a class="btn btn-light-dark mt-2" href="https://able-pro-material-next-ts-navy.vercel.app/" target="_blank"
              ><i class="ti ti-external-link"></i> Preview Next Js</a
            >
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4">
        <div class="card">
          <div class="card-body">
            <img src="../assets/images/landing/tech-vuetify.svg" alt="img" class="img-fluid" />
            <h4 class="mb-3 mt-2">vue</h4>
            <p class="text-muted"> Able Pro - Boost your project's visual appeal and functionality with our Vue Dashboard template. </p>
            <a class="btn btn-light-dark mt-2" href="https://ableproadmin.com/vue/" target="_blank"
              ><i class="ti ti-external-link"></i> Preview Vue</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
  <div class="container title">
    <div class="row justify-content-center text-center wow fadeInUp" data-wow-delay="0.2s">
      <div class="col-md-8 col-xl-6">
        <h2 class="mb-3">Complete Combo</h2>
        <p class="mb-0"> Able Pro caters to the needs of both developers and designers, whether they are beginners or experts. </p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row align-items-center justify-content-center">
      <div class="col-md-6 col-lg-4">
        <div class="card">
          <div class="card-body mt-2">
            <h5 class="mb-3">Figma Design System</h5>
            <p class="text-muted"> Check the live preview of Able Pro Figma design file. Figma file included in all licenses. </p>
            <img class="pt-2" alt="img" src="../assets/images/landing/feature-figma.png" width="100%" />
            <a
              class="btn btn-light-dark mt-3"
              href="https://www.figma.com/file/6XqmRhRmkr33w0EFD49acY/Able-Pro--v9.0-Figma-Preview?type=design&node-id=46-226114&mode=design&t=4FS2Lw6WxsmJ3RLm-0"
              target="_blank">Preview Figma <i class="ti ti-external-link"></i></a
            >
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4">
        <div class="card">
          <div class="card-body mt-2">
            <h5 class="mb-3">Explore Components</h5>
            <p class="text-muted"> Access all components of Able Pro in one place to make your development work easier. </p>
            <img class="pt-2" alt="img" src="../assets/images/landing/feature-components.png" width="100%" />
            <a class="btn btn-light-dark mt-3" href="/component/bc_alert" target="_blank"
              >View All Components <i class="ti ti-external-link"></i></a
            >
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4">
        <div class="card">
          <div class="card-body mt-2">
            <h5 class="mb-3">Documentation</h5>
            <p class="text-muted"> Find solutions and navigate through our helper guide with ease. </p>
            <img class="pt-2" alt="img" src="../assets/images/landing/feature-documentation.png" width="100%" />
            <a class="btn btn-light-dark mt-3" href="https://phoenixcoded.gitbook.io/able-pro/" target="_blank"
              >Check Documentation <i class="ti ti-external-link"></i></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="bg-primary overflow-hidden">
  <div class="container title">
    <div class="row justify-content-center text-center wow fadeInUp" data-wow-delay="0.2s">
      <div class="col-md-8 col-xl-6">
        <h2 class="mb-3 text-white">Working Conceptual Apps</h2>
        <p class="mb-0 text-white text-opacity-75">
          Each App is carefully crafted to achieve the best feature rich working concept for your project
        </p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-6 app_dotsContainer">
        <a class="app-link wow fadeInUp" data-wow-delay="0.2s" href="#app_1">
          <h4 class="text-white f-w-500">Chat</h4>
          <p class="mb-0 text-white text-opacity-75"> Power your web apps with the conceptual chat app of Able Pro Dashboard Template. </p>
        </a>
        <a class="app-link wow fadeInUp" data-wow-delay="0.2s" href="#app_2">
          <h4 class="text-white f-w-500">E-commerce</h4>
          <p class="mb-0 text-white text-opacity-75">
            Collection, Filter, Product Detail, Add New Product, and Checkout pages makes your e-commerce app complete.
          </p>
        </a>
        <a class="app-link wow fadeInUp" data-wow-delay="0.4s" href="#app_3">
          <h4 class="text-white f-w-500">Inbox</h4>
          <p class="mb-0 text-white text-opacity-75">
            Compose Message, List Message (email), Detailed Inbox pages well suited for any conversation based web apps.
          </p>
        </a>
        <a class="app-link wow fadeInUp" data-wow-delay="0.6s" href="#app_4">
          <h4 class="text-white f-w-500">User Management</h4>
          <p class="mb-0 text-white text-opacity-75">
            Detailed pages for User Management like Profile settings, role, account settings, social profile and more to explore.
          </p>
        </a>
      </div>
      <div class="col-md-6 position-relative wow fadeInRight" data-wow-delay="0.4s">
        <div class="owl-carousel owl-theme screen-slide img-app-moke" use:owlCarousel={screen_slide}>
          <div class="item" data-hash="app_1">
            <img src="../assets/images/landing/chat.png" alt="img" class="img-fluid rounded" />
          </div>
          <div class="item" data-hash="app_2">
            <img src="../assets/images/landing/e-commerce.png" alt="img" class="img-fluid rounded" />
          </div>
          <div class="item" data-hash="app_3">
            <img src="../assets/images/landing/mail.png" alt="img" class="img-fluid rounded" />
          </div>
          <div class="item" data-hash="app_4">
            <img src="../assets/images/landing/social.png" alt="img" class="img-fluid rounded" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="bg-white">
  <div class="container title mb-0">
    <div class="row align-items-center wow fadeInUp" data-wow-delay="0.2s">
      <div class="col-md-8">
        <h2 class="mb-3"><span class="text-primary">TRY</span> BEFORE BUY</h2>
        <p class="text-muted mb-md-0"> Download the Free MIT Able Pro Dashboard Template before make your purchase decision. </p>
      </div>
      <div class="col-md-4 text-md-end">
        <a class="btn btn-lg btn-outline-secondary bg-gray-100 m-1" href="/dashboard/index" target="_blank">Check out Pro Version</a>
        <a
          class="btn btn-lg btn-primary m-2"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          href="https://github.com/phoenixcoded/able-pro-free-admin-dashboard-template"
          target="_blank"
          title="Free version of Able Pro"><i class="ti ti-brand-github"></i> Free (Soon)</a
        >
      </div>
    </div>
  </div>
</section>
<section class="support-team-block">
  <div class="container title">
    <div class="row justify-content-center text-center wow fadeInUp" data-wow-delay="0.2s">
      <div class="col-md-8 col-xl-6">
        <h2 class="mb-3">They <span class="text-primary">love</span> Able Pro, Now your turn 😍</h2>
        <!-- prettier-ignore -->
        <p class="mb-0">We take pride in our Dashboard development, which has been consistently rated 4.6/5 by our
            satisfied customers. It brings us joy to share the positive feedback we have received from our loyal
            clients.</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="marquee marquee-text wow fadeInUp" data-wow-delay="0.4s">
          <ul class="list-inline marquee-list">
            <li class="list-inline-item">
              <div class="card support-card">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <img src="../assets/images/user/avatar-1.jpg" alt="img" class="rounded-circle wid-60 hei-60" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <p class="mb-1">“Amazing template for fast develop.💎“</p>
                      <small>devbar - <span class="text-muted">Customizability</span></small>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-inline-item">
              <div class="card support-card">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <img src="../assets/images/user/avatar-2.jpg" alt="img" class="rounded-circle wid-60 hei-60" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <!-- prettier-ignore -->
                      <p class="mb-1">“Code quality is amazing. Design is astonishing. very easy to customize..😍“</p>
                      <small>shahabblouch - <span class="text-muted">Code Quality</span></small>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-inline-item">
              <div class="card support-card">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <img src="../assets/images/user/avatar-3.jpg" alt="img" class="rounded-circle wid-60 hei-60" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <p class="mb-1"> “This has been one of my favorite admin dashboards to use. 😍“ </p>
                      <small>htmhell - <span class="text-muted">Design Quality</span></small>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-inline-item">
              <div class="card support-card">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <img src="../assets/images/user/avatar-4.jpg" alt="img" class="rounded-circle wid-60 hei-60" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <!-- prettier-ignore -->
                      <p class="mb-1">“Excellent support, if we need any modification, they are doing immediately“</p>
                      <small>hemchandkodali - <span class="text-muted">Customer Support</span></small>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-inline-item">
              <div class="card support-card">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <img src="../assets/images/user/avatar-5.jpg" alt="img" class="rounded-circle wid-60 hei-60" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <p class="mb-1">“For developers like me, this is the total package! 😍 “</p>
                      <small>sumaranjum - <span class="text-muted">Feature Availability</span></small>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-inline-item">
              <div class="card support-card">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <img src="../assets/images/user/avatar-1.jpg" alt="img" class="rounded-circle wid-60 hei-60" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <!-- prettier-ignore -->
                      <p class="mb-1">“I love the looks of Able Pro 7.0. I really like the colors you guys have chosen
                          for this theme. It looks really nice.. 💎“</p>
                      <small>ritelogic - <span class="text-muted">Other</span></small>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-inline-item">
              <div class="card support-card">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <img src="../assets/images/user/avatar-2.jpg" alt="img" class="rounded-circle wid-60 hei-60" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <p class="mb-1"> “The author is very nice and solved my problem inmediately 😍 “ </p>
                      <small>richitela - <span class="text-muted">Customer Support</span></small>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-inline-item">
              <div class="card support-card">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <img src="../assets/images/user/avatar-3.jpg" alt="img" class="rounded-circle wid-60 hei-60" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <p class="mb-1">“Very universal admin template“</p>
                      <small>Genstiade - <span class="text-muted">Feature Availability</span></small>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-inline-item">
              <div class="card support-card">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <img src="../assets/images/user/avatar-4.jpg" alt="img" class="rounded-circle wid-60 hei-60" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <p class="mb-1">
                        “An amazing template. Very good design, good quality code and also very good customer support. 💎“
                      </p>
                      <small>macugi - <span class="text-muted">Code Quality</span></small>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-inline-item">
              <div class="card support-card">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <img src="../assets/images/user/avatar-5.jpg" alt="img" class="rounded-circle wid-60 hei-60" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <!-- prettier-ignore -->
                      <p class="mb-1">“I have it running on a medium size site that is geared towards displaying stats
                          tables and custom forms, a blog and a forum. My customers love the design and the speed in
                          which the pages load. 😍 “</p>
                      <small>RizzoFrank - <span class="text-muted">Design Quality</span></small>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="marquee-1 marquee-text wow fadeInUp" data-wow-delay="0.5s">
          <ul class="list-inline marquee-list">
            <li class="list-inline-item">
              <div class="card support-card">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <img src="../assets/images/user/avatar-1.jpg" alt="img" class="rounded-circle wid-60 hei-60" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <p class="mb-1"> “Perfect for my need. Elegant look n feel with blazing fast code. 💎“ </p>
                      <small>ThemeShakers - <span class="text-muted">Feature Availability</span></small>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-inline-item">
              <div class="card support-card">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <img src="../assets/images/user/avatar-2.jpg" alt="img" class="rounded-circle wid-60 hei-60" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <!-- prettier-ignore -->
                      <p class="mb-1">“Excellent template! It's also very well organized and easy to find our way..“
                        </p>
                      <small>Danlec - <span class="text-muted">Code Quality</span></small>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-inline-item">
              <div class="card support-card">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <img src="../assets/images/user/avatar-3.jpg" alt="img" class="rounded-circle wid-60 hei-60" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <!-- prettier-ignore -->
                      <p class="mb-1">“Their Team is great and working great always. when you need help...“</p>
                      <small>manojkumarhr - <span class="text-muted">Customer Support</span></small>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-inline-item">
              <div class="card support-card">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <img src="../assets/images/user/avatar-4.jpg" alt="img" class="rounded-circle wid-60 hei-60" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <p class="mb-1">“Wonderful theme, full of features, with ton of addons.“</p>
                      <small>momennoor - <span class="text-muted">Design Quality</span></small>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-inline-item">
              <div class="card support-card">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <img src="../assets/images/user/avatar-5.jpg" alt="img" class="rounded-circle wid-60 hei-60" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <p class="mb-1"> “An excellent theme. It contains everything you need to open complex projects. 😍 “ </p>
                      <small>Vihtora - <span class="text-muted">Other</span></small>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-inline-item">
              <div class="card support-card">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <img src="../assets/images/user/avatar-1.jpg" alt="img" class="rounded-circle wid-60 hei-60" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <p class="mb-1">“Excellent template. Very complete. 💎“</p>
                      <small>mundodascasas - <span class="text-muted">Code Quality</span></small>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-inline-item">
              <div class="card support-card">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <img src="../assets/images/user/avatar-2.jpg" alt="img" class="rounded-circle wid-60 hei-60" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <p class="mb-1">
                        “It serves my all purposes well and one thing it was great because i didn't require designer at all.“
                      </p>
                      <small>amit1134 - <span class="text-muted">Code Quality</span></small>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-inline-item">
              <div class="card support-card">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <img src="../assets/images/user/avatar-3.jpg" alt="img" class="rounded-circle wid-60 hei-60" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <!-- prettier-ignore -->
                      <p class="mb-1">“I highly recommend Able pro admin template and team phoenixcoded item. It was best purchase on themeforest for me.“</p>
                      <small>vishalmg - <span class="text-muted">Flexibility</span></small>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-inline-item">
              <div class="card support-card">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <img src="../assets/images/user/avatar-4.jpg" alt="img" class="rounded-circle wid-60 hei-60" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <!-- prettier-ignore -->
                      <p class="mb-1">“5 stars are for the excellent support, that is brilliant! The design is very
                          cool and...!“</p>
                      <small>ab69aho - <span class="text-muted">Code Quality</span></small>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="bg-white">
  <div class="container">
    <div class="row justify-content-center text-center">
      <div class="col-md-12">
        <h2>Trusted By</h2>
        <p class="my-4 wow fadeInUp" data-wow-delay="0.2s">
          From Startups to Fortune 500 companies using our Template for their product.
        </p>
        <div class="row justify-content-center client-block g-5">
          <div class="col-auto wow fadeInRight" data-wow-delay="0.4s">
            <img src="../assets/images/landing/client-eagames.svg" alt="img" class="img-fluid" />
          </div>
          <div class="col-auto wow fadeInRight" data-wow-delay="0.4s">
            <img src="../assets/images/landing/client-vodafone.svg" alt="img" class="img-fluid" />
          </div>
          <div class="col-auto wow fadeInRight" data-wow-delay="0.4s">
            <img src="../assets/images/landing/client-crystal-1.svg" alt="img" class="img-fluid" />
          </div>
          <div class="col-auto wow fadeInRight" data-wow-delay="0.5s">
            <img src="../assets/images/landing/client-haswent-2.svg" alt="img" class="img-fluid" />
          </div>
          <div class="col-auto wow fadeInRight" data-wow-delay="0.6s">
            <img src="../assets/images/landing/client-haxter-3.svg" alt="img" class="img-fluid" />
          </div>
          <div class="col-auto wow fadeInRight" data-wow-delay="0.7s">
            <img src="../assets/images/landing/client-montecito-4.svg" alt="img" class="img-fluid" />
          </div>
          <div class="col-auto wow fadeInRight" data-wow-delay="0.8s">
            <img src="../assets/images/landing/client-slingshot.svg" alt="img" class="img-fluid" />
          </div>
          <div class="col-auto wow fadeInRight" data-wow-delay="0.9s">
            <img src="../assets/images/landing/client-totalstudio-5.svg" alt="img" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer2 />
<Customizer />
