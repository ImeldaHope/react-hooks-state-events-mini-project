import React from "react";

function CategoryFilter({categories, selectedCategory, setSelectedCategory}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((cat, index) => (
        <button key={index} className={cat === selectedCategory ? "selected" : ""} onClick={() => setSelectedCategory(cat)}>{cat}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
