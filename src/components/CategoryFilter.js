import React, { useState } from "react";


function CategoryFilter( {categories} ) {

  const [selectedCategory, setSelectedCategory] = useState('All')

  const categoryFilter = categories.filter((category) => {
    if (category === 'All') return true;
    return category === selectedCategory
  }) 

  function handleClick(event){
    setSelectedCategory(event.target.value)
  }


  const categoryList = categories.map((category) => 
    <button key={category} onClick={handleClick}>{category}</button>
  )

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryList}
    </div>
  );
}

export default CategoryFilter;
