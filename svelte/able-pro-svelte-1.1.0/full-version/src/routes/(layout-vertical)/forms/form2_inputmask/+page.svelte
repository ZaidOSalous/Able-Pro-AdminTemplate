<script>
  import Breadcrumb from '../../../../lib/Components/Layouts/Partials/Breadcrumb.svelte';
  import mask from '$lib/assets/inputmask.js';

  let date = { mask: '00-00-0000' };

  let hour = { mask: '00:00:00' };

  let dateHour = { mask: '00/00/0000 00:00:00' };

  let mob_no = { mask: '0000-000-000' };

  let phone = { mask: '0000-0000' };

  let telphone_with_code = { mask: '(00) 0000-0000' };

  let us_telephone = { mask: '(000) 000-0000' };

  let ip = { mask: '000.000.000.000' };

  let ipv4 = { mask: '000.000.000.0000' };

  let ipv6 = { mask: '0000:0000:0000:0:000:0000:0000:0000' };
</script>

<svelte:head>
  <title>Input Mask | Able Pro Dashboard Template</title>
</svelte:head>

<!-- [ Main Content ] start -->
<div class="pc-container">
  <div class="pc-content">
    <!-- [ breadcrumb ] start -->
    <Breadcrumb item="Forms" itemActive="Input Mask" />
    <!-- [ breadcrumb ] end -->

    <!-- [ Main Content ] start -->
    <div class="row">
      <!-- prettier-ignore -->
      <div class="col-md-10 col-xxl-9 mb-4">
            <h5>Imask</h5>
            <p class="text-muted">vanilla javascript input mask wich Input processing is based on a simple idea of comparing states before and after change.</p>
            <div>
              <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank" href="https://imask.js.org/">
                <i class="ti ti-external-link me-1"></i>
                Reference
              </a>
            </div>
          </div>
    </div>
    <div class="row">
      <!-- [ date-form ] start -->
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h5>Date</h5>
            <span class="d-block m-t-5">Add class of <code>.date</code> with <code>data-mask</code> attribute</span>
          </div>
          <div class="card-body">
            <form>
              <div class="mb-3 row">
                <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Insert Date 1</label>
                <div class="col-lg-6 col-md-12 col-sm-12">
                  <input type="text" class="form-control date" data-mask="99/99/9999" use:mask={date} />
                </div>
              </div>
              <div class="row">
                <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Insert Date 2</label>
                <div class="col-lg-6 col-md-12 col-sm-12">
                  <input type="text" class="form-control date2" data-mask="99-99-9999" use:mask={date} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- [ date-form ] end -->
      <!-- [ Time-form ] start -->
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h5>Time</h5>
            <span class="d-block m-t-5">Add class of <code>.hour</code> with <code>data-mask</code> attribute</span>
          </div>
          <div class="card-body">
            <form>
              <div class="mb-3 row">
                <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Hour</label>
                <div class="col-lg-6 col-md-12 col-sm-12">
                  <input type="text" class="form-control hour" data-mask="99:99:99" use:mask={hour} />
                </div>
              </div>
              <div class="row">
                <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Date & Hour</label>
                <div class="col-lg-6 col-md-12 col-sm-12">
                  <input type="text" class="form-control dateHour" data-mask="99/99/9999 99:99:99" use:mask={dateHour} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- [ Time-form ] end -->
      <!-- [ phone-number ] start -->
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h5>Phone no.</h5>
            <span class="d-block m-t-5">Add class of <code>.mob_no</code> with <code>data-mask</code> attribute</span>
          </div>
          <div class="card-body">
            <form>
              <div class="mb-3 row">
                <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Mobile No.</label>
                <div class="col-lg-6 col-md-12 col-sm-12">
                  <input type="text" class="form-control mob_no" data-mask="9999-999-999" use:mask={mob_no} />
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Telephone</label>
                <div class="col-lg-6 col-md-12 col-sm-12">
                  <input type="text" class="form-control phone" data-mask="9999-9999" use:mask={phone} />
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">Tel. with Code Area</label>
                <div class="col-lg-6 col-md-12 col-sm-12">
                  <input type="text" class="form-control telphone_with_code" data-mask="(99) 9999-9999" use:mask={telphone_with_code} />
                </div>
              </div>
              <div class="row">
                <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">US Telephone</label>
                <div class="col-lg-6 col-md-12 col-sm-12">
                  <input type="text" class="form-control us_telephone" data-mask="(999) 999-9999" use:mask={us_telephone} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- [ phone-number ] end -->
      <!-- [ network ] start -->
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h5>Network</h5>
            <span class="d-block m-t-5">Add class of <code>.ip</code> with <code>data-mask</code> attribute</span>
          </div>
          <div class="card-body">
            <form>
              <div class="mb-3 row">
                <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">IP Address</label>
                <div class="col-lg-6 col-md-12 col-sm-12">
                  <input type="text" class="form-control ip" data-mask="999.999.999.999" use:mask={ip} />
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">IPV4</label>
                <div class="col-lg-6 col-md-12 col-sm-12">
                  <input type="text" class="form-control ipv4" data-mask="99/99/9999 99:99:99" use:mask={ipv4} />
                </div>
              </div>
              <div class="row">
                <label class="col-form-label col-lg-3 col-sm-12 text-lg-end">IPV6</label>
                <div class="col-lg-6 col-md-12 col-sm-12">
                  <input type="text" class="form-control ipv6" data-mask="9999:9999:9999:9:999:9999:9999:9999" use:mask={ipv6} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- [ network ] end -->
    </div>
    <!-- [ Main Content ] end -->
  </div>
</div>
<!-- [ Main Content ] end -->
