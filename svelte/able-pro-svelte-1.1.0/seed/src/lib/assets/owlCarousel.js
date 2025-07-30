import jQuery from 'jquery?client';
export default async function owlCarousel(node, options) {
  window.jQuery = jQuery;
  await import('owl.carousel');
  window.jQuery(node).owlCarousel(options);
}
