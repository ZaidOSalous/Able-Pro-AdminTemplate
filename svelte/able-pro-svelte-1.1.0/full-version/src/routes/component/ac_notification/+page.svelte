<script>
  import { onMount } from 'svelte';
  import ComponentBreadcrumb from '$lib/Components/Layouts/Partials/ComponentBreadcrumb.svelte';
  import 'notifier-js/dist/css/notifier.css';
  import '$lib/assets/css/uikit.css';

  import notifier from 'notifier-js/dist/js/notifier.js?client';
  onMount(() => {
    document.querySelector('#btn-default').addEventListener('click', function () {
      notifier.show('Hello!', 'I am a default notification.', '', '', 0);
    });

    document.querySelector('#btn-info').addEventListener('click', function () {
      notifier.show('Reminder!', 'You have a meeting at 10:30 AM.', 'info', '', 0);
    });

    document.querySelector('#btn-success').addEventListener('click', function () {
      notifier.show('Well Done!', 'You just submit your resume successfully.', 'success', '', 0);
    });

    document.querySelector('#btn-warning').addEventListener('click', function () {
      notifier.show('Warning!', 'The data presented here can be change.', 'warning', '', 0);
    });

    document.querySelector('#btn-danger').addEventListener('click', function () {
      notifier.show('Sorry!', 'Could not complete your transaction.', 'danger', '', 0);
    });

    document.querySelector('#btn-default-i').addEventListener('click', function () {
      notifier.show('Default!', 'I am a default notification.', '', '../assets/images/notification/clock-48.png', 0);
    });

    document.querySelector('#btn-info-i').addEventListener('click', function () {
      notifier.show('Reminder!', 'You have a meeting at 10:30 AM.', 'info', '../assets/images/notification/survey-48.png', 0);
    });

    document.querySelector('#btn-success-i').addEventListener('click', function () {
      notifier.show('Well Done!', 'You just submit your resume successfully.', 'success', '../assets/images/notification/ok-48.png', 0);
    });

    document.querySelector('#btn-warning-i').addEventListener('click', function () {
      notifier.show(
        'Warning!',
        'The data presented here can be change.',
        'warning',
        '../assets/images/notification/medium_priority-48.png',
        0
      );
    });

    document.querySelector('#btn-danger-i').addEventListener('click', function () {
      notifier.show('Sorry!', 'Could not complete your transaction.', 'danger', '../assets/images/notification/high_priority-48.png', 0);
    });

    document.querySelector('#btn-default-ac').addEventListener('click', function () {
      notifier.show('Default!', 'I am a default notification.', '', '../assets/images/notification/clock-48.png', 4000);
    });

    document.querySelector('#btn-info-ac').addEventListener('click', function () {
      notifier.show('Reminder!', 'You have a meeting at 10:30 AM.', 'info', '../assets/images/notification/survey-48.png', 4000);
    });

    document.querySelector('#btn-success-ac').addEventListener('click', function () {
      notifier.show('Well Done!', 'You just submit your resume successfully.', 'success', '../assets/images/notification/ok-48.png', 4000);
    });

    document.querySelector('#btn-warning-ac').addEventListener('click', function () {
      notifier.show(
        'Warning!',
        'The data presented here can be change.',
        'warning',
        '../assets/images/notification/medium_priority-48.png',
        4000
      );
    });

    document.querySelector('#btn-danger-ac').addEventListener('click', function () {
      notifier.show('Sorry!', 'Could not complete your transaction.', 'danger', '../assets/images/notification/high_priority-48.png', 4000);
    });

    var notificationId;
    var showNotification = function () {
      notificationId = notifier.show(
        'Reminder!',
        'You have a meeting at 10:30 AM.',
        'info',
        '../assets/images/notification/survey-48.png',
        4000
      );
    };

    var hideNotification = function () {
      notifier.hide(notificationId);
    };

    document.querySelector('#btn-nt-show').addEventListener('click', showNotification);

    document.querySelector('#btn-nt-hide').addEventListener('click', hideNotification);
  });
</script>

<svelte:head>
  <title>Sweet alert | Able Pro Dashboard Template</title>
</svelte:head>

<div class="row">
  <!-- prettier-ignore -->
  <ComponentBreadcrumb
						title={'Notifications'}
						text={'Beautiful notifications with CSS and Vanilla JavaScript!'}
						link={'https://csilva2810.github.io/notifier/docs/en/index.html'}
					/>
</div>
<!-- [ Main Content ] start -->
<div class="row">
  <!-- [ single-light ] start -->
  <div class="col-sm-12">
    <div class="card">
      <div class="card-header">
        <h5>Notification Alert</h5>
      </div>
      <div class="card-body btn-page">
        <button type="button" class="btn btn-primary" id="btn-default">Default</button>
        <button type="button" class="btn btn-info" id="btn-info">Info</button>
        <button type="button" class="btn btn-success" id="btn-success">Success</button>
        <button type="button" class="btn btn-warning" id="btn-warning">Warning</button>
        <button type="button" class="btn btn-danger" id="btn-danger">Danger</button>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h5>Notification with Icons</h5>
      </div>
      <div class="card-body btn-page">
        <button type="button" class="btn btn-primary" id="btn-default-i">Default</button>
        <button type="button" class="btn btn-info" id="btn-info-i">Info</button>
        <button type="button" class="btn btn-success" id="btn-success-i">Success</button>
        <button type="button" class="btn btn-warning" id="btn-warning-i">Warning</button>
        <button type="button" class="btn btn-danger" id="btn-danger-i">Danger</button>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h5>Auto Close Notifications</h5>
      </div>
      <div class="card-body btn-page">
        <button type="button" class="btn btn-primary" id="btn-default-ac">Default</button>
        <button type="button" class="btn btn-info" id="btn-info-ac">Info</button>
        <button type="button" class="btn btn-success" id="btn-success-ac">Success</button>
        <button type="button" class="btn btn-warning" id="btn-warning-ac">Warning</button>
        <button type="button" class="btn btn-danger" id="btn-danger-ac">Danger</button>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h5>Using the notification.hide() method</h5>
      </div>
      <div class="card-body btn-page">
        <button type="button" class="btn btn-primary" id="btn-nt-show">Show Notification</button>
        <button type="button" class="btn btn-danger" id="btn-nt-hide">Hide Notification</button>
      </div>
    </div>
  </div>
  <!-- [ single-light ] end -->
</div>
