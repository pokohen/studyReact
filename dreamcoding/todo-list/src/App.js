import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { DarkModeProvier } from './context/DarkModeContext';

const filters = ['all', 'active', 'completed'];

function App() {

  const [filter, setFilter] = useState(filters[0]);

  return (
    <DarkModeProvier>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </DarkModeProvier>
  );
}

export default App;
