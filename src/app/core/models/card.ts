import { Tag } from './tags';

export interface Card {
  id: string;
  title: string;
  desc: string;
  userId: string;
  initDate?: string;
  coverUrl?: string;
  tags?: Tag[];
  liked?: number;
}
