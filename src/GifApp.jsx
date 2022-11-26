import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifApp = () => {
  const [categories, setCategories] = useState(['Naruto']);

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
