<script>
  import CompactSubMenu from './CompactSubMenu.svelte';
  import { slide } from 'svelte/transition';
  import { activeMenu } from '$lib/stores/activeMenuStore';

  export let item = [];
  function toggleMenu(menu) {
    if ($activeMenu === menu.id) {
      activeMenu.update((current) => {
        return null;
      });
    } else {
      activeMenu.update((current) => {
        return menu.id;
      });
    }
  }

  function isActive(item) {
    if (item.id === $activeMenu) return true;
    if (item?.submenu) {
      if (item.submenu.find((i) => i.id === $activeMenu)) return true;
      let found = false;
      for (let i = 0; i < item.submenu.length; i++) {
        if (item.submenu[i].submenu) {
          found = isActive(item.submenu[i]);
        }
      }
      return found;
    }
    return false;
  }
</script>

<li class={`pc-item ${item.submenu ? 'pc-hasmenu' : ''} ${$activeMenu && isActive(item) ? 'pc-trigger' : ''}`}>
  <a on:click={() => toggleMenu(item)} href={item.link ? item.link : ''} class="pc-link">
    {item.name}
    {#if item.badge}
      <span class="pc-badge">{item.badge}</span>
    {/if}
    {#if item.submenu}
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
  </a>
  {#if item.submenu && $activeMenu && isActive(item)}
    <ul transition:slide={{ duration: 500 }} class="pc-submenu" style="display:block; box-sizing: border-box;">
      {#each item.submenu as subitem}
        <CompactSubMenu item={subitem} />
      {/each}
    </ul>
  {/if}
</li>
