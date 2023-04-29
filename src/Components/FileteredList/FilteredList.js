import React, { useState } from "react";
import { moviesData } from "../Data/Data";



const FilteredList = () => {
  const [filter, setFilter] = useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredItems = moviesData.filter(
    (item) => item.stars >= filter
  );

  return (
    <div>
    <label>
    Filter by stars:
    <input type="number" value={filter} onChange={handleChange} />
  </label>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.name}>
            {item.name} - {item.stars} stars
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;