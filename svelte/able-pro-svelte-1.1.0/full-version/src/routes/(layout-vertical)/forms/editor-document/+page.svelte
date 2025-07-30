<script>
  import { onMount } from 'svelte';
  import '../../../../lib/assets/css/ckeditor.css';
  import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document?client';
  import Breadcrumb from '../../../../lib/Components/Layouts/Partials/Breadcrumb.svelte';
  onMount(() => {
    DecoupledEditor.create(document.querySelector('.document-editor__editable'))
      .then((editor) => {
        const toolbarContainer = document.querySelector('.document-editor__toolbar');
        toolbarContainer.appendChild(editor.ui.view.toolbar.element);
      })
      .catch((error) => {});
  });
</script>

<svelte:head>
  <title>Document Ckeditor | Able Pro Dashboard Template</title>
</svelte:head>

<!-- [ Main Content ] start -->
<div class="pc-container">
  <div class="pc-content">
    <!-- [ breadcrumb ] start -->
    <Breadcrumb item="Forms" itemActive="Document Editor" />
    <!-- [ breadcrumb ] end -->

    <!-- [ Main Content ] start -->
    <div class="row">
      <!-- prettier-ignore -->
      <div class="col-md-10 col-xxl-9 mb-4">
            <h5>CKEditor</h5>
            <p class="text-muted">CKEditor 5 allows users to create any type of content in your application, be it documents, reports, emails, notes or chat messages.</p>
            <div>
              <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank" href="https://ckeditor.com/">
                <i class="ti ti-external-link me-1"></i>
                Reference
              </a>
            </div>
          </div>
    </div>
    <div class="row">
      <!-- [ Classic-editor ] start -->
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h5>Document Editor</h5>
          </div>
          <div class="card-body">
            <div class="document-editor">
              <div class="document-editor__toolbar"></div>
              <div class="document-editor__editable-container">
                <div class="document-editor__editable">
                  <h2 style="text-align: center">The Flavorful Tuscany Meetup</h2>
                  <h3 style="text-align: center">Welcome letter</h3>
                  <p>Dear Guest,</p>
                  <p>
                    We are delighted to welcome you to the annual <i>Flavorful Tuscany Meetup</i>
                    and hope you will enjoy the programmer as well as your stay at the
                    <a href="http://ckeditor.com">Bilancino Hotel</a>.
                  </p>
                  <p>Please find below the full schedule of the event.</p>
                  <figure class="table ck-widget ck-widget_selectable" contenteditable="false">
                    <table>
                      <thead>
                        <tr>
                          <th class="ck-editor__editable ck-editor__nested-editable" contenteditable="true" colspan="2"
                            >Saturday, July 14</th
                          >
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="ck-editor__editable ck-editor__nested-editable" contenteditable="true"
                            >9:30&nbsp;AM&nbsp;-&nbsp;11:30&nbsp;AM
                          </td>
                          <td class="ck-editor__editable ck-editor__nested-editable" contenteditable="true"
                            >Americano vs. Brewed - “know coffee” with <strong>Stefano Garau</strong></td
                          >
                        </tr>
                        <tr>
                          <td class="ck-editor__editable ck-editor__nested-editable" contenteditable="true"
                            >1:00&nbsp;PM&nbsp;-&nbsp;3:00&nbsp;PM
                          </td>
                          <td class="ck-editor__editable ck-editor__nested-editable" contenteditable="true"
                            >Pappardelle al pomodoro - <mark class="marker-yellow">live cooking</mark>
                            with
                            <strong>Rita</strong>
                          </td>
                        </tr>
                        <tr>
                          <td class="ck-editor__editable ck-editor__nested-editable" contenteditable="true"
                            >5:00&nbsp;PM&nbsp;-&nbsp;8:00&nbsp;PM
                          </td>
                          <td class="ck-editor__editable ck-editor__nested-editable" contenteditable="true"
                            >Tuscan vineyards at a glancewith <strong>Frederico Riscoli</strong></td
                          >
                        </tr>
                      </tbody>
                    </table>
                  </figure>
                  <blockquote>
                    <p>
                      The annual Flavorful Tuscany meetups are always a culinary discovery. You get the best of Tuscan flavors during an
                      intense one-day stay at one of the top hotels of the region. All the sessions are lead by top chefs passionate about
                      their profession. I would certainly recommend to save the date in your calendar for this one!
                    </p>
                    <p>Angelina Calvino, food journalist</p>
                  </blockquote>
                  <p>
                    Please arrive at the <a href="http://ckeditor.com">Bilancino Hotel</a> reception desk
                    <mark class="marker-yellow">at least half an hour earlier</mark> to make sure that the registration process goes as smoothly
                    as possible.
                  </p>
                  <p>We look forward to welcoming you to the event.</p>
                  <p><strong>Victoria Valc</strong></p>
                  <p><strong>Event Manager</strong></p>
                  <p><strong>Bilancino Hotel</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- [ Classic-editor ] end -->
    </div>
    <!-- [ Main Content ] end -->
  </div>
</div>

<!-- [ Main Content ] end -->
<!-- [Page specific CSS] start -->
