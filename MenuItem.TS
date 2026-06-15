export type MenuItem = {
  id: string;
  name: string;
  description: string;
  course: 'Starters' | 'Mains' | 'Dessert';
  price: number;
};
