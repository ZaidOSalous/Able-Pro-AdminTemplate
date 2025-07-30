<script>
  import Breadcrumb from '../../../../lib/Components/Layouts/Partials/Breadcrumb.svelte';
  import dropzone from '$lib/assets/dropzone.js';
  import quill from '$lib/assets/quill.js';

  let quill_options = {
    modules: {
      toolbar: [
        [
          {
            header: [1, 2, false]
          }
        ],
        ['bold', 'italic', 'underline'],
        ['image', 'code-block']
      ]
    },
    placeholder: 'Type your text here...',
    theme: 'snow'
  };
</script>

<svelte:head>
  <title>Create Ticket | Able Pro Dashboard Template</title>
  <link rel="stylesheet" href="/node_modules/dropzone/dist/dropzone.css" />
  <link rel="stylesheet" href="/node_modules/quill/dist/quill.core.css" />
  <link rel="stylesheet" href="/node_modules/quill/dist/quill.snow.css" />
  <link rel="stylesheet" href="/node_modules/quill/dist/quill.bubble.css" />
</svelte:head>

<!-- [ Main Content ] start -->
<div class="pc-container">
  <div class="pc-content">
    <!-- [ breadcrumb ] start -->
    <Breadcrumb item="Helpdesk" itemActive="Create Ticket" />
    <!-- [ breadcrumb ] end -->

    <!-- [ Main Content ] start -->
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-body">
            <div class="container">
              <div class="row">
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label class="form-label">Customer</label>
                    <select class="mb-3 form-select">
                      <option>Default select</option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label class="form-label">Category</label>
                    <select class="mb-3 form-select">
                      <option>Default select</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label" for="exampleInputPassword1">Subject</label>
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Subject" />
              </div>
              <div class="mb-3">
                <label class="form-label" for="exampleInputPassword1">Description</label>
                <div id="tinymce-editor" style="height: 150px" use:quill={quill_options}>
                  <p>hello..</p>
                </div>
              </div>
              <form action="../assets/json/file-upload.php" class="dropzone" use:dropzone={'/admins/helpdesk-create-ticket'}>
                <div class="fallback">
                  <input name="file" type="file" multiple />
                </div>
              </form>
              <div class="text-end mt-4">
                <button type="submit" class="btn btn-outline-secondary">Clear</button>
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- [ Main Content ] end -->
  </div>
</div>
