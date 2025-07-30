<script>
  import VerticalMenus from './VerticalMenus.svelte';
  import { page } from '$app/stores';
  export let menuList = [];
  import { slide } from 'svelte/transition';
  import { activeMenu } from '$lib/stores/activeMenuStore';

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

  function hasMenuOpen(item) {
    if (item.id === $activeMenu) {
      return true;
    }
    if (item?.submenu) {
      if (item.submenu.find((i) => i.id === $activeMenu)) return true;
      for (let i = 0; i < item.submenu.length; i++) {
        if (item.submenu[i].submenu && isActive(item.submenu[i])) {
          return true;
        }
      }
      return false;
    }
    return false;
  }

  function toggleMenu(item) {
    activeMenu.update((current) => {
      return current === item.id ? null : item.id;
    });
  }
</script>

{#if menuList?.length !== 0}
  {#each menuList as menu}
    {#if menu.submenu}
      {#if menu?.level === 1}
        <li class="pc-item pc-caption">
          <label for="">{menu.name}</label>
          {#if menu.icon}
            <svg class="pc-icon">
              <use xlink:href={menu.icon}></use>
            </svg>
          {/if}
        </li>
        <VerticalMenus menuList={menu.submenu} />
      {:else}
        <li
          class={`pc-item ${menu.submenu ? 'pc-hasmenu' : ''} ${$page.url && isActive(menu) ? 'active pc-trigger' : ''} `}
          data-menu-id={menu.id}
        >
          <a on:click|preventDefault={() => toggleMenu(menu)} href={menu.link ? menu.link : ''} class="pc-link">
            {#if menu.icon}
              <span class="pc-micon">
                <svg class="pc-icon">
                  <use xlink:href={menu.icon}></use>
                </svg>
              </span>
            {/if}
            <span class="pc-mtext">{menu.name}</span>
            {#if menu.submenu}
              <span class="pc-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg
                >
              </span>
            {/if}
            {#if menu.badge}
              <span class="pc-badge">{menu.badge}</span>
            {/if}
          </a>
          {#if $activeMenu ? hasMenuOpen(menu) : $page.url && isActive(menu)}
            <ul transition:slide={{ duration: 500 }} class="pc-submenu" style="display:block">
              <VerticalMenus menuList={menu.submenu} />
            </ul>
          {/if}
        </li>
      {/if}
    {:else}
      <li class={`pc-item ${$page.url && isActive(menu) ? 'active' : ''}`} data-menu-id={menu.id}>
        <a href={menu.link ? menu.link : ''} class="pc-link">
          {#if menu.icon}
            <span class="pc-micon">
              <svg class="pc-icon">
                <use xlink:href={menu.icon}></use>
              </svg>
            </span>
          {/if}
          <span class="pc-mtext">{menu.name}</span>
          {#if menu.submenu}
            <span class="pc-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg
              >
            </span>
          {/if}
          {#if menu.badge}
            <span class="pc-badge">{menu.badge}</span>
          {/if}
        </a>
      </li>
    {/if}
  {/each}
{/if}
