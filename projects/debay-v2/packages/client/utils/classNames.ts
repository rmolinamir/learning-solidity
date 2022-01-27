import { ClassName } from '../common/ClassName';

export function classNames<T extends HTMLElement>(...classes: ClassName<T>[]) {
  return classes.filter(Boolean).join(' ');
}
