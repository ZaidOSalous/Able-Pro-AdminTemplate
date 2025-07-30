<script>
  let ArrowIcon;
  if (process.browser) {
    import('svelte-feather-icons').then((module) => {
      ArrowIcon = module.ArrowRightIcon;
    });
  }
</script>

{#if ArrowIcon}
  <svelte:component this={ArrowIcon} />
{/if}
