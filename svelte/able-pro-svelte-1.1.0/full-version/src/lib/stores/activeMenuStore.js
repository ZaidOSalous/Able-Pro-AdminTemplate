import { get, writable } from 'svelte/store';

export const isMenuOpen = writable(null);

export const activeMenu = writable(null);

export const activeTab = writable(null);
