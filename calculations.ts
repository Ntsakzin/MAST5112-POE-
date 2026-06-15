import { MenuItem } from './MenuItem';

export const averagePriceByCourse = (menu: MenuItem[], course: string): string => {
  const filtered = menu.filter(item => item.course === course);
  if (filtered.length === 0) return '0.00';
  const total = filtered.reduce((sum, item) => sum + item.price, 0);
  return (total / filtered.length).toFixed(2);
};
