<script>
  export let menuList = [];
  import { activeTab } from '$lib/stores/activeMenuStore';
  import { page } from '$app/stores';
  function updateActiveTab(tab) {
    activeTab.update((current) => {
      return tab;
    });
  }

  function isActive(item) {
    if (item.link === $page.url.pathname) {
      return true;
    }
    if (item?.submenu) {
      if (item.submenu.find((i) => i.link === $page.url.pathname)) return true;
      for (let i = 0; i < item.submenu.length; i++) {
        if (item.submenu[i].submenu && isActive(item.submenu[i])) {
          return true;
        }
      }
      return false;
    }
    return false;
  }
</script>

{#each menuList as menu}
  <li class="nav-item" data-bs-toggle="tooltip" role="presentation" aria-label="Widget" data-bs-original-title="Widget">
    <a
      on:click={() => updateActiveTab(menu.submenu)}
      class={`nav-link ${$page.url && isActive(menu) ? 'active' : 'not-active'}`}
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
