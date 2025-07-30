<?php

namespace App\Controllers;

class Home extends BaseController {
    // Default

    public function index() {
        $data = [
            'head_title' => 'Landing',
            'breadcrumb_item' => 'Dashboard',
        ];
        return view( 'pages/landing', $data );
    }

    // Dashboard

    public function dashboard_default() {
        $data = [
            'head_title' => 'Home',
            'breadcrumb_item' => 'Dashboard',
        ];
        return view( 'dashboard/index', $data );
    }

    public function dashboard_analytics() {
        $data = [
            'head_title' => 'Analytics',
            'breadcrumb_item' => 'Dashboard',
        ];
        return view( 'dashboard/analytics', $data );
    }

    public function dashboard_finance() {
        $data = [
            'head_title' => 'Finance',
            'breadcrumb_item' => 'Dashboard',
        ];
        return view( 'dashboard/finance', $data );
    }

    // Layout
    public function layout_horizontal() {
        $data = [
            'head_title' => 'Horizontal Layout',
            'breadcrumb_item' => 'Layout',
        ];
        return view( 'demo/layout-horizontal', $data );
    }
    public function layout_compact() {
        $data = [
            'head_title' => 'Compact Layout',
            'breadcrumb_item' => 'Layout',
        ];
        return view( 'demo/layout-compact', $data );
    }
    public function layout_color_header() {
        $data = [
            'head_title' => 'Layout 2',
            'breadcrumb_item' => 'Layout',
        ];
        return view( 'demo/layout-color-header', $data );
    }
    public function layout_tab() {
        $data = [
            'head_title' => 'Tab Layout',
            'breadcrumb_item' => 'Layout',
        ];
        return view( 'demo/layout-tab', $data );
    }
    public function layout_vertical() {
        $data = [
            'head_title' => 'Vertical Layout',
            'breadcrumb_item' => 'Layout',
        ];
        return view( 'demo/layout-vertical', $data );
    }


    // widget

    public function w_statistics() {
        $data = [
            'head_title' => 'Statistics',
            'breadcrumb_item' => 'Widget',
        ];
        return view( 'widget/w-statistics', $data );
    }

    public function w_data() {
        $data = [
            'head_title' => 'Data',
            'breadcrumb_item' => 'Widget',
        ];
        return view( 'widget/w-data', $data );
    }

    public function w_chart() {
        $data = [
            'head_title' => 'Chart',
            'breadcrumb_item' => 'Widget',
        ];
        return view( 'widget/w-chart', $data );
    }

    // admin panel
    public function course_dashboard() {
        $data = [
            'head_title' => 'Dashboard',
            'breadcrumb_item' => 'Online Courses',
        ];
        return view( 'admins/course-dashboard', $data );
    }
    public function course_teacher_list() {
        $data = [
            'head_title' => 'Teacher list',
            'breadcrumb_item' => 'Online Courses',
        ];
        return view( 'admins/course-teacher-list', $data );
    }
    public function course_teacher_apply() {
        $data = [
            'head_title' => 'Teacher Apply',
            'breadcrumb_item' => 'Online Courses',
        ];
        return view( 'admins/course-teacher-apply', $data );
    }
    public function course_teacher_add() {
        $data = [
            'head_title' => 'Teacher Add',
            'breadcrumb_item' => 'Online Courses',
        ];
        return view( 'admins/course-teacher-add', $data );
    }

    public function course_student_list() {
        $data = [
            'head_title' => 'Student list',
            'breadcrumb_item' => 'Online Courses',
        ];
        return view( 'admins/course-student-list', $data );
    }
    public function course_student_apply() {
        $data = [
            'head_title' => 'Student Apply',
            'breadcrumb_item' => 'Online Courses',
        ];
        return view( 'admins/course-student-apply', $data );
    }
    public function course_student_add() {
        $data = [
            'head_title' => 'Student Add',
            'breadcrumb_item' => 'Online Courses',
        ];
        return view( 'admins/course-student-add', $data );
    }

    public function course_course_view() {
        $data = [
            'head_title' => 'Course View',
            'breadcrumb_item' => 'Online Courses',
        ];
        return view( 'admins/course-course-view', $data );
    }
    public function course_course_add() {
        $data = [
            'head_title' => 'Course Add',
            'breadcrumb_item' => 'Online Courses',
        ];
        return view( 'admins/course-course-add', $data );
    }

    public function course_pricing() {
        $data = [
            'head_title' => 'Pricing',
            'breadcrumb_item' => 'Online Courses',
        ];
        return view( 'admins/course-pricing', $data );
    }
    public function course_site() {
        $data = [
            'head_title' => 'Site',
            'breadcrumb_item' => 'Online Courses',
        ];
        return view( 'admins/course-site', $data );
    }

    public function course_setting_payment() {
        $data = [
            'head_title' => 'Payment',
            'breadcrumb_item' => 'Online Courses',
        ];
        return view( 'admins/course-setting-payment', $data );
    }
    public function course_setting_pricing() {
        $data = [
            'head_title' => 'Pricing',
            'breadcrumb_item' => 'Online Courses',
        ];
        return view( 'admins/course-setting-pricing', $data );
    }
    public function course_setting_notifications() {
        $data = [
            'head_title' => 'Notifications',
            'breadcrumb_item' => 'Online Courses',
        ];
        return view( 'admins/course-setting-notifications', $data );
    }

    public function membership_dashboard() {
        $data = [
            'head_title' => 'Dashboard',
            'breadcrumb_item' => 'Membership',
        ];
        return view( 'admins/membership-dashboard', $data );
    }
    public function membership_list() {
        $data = [
            'head_title' => 'List',
            'breadcrumb_item' => 'Membership',
        ];
        return view( 'admins/membership-list', $data );
    }
    public function membership_pricing() {
        $data = [
            'head_title' => 'Pricing',
            'breadcrumb_item' => 'Membership',
        ];
        return view( 'admins/membership-pricing', $data );
    }
    public function membership_setting() {
        $data = [
            'head_title' => 'Setting',
            'breadcrumb_item' => 'Membership',
        ];
        return view( 'admins/membership-setting', $data );
    }

    public function helpdesk_dashboard() {
        $data = [
            'head_title' => 'Dashboard',
            'breadcrumb_item' => 'Helpdesk',
        ];
        return view( 'admins/helpdesk-dashboard', $data );
    }
    public function helpdesk_ticket_create() {
        $data = [
            'head_title' => 'Ticket Create',
            'breadcrumb_item' => 'Helpdesk',
        ];
        return view( 'admins/helpdesk-ticket-create', $data );
    }
    public function helpdesk_ticket() {
        $data = [
            'head_title' => 'Ticket List',
            'breadcrumb_item' => 'Helpdesk',
        ];
        return view( 'admins/helpdesk-ticket', $data );
    }
    public function helpdesk_ticket_details() {
        $data = [
            'head_title' => 'Ticket Details',
            'breadcrumb_item' => 'Helpdesk',
        ];
        return view( 'admins/helpdesk-ticket-details', $data );
    }
    public function helpdesk_customer() {
        $data = [
            'head_title' => 'Customer',
            'breadcrumb_item' => 'Helpdesk',
        ];
        return view( 'admins/helpdesk-customer', $data );
    }

    public function invoice() {
        $data = [
            'head_title' => 'Dashboard',
            'breadcrumb_item' => 'Invoice',
        ];
        return view( 'admins/invoice', $data );
    }

    public function invoice_create() {
        $data = [
            'head_title' => 'Create',
            'breadcrumb_item' => 'Invoice',
        ];
        return view( 'admins/invoice-create', $data );
    }
    public function invoice_view() {
        $data = [
            'head_title' => 'Details',
            'breadcrumb_item' => 'Invoice',
        ];
        return view( 'admins/invoice-view', $data );
    }
    public function invoice_list() {
        $data = [
            'head_title' => 'List',
            'breadcrumb_item' => 'Invoice',
        ];
        return view( 'admins/invoice-list', $data );
    }
    public function invoice_edit() {
        $data = [
            'head_title' => 'Edit',
            'breadcrumb_item' => 'Invoice',
        ];
        return view( 'admins/invoice-edit', $data );
    }

    // Application

    public function social_media() {
        $data = [
            'head_title' => 'User Profile',
            'breadcrumb_item' => 'Application',
        ];
        return view( 'application/social-media', $data );
    }

    public function account_profile() {
        $data = [
            'head_title' => 'Account Profile',
            'breadcrumb_item' => 'Users',
        ];
        return view( 'application/account-profile', $data );
    }

    public function cust_customer_list() {
        $data = [
            'head_title' => 'List',
            'breadcrumb_item' => 'Customer',
        ];
        return view( 'application/cust-customer-list', $data );
    }

    public function chat() {
        $data = [
            'head_title' => 'Chat',
            'breadcrumb_item' => 'Application',
        ];
        return view( 'application/chat', $data );
    }

    public function calendar() {
        $data = [
            'head_title' => 'Calendar',
            'breadcrumb_item' => 'Application',
            'plugin_title' => 'FullCalendar',
            'plugin_text' => 'Full-sized drag & drop event calendar in JavaScript',
            'plugin_link' => 'https://fullcalendar.io/',
        ];
        return view( 'application/calendar', $data );
    }

    public function file_manager() {
        $data = [
            'head_title' => 'File Manager',
            'breadcrumb_item' => 'Application',
        ];
        return view( 'application/file-manager', $data );
    }
    
    public function mail() {
        $data = [
            'head_title' => 'Mail',
            'breadcrumb_item' => 'Application',
        ];
        return view( 'application/mail', $data );
    }

    public function ecom_product() {
        $data = [
            'head_title' => 'Products',
            'breadcrumb_item' => 'E-commerce',
        ];
        return view( 'application/ecom-product', $data );
    }

    public function ecom_product_details() {
        $data = [
            'head_title' => 'Product details',
            'breadcrumb_item' => 'E-commerce',
        ];
        return view( 'application/ecom-product-details', $data );
    }

    public function ecom_product_list() {
        $data = [
            'head_title' => 'Product list',
            'breadcrumb_item' => 'E-commerce',
        ];
        return view( 'application/ecom-product-list', $data );
    }

    public function ecom_product_add() {
        $data = [
            'head_title' => 'Add New Product',
            'breadcrumb_item' => 'E-commerce',
        ];
        return view( 'application/ecom-product-add', $data );
    }

    public function ecom_checkout() {
        $data = [
            'head_title' => 'Checkout',
            'breadcrumb_item' => 'E-commerce',
        ];
        return view( 'application/ecom-checkout', $data );
    }

    // // Elements

    public function bc_alert() {
        $data = [
            'head_title' => 'Alerts',
            'breadcrumb_item' => 'Basic UI',
            'desc_text' => 'Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.',
            'desc_link' => 'https://getbootstrap.com/docs/5.2/components/alerts/'
        ];
        return view( 'elements/bc-alert', $data );
    }

    public function bc_button() {
        $data = [
            'head_title' => 'Button',
            'breadcrumb_item' => 'Basic UI',
            'desc_text' => 'Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.',
            'desc_link' => 'https://getbootstrap.com/docs/5.2/components/buttons/'
        ];
        return view( 'elements/bc-button', $data );
    }

    public function bc_badges() {
        $data = [
            'head_title' => 'Badges',
            'breadcrumb_item' => 'Basic UI',
            'desc_text' => 'Documentation and examples for badges, our small count and labeling component.',
            'desc_link' => 'https://getbootstrap.com/docs/5.2/components/badge/'
        ];
        return view( 'elements/bc-badges', $data );
    }

    public function bc_breadcrumb() {
        $data = [
            'head_title' => 'Breadcrumb',
            'breadcrumb_item' => 'Basic UI',
            'desc_text' => 'Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.',
            'desc_link' => 'https://getbootstrap.com/docs/5.2/components/breadcrumb/'
        ];
        return view( 'elements/bc-breadcrumb', $data );
    }

    public function bc_card() {
        $data = [
            'head_title' => 'Cards',
            'breadcrumb_item' => 'Basic UI',
            'desc_text' => 'Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.',
            'desc_link' => 'https://getbootstrap.com/docs/5.2/components/card/'
        ];
        return view( 'elements/bc-card', $data );
    }

    public function bc_color() {
        $data = [
            'head_title' => 'Color',
            'breadcrumb_item' => 'Basic UI',
            'desc_text' => 'Bootstrap is supported by an extensive color system that themes our styles and components. This enables more comprehensive customization and extension for any project.',
            'desc_link' => 'https://getbootstrap.com/docs/5.2/customize/color/'
        ];
        return view( 'elements/bc-color', $data );
    }

    public function bc_collapse() {
        $data = [
            'head_title' => 'Collapse',
            'breadcrumb_item' => 'Basic UI',
            'desc_text' => 'Toggle the visibility of content across your project with a few classes and our JavaScript plugins.',
            'desc_link' => 'https://getbootstrap.com/docs/5.2/components/collapse/'
        ];
        return view( 'elements/bc-collapse', $data );
    }

    public function bc_carousel() {
        $data = [
            'head_title' => 'Carousel',
            'breadcrumb_item' => 'Basic UI',
            'desc_text' => 'A slideshow component for cycling through elements—images or slides of text—like a carousel.',
            'desc_link' => 'https://getbootstrap.com/docs/5.2/components/carousel/'
        ];
        return view( 'elements/bc-carousel', $data );
    }

    public function bc_dropdowns() {
        $data = [
            'head_title' => 'Dropdowns',
            'breadcrumb_item' => 'Basic UI',
            'desc_text' => 'Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.',
            'desc_link' => 'https://getbootstrap.com/docs/5.2/components/dropdowns/'
        ];
        return view( 'elements/bc-dropdowns', $data );
    }

    public function bc_offcanvas() {
        $data = [
            'head_title' => 'Offcanvas',
            'breadcrumb_item' => 'Basic UI',
            'desc_text' => 'Build hidden sidebars into your project for navigation, shopping carts, and more with a few classes and our JavaScript plugin.',
            'desc_link' => 'https://getbootstrap.com/docs/5.2/components/offcanvas/'
        ];
        return view( 'elements/bc-offcanvas', $data );
    }

    public function bc_pagination() {
        $data = [
            'head_title' => 'Pagination',
            'breadcrumb_item' => 'Basic UI',
            'desc_text' => 'Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.',
            'desc_link' => 'https://getbootstrap.com/docs/5.3/components/pagination/'
        ];
        return view( 'elements/bc-pagination', $data );
    }

    public function bc_progress() {
        $data = [
            'head_title' => 'Progress',
            'breadcrumb_item' => 'Basic UI',
            'desc_text' => 'Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.',
            'desc_link' => 'https://getbootstrap.com/docs/5.2/components/progress/'
        ];
        return view( 'elements/bc-progress', $data );
    }

    public function bc_list_group() {
        $data = [
            'head_title' => 'List group',
            'breadcrumb_item' => 'Basic UI',
            'desc_text' => 'List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.',
            'desc_link' => 'https://getbootstrap.com/docs/5.2/components/list-group/'
        ];
        return view( 'elements/bc-list-group', $data );
    }

    public function bc_modal() {
        $data = [
            'head_title' => 'Modal',
            'breadcrumb_item' => 'Basic UI',
            'desc_text' => 'Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.',
            'desc_link' => 'https://getbootstrap.com/docs/5.2/components/modal/'
        ];
        return view( 'elements/bc-modal', $data );
    }

    public function bc_spinner() {
        $data = [
            'head_title' => 'Spinners',
            'breadcrumb_item' => 'Basic UI',
            'desc_text' => 'Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.',
            'desc_link' => 'https://getbootstrap.com/docs/5.2/components/spinners/'
        ];
        return view( 'elements/bc-spinner', $data );
    }

    public function bc_tooltip_popover() {
        $data = [
            'head_title' => 'Tooltip',
            'breadcrumb_item' => 'Basic UI',
            'desc_text' => 'Documentation and examples for adding custom Bootstrap tooltips with CSS and JavaScript using CSS3 for animations and data-bs-attributes for local title storage.',
            'desc_link' => 'https://getbootstrap.com/docs/5.2/components/tooltips/'
        ];
        return view( 'elements/bc-tooltip-popover', $data );
    }

    public function bc_tabs() {
        $data = [
            'head_title' => 'Tabs & Pills',
            'breadcrumb_item' => 'Basic UI',
            'desc_text' => 'Takes the basic nav from above and adds the .nav-tabs class to generate a tabbed interface.',
            'desc_link' => 'https://getbootstrap.com/docs/5.2/components/navs-tabs/'
        ];
        return view( 'elements/bc-tabs', $data );
    }

    public function bc_toasts() {
        $data = [
            'head_title' => 'Toasts',
            'breadcrumb_item' => 'Basic UI',
            'desc_text' => 'Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.',
            'desc_link' => 'https://getbootstrap.com/docs/5.2/components/toasts/'
        ];
        return view( 'elements/bc-toasts', $data );
    }

    public function bc_typography() {
        $data = [
            'head_title' => 'Typography',
            'breadcrumb_item' => 'Basic UI',
            'desc_text' => 'Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.',
            'desc_link' => 'https://getbootstrap.com/docs/5.2/content/typography/'
        ];
        return view( 'elements/bc-typography', $data );
    }

    public function bc_extra() {
        $data = [
            'head_title' => 'Utilities',
            'breadcrumb_item' => 'Basic UI',
            'desc_text' => 'The utility API is a Sass-based tool to generate utility classes.',
            'desc_link' => 'https://getbootstrap.com/docs/5.2/utilities/background/'
        ];
        return view( 'elements/bc-extra', $data );
    }

    public function ac_alert() {
        $data = [
            'head_title' => 'Sweet alert',
            'breadcrumb_item' => 'Basic UI',
            'desc_text' => 'A beautiful, responsive, customizable, accessible (WAI-ARIA) replacement for JavaScripts popup boxes',
            'desc_link' => 'https://sweetalert2.github.io/'
        ];
        return view( 'elements/ac-alert', $data );
    }

    public function ac_datepicker_component() {
        $data = [
            'head_title' => 'DatePicker',
            'breadcrumb_item' => 'Advance UI',
            'desc_text' => 'Bootstrap-datepicker provides a flexible datepicker widget in the Bootstrap style.',
            'desc_link' => 'https://bootstrap-datepicker.readthedocs.io/en/latest/'
        ];
        return view( 'elements/ac-datepicker-component', $data );
    }

    public function ac_lightbox() {
        $data = [
            'head_title' => 'Lightbox',
            'breadcrumb_item' => 'Advance UI',
            'desc_text' => 'Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes',
            'desc_link' => 'https://getbootstrap.com/docs/5.2/components/modal/'
        ];
        return view( 'elements/ac-lightbox', $data );
    }

    public function ac_modal() {
        $data = [
            'head_title' => 'Advance Modal',
            'breadcrumb_item' => 'Advance UI',
            'desc_text' => 'Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes or completely custom content',
            'desc_link' => 'https://getbootstrap.com/docs/5.2/components/modal/'
        ];
        return view( 'elements/ac-modal', $data );
    }

    public function ac_notification() {
        $data = [
            'head_title' => 'Notifications',
            'breadcrumb_item' => 'Advance UI',
            'desc_text' => 'Beautiful notifications with CSS and Vanilla JavaScript!',
            'desc_link' => 'https://csilva2810.github.io/notifier/docs/en/index.html'
        ];
        return view( 'elements/ac-notification', $data );
    }

    public function ac_rangeslider() {
        $data = [
            'head_title' => 'Range Slider',
            'breadcrumb_item' => 'Advance UI',
            'desc_text' => 'Create an input element in the DOM, and then create an instance of Slider',
            'desc_link' => 'https://seiyria.com/bootstrap-slider/'
        ];
        return view( 'elements/ac-rangeslider', $data );
    }

    public function ac_slider() {
        $data = [
            'head_title' => 'Slider',
            'breadcrumb_item' => 'Advance UI',
            'desc_text' => 'tiny-slider works with static content and it works in the browser only. If the HTML is loaded dynamically.',
            'desc_link' => 'http://ganlanyuan.github.io/tiny-slider/demo/'
        ];
        return view( 'elements/ac-slider', $data );
    }

    public function ac_syntax_highlighter() {
        $data = [
            'head_title' => 'Syntax Highlighter',
            'breadcrumb_item' => 'Advance UI',
            'desc_text' => 'Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind. It’s used in millions of websites, including some of those you visit daily.',
            'desc_link' => 'https://prismjs.com/'
        ];
        return view( 'elements/ac-syntax-highlighter', $data );
    }

    public function ac_tour() {
        $data = [
            'head_title' => 'Tour',
            'breadcrumb_item' => 'Advance UI',
            'desc_text' => 'Intro.js is a lightweight JavaScript library for creating step-by-step and powerful customer onboarding tours',
            'desc_link' => 'https://introjs.com/'
        ];
        return view( 'elements/ac-tour', $data );
    }

    public function ac_treeview() {
        $data = [
            'head_title' => 'Tree View',
            'breadcrumb_item' => 'Advance UI',
            'desc_text' => 'Standalone tree view library',
            'desc_link' => 'https://github.com/finom/vanillatree'
        ];
        return view( 'elements/ac-treeview', $data );
    }
    public function animation() {
        $data = [
            'head_title' => 'Animation',
            'breadcrumb_item' => 'UI Components',
            'plugin_title' => 'Animate',
            'plugin_text' => 'Animate.css is a library of ready-to-use, cross-browser animations for use in your web projects. Great for emphasis, home pages, sliders, and attention-guiding hints.',
            'plugin_link' => 'https://animate.style/',
        ];
        return view( 'elements/animation', $data );
    }
    
    public function icon_feather() {
        $data = [
            'head_title' => 'Feather Icon',
            'breadcrumb_item' => 'Icons',
        ];
        return view( 'elements/icon-feather', $data );
    }

    public function icon_fontawesome() {
        $data = [
            'head_title' => 'Font Awesome',
            'breadcrumb_item' => 'Icons',
        ];
        return view( 'elements/icon-fontawesome', $data );
    }

    public function icon_material() {
        $data = [
            'head_title' => 'Material Icons',
            'breadcrumb_item' => 'Icons',
        ];
        return view( 'elements/icon-material', $data );
    }

    public function icon_tabler() {
        $data = [
            'head_title' => 'Tabler Icons',
            'breadcrumb_item' => 'Icons',
        ];
        return view( 'elements/icon-tabler', $data );
    }
    
    public function icon_phosphor() {
        $data = [
            'head_title' => 'Phosphor Icon',
            'breadcrumb_item' => 'Icons',
        ];
        return view( 'elements/icon-phosphor', $data );
    }

    public function icon_custom() {
        $data = [
            'head_title' => 'Custom Icon',
            'breadcrumb_item' => 'Icons',
        ];
        return view( 'elements/icon-custom', $data );
    }

    // Forms

    public function form_elements() {
        $data = [
            'head_title' => 'Elements',
            'breadcrumb_item' => 'Forms',
        ];
        return view( 'forms/form-elements', $data );
    }

    public function form_floating() {
        $data = [
            'head_title' => 'Floating Label',
            'breadcrumb_item' => 'Forms',
        ];
        return view( 'forms/form-floating', $data );
    }

    public function form_basic() {
        $data = [
            'head_title' => 'Form Options',
            'breadcrumb_item' => 'Forms',
        ];
        return view( 'forms/form-basic', $data );
    }

    public function form_inputgroup() {
        $data = [
            'head_title' => 'Input Group',
            'breadcrumb_item' => 'Forms',
        ];
        return view( 'forms/form-inputgroup', $data );
    }

    public function form_checkbox() {
        $data = [
            'head_title' => 'Checkbox',
            'breadcrumb_item' => 'Forms',
        ];
        return view( 'forms/form-checkbox', $data );
    }

    public function form_radio() {
        $data = [
            'head_title' => 'Radio',
            'breadcrumb_item' => 'Forms',
        ];
        return view( 'forms/form-radio', $data );
    }

    public function form_switch() {
        $data = [
            'head_title' => 'Switch',
            'breadcrumb_item' => 'Forms',
        ];
        return view( 'forms/form-switch', $data );
    }

    public function form_megaoption() {
        $data = [
            'head_title' => 'Mega Option',
            'breadcrumb_item' => 'Forms',
        ];
        return view( 'forms/form-megaoption', $data );
    }

    public function form_datepicker() {
        $data = [
            'head_title' => 'Date Picker',
            'breadcrumb_item' => 'Forms',
            'plugin_title' => 'Date Picker',
            'plugin_text' => 'A vanilla JavaScript remake of bootstrap-datepicker is written from scratch as ECMAScript modules/Sass stylesheets to reproduce similar usability to bootstrap-datepicker.',
            'plugin_link' => 'https://mymth.github.io/vanillajs-datepicker/#/',
        ];
        return view( 'forms/form-datepicker', $data );
    }

    public function form_daterangepicker() {
        $data = [
            'head_title' => 'Date Range Picker',
            'breadcrumb_item' => 'Forms',
            'plugin_title' => 'Date Range Picker',
            'plugin_text' => 'flatpickr is a lightweight and powerful datetime picker. Lean, UX-driven, and extensible, yet it doesn’t depend on any libraries. There’s minimal UI but many themes. Rich, exposed APIs and event system make it suitable for any environment.',
            'plugin_link' => 'https://flatpickr.js.org/examples/',
        ];
        return view( 'forms/form-daterangepicker', $data );
    }

    public function form_timepicker() {
        $data = [
            'head_title' => 'Timepicker',
            'breadcrumb_item' => 'Forms',
            'plugin_title' => 'Time Picker',
            'plugin_text' => 'flatpickr is a lightweight and powerful datetime picker. Lean, UX-driven, and extensible, yet it doesn’t depend on any libraries. There’s minimal UI but many themes. Rich, exposed APIs and event system make it suitable for any environment.',
            'plugin_link' => 'https://flatpickr.js.org/examples/',
        ];
        return view( 'forms/form-timepicker', $data );
    }

    public function form_choices() {
        $data = [
            'head_title' => 'Choices',
            'breadcrumb_item' => 'Forms',
            'plugin_title' => 'Choices.js',
            'plugin_text' => 'Choices.js is a lightweight, configurable select box/text input plugin. Similar to Select2 and Selectize but without the jQuery dependency.',
            'plugin_link' => 'https://choices-js.github.io/Choices/',
        ];
        return view( 'forms/form-choices', $data );
    }
    
    public function form_rating() {
        $data = [
            'head_title' => 'Rating',
            'breadcrumb_item' => 'Forms',
            'plugin_title' => 'Rating',
            'plugin_text' => 'A zero-dependency ES6 module that transforms a SELECT with numerical-range values (i.e. 1-5) into a dynamic star rating element.',
            'plugin_link' => 'https://pryley.github.io/star-rating.js/',
        ];
        return view( 'forms/form-rating', $data );
    }
    public function form_recaptcha() {
        $data = [
            'head_title' => 'reCaptcha',
            'breadcrumb_item' => 'Forms',
            'plugin_title' => 'ReCaptcha',
            'plugin_text' => 'reCAPTCHA uses an advanced risk analysis engine and adaptive challenges to keep malicious software from engaging in abusive activities on your website.',
            'plugin_link' => 'https://www.google.com/recaptcha/about/',
        ];
        return view( 'forms/form-recaptcha', $data );
    }

    public function form_inputmask() {
        $data = [
            'head_title' => 'Input Mask',
            'breadcrumb_item' => 'Forms',
            'plugin_title' => 'Imask',
            'plugin_text' => 'vanilla javascript input mask wich Input processing is based on a simple idea of comparing states before and after change.',
            'plugin_link' => 'https://imask.js.org/',
        ];
        return view( 'forms/form-inputmask', $data );
    }

    public function form_clipboard() {
        $data = [
            'head_title' => 'Clipboard',
            'breadcrumb_item' => 'Forms',
            'plugin_title' => 'Clipboard.js',
            'plugin_text' => 'A modern approach to copy text to clipboard, Copying text to the clipboard shouldnt be hard. It shouldnt require dozens of steps to configure or hundreds of KBs to load.',
            'plugin_link' => 'https://clipboardjs.com/',
        ];
        return view( 'forms/form-clipboard', $data );
    }

    public function form_nouislider() {
        $data = [
            'head_title' => 'noUiSlider',
            'breadcrumb_item' => 'Forms',
            'plugin_title' => 'noUiSlider',
            'plugin_text' => 'noUiSlider is a lightweight range slider with multi-touch support and a ton of features. It supports non-linear ranges, requires no external dependencies, has keyboard support, and it works great in responsive designs.',
            'plugin_link' => 'https://refreshless.com/nouislider/',
        ];
        return view( 'forms/form-nouislider', $data );
    }

    public function form_switchjs() {
        $data = [
            'head_title' => 'Bootstrap Switch',
            'breadcrumb_item' => 'Forms',
            'plugin_title' => 'Bootstrap Switch Button',
            'plugin_text' => 'Bootstrap Switch Button is a widget that converts plain checkboxes into responsive switch buttons.',
            'plugin_link' => 'https://gitbrent.github.io/bootstrap-switch-button/',
        ];
        return view( 'forms/form-switchjs', $data );
    }

    public function form_typeahead() {
        $data = [
            'head_title' => 'TypeAhead',
            'breadcrumb_item' => 'Forms',
            'plugin_title' => 'typeahead.js',
            'plugin_text' => 'a flexible JavaScript library that provides a strong foundation for building robust typeaheads',
            'plugin_link' => 'https://twitter.github.io/typeahead.js/',
        ];
        return view( 'forms/form-typeahead', $data );
    }

    public function form_tinymce() {
        $data = [
            'head_title' => 'TinyMCE',
            'breadcrumb_item' => 'Forms',
            'plugin_title' => 'TinyMCE',
            'plugin_text' => 'Familiar content tools ready to use out-of-the-box, TinyMCE to add a fully-featured, sleek and intuitive rich text editor to your app in just a few lines of code.',
            'plugin_link' => 'https://www.tiny.cloud/',
        ];
        return view( 'forms/form-tinymce', $data );
    }

    public function form_quill() {
        $data = [
            'head_title' => 'Quill Editor',
            'breadcrumb_item' => 'Forms',
            'plugin_title' => 'Quill',
            'plugin_text' => 'The best way to get started is to try a simple example. Quill is initialized with a DOM element to contain the editor. The contents of that element will become the initial contents of Quill.',
            'plugin_link' => 'https://www.tiny.cloud/',
        ];
        return view( 'forms/form-quill', $data );
    }

    public function form_ck_classic() {
        $data = [
            'head_title' => 'Classic Editor',
            'breadcrumb_item' => 'Forms',
            'plugin_title' => 'CKEditor',
            'plugin_text' => 'CKEditor 5 allows users to create any type of content in your application, be it documents, reports, emails, notes or chat messages.',
            'plugin_link' => 'https://ckeditor.com/',
        ];
        return view( 'forms/form-ck-classic', $data );
    }

    public function form_ck_document() {
        $data = [
            'head_title' => 'Document Editor',
            'breadcrumb_item' => 'Forms',
            'plugin_title' => 'CKEditor',
            'plugin_text' => 'CKEditor 5 allows users to create any type of content in your application, be it documents, reports, emails, notes or chat messages.',
            'plugin_link' => 'https://ckeditor.com/',
        ];
        return view( 'forms/form-ck-document', $data );
    }

    public function form_ck_inline() {
        $data = [
            'head_title' => 'Inline Editor',
            'breadcrumb_item' => 'Forms',
            'plugin_title' => 'CKEditor',
            'plugin_text' => 'CKEditor 5 allows users to create any type of content in your application, be it documents, reports, emails, notes or chat messages.',
            'plugin_link' => 'https://ckeditor.com/',
        ];
        return view( 'forms/form-ck-inline', $data );
    }

    public function form_ck_balloon() {
        $data = [
            'head_title' => 'Balloon',
            'breadcrumb_item' => 'Forms',
            'plugin_title' => 'CKEditor',
            'plugin_text' => 'CKEditor 5 allows users to create any type of content in your application, be it documents, reports, emails, notes or chat messages.',
            'plugin_link' => 'https://ckeditor.com/',
        ];
        return view( 'forms/form-ck-balloon', $data );
    }

    public function form_markdown() {
        $data = [
            'head_title' => 'Markdown',
            'breadcrumb_item' => 'Forms',
            'plugin_title' => 'Markdown',
            'plugin_text' => 'SimpleMDE is a simple, embeddable, and beautiful JS markdown editor',
            'plugin_link' => 'https://simplemde.com/',
        ];
        return view( 'forms/form-markdown', $data );
    }

    public function form_lay_default() {
        $data = [
            'head_title' => 'Simple Form Layout',
            'breadcrumb_item' => 'Forms',
        ];
        return view( 'forms/form-lay-default', $data );
    }

    public function form_lay_multicolumn() {
        $data = [
            'head_title' => 'Multi Layout',
            'breadcrumb_item' => 'Forms',
        ];
        return view( 'forms/form-lay-multicolumn', $data );
    }

    public function form_lay_actionbars() {
        $data = [
            'head_title' => 'Action Bars',
            'breadcrumb_item' => 'Forms',
        ];
        return view( 'forms/form-lay-actionbars', $data );
    }

    public function form_lay_stickyactionbars() {
        $data = [
            'head_title' => 'Sticky Action Bar',
            'breadcrumb_item' => 'Forms',
        ];
        return view( 'forms/form-lay-stickyactionbars', $data );
    }

    public function form_file_upload() {
        $data = [
            'head_title' => 'File Upload',
            'breadcrumb_item' => 'Forms',
            'plugin_title' => 'Dropzone',
            'plugin_text' => 'Dropzone.js is one of the most popular drag and drop JavaScript libraries. It is free, fully open source, and makes it easy for you to handle dropped files on your website.',
            'plugin_link' => 'https://www.dropzone.dev/',
        ];
        return view( 'forms/form-file-upload', $data );
    }

    public function form_flu_uppy() {
        $data = [
            'head_title' => 'Uppy',
            'breadcrumb_item' => 'Forms',
            'plugin_title' => 'Uppy',
            'plugin_text' => 'Uppy fetches files locally and from remote places like Dropbox or Instagram. With its seamless integration, reliability and ease of use, Uppy is truly your best friend in file uploading.',
            'plugin_link' => 'https://uppy.io/',
        ];
        return view( 'forms/form-flu-uppy', $data );
    }
    
    public function form_wizard() {
        $data = [
            'head_title' => 'Form wizard',
            'breadcrumb_item' => 'Forms',
        ];
        return view( 'forms/form-wizard', $data );
    }

    public function form_validation() {
        $data = [
            'head_title' => 'Form Validation',
            'breadcrumb_item' => 'Forms',
            'plugin_title' => 'Bouncer',
            'plugin_text' => 'lightweight form validation script that augments native HTML5 form validation elements and attributes.',
            'plugin_link' => 'https://github.com/cferdinandi/bouncer',
        ];
        return view( 'forms/form-validation', $data );
    }

    public function form_image_crop() {
        $data = [
            'head_title' => 'Image Cropper',
            'breadcrumb_item' => 'Forms',
            'plugin_title' => 'Cropper',
            'plugin_text' => 'JavaScript image cropper for image or canvas element for cropping',
            'plugin_link' => 'https://fengyuanchen.github.io/cropperjs/',
        ];
        return view( 'forms/form-image-crop', $data );
    }

    // Table

    public function tbl_bootstrap() {
        $data = [
            'head_title' => 'Basic table',
            'breadcrumb_item' => 'Table',
        ];
        return view( 'table/tbl-bootstrap', $data );
    }

    public function tbl_sizing() {
        $data = [
            'head_title' => 'Sizing',
            'breadcrumb_item' => 'Table',
        ];
        return view( 'table/tbl-sizing', $data );
    }

    public function tbl_border() {
        $data = [
            'head_title' => 'Border Table',
            'breadcrumb_item' => 'Table',
        ];
        return view( 'table/tbl-border', $data );
    }

    public function tbl_styling() {
        $data = [
            'head_title' => 'Styling',
            'breadcrumb_item' => 'Table',
        ];
        return view( 'table/tbl-styling', $data );
    }

    public function tbl_dt_simple() {
        $data = [
            'head_title' => 'DataTable',
            'breadcrumb_item' => 'Table',
            'plugin_title' => 'Simple-datatables',
            'plugin_text' => 'A lightweight, extendable, JavaScript HTML table library written in TypeScript and transpilled to Vanilla JavaScript. Similar to jQuery DataTables for use in modern browsers, but without the jQuery dependency.',
            'plugin_link' => 'https://github.com/fiduswriter/simple-datatables',
        ];
        return view( 'table/tbl-dt-simple', $data );
    }

    public function tbl_dt_dynamic_import() {
        $data = [
            'head_title' => 'Dynamic Import',
            'breadcrumb_item' => 'Table',
            'plugin_title' => 'Simple-datatables',
            'plugin_text' => 'A lightweight, extendable, JavaScript HTML table library written in TypeScript and transpilled to Vanilla JavaScript. Similar to jQuery DataTables for use in modern browsers, but without the jQuery dependency.',
            'plugin_link' => 'https://github.com/fiduswriter/simple-datatables',
        ];
        return view( 'table/tbl-dt-dynamic-import', $data );
    }

    public function tbl_dt_render_column_cells() {
        $data = [
            'head_title' => 'Render Column Cells',
            'breadcrumb_item' => 'Table',
            'plugin_title' => 'Simple-datatables',
            'plugin_text' => 'A lightweight, extendable, JavaScript HTML table library written in TypeScript and transpilled to Vanilla JavaScript. Similar to jQuery DataTables for use in modern browsers, but without the jQuery dependency.',
            'plugin_link' => 'https://github.com/fiduswriter/simple-datatables',
        ];
        return view( 'table/tbl-dt-render-column-cells', $data );
    }

    public function tbl_dt_column_manipulation() {
        $data = [
            'head_title' => 'Column Manipulation',
            'breadcrumb_item' => 'Table',
            'plugin_title' => 'Simple-datatables',
            'plugin_text' => 'A lightweight, extendable, JavaScript HTML table library written in TypeScript and transpilled to Vanilla JavaScript. Similar to jQuery DataTables for use in modern browsers, but without the jQuery dependency.',
            'plugin_link' => 'https://github.com/fiduswriter/simple-datatables',
        ];
        return view( 'table/tbl-dt-column-manipulation', $data );
    }

    public function tbl_dt_datetime_sorting() {
        $data = [
            'head_title' => 'Sorting',
            'breadcrumb_item' => 'Table',
            'plugin_title' => 'Simple-datatables',
            'plugin_text' => 'A lightweight, extendable, JavaScript HTML table library written in TypeScript and transpilled to Vanilla JavaScript. Similar to jQuery DataTables for use in modern browsers, but without the jQuery dependency.',
            'plugin_link' => 'https://github.com/fiduswriter/simple-datatables',
        ];
        return view( 'table/tbl-dt-datetime-sorting', $data );
    }

    public function tbl_dt_methods() {
        $data = [
            'head_title' => 'Table Methods',
            'breadcrumb_item' => 'Table',
            'plugin_title' => 'Simple-datatables',
            'plugin_text' => 'A lightweight, extendable, JavaScript HTML table library written in TypeScript and transpilled to Vanilla JavaScript. Similar to jQuery DataTables for use in modern browsers, but without the jQuery dependency.',
            'plugin_link' => 'https://github.com/fiduswriter/simple-datatables',
        ];
        return view( 'table/tbl-dt-methods', $data );
    }

    public function tbl_dt_add_rows() {
        $data = [
            'head_title' => 'Add Row',
            'breadcrumb_item' => 'Table',
            'plugin_title' => 'Simple-datatables',
            'plugin_text' => 'A lightweight, extendable, JavaScript HTML table library written in TypeScript and transpilled to Vanilla JavaScript. Similar to jQuery DataTables for use in modern browsers, but without the jQuery dependency.',
            'plugin_link' => 'https://github.com/fiduswriter/simple-datatables',
        ];
        return view( 'table/tbl-dt-add-rows', $data );
    }

    public function tbl_dt_fetch_api() {
        $data = [
            'head_title' => 'Fetch API',
            'breadcrumb_item' => 'Table',
            'plugin_title' => 'Simple-datatables',
            'plugin_text' => 'A lightweight, extendable, JavaScript HTML table library written in TypeScript and transpilled to Vanilla JavaScript. Similar to jQuery DataTables for use in modern browsers, but without the jQuery dependency.',
            'plugin_link' => 'https://github.com/fiduswriter/simple-datatables',
        ];
        return view( 'table/tbl-dt-fetch-api', $data );
    }

    public function tbl_dt_filters() {
        $data = [
            'head_title' => 'Filters',
            'breadcrumb_item' => 'Table',
            'plugin_title' => 'Simple-datatables',
            'plugin_text' => 'A lightweight, extendable, JavaScript HTML table library written in TypeScript and transpilled to Vanilla JavaScript. Similar to jQuery DataTables for use in modern browsers, but without the jQuery dependency.',
            'plugin_link' => 'https://github.com/fiduswriter/simple-datatables',
        ];
        return view( 'table/tbl-dt-filters', $data );
    }

    public function tbl_dt_export() {
        $data = [
            'head_title' => 'Export',
            'breadcrumb_item' => 'Table',
            'plugin_title' => 'Simple-datatables',
            'plugin_text' => 'A lightweight, extendable, JavaScript HTML table library written in TypeScript and transpilled to Vanilla JavaScript. Similar to jQuery DataTables for use in modern browsers, but without the jQuery dependency.',
            'plugin_link' => 'https://github.com/fiduswriter/simple-datatables',
        ];
        return view( 'table/tbl-dt-export', $data );
    }

    public function dt_advance() {
        $data = [
            'head_title' => 'Advance Initialization',
            'breadcrumb_item' => 'DataTable',
            'plugin_title' => 'DataTables',
            'plugin_text' => 'DataTables is a Javascript HTML table enhancing library. It is a highly flexible tool, built upon the foundations of progressive enhancement, that adds all of these advanced features to any HTML table.',
            'plugin_link' => 'https://datatables.net/',

        ];
        return view( 'table/dt-advance', $data );
    }

    public function dt_styling() {
        $data = [
            'head_title' => 'DataTable Styling',
            'breadcrumb_item' => 'DataTable',
            'plugin_title' => 'DataTables',
            'plugin_text' => 'DataTables is a Javascript HTML table enhancing library. It is a highly flexible tool, built upon the foundations of progressive enhancement, that adds all of these advanced features to any HTML table.',
            'plugin_link' => 'https://datatables.net/',
        ];
        return view( 'table/dt-styling', $data );
    }

    public function dt_api() {
        $data = [
            'head_title' => 'API',
            'breadcrumb_item' => 'DataTable',
            'plugin_title' => 'DataTables',
            'plugin_text' => 'DataTables is a Javascript HTML table enhancing library. It is a highly flexible tool, built upon the foundations of progressive enhancement, that adds all of these advanced features to any HTML table.',
            'plugin_link' => 'https://datatables.net/',
        ];
        return view( 'table/dt-api', $data );
    }

    public function dt_plugin() {
        $data = [
            'head_title' => 'Plug-ins',
            'breadcrumb_item' => 'DataTable',
            'plugin_title' => 'DataTables',
            'plugin_text' => 'DataTables is a Javascript HTML table enhancing library. It is a highly flexible tool, built upon the foundations of progressive enhancement, that adds all of these advanced features to any HTML table.',
            'plugin_link' => 'https://datatables.net/',
        ];
        return view( 'table/dt-plugin', $data );
    }

    public function dt_sources() {
        $data = [
            'head_title' => 'Source Data',
            'breadcrumb_item' => 'DataTable',
            'plugin_title' => 'DataTables',
            'plugin_text' => 'DataTables is a Javascript HTML table enhancing library. It is a highly flexible tool, built upon the foundations of progressive enhancement, that adds all of these advanced features to any HTML table.',
            'plugin_link' => 'https://datatables.net/',
        ];
        return view( 'table/dt-sources', $data );
    }

    public function dt_ext_autofill() {
        $data = [
            'head_title' => 'AutoFill',
            'breadcrumb_item' => 'DataTable',
            'plugin_title' => 'DataTables Extensions',
            'plugin_text' => 'The features that DataTables provides can be greatly enhanced by the use of the plug-ins available on this page, which give many new user interaction and configuration options.',
            'plugin_link' => 'https://datatables.net/extensions/index',
        ];
        return view( 'table/dt-ext-autofill', $data );
    }

    public function dt_ext_basic_buttons() {
        $data = [
            'head_title' => 'Basic button',
            'breadcrumb_item' => 'DataTable',
            'plugin_title' => 'DataTables Extensions',
            'plugin_text' => 'The features that DataTables provides can be greatly enhanced by the use of the plug-ins available on this page, which give many new user interaction and configuration options.',
            'plugin_link' => 'https://datatables.net/extensions/index',
        ];
        return view( 'table/dt-ext-basic-buttons', $data );
    }

    public function dt_ext_export_buttons() {
        $data = [
            'head_title' => 'Export Button',
            'breadcrumb_item' => 'DataTable',
            'plugin_title' => 'DataTables Extensions',
            'plugin_text' => 'The features that DataTables provides can be greatly enhanced by the use of the plug-ins available on this page, which give many new user interaction and configuration options.',
            'plugin_link' => 'https://datatables.net/extensions/index',
        ];
        return view( 'table/dt-ext-export-buttons', $data );
    }

    public function dt_ext_col_reorder() {
        $data = [
            'head_title' => 'ColReorder',
            'breadcrumb_item' => 'DataTable',
            'plugin_title' => 'DataTables Extensions',
            'plugin_text' => 'The features that DataTables provides can be greatly enhanced by the use of the plug-ins available on this page, which give many new user interaction and configuration options.',
            'plugin_link' => 'https://datatables.net/extensions/index',
        ];
        return view( 'table/dt-ext-col-reorder', $data );
    }

    public function dt_ext_fixed_columns() {
        $data = [
            'head_title' => 'FixedColumns',
            'breadcrumb_item' => 'DataTable',
            'plugin_title' => 'DataTables Extensions',
            'plugin_text' => 'The features that DataTables provides can be greatly enhanced by the use of the plug-ins available on this page, which give many new user interaction and configuration options.',
            'plugin_link' => 'https://datatables.net/extensions/index',
        ];
        return view( 'table/dt-ext-fixed-columns', $data );
    }

    public function dt_ext_fixed_header() {
        $data = [
            'head_title' => 'FixedHeader',
            'breadcrumb_item' => 'DataTable',
            'plugin_title' => 'DataTables Extensions',
            'plugin_text' => 'The features that DataTables provides can be greatly enhanced by the use of the plug-ins available on this page, which give many new user interaction and configuration options.',
            'plugin_link' => 'https://datatables.net/extensions/index',
        ];
        return view( 'table/dt-ext-fixed-header', $data );
    }

    public function dt_ext_key_table() {
        $data = [
            'head_title' => 'KeyTable',
            'breadcrumb_item' => 'DataTable',
            'plugin_title' => 'DataTables Extensions',
            'plugin_text' => 'The features that DataTables provides can be greatly enhanced by the use of the plug-ins available on this page, which give many new user interaction and configuration options.',
            'plugin_link' => 'https://datatables.net/extensions/index',
        ];
        return view( 'table/dt-ext-key-table', $data );
    }

    public function dt_ext_responsive() {
        $data = [
            'head_title' => 'Responsive',
            'breadcrumb_item' => 'DataTable',
            'plugin_title' => 'DataTables Extensions',
            'plugin_text' => 'The features that DataTables provides can be greatly enhanced by the use of the plug-ins available on this page, which give many new user interaction and configuration options.',
            'plugin_link' => 'https://datatables.net/extensions/index',
        ];
        return view( 'table/dt-ext-responsive', $data );
    }

    public function dt_ext_row_reorder() {
        $data = [
            'head_title' => 'RowReorder',
            'breadcrumb_item' => 'DataTable',
            'plugin_title' => 'DataTables Extensions',
            'plugin_text' => 'The features that DataTables provides can be greatly enhanced by the use of the plug-ins available on this page, which give many new user interaction and configuration options.',
            'plugin_link' => 'https://datatables.net/extensions/index',
        ];
        return view( 'table/dt-ext-row-reorder', $data );
    }

    public function dt_ext_scroller() {
        $data = [
            'head_title' => 'Scroller',
            'breadcrumb_item' => 'DataTable',
            'plugin_title' => 'DataTables Extensions',
            'plugin_text' => 'The features that DataTables provides can be greatly enhanced by the use of the plug-ins available on this page, which give many new user interaction and configuration options.',
            'plugin_link' => 'https://datatables.net/extensions/index',
        ];
        return view( 'table/dt-ext-scroller', $data );
    }

    public function dt_ext_select() {
        $data = [
            'head_title' => 'Select',
            'breadcrumb_item' => 'DataTable',
            'plugin_title' => 'DataTables Extensions',
            'plugin_text' => 'The features that DataTables provides can be greatly enhanced by the use of the plug-ins available on this page, which give many new user interaction and configuration options.',
            'plugin_link' => 'https://datatables.net/extensions/index',
        ];
        return view( 'table/dt-ext-select', $data );
    }

    // Chart

    public function chart_apex() {
        $data = [
            'head_title' => 'Chart Apex',
            'breadcrumb_item' => 'Chart',
            'plugin_title' => 'ApexCharts',
            'plugin_text' => 'ApexCharts is a modern charting library that helps developers to create beautiful and interactive visualizations for web pages.',
            'plugin_link' => 'https://apexcharts.com/',
        ];
        return view( 'chart/chart-apex', $data );
    }
    public function chart_peity() {
        $data = [
            'head_title' => 'Chart Peity',
            'breadcrumb_item' => 'Chart',
            'plugin_title' => 'Peity Charts',
            'plugin_text' => 'Converts an elements content into a svg mini pie donut line or bar chart and is compatible with any browser that supports svg',
            'plugin_link' => 'https://github.com/railsjazz/peity_vanilla?',
        ];
        return view( 'chart/chart-peity', $data );
    }

    public function map_vector() {
        $data = [
            'head_title' => 'Vector Map',
            'breadcrumb_item' => 'Maps',
            'plugin_title' => 'Jsvectormap',
            'plugin_text' => 'Jsvectormap is a lightweight JavaScript library for creating interactive maps and pretty data visualization',
            'plugin_link' => 'https://github.com/themustafaomar/jsvectormap',
        ];
        return view( 'chart/map-vector', $data );
    }
    public function map_gmap() {
        $data = [
            'head_title' => 'Gmap',
            'breadcrumb_item' => 'Maps',
            'plugin_title' => 'Gmap',
            'plugin_text' => 'Converts an elements content into a svg mini pie donut line or bar chart and is compatible with any browser that supports svg',
            'plugin_link' => 'https://developers.google.com/maps/documentation/javascript/libraries',
        ];
        return view( 'chart/map-gmap', $data );
    }

    // Pages

    public function login_v1() {
        $data = [
            'head_title' => 'Login',
            'breadcrumb_item' => 'Authentication',
        ];
        return view( 'pages/login-v1', $data );
    }

    public function register_v1() {
        $data = [
            'head_title' => 'Register',
            'breadcrumb_item' => 'Authentication',
        ];
        return view( 'pages/register-v1', $data );
    }

    public function forgot_password_v1() {
        $data = [
            'head_title' => 'Forgot Password',
            'breadcrumb_item' => 'Authentication',
        ];
        return view( 'pages/forgot-password-v1', $data );
    }

    public function check_mail_v1() {
        $data = [
            'head_title' => 'Check Mail',
            'breadcrumb_item' => 'Authentication',
        ];
        return view( 'pages/check-mail-v1', $data );
    }

    public function reset_password_v1() {
        $data = [
            'head_title' => 'Reset Password',
            'breadcrumb_item' => 'Authentication',
        ];
        return view( 'pages/reset-password-v1', $data );
    }

    public function code_verification_v1() {
        $data = [
            'head_title' => 'Code Verification',
            'breadcrumb_item' => 'Authentication',
        ];
        return view( 'pages/code-verification-v1', $data );
    }

    public function login_v2() {
        $data = [
            'head_title' => 'Login',
            'breadcrumb_item' => 'Authentication',
        ];
        return view( 'pages/login-v2', $data );
    }

    public function register_v2() {
        $data = [
            'head_title' => 'Register',
            'breadcrumb_item' => 'Authentication',
        ];
        return view( 'pages/register-v2', $data );
    }

    public function forgot_password_v2() {
        $data = [
            'head_title' => 'Forgot Password',
            'breadcrumb_item' => 'Authentication',
        ];
        return view( 'pages/forgot-password-v2', $data );
    }

    public function check_mail_v2() {
        $data = [
            'head_title' => 'Check Mail',
            'breadcrumb_item' => 'Authentication',
        ];
        return view( 'pages/check-mail-v2', $data );
    }

    public function reset_password_v2() {
        $data = [
            'head_title' => 'Reset Password',
            'breadcrumb_item' => 'Authentication',
        ];
        return view( 'pages/reset-password-v2', $data );
    }

    public function code_verification_v2() {
        $data = [
            'head_title' => 'Code Verification',
            'breadcrumb_item' => 'Authentication',
        ];
        return view( 'pages/code-verification-v2', $data );
    }

    public function login_v3() {
        $data = [
            'head_title' => 'Login',
            'breadcrumb_item' => 'Authentication',
        ];
        return view( 'pages/login-v3', $data );
    }

    public function error_404() {
        $data = [
            'head_title' => 'Error 404',
            'breadcrumb_item' => 'Other',
        ];
        return view( 'pages/error-404', $data );
    }

    public function error_500() {
        $data = [
            'head_title' => 'Error 500',
            'breadcrumb_item' => 'Other',
        ];
        return view( 'pages/error-500', $data );
    }

    public function under_construction_v1() {
        $data = [
            'head_title' => 'Under Construction',
            'breadcrumb_item' => 'Other',
        ];
        return view( 'pages/under-construction-v1', $data );
    }

    public function under_construction_v2() {
        $data = [
            'head_title' => 'Under Construction',
            'breadcrumb_item' => 'Other',
        ];
        return view( 'pages/under-construction-v2', $data );
    }

    public function coming_soon_v1() {
        $data = [
            'head_title' => 'Coming Soon',
            'breadcrumb_item' => 'Other',
        ];
        return view( 'pages/coming-soon-v1', $data );
    }

    public function coming_soon_v2() {
        $data = [
            'head_title' => 'Coming Soon',
            'breadcrumb_item' => 'Other',
        ];
        return view( 'pages/coming-soon-v2', $data );
    }

    public function contact_us() {
        $data = [
            'head_title' => 'Contact us',
            'breadcrumb_item' => 'Other',
        ];
        return view( 'pages/contact-us', $data );
    }

    public function price_v1() {
        $data = [
            'head_title' => 'Pricing',
            'breadcrumb_item' => 'Other',
        ];
        return view( 'pages/price-v1', $data );
    }

    public function price_v2() {
        $data = [
            'head_title' => 'Pricing',
            'breadcrumb_item' => 'Other',
        ];
        return view( 'pages/price-v2', $data );
    }

    public function landing() {
        $data = [
            'head_title' => 'Landing',
            'breadcrumb_item' => 'Other',
        ];
        return view( 'pages/landing', $data );
    }

    // other

    public function sample_page() {
        $data = [
            'head_title' => 'Sample Page',
            'breadcrumb_item' => 'Dashboard'
        ];
        return view( 'other/sample-page', $data );
    }
}
