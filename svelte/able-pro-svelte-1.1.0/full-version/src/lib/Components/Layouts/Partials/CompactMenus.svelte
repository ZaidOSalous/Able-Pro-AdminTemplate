<script>
  import { browser } from '$app/environment';
  import { slide } from 'svelte/transition';
  import { activeMenu } from '$lib/stores/activeMenuStore';
  import CompactSubMenu from './CompactSubMenu.svelte';
  import { page } from '$app/stores';

  export let menuList = [];

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

  $: if ($activeMenu) {
    // set Compact layout
    document.body.classList.add('pc-compact-submenu-active');
    document.querySelector('.pc-sidebar').classList.add('pc-compact-submenu-active');
  } else if (browser) {
    // remove Compact layout
    document.body.classList.remove('pc-compact-submenu-active');
    document.querySelector('.pc-sidebar').classList.remove('pc-compact-submenu-active');
  }
</script>

{#each menuList as menu}
  <li
    class={`pc-item ${menu.submenu ? 'pc-hasmenu' : ''} ${$page.url && isActive(menu) ? 'active' : ''} ${$activeMenu && hasMenuOpen(menu) ? 'pc-trigger' : ''}`}
    data-menu-id={menu.id}
  >
    <a
      on:click|preventDefault={() => toggleMenu(menu)}
      href={menu.link ? menu.link : ''}
      class="pc-link"
      data-bs-toggle="tooltip"
      data-bs-title="Default tooltip"
    >
      {#if menu.icon}
        <span class="pc-micon">
          <svg class="pc-icon">
            <use xlink:href={menu.icon}></use>
          </svg>
        </span>
      {/if}
      <span class="pc-mtext">{menu.name}</span>
      {#if menu.badge}
        <span class="pc-badge">{menu.badge}</span>
      {/if}
    </a>
    {#if menu.submenu && $activeMenu ? hasMenuOpen(menu) : $page.url && isActive(menu)}
      <ul transition:slide={{ duration: 500 }} class="pc-submenu" style="display:block; box-sizing: border-box;">
        {#each menu.submenu as item}
          <CompactSubMenu {item} />
        {/each}
      </ul>
    {/if}
  </li>
{/each}
