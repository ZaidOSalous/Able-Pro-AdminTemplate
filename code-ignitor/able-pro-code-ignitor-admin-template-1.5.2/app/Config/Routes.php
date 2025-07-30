<?php

namespace Config;

// Create a new instance of our RouteCollection class.
$routes = Services::routes();

// Load the system's routing file first, so that the app and ENVIRONMENT
// can override as needed.
if (is_file(SYSTEMPATH . 'Config/Routes.php')) {
    require SYSTEMPATH . 'Config/Routes.php';
}

/*
 * --------------------------------------------------------------------
 * Router Setup
 * --------------------------------------------------------------------
 */
$routes->setDefaultNamespace('App\Controllers');
$routes->setDefaultController('Home');
$routes->setDefaultMethod('index');
$routes->setTranslateURIDashes(false);
$routes->set404Override();
// The Auto Routing (Legacy) is very dangerous. It is easy to create vulnerable apps
// where controller filters or CSRF protection are bypassed.
// If you don't want to define all routes, please use the Auto Routing (Improved).
// Set `$autoRoutesImproved` to true in `app/Config/Feature.php` and set the following to true.
//$routes->setAutoRoute(false);

/*
 * --------------------------------------------------------------------
 * Route Definitions
 * --------------------------------------------------------------------
 */

// We get a performance increase by specifying the default
// route since we don't have to scan directories.
$routes->get('/', 'Home::index');

// Dashboard
$routes->get('/dashboard-default', 'Home::dashboard_default');
$routes->get('/dashboard-analytics', 'Home::dashboard_analytics');
$routes->get('/dashboard-finance', 'Home::dashboard_finance');

// Layout
$routes->get('/layout-horizontal', 'Home::layout_horizontal');
$routes->get('/layout-compact', 'Home::layout_compact');
$routes->get('/layout-color-header', 'Home::layout_color_header');
$routes->get('/layout-tab', 'Home::layout_tab');
$routes->get('/layout-vertical', 'Home::layout_vertical');

// Widget
$routes->get('/w-statistics', 'Home::w_statistics');
$routes->get('/w-data', 'Home::w_data');
$routes->get('/w-chart', 'Home::w_chart');

// admin panel
$routes->get('/course-dashboard', 'Home::course_dashboard');

$routes->get('/course-teacher-list', 'Home::course_teacher_list');
$routes->get('/course-teacher-apply', 'Home::course_teacher_apply');
$routes->get('/course-teacher-add', 'Home::course_teacher_add');

$routes->get('/course-student-list', 'Home::course_student_list');
$routes->get('/course-student-apply', 'Home::course_student_apply');
$routes->get('/course-student-add', 'Home::course_student_add');

$routes->get('/course-course-view', 'Home::course_course_view');
$routes->get('/course-course-add', 'Home::course_course_add');

$routes->get('/course-pricing', 'Home::course_pricing');
$routes->get('/course-site', 'Home::course_site');

$routes->get('/course-setting-payment', 'Home::course_setting_payment');
$routes->get('/course-setting-pricing', 'Home::course_setting_pricing');
$routes->get('/course-setting-notifications', 'Home::course_setting_notifications');

$routes->get('/membership-dashboard', 'Home::membership_dashboard');
$routes->get('/membership-list', 'Home::membership_list');
$routes->get('/membership-pricing', 'Home::membership_pricing');
$routes->get('/membership-setting', 'Home::membership_setting');

$routes->get('/helpdesk-dashboard', 'Home::helpdesk_dashboard');
$routes->get('/helpdesk-ticket-create', 'Home::helpdesk_ticket_create');
$routes->get('/helpdesk-ticket', 'Home::helpdesk_ticket');
$routes->get('/helpdesk-ticket-details', 'Home::helpdesk_ticket_details');
$routes->get('/helpdesk-customer', 'Home::helpdesk_customer');

$routes->get('/invoice', 'Home::invoice');
$routes->get('/invoice-create', 'Home::invoice_create');
$routes->get('/invoice-view', 'Home::invoice_view');
$routes->get('/invoice-list', 'Home::invoice_list');
$routes->get('/invoice-edit', 'Home::invoice_edit');

// Application
$routes->get('/chat', 'Home::chat');
$routes->get('/calendar', 'Home::calendar');

$routes->get('/file-manager', 'Home::file_manager');

$routes->get('/mail', 'Home::mail');

$routes->get('/cust-customer-list', 'Home::cust_customer_list');

$routes->get('/social-media', 'Home::social_media');
$routes->get('/account-profile', 'Home::account_profile');

$routes->get('/ecom-product', 'Home::ecom_product');
$routes->get('/ecom-product-details', 'Home::ecom_product_details');
$routes->get('/ecom-product-list', 'Home::ecom_product_list');
$routes->get('/ecom-product-add', 'Home::ecom_product_add');
$routes->get('/ecom-checkout', 'Home::ecom_checkout');

// Elements 
$routes->get('/bc-alert', 'Home::bc_alert'); 
$routes->get('/bc-button', 'Home::bc_button'); 
$routes->get('/bc-badges', 'Home::bc_badges'); 
$routes->get('/bc-breadcrumb', 'Home::bc_breadcrumb'); 
$routes->get('/bc-card', 'Home::bc_card'); 
$routes->get('/bc-color', 'Home::bc_color'); 
$routes->get('/bc-collapse', 'Home::bc_collapse'); 
$routes->get('/bc-carousel', 'Home::bc_carousel'); 
$routes->get('/bc-dropdowns', 'Home::bc_dropdowns'); 
$routes->get('/bc-offcanvas', 'Home::bc_offcanvas'); 
$routes->get('/bc-pagination', 'Home::bc_pagination'); 
$routes->get('/bc-progress', 'Home::bc_progress'); 
$routes->get('/bc-list-group', 'Home::bc_list_group'); 
$routes->get('/bc-modal', 'Home::bc_modal'); 
$routes->get('/bc-spinner', 'Home::bc_spinner');
$routes->get('/bc-tabs', 'Home::bc_tabs');
$routes->get('/bc-tooltip-popover', 'Home::bc_tooltip_popover');
$routes->get('/bc-toasts', 'Home::bc_toasts');
$routes->get('/bc-typography', 'Home::bc_typography');
$routes->get('/bc-extra', 'Home::bc_extra');

$routes->get('/ac-alert', 'Home::ac_alert');
$routes->get('/ac-datepicker-component', 'Home::ac_datepicker_component');
$routes->get('/ac-lightbox', 'Home::ac_lightbox');
$routes->get('/ac-modal', 'Home::ac_modal');
$routes->get('/ac-notification', 'Home::ac_notification');
$routes->get('/ac-rangeslider', 'Home::ac_rangeslider');
$routes->get('/ac-slider', 'Home::ac_slider');
$routes->get('/ac-syntax_highlighter', 'Home::ac_syntax_highlighter');
$routes->get('/ac-tour', 'Home::ac_tour');
$routes->get('/ac-treeview', 'Home::ac_treeview');

$routes->get('/animation', 'Home::animation');

$routes->get('/icon-feather', 'Home::icon_feather');
$routes->get('/icon-fontawesome', 'Home::icon_fontawesome');
$routes->get('/icon-material', 'Home::icon_material');
$routes->get('/icon-tabler', 'Home::icon_tabler');
$routes->get('/icon-phosphor', 'Home::icon_phosphor');
$routes->get('/icon-custom', 'Home::icon_custom');

// Forms
$routes->get('/form-elements', 'Home::form_elements');
$routes->get('/form-floating', 'Home::form_floating');
$routes->get('/form-basic', 'Home::form_basic');
$routes->get('/form-inputgroup', 'Home::form_inputgroup');
$routes->get('/form-checkbox', 'Home::form_checkbox');
$routes->get('/form-radio', 'Home::form_radio');
$routes->get('/form-switch', 'Home::form_switch');
$routes->get('/form-megaoption', 'Home::form_megaoption');

$routes->get('/form-datepicker', 'Home::form_datepicker');
$routes->get('/form-daterangepicker', 'Home::form_daterangepicker');
$routes->get('/form-timepicker', 'Home::form_timepicker');
$routes->get('/form-choices', 'Home::form_choices');
$routes->get('/form-rating', 'Home::form_rating');
$routes->get('/form-recaptcha', 'Home::form_recaptcha');
$routes->get('/form-inputmask', 'Home::form_inputmask');
$routes->get('/form-clipboard', 'Home::form_clipboard');
$routes->get('/form-nouislider', 'Home::form_nouislider');
$routes->get('/form-switchjs', 'Home::form_switchjs');
$routes->get('/form-typeahead', 'Home::form_typeahead');

$routes->get('/form-tinymce', 'Home::form_tinymce');
$routes->get('/form-quill', 'Home::form_quill');
$routes->get('/form-ck-classic', 'Home::form_ck_classic');
$routes->get('/form-ck-document', 'Home::form_ck_document');
$routes->get('/form-ck-inline', 'Home::form_ck_inline');
$routes->get('/form-ck-balloon', 'Home::form_ck_balloon');
$routes->get('/form-markdown', 'Home::form_markdown');

$routes->get('/form-lay-default', 'Home::form_lay_default');
$routes->get('/form-lay-multicolumn', 'Home::form_lay_multicolumn');
$routes->get('/form-lay-actionbars', 'Home::form_lay_actionbars');
$routes->get('/form-lay-stickyactionbars', 'Home::form_lay_stickyactionbars');

$routes->get('/form-file-upload', 'Home::form_file_upload');
$routes->get('/form-flu-uppy', 'Home::form_flu_uppy');
$routes->get('/form-wizard', 'Home::form_wizard');
$routes->get('/form-validation', 'Home::form_validation');
$routes->get('/form-image-crop', 'Home::form_image_crop');

// Table
$routes->get('tbl-bootstrap', 'Home::tbl_bootstrap');
$routes->get('tbl-sizing', 'Home::tbl_sizing');
$routes->get('tbl-border', 'Home::tbl_border');
$routes->get('tbl-styling', 'Home::tbl_styling');

$routes->get('tbl-dt-simple', 'Home::tbl_dt_simple');
$routes->get('tbl-dt-dynamic-import', 'Home::tbl_dt_dynamic_import');
$routes->get('tbl-dt-render-column-cells', 'Home::tbl_dt_render_column_cells');
$routes->get('tbl-dt-column-manipulation', 'Home::tbl_dt_column_manipulation');
$routes->get('tbl-dt-datetime-sorting', 'Home::tbl_dt_datetime_sorting');
$routes->get('tbl-dt-methods', 'Home::tbl_dt_methods');
$routes->get('tbl-dt-add-rows', 'Home::tbl_dt_add_rows');
$routes->get('tbl-dt-fetch-api', 'Home::tbl_dt_fetch_api');
$routes->get('tbl-dt-filters', 'Home::tbl_dt_filters');
$routes->get('tbl-dt-export', 'Home::tbl_dt_export');

$routes->get('dt-advance', 'Home::dt_advance');
$routes->get('dt-styling', 'Home::dt_styling');
$routes->get('dt-api', 'Home::dt_api');
$routes->get('dt-plugin', 'Home::dt_plugin');
$routes->get('dt-sources', 'Home::dt_sources');

$routes->get('dt-ext-autofill', 'Home::dt_ext_autofill');
$routes->get('dt-ext-basic-buttons', 'Home::dt_ext_basic_buttons');
$routes->get('dt-ext-export-buttons', 'Home::dt_ext_export_buttons');
$routes->get('dt-ext-col-reorder', 'Home::dt_ext_col_reorder');
$routes->get('dt-ext-fixed-columns', 'Home::dt_ext_fixed_columns');
$routes->get('dt-ext-fixed-header', 'Home::dt_ext_fixed_header');
$routes->get('dt-ext-key-table', 'Home::dt_ext_key_table');
$routes->get('dt-ext-responsive', 'Home::dt_ext_responsive');
$routes->get('dt-ext-row-reorder', 'Home::dt_ext_row_reorder');
$routes->get('dt-ext-scroller', 'Home::dt_ext_scroller');
$routes->get('dt-ext-select', 'Home::dt_ext_select');

// chart
$routes->get('chart-apex', 'Home::chart_apex');
$routes->get('chart-peity', 'Home::chart_peity');
$routes->get('map-vector', 'Home::map_vector');
$routes->get('map-gmap', 'Home::map_gmap');

// Pages
$routes->get('login-v1', 'Home::login_v1');
$routes->get('register-v1', 'Home::register_v1');
$routes->get('forgot-password-v1', 'Home::forgot_password_v1');
$routes->get('check-mail-v1', 'Home::check_mail_v1');
$routes->get('reset-password-v1', 'Home::reset_password_v1');
$routes->get('code-verification-v1', 'Home::code_verification_v1');
$routes->get('login-v2', 'Home::login_v2');
$routes->get('register-v2', 'Home::register_v2');
$routes->get('forgot-password-v2', 'Home::forgot_password_v2');
$routes->get('check-mail-v2', 'Home::check_mail_v2');
$routes->get('reset-password-v2', 'Home::reset_password_v2');
$routes->get('code-verification-v2', 'Home::code_verification_v2');
$routes->get('login-v3', 'Home::login_v3');

$routes->get('error-404', 'Home::error_404');
$routes->get('error-500', 'Home::error_500');
$routes->get('under-construction-v1', 'Home::under_construction_v1');
$routes->get('under-construction-v2', 'Home::under_construction_v2');
$routes->get('coming-soon-v1', 'Home::coming_soon_v1');
$routes->get('coming-soon-v2', 'Home::coming_soon_v2');

$routes->get('contact-us', 'Home::contact_us');

$routes->get('price-v1', 'Home::price_v1');
$routes->get('price-v2', 'Home::price_v2');

$routes->get('landing', 'Home::landing');

//Other
$routes->get('/sample-page', 'Home::sample_page');


/*
 * --------------------------------------------------------------------
 * Additional Routing
 * --------------------------------------------------------------------
 *
 * There will often be times that you need additional routing and you
 * need it to be able to override any defaults in this file. Environment
 * based routes is one such time. require() additional route files here
 * to make that happen.
 *
 * You will have access to the $routes object within that file without
 * needing to reload it.
 */
if (is_file(APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php')) {
    require APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php';
}
