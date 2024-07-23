import React from 'react';

const TaskFilter = ({ filterCriteria, setFilterCriteria }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterCriteria({ ...filterCriteria, [name]: value });
  };

  return (
    <div>
      <h2>Filter Tasks</h2>
      <form>
        <input
          type="date"
          name="dueDate"
          value={filterCriteria.dueDate}
          onChange={handleFilterChange}
        />
        <select
          name="priority"
          value={filterCriteria.priority}
          onChange={handleFilterChange}
        >
          <option value="">Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <select
          name="status"
          value={filterCriteria.status}
          onChange={handleFilterChange}
        >
          <option value="">Status</option>
          <option value="Incomplete">Incomplete</option>
          <option value="Complete">Complete</option>
        </select>
      </form>
    </div>
  );
};

export default TaskFilter;
