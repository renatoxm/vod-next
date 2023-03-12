import React from 'react';
import CategoryButton, { ICategory } from '../CategoryButton';
import { StyledExploreCategories } from './styled';

interface ICategoriesProps {
  children?: React.ReactNode;
  setActiveCategory: (category: string) => void;
}

export const categoriesList: ICategory[] = [
  {
    label: `Trending`,
    icon: `WhatshotOutlined`,
  },
  {
    label: `Music`,
    icon: `HeadphonesOutlined`,
  },
  {
    label: `Gaming`,
    icon: `SportsEsportsOutlined`,
  },
  {
    label: `News`,
    icon: `NewspaperOutlined`,
  },
  {
    label: `Fashion`,
    icon: `CheckroomOutlined`,
  },
  {
    label: `Learning`,
    icon: `SchoolOutlined`,
  },
  {
    label: `Live`,
    icon: `StreamOutlined`,
  },
  {
    label: `Sports`,
    icon: `SportsBaseballOutlined`,
  },
];

const Categories: React.FC<ICategoriesProps> = ({ setActiveCategory }) => {
  return (
    <StyledExploreCategories>
      {categoriesList.map((c) => (
        <CategoryButton
          onClick={() => setActiveCategory(c.label)}
          key={c.label}
          {...c}
        />
      ))}
    </StyledExploreCategories>
  );
};

export default React.memo(Categories);
