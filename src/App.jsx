import { useState } from 'react';

import './App.scss';
import CardList from './components/CardList/CardList';

import SearchBox from "./components/SearchBox/SearchBox";
import FiltersList from "./components/SearchBox/FiltersList/FiltersList";
import {updateFilterArray, getFilteredBeers} from "./utils/Filtering";

function App() {

  // creating and handling states for searching and filtering
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = event => setSearchQuery(event.target.value.toLowerCase());
  const [selectedFilters, setSelectedFilters] = useState([]);
  const handleFilter = (event) => updateFilterArray(event, selectedFilters, setSelectedFilters);
  
  return (
    <div className="App">
        <header className="navbar">
            <SearchBox searchTerm={searchQuery} handleSearch={handleSearch} />
            <FiltersList handleFilter={handleFilter} />
        </header>
        
        <main>
            <div className="card-list">
                <CardList beerArr={getFilteredBeers(searchQuery, selectedFilters)} />
            </div>
        </main>
    </div>
  );
}

export default App;
