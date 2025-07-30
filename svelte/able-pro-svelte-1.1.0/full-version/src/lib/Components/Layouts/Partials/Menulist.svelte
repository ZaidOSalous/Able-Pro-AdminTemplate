<script>
  import { layoutStore } from '../../../stores/layoutStore';
  import CompactMenus from './CompactMenus.svelte';
  import HorizontalMenus from './HorizontalMenus.svelte';
  import TabMenus from './TabMenus.svelte';
  import VerticalMenus from './VerticalMenus.svelte';
  import { activeTab } from '$lib/stores/activeMenuStore';
  import { onMount } from 'svelte';
  export let menuList = [];
  import { page } from '$app/stores';
  onMount(() => {
    menuList.forEach((menu) => {
      if (isActiveTab(menu)) {
        activeTab.update((current) => {
          return menu.submenu;
        });
      }
    });
  });

  function isActiveTab(item) {
    if (item.link === $page.url.pathname) return true;
    if (item?.submenu) {
      if (item.submenu.find((i) => i.link === $page.url.pathname)) return true;
      for (let i = 0; i < item.submenu.length; i++) {
        if (item.submenu[i].submenu && isActiveTab(item.submenu[i])) {
          return true;
        }
      }
      return false;
    }
    return false;
  }
</script>

{#if $layoutStore?.themeLayout === 'horizontal'}
  {#each menuList as menu}
    <li class="pc-item pc-hasmenu">
      <a href="#!" class="pc-link">
        {#if menu.icon}
          <span class="pc-micon"><svg class="pc-icon"> <use xlink:href={menu.icon}></use></svg></span>
        {/if}
        <span class="pc-mtext">{menu.name}</span>
      </a>
      <ul class="pc-submenu">
        {#each menu.submenu as item}
          <li class="pc-item pc-hasmenu">
            <a href={item.link ?? '#!'} class="pc-link">
              {#if item.icon}
                <span class="pc-micon"><svg class="pc-icon"> <use xlink:href={item.icon}></use></svg></span>
              {/if}
              <span class="pc-mtext">{item.name}</span>
              {#if item.submenu}
                <span class="pc-arrow"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-chevron-right"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline></svg
                  ></span
                >
              {/if}
              {#if item.badge}
                <span class="pc-badge">{item.badge}</span>
              {/if}
            </a>
            {#if item.submenu}
              <HorizontalMenus menu={item.submenu} />
            {/if}
          </li>
        {/each}
      </ul>
    </li>
  {/each}
{:else if $layoutStore?.themeLayout === 'compact'}
  <CompactMenus {menuList} />
{:else if $layoutStore?.themeLayout === 'tab'}
  <div class="tab-sidemenu">
    <ul class="pc-tab-link nav flex-column" role="tablist" id="pc-layout-submenus">
      <TabMenus {menuList} />
    </ul>
  </div>
  <div class="tab-link">
    <div class="navbar-content" data-simplebar="init">
      <div style="padding: 10px 0px;">
        <ul class="pc-navbar">
          {#if $activeTab}
            <VerticalMenus menuList={$activeTab} />
          {/if}
        </ul>
      </div>
    </div>
  </div>
{:else}
  <VerticalMenus {menuList} />
{/if}
