<script>
  import { layoutStore } from '$lib/Stores/layoutStore';
  import { onMount } from 'svelte';
  import Menulist from './Menulist.svelte';
  import { tick } from 'svelte';
  let id = 1;
  function getId() {
    return id++;
  }
  let menuList = [
    {
      id: getId(),
      name: 'Navigation',
      icon: '#custom-status-up',
      level: 1,
      submenu: [
        {
          id: getId(),
          name: 'Dashboard',
          icon: '#custom-status-up',
          badge: 2,
          submenu: [
            { id: getId(), name: 'Default', link: '/dashboard/index' },
            { id: getId(), name: 'Analytics', link: '/pages/error-404' },
            { id: getId(), name: 'Finance', link: '/pages/error-404' }
          ]
        },
        {
          id: getId(),
          name: 'Layouts',
          icon: '#custom-document',
          submenu: [
            { id: getId(), name: 'Vertical', link: '/pages/error-404' },
            { id: getId(), name: 'Horizontal', link: '/pages/error-404' },
            { id: getId(), name: 'Layouts 2', link: '/pages/error-404' },
            { id: getId(), name: 'Compact', link: '/pages/error-404' },
            { id: getId(), name: 'Tab', link: '/pages/error-404' }
          ]
        }
      ]
    },
    {
      id: getId(),
      name: 'Widget',
      level: 1,
      icon: '#custom-presentation-chart',
      submenu: [
        { id: getId(), name: 'Statistics', link: '/pages/error-404', icon: '#custom-story' },
        { id: getId(), name: 'Data', link: '/pages/error-404', icon: '#custom-fatrows' },
        { id: getId(), name: 'Chart', link: '/pages/error-404', icon: '#custom-presentation-chart' }
      ]
    },
    {
      id: getId(),
      name: 'Admin Panel',
      level: 1,
      icon: '#custom-layer',
      submenu: [
        {
          id: getId(),
          name: 'Online Courses',
          icon: '#custom-layer',
          submenu: [
            { id: getId(), name: 'Dashboard', link: '/pages/error-404' },
            {
              id: getId(),
              name: 'Teacher',
              submenu: [
                { id: getId(), name: 'List', link: '/pages/error-404' },
                { id: getId(), name: 'Apply', link: '/pages/error-404' },
                { id: getId(), name: 'Add', link: '/pages/error-404' }
              ]
            },
            {
              id: getId(),
              name: 'Student',
              submenu: [
                { id: getId(), name: 'List', link: '/pages/error-404' },
                { id: getId(), name: 'Apply', link: '/pages/error-404' },
                { id: getId(), name: 'Add', link: '/pages/error-404' }
              ]
            },
            {
              id: getId(),
              name: 'Courses',
              submenu: [
                { id: getId(), name: 'View', link: '/pages/error-404' },
                { id: getId(), name: 'Add', link: '/pages/error-404' }
              ]
            },
            { id: getId(), name: 'Pricing', link: '/pages/error-404' },
            { id: getId(), name: 'Site', link: '/pages/error-404' },
            {
              id: getId(),
              name: 'Setting',
              submenu: [
                { id: getId(), name: 'Payment', link: '/pages/error-404' },
                { id: getId(), name: 'Pricing', link: '/pages/error-404' },
                { id: getId(), name: 'Notifications', link: '/pages/error-404' }
              ]
            }
          ]
        },
        {
          id: getId(),
          name: 'Membership',
          icon: '#custom-user',
          submenu: [
            { id: getId(), name: 'Dashboard', link: '/pages/error-404' },
            { id: getId(), name: 'List', link: '/pages/error-404' },
            { id: getId(), name: 'Pricing', link: '/pages/error-404' },
            { id: getId(), name: 'Setting', link: '/pages/error-404' }
          ]
        },
        {
          id: getId(),
          name: 'Helpdesk',
          icon: '#custom-24-support',
          submenu: [
            { id: getId(), name: 'Dashboard', link: '/pages/error-404' },
            {
              id: getId(),
              name: 'Ticket',
              submenu: [
                { id: getId(), name: 'Create', link: '/pages/error-404' },
                { id: getId(), name: 'List', link: '/pages/error-404' },
                { id: getId(), name: 'Details', link: '/pages/error-404' }
              ]
            },
            { id: getId(), name: 'Customer', link: '/pages/error-404' }
          ]
        },
        {
          id: getId(),
          name: 'Invoice',
          icon: '#custom-24-support',
          submenu: [
            { id: getId(), name: 'Dashboard', link: '/pages/error-404' },
            { id: getId(), name: 'Create', link: '/pages/error-404' },
            { id: getId(), name: 'Details', link: '/pages/error-404' },
            { id: getId(), name: 'List', link: '/pages/error-404' },
            { id: getId(), name: 'Edit', link: '/pages/error-404' }
          ]
        }
      ]
    },
    {
      id: getId(),
      name: 'UI Components',
      level: 1,
      icon: '#custom-box-1',
      submenu: [
        { id: getId(), name: 'Components', link: '/pages/error-404', icon: '#custom-box-1' },
        { id: getId(), name: 'Animation', link: '/pages/error-404', icon: '#custom-flag' },
        {
          id: getId(),
          name: 'Icons',
          icon: '#custom-mouse-circle',
          submenu: [
            { id: getId(), name: 'Feather', link: '/pages/error-404' },
            { id: getId(), name: 'Font Awesome', link: '/pages/error-404' },
            { id: getId(), name: 'Material', link: '/pages/error-404' },
            { id: getId(), name: 'Tabler', link: '/pages/error-404' },
            { id: getId(), name: 'Phosphor', link: '/pages/error-404' },
            { id: getId(), name: 'Custom', link: '/pages/error-404' }
          ]
        }
      ]
    },
    {
      id: getId(),
      name: 'Forms',
      level: 1,
      icon: '#custom-element-plus',
      submenu: [
        {
          id: getId(),
          name: 'Forms Elements',
          icon: '#custom-element-plus',
          submenu: [
            { id: getId(), name: 'Form Basic', link: '/pages/error-404' },
            { id: getId(), name: 'Form Floating', link: '/pages/error-404' },
            { id: getId(), name: 'Form Options', link: '/pages/error-404' },
            { id: getId(), name: 'Input Groups', link: '/pages/error-404' },
            { id: getId(), name: 'Select', link: '/pages/error-404' },
            { id: getId(), name: 'Checkbox', link: '/pages/error-404' },
            { id: getId(), name: 'Radio', link: '/pages/error-404' },
            { id: getId(), name: 'Switch', link: '/pages/error-404' },
            { id: getId(), name: 'Mega option', link: '/pages/error-404' }
          ]
        },
        {
          id: getId(),
          name: 'Forms Plugins',
          icon: '#custom-cpu-charge',
          submenu: [
            {
              id: getId(),
              name: 'Date',
              submenu: [
                { id: getId(), name: 'Datepicker', link: '/pages/error-404' },
                { id: getId(), name: 'Timepicker', link: '/pages/error-404' },
                { id: getId(), name: 'Date Range Picker', link: '/pages/error-404' }
              ]
            },
            {
              id: getId(),
              name: 'Select',
              submenu: [{ id: getId(), name: 'Choices js', link: '/pages/error-404' }]
            },
            { id: getId(), name: 'Rating', link: '/pages/error-404' },
            { id: getId(), name: 'Google reCaptcha', link: '/pages/error-404' },
            { id: getId(), name: 'Input Masks', link: '/pages/error-404' },
            { id: getId(), name: 'Clipboard', link: '/pages/error-404' },
            { id: getId(), name: 'Nouislider', link: '/pages/error-404' },
            { id: getId(), name: 'Bootstrap Switch', link: '/pages/error-404' },
            { id: getId(), name: 'Typeahead', link: '/pages/error-404' }
          ]
        },
        {
          id: getId(),
          name: 'Text Editors',
          icon: '#custom-text-block',
          submenu: [
            { id: getId(), name: 'Tinymce', link: '/pages/error-404' },
            { id: getId(), name: 'Quill', link: '/pages/error-404' },
            {
              id: getId(),
              name: 'CK editor',
              submenu: [
                { id: getId(), name: 'classic', link: '/pages/error-404' },
                { id: getId(), name: 'Document', link: '/pages/error-404' },
                { id: getId(), name: 'Inline', link: '/pages/error-404' },
                { id: getId(), name: 'Balloon', link: '/pages/error-404' }
              ]
            },
            { id: getId(), name: 'Markdown', link: '/pages/error-404' }
          ]
        },
        {
          id: getId(),
          name: 'Form Layouts',
          icon: '#custom-row-vertical',
          submenu: [
            { id: getId(), name: 'Layouts', link: '/pages/error-404' },
            { id: getId(), name: 'Multicolumn', link: '/pages/error-404' },
            { id: getId(), name: 'Actionbars', link: '/pages/error-404' },
            { id: getId(), name: 'Sticky Action bars', link: '/pages/error-404' }
          ]
        },
        {
          id: getId(),
          name: 'File upload',
          icon: '#custom-document-upload',
          submenu: [
            { id: getId(), name: 'Dropzone', link: '/pages/error-404' },
            { id: getId(), name: 'Uppy', link: '/pages/error-404' }
          ]
        },
        {
          id: getId(),
          name: 'wizard',
          link: '/pages/error-404',
          icon: '#custom-password-check'
        },
        {
          id: getId(),
          name: 'Form Validation',
          link: '/pages/error-404',
          icon: '#custom-kanban'
        },
        { id: getId(), name: 'Image cropper', link: '/pages/error-404', icon: '#custom-crop' }
      ]
    },
    {
      id: getId(),
      name: 'Tables',
      level: 1,
      icon: '#custom-text-align-justify-center',
      submenu: [
        {
          id: getId(),
          name: 'Bootstrap Table',
          icon: '#custom-text-align-justify-center',
          submenu: [
            { id: getId(), name: 'Basic Table', link: '/pages/error-404' },
            { id: getId(), name: 'Sizing table', link: '/pages/error-404' },
            { id: getId(), name: 'Border table', link: '/pages/error-404' },
            { id: getId(), name: 'Styling table', link: '/pages/error-404' }
          ]
        },
        {
          id: getId(),
          name: 'Vanilla Table',
          icon: '#custom-keyboard',
          submenu: [
            { id: getId(), name: 'Basic initialization', link: '/pages/error-404' },
            { id: getId(), name: 'Dynamic Import', link: '/pages/error-404' },
            {
              id: getId(),
              name: 'Render Column Cells',
              link: '/pages/error-404'
            },
            {
              id: getId(),
              name: 'Column Manipulation',
              link: '/pages/error-404'
            },
            { id: getId(), name: 'Datetime Sorting', link: '/pages/error-404' },
            { id: getId(), name: 'Methods', link: '/pages/error-404' },
            { id: getId(), name: 'Add Rows', link: '/pages/error-404' },
            { id: getId(), name: 'Fetch API', link: '/pages/error-404' },
            { id: getId(), name: 'Filters', link: '/pages/error-404' },
            { id: getId(), name: 'Export', link: '/pages/error-404' }
          ]
        },
        {
          id: getId(),
          name: 'Data table',
          icon: '#custom-graph',
          submenu: [
            { id: getId(), name: 'Advance initialization', link: '/pages/error-404' },
            { id: getId(), name: 'Styling', link: '/pages/error-404' },
            { id: getId(), name: 'API', link: '/pages/error-404' },
            { id: getId(), name: 'Plug-in', link: '/pages/error-404' },
            { id: getId(), name: 'Data sources', link: '/pages/error-404' }
          ]
        },
        {
          id: getId(),
          name: 'DT extensions',
          icon: '#custom-add-item',
          submenu: [
            { id: getId(), name: 'Autofill', link: '/pages/error-404' },
            {
              id: getId(),
              name: 'Button',
              icon: 'pc-item pc-hasmenu',
              submenu: [
                { id: getId(), name: 'Basic button', link: '/pages/error-404' },
                { id: getId(), name: 'Data export', link: '/pages/error-404' }
              ]
            },
            { id: getId(), name: 'Col reorder', link: '/pages/error-404' },
            { id: getId(), name: 'Fixed columns', link: '/pages/error-404' },
            { id: getId(), name: 'Fixed header', link: '/pages/error-404' },
            { id: getId(), name: 'Key table', link: '/pages/error-404' },
            { id: getId(), name: 'Responsive', link: '/pages/error-404' },
            { id: getId(), name: 'Row reorder', link: '/pages/error-404' },
            { id: getId(), name: 'Scroller', link: '/pages/error-404' },
            { id: getId(), name: 'Select table', link: '/pages/error-404' }
          ]
        }
      ]
    },
    {
      id: getId(),
      name: 'Charts & Maps',
      level: 1,
      icon: '#custom-graph',
      submenu: [
        {
          id: getId(),
          name: 'Charts',
          icon: '#custom-graph',
          submenu: [
            { id: getId(), name: 'Apex Chart', link: '/pages/error-404' },
            { id: getId(), name: 'Peity Chart', link: '/pages/error-404' }
          ]
        },
        {
          id: getId(),
          name: 'Maps',
          icon: '#custom-shapes',
          submenu: [
            { id: getId(), name: 'Vector Maps', link: '/pages/error-404' },
            { id: getId(), name: 'Gmaps', link: '/pages/error-404' }
          ]
        }
      ]
    },
    {
      id: getId(),
      name: 'Application',
      level: 1,
      icon: '#custom-shopping-bag',
      submenu: [
        {
          id: getId(),
          name: 'Calendar',
          link: '/pages/error-404',
          icon: '#custom-calendar-1'
        },
        { id: getId(), name: 'Chat', link: '/pages/error-404', icon: '#custom-message-2' },
        {
          id: getId(),
          name: 'Customer',
          link: '/pages/error-404',
          icon: '#custom-notification-status'
        },
        {
          id: getId(),
          name: 'E-commerce',
          icon: '#custom-shopping-bag',
          submenu: [
            { id: getId(), name: 'Product', link: '/pages/error-404' },
            { id: getId(), name: 'Product Details', link: '/pages/error-404' },
            { id: getId(), name: 'Product List', link: '/pages/error-404' },
            { id: getId(), name: 'Add New Product', link: '/pages/error-404' },
            { id: getId(), name: 'Checkout', link: '/pages/error-404' }
          ]
        },
        {
          id: getId(),
          name: 'File manager',
          link: '/application/file-manager',
          icon: '#custom-document-filter'
        },
        { id: getId(), name: 'Mail', link: '/pages/error-404', icon: '#custom-direct-inbox' },
        {
          id: getId(),
          name: 'Users',
          icon: '#custom-user-square',
          submenu: [
            { id: getId(), name: 'Account Profile', link: '/pages/error-404' },
            { id: getId(), name: 'Social media', link: '/pages/error-404' }
          ]
        }
      ]
    },
    {
      id: getId(),
      name: 'Pages',
      level: 1,
      icon: '#custom-flag',
      submenu: [
        {
          id: getId(),
          name: 'Authentication',
          icon: '#custom-lock',
          submenu: [
            {
              id: getId(),
              name: 'Authentication 1',
              submenu: [
                { id: getId(), name: 'Login', link: '/pages/login-v1' },
                { id: getId(), name: 'Register', link: '/pages/register-v1' },
                { id: getId(), name: 'Forgot Password', link: '/pages/forgot-password-v1' },
                { id: getId(), name: 'check mail', link: '/pages/check-mail-v1' },
                { id: getId(), name: 'Reset Password', link: '/pages/reset-password-v1' },
                { id: getId(), name: 'code verification', link: '/pages/code-verification-v1' }
              ]
            },
            {
              id: getId(),
              name: 'Authentication 2',
              submenu: [
                { id: getId(), name: 'Login', link: '/pages/login-v2' },
                { id: getId(), name: 'Register', link: '/pages/register-v2' },
                { id: getId(), name: 'Forgot Password', link: '/pages/forgot-password-v2' },
                { id: getId(), name: 'check mail', link: '/pages/check-mail-v2' },
                { id: getId(), name: 'Reset Password', link: '/pages/reset-password-v2' },
                { id: getId(), name: 'code verification', link: '/pages/code-verification-v2' }
              ]
            },
            { id: getId(), name: 'Authentication 3', link: '/pages/login-v3' }
          ]
        },
        {
          id: getId(),
          name: 'Maintenance',
          icon: '#custom-flag',
          submenu: [
            { id: getId(), name: 'Error 404', link: '/pages/error-404' },
            { id: getId(), name: 'Error 500', link: '/pages/error-500' },
            {
              id: getId(),
              name: 'Under construction',
              submenu: [
                { id: getId(), name: 'Under construction 1', link: '/pages/error-404' },
                { id: getId(), name: 'Under construction 2', link: '/pages/error-404' }
              ]
            },
            {
              id: getId(),
              name: 'Coming soon',
              submenu: [
                { id: getId(), name: 'Coming soon 1', link: '/pages/error-404' },
                { id: getId(), name: 'Coming soon 2', link: '/pages/error-404' }
              ]
            }
          ]
        },
        {
          id: getId(),
          name: 'Contact us',
          icon: '#custom-24-support',
          link: '/pages/contact-us'
        },
        {
          id: getId(),
          name: 'Price',
          icon: '#custom-dollar-square',
          submenu: [
            { id: getId(), name: 'Price 1', link: '/pages/error-404' },
            { id: getId(), name: 'Price 2', link: '/pages/error-404' }
          ]
        },
        {
          id: getId(),
          name: 'Landing',
          icon: '#custom-airplane',
          link: '/pages/error-404'
        }
      ]
    },
    {
      id: getId(),
      name: 'Other',
      level: 1,
      icon: '#custom-notification-status  ',
      submenu: [
        {
          id: getId(),
          name: 'Menu Levels',
          icon: '#custom-level',
          submenu: [
            { id: getId(), name: 'Level 2.1' },
            {
              id: getId(),
              name: 'Level 2.2',
              submenu: [
                { id: getId(), name: 'Level 3.1' },
                { id: getId(), name: 'Level 3.2' },
                {
                  id: getId(),
                  name: 'Level 3.3',
                  submenu: [
                    { id: getId(), name: 'Level 4.1' },
                    { id: getId(), name: 'Level 4.2' }
                  ]
                }
              ]
            },
            {
              id: getId(),
              name: 'Level 2.3',
              submenu: [
                { id: getId(), name: 'Level 3.1' },
                { id: getId(), name: 'Level 3.2' },
                {
                  id: getId(),
                  name: 'Level 3.3',
                  submenu: [
                    { id: getId(), name: 'Level 4.1' },
                    { id: getId(), name: 'Level 4.2' }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: getId(),
          name: 'Sample page',
          icon: '#custom-notification-status',
          link: '/other/sample-page'
        }
      ]
    }
  ];

  // Function to initialize SimpleBar
  async function initializeSimpleBar() {
    await tick(); // Ensure DOM updates are complete
    const navbarContent = document.querySelector('.navbar-content');
    const tabSidemenu = document.querySelector('.tab-sidemenu');
    if (navbarContent) {
      const SimpleBarModule = await import('simplebar');
      const SimpleBar = SimpleBarModule.default;
      new SimpleBar(navbarContent);
    }
    if (tabSidemenu) {
      const SimpleBarModule = await import('simplebar');
      const SimpleBar = SimpleBarModule.default;
      new SimpleBar(tabSidemenu);
    }
  }
  // Subscribe to themeLayout store
  let unsubscribe;
  onMount(async () => {
    unsubscribe = layoutStore.subscribe((value) => {
      // Run the code when themeLayout changes
      initializeSimpleBar();
    });
    setTimeout(() => {}, 1000);
    return () => {
      // Cleanup subscription on component destroy
      unsubscribe();
    };
  });
</script>

<!-- [ Sidebar Menu ] start -->
<nav class="pc-sidebar">
  <div class="navbar-wrapper">
    <div class="m-header">
      <a href="/dashboard/index" class="b-brand text-primary">
        <!-- ========   Change your logo from here   ============ -->
        <img
          src={`/assets/images/logo-${$layoutStore.themeMode === 'dark' || $layoutStore.themeLayout === 'color-header' ? 'white' : 'dark'}.svg`}
          class="img-fluid logo-lg"
          alt="logo"
        />
        <span class="badge bg-light-success rounded-pill ms-2 theme-version">{$layoutStore?.themeVersion}</span>
      </a>
    </div>
    {#if $layoutStore.themeLayout !== 'tab'}
      <div class="navbar-content">
        <div class="card pc-user-card">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img src="/assets/images/user/avatar-1.jpg" alt="" class="user-avtar wid-45 rounded-circle" aria-hidden="true" />
              </div>
              <div class="flex-grow-1 ms-3 me-2">
                <h6 class="mb-0">Jonh Smith</h6>
                <small>Administrator</small>
              </div>
              <a class="btn btn-icon btn-link-secondary avtar" data-bs-toggle="collapse" href="#pc_sidebar_userlink">
                <svg class="pc-icon">
                  <use xlink:href="#custom-sort-outline"></use>
                </svg>
              </a>
            </div>
            <div class="collapse pc-user-links" id="pc_sidebar_userlink">
              <div class="pt-3">
                <a href="#!">
                  <i class="ti ti-user"></i>
                  <span>My Account</span>
                </a>
                <a href="#!">
                  <i class="ti ti-settings"></i>
                  <span>Settings</span>
                </a>
                <a href="#!">
                  <i class="ti ti-lock"></i>
                  <span>Lock Screen</span>
                </a>
                <a href="#!">
                  <i class="ti ti-power"></i>
                  <span>Logout</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <ul class="pc-navbar">
          <Menulist bind:menuList />
        </ul>
      </div>
    {:else}
      <div class="tab-container">
        <Menulist bind:menuList />
      </div>
    {/if}
  </div>
</nav>
<!-- [ Sidebar Menu ] end -->
