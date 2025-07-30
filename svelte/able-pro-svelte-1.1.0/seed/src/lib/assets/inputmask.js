import IMask from 'imask';

export default async function mask(node, options) {
  new IMask(options).mask(node);
}
