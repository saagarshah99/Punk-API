import { useState } from 'react';

import './App.scss';
import beers from "./data/beers";
import CardList from './components/CardList/CardList';

import SearchBox from "./components/SearchBox/SearchBox";
import FiltersList from "./components/SearchBox/FiltersList/FiltersList";

// checking multiple keys in object for search query match
const checkForMatch = (searchQuery, {name, description, first_brewed, ph, abv}) => {
  const keys = [
    name.toLowerCase(), 
    description.toLowerCase(),
    first_brewed,
    ph.toString(),
    abv.toString(),
  ];

  return keys.filter(key => key.includes(searchQuery)).length > 0;
}

// checking beers array for any search matches and applying filters if any selected
const getFilteredBeers = (searchQuery, filter) => {
    return beers.filter(beer => {
      const {first_brewed, ph, abv} = beer;
      const matchFound = checkForMatch(searchQuery, beer);
  
      switch(filter) {
        case("ABV"): return matchFound && abv > 6;
        
        case("Classic"): return matchFound && parseInt(first_brewed.split("/")[1]) <= 2010;
        
        case("Acidic"): return matchFound && ph < 4;

        default: return matchFound;
      }
    });
}

function App() {

  // creating and handling states for searching and filtering
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = event => setSearchQuery(event.target.value.toLowerCase());
  const [filter, setFilter] = useState("");
  const handleFilter = event => setFilter(event.target.value);
  
  return (
    <div className="App">
        <header className="navbar">
            <SearchBox searchTerm={searchQuery} handleSearch={handleSearch} />
            <FiltersList handleFilter={handleFilter} />
        </header>
        
        <main>
            <div className="card-list">
                <CardList beerArr={getFilteredBeers(searchQuery, filter)} />
            </div>
        </main>
    </div>
  );
}

export default App;
