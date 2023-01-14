import React, { useEffect, useState } from 'react';
import Placeholder from './components/Placeholder';
import SearchInput from './components/SearchInput';
import DropdownMenu from './components/DropdownMenu';
import Rating from './components/StarRating';
import { GENRE_DATA, MOVIES_DATA, RATING_DROPDOWN } from './data/movieData';
import AutoCompleteSection from './components/AutoCompleteSection';
import { filerByName, filterByGenre, filterByRating } from './util';
import './App.css';

function App() {
  const [searchText, SetSearchText] = useState('');
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [selectedRating, setSelectedRating] = useState([]);
  const [searchedData, setSearchedData] = useState(MOVIES_DATA);
  const [isInputFocused, setInputFocused] = useState(false);

  const handleChange = ({ target }) => {
    SetSearchText(target.value);
  };

  const showAutoComplete = () => {
    return (
      selectedGenre.length > 0 ||
      selectedRating.length > 0 ||
      searchText.trim().length > 0
    );
  };

  useEffect(() => {
    // filter the data
    let _data = MOVIES_DATA.slice();
    if (selectedGenre.length > 0 && !selectedGenre.includes('Any')) {
      _data = filterByGenre(_data, selectedGenre);
    }
    if (selectedRating.length > 0 && !selectedRating.includes('Any')) {
      _data = filterByRating(_data, selectedRating);
    }
    if (searchText.trim().length > 0) {
      _data = filerByName(_data, searchText);
    }
    setSearchedData(_data);
  }, [searchText, selectedGenre, selectedRating]);

  return (
    <div className="App">
      <Placeholder>
        <div className="search-control">
          <SearchInput
            name="searchText"
            placeholder="Enter movie name"
            value={searchText}
            onChange={handleChange}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
          />
          {(isInputFocused || showAutoComplete()) && (
            <AutoCompleteSection data={searchedData} />
          )}
        </div>
        <div className="dropdown-section">
          <DropdownMenu
            className={'rating-dd'}
            title={'Rating'}
            name="rating"
            onSelectMenu={(values) => setSelectedRating(values)}
            selected={selectedRating}
            options={[
              { title: 'Any rating', value: 'Any' },
              ...RATING_DROPDOWN.map((value) => ({
                title: <Rating value={value} total={10} />,
                value
              }))
            ]}
          />
          <DropdownMenu
            className="genre-dd"
            title={'Genre'}
            onSelectMenu={(values) => setSelectedGenre(values)}
            selected={selectedGenre}
            options={[
              { title: 'Any genre', value: 'Any' },
              ...GENRE_DATA.map((genre) => ({ title: genre, value: genre }))
            ]}
          />
        </div>
      </Placeholder>
    </div>
  );
}

export default App;
