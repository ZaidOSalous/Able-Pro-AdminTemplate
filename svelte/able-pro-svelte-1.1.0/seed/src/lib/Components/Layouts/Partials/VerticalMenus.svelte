<script>
  import VerticalMenus from './VerticalMenus.svelte';
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { layoutStore } from '../../../stores/layoutStore';
  export let menuList = [];
  import { writable } from 'svelte/store';
  import { slide } from 'svelte/transition';
  let initalExpandedMenus = [];
  menuList.forEach((menu) => {
    if (menu.submenu) {
      menu.submenu.forEach((item) => {
        if (isActive(item)) {
          initalExpandedMenus.push(item);
        }
      });
    }
  });
  const expandedMenus = writable(initalExpandedMenus);

  function isActive(item) {
    if (item.link === $page.url.pathname) {
      return true;
    }
    if (item?.submenu) {
      for (let i = 0; i < item.submenu.length; i++) {
        if (item.submenu[i].link === $page.url.pathname) {
          return true;
        }
      }
      return false;
    }
    return false;
  }

  function toggleMenu(item) {
    expandedMenus.update((current) => {
      console.log(current);

      if (current.includes(item)) {
        return current.filter((i) => i !== item);
      } else {
        return [item];
      }
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
          class={`pc-item ${menu.submenu ? 'pc-hasmenu' : ''} ${isActive(menu) ? 'active' : ''} ${$expandedMenus.includes(menu) ? 'pc-trigger' : ''}`}
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
          {#if menu.submenu && $expandedMenus.includes(menu)}
            <ul transition:slide={{ duration: 500 }} class="pc-submenu" style="display:block">
              <VerticalMenus menuList={menu.submenu} />
            </ul>
          {/if}
        </li>
      {/if}
    {:else}
      <li class={`pc-item ${isActive(menu) ? 'active' : ''}`} data-menu-id={menu.id}>
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
