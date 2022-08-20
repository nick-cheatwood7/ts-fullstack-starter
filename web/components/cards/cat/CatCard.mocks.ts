import { ICatCard } from './CatCard';

const base: ICatCard = {
  tag: 'Cats',
  title: "What's new in Cats",
  body: 'Lorem Ipsum dolor sit amet',
  author: 'Nick',
  time: '12h ago',
};

export const mockCatCardProps = {
  base,
};
