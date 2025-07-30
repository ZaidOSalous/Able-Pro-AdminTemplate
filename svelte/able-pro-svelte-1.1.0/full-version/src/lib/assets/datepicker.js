import { Datepicker } from 'vanillajs-datepicker?client';
export default async function datepicker(node, options) {
  new Datepicker(node, options);
}
