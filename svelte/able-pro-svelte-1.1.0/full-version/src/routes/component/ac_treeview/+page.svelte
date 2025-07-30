<script>
  import { onMount } from 'svelte';
  import ComponentBreadcrumb from '$lib/Components/Layouts/Partials/ComponentBreadcrumb.svelte';
  import 'animate.css/animate.min.css';
  import '$lib/assets/css/uikit.css';
  import VanillaTree from 'vanillatree/vanillatree.min.js?client';

  onMount(() => {
    const main = document.querySelector('#tree-demo');
    const info = document.querySelector('#tree-msg');

    const tree = new VanillaTree(main, {
      contextmenu: [
        {
          label: 'Hey',
          action: function (id) {
            alert('Hey ' + id);
          }
        },
        {
          label: 'Blah',
          action: function (id) {
            alert('Blah ' + id);
          }
        }
      ]
    });

    tree.add({
      label: 'Label A',
      id: 'a',
      opened: true
    });

    tree.add({
      label: 'Label B',
      id: 'b'
    });

    tree.add({
      label: 'Label A.A',
      parent: 'a',
      id: 'a.a',
      opened: true,
      selected: true
    });

    tree.add({
      label: 'Label A.A.A',
      parent: 'a.a'
    });

    tree.add({
      label: 'Label A.A.B',
      parent: 'a.a'
    });

    tree.add({
      label: 'Label B.A',
      parent: 'b'
    });

    main.addEventListener('vtree-open', function (evt) {
      info.innerHTML = evt.detail.id + ' is opened';
    });

    main.addEventListener('vtree-close', function (evt) {
      info.innerHTML = evt.detail.id + ' is closed';
    });

    main.addEventListener('vtree-select', function (evt) {
      info.innerHTML = evt.detail.id + ' is selected';
    });
  });
</script>

<svelte:head>
  <title>Able | Able Pro Dashboard Template</title>
</svelte:head>

<div class="row">
  <!-- prettier-ignore -->
  <ComponentBreadcrumb
						title={'Tree View'}
						text={'Standalone tree view library'}
						link={'https://github.com/finom/vanillatree'}
					/>
</div>
<!-- [ Main Content ] start -->
<div class="row">
  <!-- [ rangeslider ] start -->
  <div class="col-sm-12">
    <div class="card">
      <div class="card-header">
        <h5>HTML Demo</h5>
      </div>
      <div class="card-body">
        <div id="tree-demo"></div>
        <p id="tree-msg"></p>
      </div>
    </div>
  </div>
  <!-- [ rangeslider ] end -->
</div>
