import React from 'react';

const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="filter">
      <label htmlFor="statusFilter">Filter by Status:</label>
      <select id="statusFilter" value={filter} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="todo">To Do</option>
        <option value="inProgress">In Progress</option>
        <option value="done">Done</option>
      </select>
    </div>
  );
};

export default Filter;