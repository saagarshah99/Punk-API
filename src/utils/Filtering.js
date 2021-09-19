import beers from "../data/beers";

// checking multiple keys in object for search query match
export const checkForMatch = (searchQuery, beer) => {
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

// update array (add/remove) if filter is checked and the array doesn't already contain this value
export const updateFilterArray = (event, selectedFilters, setSelectedFilters, checkboxValue) => {
    if(event.target.checked ) {
        if(!selectedFilters.includes(checkboxValue)) {
            setSelectedFilters([...selectedFilters, checkboxValue]);
        }
    }
    else setSelectedFilters(selectedFilters.filter(filter => filter !== checkboxValue));
}

// returning approriate filtered beers depending on which checkboxes are selected
export const enableSelectedFilters = (matchFound, filterChecks, selectedFilters) => {
    let filterReturns = [];
    for (let i = 0; i < filterChecks.length; i++) {
        if(selectedFilters.includes(filterChecks[i][0])) {
        filterReturns.push(filterChecks[i][1]);
        }
    }

    switch(filterReturns.length) {
        case(1): return matchFound && filterReturns[0];
        
        case(2): return matchFound && filterReturns[0] && filterReturns[1];

        case(3): return matchFound && filterReturns[0] && filterReturns[1] && filterReturns[2];

        default: return matchFound;
    }
}

// checking beers array for any search matches and applying filters if any selected
export const getFilteredBeers = (searchQuery, selectedFilters) => {
    return beers.filter(beer => {
    const {first_brewed, ph, abv} = beer;
    const matchFound = checkForMatch(searchQuery, beer);

    const filterChecks = [
        ["ABV", abv > 6], 
        ["Classic", parseInt(first_brewed.split("/")[1]) <= 2010],
        ["Acidic", ph < 4],
    ];

    return enableSelectedFilters(matchFound, filterChecks, selectedFilters);
    });
}