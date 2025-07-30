<script>
  import HorizontalMenus from './HorizontalMenus.svelte';
  export let menu = [];
</script>

<ul class="pc-submenu">
  {#each menu as item}
    <li class={`pc-item ${item?.submenu ? 'pc-hasmenu' : ''}`}>
      <a href={item?.link ?? '#!'} class="pc-link">
        {#if item.icon}
          <span class="pc-micon">
            <svg class="pc-icon">
              <use xlink:href={item.icon}></use>
            </svg>
          </span>
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
