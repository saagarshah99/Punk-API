import { useState } from 'react';

import './App.scss';
import beers from "./data/beers";
import CardList from './components/CardList/CardList';

import SearchBox from "./components/SearchBox/SearchBox";
import FiltersList from "./components/SearchBox/FiltersList/FiltersList";

function App() {

  // creating and handling states for searching and filtering
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = event => setSearchQuery(event.target.value.toLowerCase());
  const [filter, setFilter] = useState("");
  const handleFilter = event => setFilter(event.target.value);
  
  // checking beers array for any search matches and applying filters if any selected
  const filteredBeers = beers.filter(beer => {
    const matchFound = 
      beer.name.toLowerCase().includes(searchQuery) || 
      beer.description.toLowerCase().includes(searchQuery) ||
      beer.first_brewed.includes(searchQuery) ||
      beer.ph.toString().includes(searchQuery) ||
      beer.abv.toString().includes(searchQuery)
    ;

    if(filter === "ABV") return matchFound && beer.abv > 6;
    
    else if(filter === "Classic") {
      return matchFound && parseInt(beer.first_brewed.split("/")[1]) <= 2010;
    }

    else if(filter === "Acidic") return matchFound && beer.ph < 4;
    
    return matchFound;
  });
  
  return (
    <div className="App">
        <header className="navbar">
            <SearchBox searchTerm={searchQuery} handleSearch={handleSearch} />
            <FiltersList handleFilter={handleFilter} />
        </header>
        
        <main>
            <div className="card-list">
                <CardList beerArr={filteredBeers} />
            </div>
        </main>
    </div>
  );
}

export default App;
