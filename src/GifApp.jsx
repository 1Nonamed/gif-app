import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

const GifApp = () => {
  const [categories, setCategories] = useState(['Steins Gate']);

  const onAddCategory = (newCategory) => {
    console.log(newCategory);
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifApp</h1>
      <AddCategory onNewCategory={onAddCategory} />

      {categories?.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifApp;
