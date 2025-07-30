import { onDestroy } from 'svelte';

export default function simpleBar(node) {
  let simpleBarInstance;

  // Dynamically import SimpleBar to ensure it's only loaded client-side
  import('simplebar').then(({ default: SimpleBar }) => {
    simpleBarInstance = new SimpleBar(node);
  });

  // Cleanup
  onDestroy(() => {
    simpleBarInstance?.unMount();
  });

  return {
    // If there are any updates needed, you can define an update method here
    update() {},
    destroy() {
      // Cleanup logic here
      simpleBarInstance?.unMount();
    }
  };
}
