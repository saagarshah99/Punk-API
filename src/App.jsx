import { useState } from 'react';

import './App.scss';
import beers from "./data/beers";
import CardList from './components/CardList/CardList';

import SearchBox from "./components/SearchBox/SearchBox";
import FiltersList from "./components/SearchBox/FiltersList/FiltersList";

// checking multiple keys in object for search query match
const checkForMatch = (searchQuery, beer) => {
  const {name, description, first_brewed, ph, abv, food_pairing} = beer;
  
  const keys = [
    name.toLowerCase(), 
    food_pairing.join(","),
    description.toLowerCase(),
    first_brewed,
    ph.toString(),
    abv.toString(),
  ];

  return keys.filter(key => key.includes(searchQuery)).length > 0;
}

// checking beers array for any search matches and applying filters if any selected
const getFilteredBeers = (searchQuery, selectedFilters) => {
    return beers.filter(beer => {
      const {first_brewed, ph, abv} = beer;
      const matchFound = checkForMatch(searchQuery, beer);

      const filterChecks = [
        ["ABV", abv > 6], 
        ["Classic", parseInt(first_brewed.split("/")[1]) <= 2010],
        ["Acidic", ph < 4],
      ];

      let returns = [];
      for (let i = 0; i < filterChecks.length; i++) {
        if(selectedFilters.includes(filterChecks[i][0])) {
          returns.push(filterChecks[i][1]);
        }
      }

      if(returns.length === 1) return matchFound && returns[0];
      else if(returns.length === 2) {
        return matchFound && returns[0] && returns[1];
      }
      else if(returns.length === 3) {
        return matchFound && returns[0] && returns[1] && returns[2];
      }
      return matchFound;
    });
}

function App() {

  // creating and handling states for searching and filtering
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = event => setSearchQuery(event.target.value.toLowerCase());
  // const [filter, setFilter] = useState("");
  // const handleFilter = event => setFilter(event.target.value);
  
  const [selectedFilters, setSelectedFilters] = useState([]);
  
  // update array if filter is checked and the array doesn't already contain this value
  const handleFilter = event => {
    const checkboxValue = event.target.value;

    if(event.target.checked ) {
      if(!selectedFilters.includes(checkboxValue)) {
        setSelectedFilters([...selectedFilters, checkboxValue]);
      }
    }
    else {
      setSelectedFilters(selectedFilters.filter(item => item !== checkboxValue));
    }
  }
  
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
