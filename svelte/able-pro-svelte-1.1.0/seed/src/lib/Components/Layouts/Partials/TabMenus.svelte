<script>
  export let menuList = [];
  import { activeTab } from '$lib/stores/activeMenuStore';

  function updateActiveTab(tab) {
    activeTab.update((current) => {
      return tab;
    });
  }
</script>

{#each menuList as menu}
  <li class="nav-item" data-bs-toggle="tooltip" role="presentation" aria-label="Widget" data-bs-original-title="Widget">
    <a
      on:click={() => updateActiveTab(menu.submenu)}
      class={`nav-link`}
      id="pc-tab-link-2"
      data-bs-target="#pc-tab-2"
      role="tab"
      data-bs-toggle="tab"
      aria-controls="home-tab-pane"
      data-bs-placement="right"
      aria-selected="false"
      tabindex="-1"
      href="#!"
    >
      <svg class="pc-icon">
        <use xlink:href={menu.icon}></use>
      </svg>
    </a>
  </li>
{/each}
