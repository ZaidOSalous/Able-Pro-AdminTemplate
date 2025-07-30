<script>
  import { layoutStore } from '$lib/Stores/layoutStore';
  import { onMount } from 'svelte';
  import Menulist from './Menulist.svelte';
  import { tick } from 'svelte';
  import bootstrap from 'bootstrap/dist/js/bootstrap.min.js?client';
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
            { id: getId(), name: 'Analytics', link: '/dashboard/analytics' },
            { id: getId(), name: 'Finance', link: '/dashboard/finance' }
          ]
        },
        {
          id: getId(),
          name: 'Layouts',
          icon: '#custom-document',
          submenu: [
            { id: getId(), name: 'Vertical', link: '/demo/layout-vertical' },
            { id: getId(), name: 'Horizontal', link: '/demo/layout-horizontal' },
            { id: getId(), name: 'Layouts 2', link: '/demo/layout-color-header' },
            { id: getId(), name: 'Compact', link: '/demo/layout-compact' },
            { id: getId(), name: 'Tab', link: '/demo/layout-tab' }
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
        { id: getId(), name: 'Statistics', link: '/widget/w_statistics', icon: '#custom-story' },
        { id: getId(), name: 'Data', link: '/widget/w_data', icon: '#custom-fatrows' },
        { id: getId(), name: 'Chart', link: '/widget/w_chart', icon: '#custom-presentation-chart' }
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
            { id: getId(), name: 'Dashboard', link: '/admins/course-dashboard' },
            {
              id: getId(),
              name: 'Teacher',
              submenu: [
                { id: getId(), name: 'List', link: '/admins/course-teacher-list' },
                { id: getId(), name: 'Apply', link: '/admins/course-teacher-apply' },
                { id: getId(), name: 'Add', link: '/admins/course-teacher-add' }
              ]
            },
            {
              id: getId(),
              name: 'Student',
              submenu: [
                { id: getId(), name: 'List', link: '/admins/course-student-list' },
                { id: getId(), name: 'Apply', link: '/admins/course-student-apply' },
                { id: getId(), name: 'Add', link: '/admins/course-student-add' }
              ]
            },
            {
              id: getId(),
              name: 'Courses',
              submenu: [
                { id: getId(), name: 'View', link: '/admins/course-course-view' },
                { id: getId(), name: 'Add', link: '/admins/course-course-add' }
              ]
            },
            { id: getId(), name: 'Pricing', link: '/admins/course-pricing' },
            { id: getId(), name: 'Site', link: '/admins/course-site' },
            {
              id: getId(),
              name: 'Setting',
              submenu: [
                { id: getId(), name: 'Payment', link: '/admins/course-setting-payment' },
                { id: getId(), name: 'Pricing', link: '/admins/course-setting-pricing' },
                { id: getId(), name: 'Notifications', link: '/admins/course-setting-notifications' }
              ]
            }
          ]
        },
        {
          id: getId(),
          name: 'Membership',
          icon: '#custom-user',
          submenu: [
            { id: getId(), name: 'Dashboard', link: '/admins/membership-dashboard' },
            { id: getId(), name: 'List', link: '/admins/membership-list' },
            { id: getId(), name: 'Pricing', link: '/admins/membership-pricing' },
            { id: getId(), name: 'Setting', link: '/admins/membership-setting' }
          ]
        },
        {
          id: getId(),
          name: 'Helpdesk',
          icon: '#custom-24-support',
          submenu: [
            { id: getId(), name: 'Dashboard', link: '/admins/helpdesk-dashboard' },
            {
              id: getId(),
              name: 'Ticket',
              submenu: [
                { id: getId(), name: 'Create', link: '/admins/helpdesk-create-ticket' },
                { id: getId(), name: 'List', link: '/admins/helpdesk-ticket' },
                { id: getId(), name: 'Details', link: '/admins/helpdesk-ticket-details' }
              ]
            },
            { id: getId(), name: 'Customer', link: '/admins/helpdesk-customer' }
          ]
        },
        {
          id: getId(),
          name: 'Invoice',
          icon: '#custom-24-support',
          submenu: [
            { id: getId(), name: 'Dashboard', link: '/admins/invoice-dashboard' },
            { id: getId(), name: 'Create', link: '/admins/invoice-create' },
            { id: getId(), name: 'Details', link: '/admins/invoice-ticket-view' },
            { id: getId(), name: 'List', link: '/admins/invoice-list' },
            { id: getId(), name: 'Edit', link: '/admins/invoice-edit' }
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
        { id: getId(), name: 'Components', link: '/component/bc_alert', icon: '#custom-box-1' },
        { id: getId(), name: 'Animation', link: '/elements/animation', icon: '#custom-flag' },
        {
          id: getId(),
          name: 'Icons',
          icon: '#custom-mouse-circle',
          submenu: [
            { id: getId(), name: 'Feather', link: '/elements/icon-feather' },
            { id: getId(), name: 'Font Awesome', link: '/elements/icon-font-awesome' },
            { id: getId(), name: 'Material', link: '/elements/icon-material' },
            { id: getId(), name: 'Tabler', link: '/elements/icon-tabler' },
            { id: getId(), name: 'Phosphor', link: '/elements/icon-phosphor' },
            { id: getId(), name: 'Custom', link: '/elements/icon-custom' }
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
            { id: getId(), name: 'Form Basic', link: '/forms/form_elements' },
            { id: getId(), name: 'Form Floating', link: '/forms/form_floating' },
            { id: getId(), name: 'Form Options', link: '/forms/form2_basic' },
            { id: getId(), name: 'Input Groups', link: '/forms/form2_input_group' },
            { id: getId(), name: 'Select', link: '/forms/form-select' },
            { id: getId(), name: 'Checkbox', link: '/forms/form2_checkbox' },
            { id: getId(), name: 'Radio', link: '/forms/form2_radio' },
            { id: getId(), name: 'Switch', link: '/forms/form2_switch' },
            { id: getId(), name: 'Mega option', link: '/forms/form2_megaoption' }
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
                { id: getId(), name: 'Datepicker', link: '/forms/form2_datepicker' },
                { id: getId(), name: 'Date Range Picker', link: '/forms/form2_daterangepicker' }
              ]
            },
            {
              id: getId(),
              name: 'Select',
              submenu: [{ id: getId(), name: 'Choices js', link: '/forms/form2_choices' }]
            },
            { id: getId(), name: 'Rating', link: '/forms/form2_rating' },
            { id: getId(), name: 'Google reCaptcha', link: '/forms/form2_recaptcha' },
            { id: getId(), name: 'Input Masks', link: '/forms/form2_inputmask' },
            { id: getId(), name: 'Clipboard', link: '/forms/form2_clipboard' },
            { id: getId(), name: 'Nouislider', link: '/forms/form2_nouislider' },
            { id: getId(), name: 'Bootstrap Switch', link: '/forms/form2_switchjs' },
            { id: getId(), name: 'Typeahead', link: '/forms/form2_typeahead' }
          ]
        },
        {
          id: getId(),
          name: 'Text Editors',
          icon: '#custom-text-block',
          submenu: [
            { id: getId(), name: 'Quill', link: '/forms/form2_quill' },
            {
              id: getId(),
              name: 'CK editor',
              submenu: [
                { id: getId(), name: 'classic', link: '/forms/editor-classic' },
                { id: getId(), name: 'Document', link: '/forms/editor-document' },
                { id: getId(), name: 'Inline', link: '/forms/editor-inline' },
                { id: getId(), name: 'Balloon', link: '/forms/editor-balloon' }
              ]
            },
            { id: getId(), name: 'Markdown', link: '/forms/form2_markdown' }
          ]
        },
        {
          id: getId(),
          name: 'Form Layouts',
          icon: '#custom-row-vertical',
          submenu: [
            { id: getId(), name: 'Layouts', link: '/forms/form2_lay-default' },
            { id: getId(), name: 'Multicolumn', link: '/forms/form2_lay-multicolumn' },
            { id: getId(), name: 'Actionbars', link: '/forms/form2_lay-actionbars' },
            { id: getId(), name: 'Sticky Action bars', link: '/forms/form2_lay-stickyactionbars' }
          ]
        },
        {
          id: getId(),
          name: 'File upload',
          icon: '#custom-document-upload',
          submenu: [
            { id: getId(), name: 'Dropzone', link: '/forms/file-upload' },
            { id: getId(), name: 'Uppy', link: '/forms/form2_flu-uppy' }
          ]
        },
        {
          id: getId(),
          name: 'wizard',
          link: '/forms/form2_wizard',
          icon: '#custom-password-check'
        },
        {
          id: getId(),
          name: 'Form Validation',
          link: '/forms/form-validation',
          icon: '#custom-kanban'
        },
        { id: getId(), name: 'Image cropper', link: '/forms/image_crop', icon: '#custom-crop' }
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
            { id: getId(), name: 'Basic Table', link: '/tables/tbl_bootstrap' },
            { id: getId(), name: 'Sizing table', link: '/tables/tbl_sizing' },
            { id: getId(), name: 'Border table', link: '/tables/tbl_border' },
            { id: getId(), name: 'Styling table', link: '/tables/tbl_styling' }
          ]
        },
        {
          id: getId(),
          name: 'Vanilla Table',
          icon: '#custom-keyboard',
          submenu: [
            { id: getId(), name: 'Basic initialization', link: '/tables/tbl_dt-simple' },
            { id: getId(), name: 'Dynamic Import', link: '/tables/tbl_dt-dynamic-import' },
            {
              id: getId(),
              name: 'Render Column Cells',
              link: '/tables/tbl_dt-render-column-cells'
            },
            {
              id: getId(),
              name: 'Column Manipulation',
              link: '/tables/tbl_dt-column-manipulation'
            },
            { id: getId(), name: 'Datetime Sorting', link: '/tables/tbl_dt-datetime-sorting' },
            { id: getId(), name: 'Add Rows', link: '/tables/tbl_dt-add-rows' },
            { id: getId(), name: 'Fetch API', link: '/tables/tbl_dt-fetch-api' },
            { id: getId(), name: 'Filters', link: '/tables/tbl_dt-filters' },
            { id: getId(), name: 'Export', link: '/tables/tbl_dt-export' }
          ]
        },
        {
          id: getId(),
          name: 'Data table',
          icon: '#custom-graph',
          submenu: [
            { id: getId(), name: 'Advance initialization', link: '/tables/dt_advance' },
            { id: getId(), name: 'Styling', link: '/tables/dt_styling' },
            { id: getId(), name: 'API', link: '/tables/dt_api' },
            { id: getId(), name: 'Plug-in', link: '/tables/dt_plugin' },
            { id: getId(), name: 'Data sources', link: '/tables/dt_sources' }
          ]
        },
        {
          id: getId(),
          name: 'DT extensions',
          icon: '#custom-add-item',
          submenu: [
            { id: getId(), name: 'Autofill', link: '/tables/dt_ext_autofill' },
            {
              id: getId(),
              name: 'Button',
              submenu: [
                { id: getId(), name: 'Basic button', link: '/tables/dt_ext_basic_buttons' },
                { id: getId(), name: 'Data export', link: '/tables/dt_ext_export_buttons' }
              ]
            },
            { id: getId(), name: 'Col reorder', link: '/tables/dt_ext_col_reorder' },
            { id: getId(), name: 'Fixed columns', link: '/tables/dt_ext_fixed_columns' },
            { id: getId(), name: 'Fixed header', link: '/tables/dt_ext_fixed_header' },
            { id: getId(), name: 'Key table', link: '/tables/dt_ext_key_table' },
            { id: getId(), name: 'Responsive', link: '/tables/dt_ext_responsive' },
            { id: getId(), name: 'Row reorder', link: '/tables/dt_ext_row_reorder' },
            { id: getId(), name: 'Scroller', link: '/tables/dt_ext_scroller' },
            { id: getId(), name: 'Select table', link: '/tables/dt_ext_select' }
          ]
        }
      ]
    },
    {
      id: getId(),
      name: 'Charts',
      level: 1,
      icon: '#custom-graph',
      submenu: [
        {
          id: getId(),
          name: 'Charts',
          icon: '#custom-graph',
          submenu: [
            { id: getId(), name: 'Apex Chart', link: '/blogs/chart-apex' },
            { id: getId(), name: 'Peity Chart', link: '/blogs/chart-peity' }
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
          link: '/application/calendar',
          icon: '#custom-calendar-1'
        },
        { id: getId(), name: 'Chat', link: '/application/chat', icon: '#custom-message-2' },
        {
          id: getId(),
          name: 'Customer',
          link: '/application/cust_customer_list',
          icon: '#custom-notification-status'
        },
        {
          id: getId(),
          name: 'E-commerce',
          icon: '#custom-shopping-bag',
          submenu: [
            { id: getId(), name: 'Product', link: '/application/ecom_product' },
            { id: getId(), name: 'Product Details', link: '/application/ecom_product-details' },
            { id: getId(), name: 'Product List', link: '/application/ecom_product-list' },
            { id: getId(), name: 'Add New Product', link: '/application/ecom_product-add' },
            { id: getId(), name: 'Checkout', link: '/application/ecom_checkout' }
          ]
        },
        {
          id: getId(),
          name: 'File manager',
          link: '/application/file-manager',
          icon: '#custom-document-filter'
        },
        { id: getId(), name: 'Mail', link: '/application/mail', icon: '#custom-direct-inbox' },
        {
          id: getId(),
          name: 'Users',
          icon: '#custom-user-square',
          submenu: [
            { id: getId(), name: 'Account Profile', link: '/application/account-profile' },
            { id: getId(), name: 'Social media', link: '/application/social-media' }
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
          icon: '#custom-shield',
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
                { id: getId(), name: 'Under construction 1', link: '/pages/under-construction-v1' },
                { id: getId(), name: 'Under construction 2', link: '/pages/under-construction-v2' }
              ]
            },
            {
              id: getId(),
              name: 'Coming soon',
              submenu: [
                { id: getId(), name: 'Coming soon 1', link: '/pages/coming-soon-v1' },
                { id: getId(), name: 'Coming soon 2', link: '/pages/coming-soon-v2' }
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
            { id: getId(), name: 'Price 1', link: '/pages/price-v1' },
            { id: getId(), name: 'Price 2', link: '/pages/price-v2' }
          ]
        },
        {
          id: getId(),
          name: 'Landing',
          icon: '#custom-airplane',
          link: '/pages/landing'
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

  function initTooltip() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

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
      setTimeout(() => {
        initTooltip();
      }, 100);
    });

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
