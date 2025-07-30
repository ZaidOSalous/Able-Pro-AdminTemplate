import { get, writable } from 'svelte/store';
import { browser } from '$app/environment';

const defaultLayout = {
  themeVersion: 'v1.1.0',
  themePreset: 'preset-1', // [ preset-1 to preset-10 ]
  captionShow: 'yes', // [ 'yes' , 'no' ]
  themeLayout: 'vertical', // [ vertical, horizontal, color-header, compact, tab ]
  themeDirection: 'ltr', // [ 'rtl' , 'ltr' ]
  themeContrast: 'no', // [ 'yes' , 'no' ]
  themeMode: 'light', // [ "light", "dark" ]
  boxContainer: 'no' // [ 'yes' , 'no' ]
};

const initialLayout = browser
  ? {
      themeVersion: localStorage.getItem('themeVersion') || defaultLayout.themeVersion,
      themePreset: localStorage.getItem('themePreset') || defaultLayout.themePreset,
      captionShow: localStorage.getItem('captionShow') || defaultLayout.captionShow,
      themeLayout: localStorage.getItem('themeLayout') || defaultLayout.themeLayout,
      themeDirection: localStorage.getItem('themeDirection') || defaultLayout.themeDirection,
      themeContrast: localStorage.getItem('themeContrast') || defaultLayout.themeContrast,
      themeMode: localStorage.getItem('themeMode') || defaultLayout.themeMode,
      boxContainer: localStorage.getItem('boxContainer') || defaultLayout.boxContainer
    }
  : defaultLayout;

export const layoutStore = writable(initialLayout);

layoutStore.subscribe((layout) => {
  if (browser) {
    localStorage.setItem('themeVersion', layout.themeVersion);
    localStorage.setItem('themePreset', layout.themePreset);
    localStorage.setItem('captionShow', layout.captionShow);
    localStorage.setItem('themeLayout', layout.themeLayout);
    localStorage.setItem('themeDirection', layout.themeDirection);
    localStorage.setItem('themeContrast', layout.themeContrast);
    localStorage.setItem('themeMode', layout.themeMode);
    localStorage.setItem('boxContainer', layout.boxContainer);
  }
});

// Function to set attributes on body element
export function setBodyAttributes() {
  if (!browser) return;

  const layout = get(layoutStore);

  document.body.setAttribute('data-pc-preset', layout.themePreset);
  document.body.setAttribute('data-pc-sidebar-caption', layout.captionShow);
  document.body.setAttribute('data-pc-layout', layout.themeLayout);
  document.body.setAttribute('data-pc-direction', layout.themeDirection);
  document.body.setAttribute('data-pc-theme_contrast', layout.themeContrast);
  document.body.setAttribute('data-pc-theme', layout.themeMode);
  document.body.setAttribute('data-pc-box-container', layout.boxContainer);
}

// Function to change preset
export function preset_change(value) {
  if (!browser) return;
  // Set attribute based on value and update active preset color link
  document.getElementsByTagName('body')[0].setAttribute('data-pc-preset', value);
  var control = document.querySelector('.pct-offcanvas');
  if (control) {
    document.querySelector('.preset-color > a.active').classList.remove('active');
    document.querySelector(".preset-color > a[data-value='" + value + "']").classList.add('active');
  }

  localStorage.setItem('themePreset', value);
  layoutStore.update((store) => {
    store.themePreset = value;
    return store;
  });
}

// Function to change sidebar caption visibility
export function layout_caption_change(value) {
  if (!browser) return;
  // Set attribute based on value and update button state accordingly
  if (value == 'yes') {
    document.getElementsByTagName('body')[0].setAttribute('data-pc-sidebar-caption', 'true');
    var control = document.querySelector('.theme-nav-caption .btn.active');
    if (control) {
      document.querySelector('.theme-nav-caption .btn.active').classList.remove('active');
      document.querySelector(".theme-nav-caption .btn[data-value='true']").classList.add('active');
    }
  } else {
    document.getElementsByTagName('body')[0].setAttribute('data-pc-sidebar-caption', 'false');
    var control = document.querySelector('.theme-nav-caption .btn.active');
    if (control) {
      document.querySelector('.theme-nav-caption .btn.active').classList.remove('active');
      document.querySelector(".theme-nav-caption .btn[data-value='false']").classList.add('active');
    }
  }

  localStorage.setItem('captionShow', value);
  layoutStore.update((store) => {
    store.captionShow = value;
    return store;
  });
}

// Function to change theme mode
export function layout_change(layout) {
  if (!browser) return;
  // Set layout attribute and update related elements (e.g., logos)
  var control = document.querySelector('.pct-offcanvas');
  document.getElementsByTagName('body')[0].setAttribute('data-pc-theme', layout);

  var btn_control = document.querySelector('.theme-layout .btn[data-value="default"]');
  if (btn_control) {
    btn_control.classList.remove('active');
  }
  if (layout == 'dark') {
    if (document.querySelector('.pc-sidebar .m-header .logo-lg')) {
      document.querySelector('.pc-sidebar .m-header .logo-lg').setAttribute('src', '/assets/images/logo-white.svg');
    }

    if (document.querySelector('.navbar-brand .logo-lg')) {
      document.querySelector('.navbar-brand .logo-lg').setAttribute('src', '/assets/images/logo-white.svg');
    }
    if (document.querySelector('.auth-main.v1 .auth-sidefooter')) {
      document.querySelector('.auth-main.v1 .auth-sidefooter img').setAttribute('src', '/assets/images/logo-white.svg');
    }
    if (document.querySelector('.footer-top .footer-logo')) {
      document.querySelector('.footer-top .footer-logo').setAttribute('src', '/assets/images/logo-white.svg');
    }
    var control = document.querySelector('.theme-layout .btn.active');
    if (control) {
      document.querySelector('.theme-layout .btn.active').classList.remove('active');
      document.querySelector(".theme-layout .btn[data-value='false']").classList.add('active');
    }
  } else {
    if (document.querySelector('.pc-sidebar .m-header .logo-lg')) {
      document.querySelector('.pc-sidebar .m-header .logo-lg').setAttribute('src', '/assets/images/logo-dark.svg');
    }
    if (document.querySelector('.navbar-brand .logo-lg')) {
      document.querySelector('.navbar-brand .logo-lg').setAttribute('src', '/assets/images/logo-dark.svg');
    }
    if (document.querySelector('.auth-main.v1 .auth-sidefooter')) {
      document.querySelector('.auth-main.v1 .auth-sidefooter img').setAttribute('src', '/assets/images/logo-dark.svg');
    }
    if (document.querySelector('.footer-top .footer-logo')) {
      document.querySelector('.footer-top .footer-logo').setAttribute('src', '/assets/images/logo-dark.svg');
    }
    var control = document.querySelector('.theme-layout .btn.active');
    if (control) {
      document.querySelector('.theme-layout .btn.active').classList.remove('active');
      document.querySelector(".theme-layout .btn[data-value='true']").classList.add('active');
    }
  }
  localStorage.setItem('themeMode', layout);
  layoutStore.update((store) => {
    store.themeMode = layout;
    return store;
  });
}

// Function to change theme contrast
export function layout_theme_contrast_change(value) {
  if (!browser) return;
  if (value === 'yes') {
    document.getElementsByTagName('body')[0].setAttribute('data-pc-theme_contrast', 'true');
    var control = document.querySelector('.theme-contrast .btn.active');
    if (control) {
      document.querySelector('.theme-contrast .btn.active').classList.remove('active');
      document.querySelector(".theme-contrast .btn[data-value='true']").classList.add('active');
    }
  } else {
    document.getElementsByTagName('body')[0].setAttribute('data-pc-theme_contrast', 'false');
    var control = document.querySelector('.theme-contrast .btn.active');
    if (control) {
      document.querySelector('.theme-contrast .btn.active').classList.remove('active');
      document.querySelector(".theme-contrast .btn[data-value='false']").classList.add('active');
    }
  }
  localStorage.setItem('themeContrast', value);
  layoutStore.update((store) => {
    store.themeContrast = value;
    return store;
  });
}

// Function to change to default theme mode
export function layout_change_default() {
  if (!browser) return;
  let layout;
  // Check if dark mode is preferred and set layout accordingly
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    layout = 'dark';
  } else {
    layout = 'light';
  }
  layout_change(layout); // Call layout_change function with dark_layout value

  // Set active state for default layout button
  var btn_control = document.querySelector('.theme-layout .btn[data-value="default"]');
  if (btn_control) {
    btn_control.classList.add('active');
  }

  // Event listener for dark mode preference change
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    layout = event.matches ? 'dark' : 'light';
    layout_change(layout); // Call layout_change function with dark_layout value
  });
}

// Function to change theme direction (true/false)
export function layout_rtl_change(value) {
  if (!browser) return;
  // Set attribute based on value and update button state accordingly
  var control = document.querySelector('#layoutmodertl');
  if (value === 'rtl') {
    document.getElementsByTagName('body')[0].setAttribute('data-pc-direction', 'rtl');
    document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
    document.getElementsByTagName('html')[0].setAttribute('lang', 'ar');
    var control = document.querySelector('.theme-direction .btn.active');
    if (control) {
      document.querySelector('.theme-direction .btn.active').classList.remove('active');
      document.querySelector(".theme-direction .btn[data-value='true']").classList.add('active');
    }
  } else {
    document.getElementsByTagName('body')[0].setAttribute('data-pc-direction', 'ltr');
    document.getElementsByTagName('html')[0].removeAttribute('dir');
    document.getElementsByTagName('html')[0].removeAttribute('lang');
    var control = document.querySelector('.theme-direction .btn.active');
    if (control) {
      document.querySelector('.theme-direction .btn.active').classList.remove('active');
      document.querySelector(".theme-direction .btn[data-value='false']").classList.add('active');
    }
  }
  localStorage.setItem('themeDirection', value);
  layoutStore.update((store) => {
    store.themeDirection = value;
    return store;
  });
}

// Function to change box container state
export function change_box_container(value) {
  if (!browser) return;
  if (document.querySelector('.pc-content')) {
    // Add or remove container class from specific elements based on value
    if (value == 'yes') {
      document.querySelector('.pc-content').classList.add('container');
      document.querySelector('.footer-wrapper').classList.add('container');
      document.querySelector('.footer-wrapper').classList.remove('container-fluid');

      var control = document.querySelector('.theme-container .btn.active');
      if (control) {
        document.querySelector('.theme-container .btn.active').classList.remove('active');
        document.querySelector(".theme-container .btn[data-value='true']").classList.add('active');
      }
    } else {
      document.querySelector('.pc-content').classList.remove('container');
      document.querySelector('.footer-wrapper').classList.remove('container');
      document.querySelector('.footer-wrapper').classList.add('container-fluid');
      var control = document.querySelector('.theme-container .btn.active');
      if (control) {
        document.querySelector('.theme-container .btn.active').classList.remove('active');
        document.querySelector(".theme-container .btn[data-value='false']").classList.add('active');
      }
    }
  }

  localStorage.setItem('boxContainer', value);
  layoutStore.update((store) => {
    store.boxContainer = value;
    return store;
  });
}

export function setLayout(layout) {
  localStorage.setItem('themeLayout', layout);
  document.getElementsByTagName('body')[0].setAttribute('data-pc-layout', layout);

  layoutStore.update((store) => {
    store.themeLayout = layout;
    return store;
  });
}
