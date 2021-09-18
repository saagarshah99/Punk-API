import { useState } from 'react';

import './App.scss';
import beers from "./data/beers";
import CardList from './components/CardList/CardList';

import SearchBox from "./components/SearchBox/SearchBox";
import FiltersList from "./components/SearchBox/FiltersList/FiltersList";

function App() {

  // creating state for searching and function for converting query to lowercase
  const [searchQuery, setSearchQuery] = useState("");
  const handleInput = event => setSearchQuery(event.target.value.toLowerCase());

  // checking beers array for any search matches
  const filteredBeers = beers.filter(beer => {
    const name = beer.name.toLowerCase();
    const description = beer.description.toLowerCase();

    return name.includes(searchQuery) || description.includes(searchQuery);
  });

  return (
    <div className="App">
        <header className="navbar">
            <SearchBox searchTerm={searchQuery} handleInput={handleInput} />
            <FiltersList />
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
