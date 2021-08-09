import { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import Home from './components/Home';
import Header from './components/Header';
import { lightMode, darkMode } from './styles/Theme';
import { GlobalStyles } from './styles/GlobalStyles.style';
import Details from './components/Details';


function App() {
  
  const BASE_URI = 'https://restcountries.eu/rest/v2';

  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState('');
  const [error, setError] = useState(null);

//search Country
  const [searchInput, setSearchInput] = useState('');

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [pageDisplay, setPageDisplay] = useState(true);

  const [pageNumberLimit, setPageNumberLimit] = useState(3);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItem = countries.slice(firstItemIndex, lastItemIndex)

  const pages = [];
  for(let i = 1; i <= Math.ceil(countries.length / itemsPerPage); i++) pages.push(i);

  const handlePageSelect = (e) => {
      setCurrentPage(Number(e.target.id));
  }

  const handleNextBtn = () => {
      setCurrentPage(currentPage + 1);

      if(currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
  }

  const handlePrevBtn = () => {
      setCurrentPage(currentPage - 1);

      if((currentPage -1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
  }

  useEffect(() => {
    let uri = `${BASE_URI}/all`;

    if(error) {
      clearError();
    }

    const getAllCountries = async() => {
      try {
        const { data } = await axios.get(uri);
        if(data) {
          setLoading(false);
          setCountries(data);
        }
        
      } catch (error) {
        setError(error);
      }
    
    }

    const tabletSize = window.matchMedia('(min-width: 500px)');
    const desktopSize = window.matchMedia('(min-width: 1000px)');
    if(tabletSize.matches) {
      setPageNumberLimit(5);
      setMaxPageNumberLimit(5);
    }
    if(desktopSize.matches) {
      setItemsPerPage(16)
      setPageNumberLimit(10);
      setMaxPageNumberLimit(10);
    }

    window.addEventListener('resize', () => {
      window.location.reload();
    })

    getAllCountries();
  },[setLoading, setError, error]);

  const getCountriesByRegion = async(region) => {

    setPageDisplay(true);
    setRegion(region);
    setCurrentPage(1);
    setMinPageNumberLimit(0);
    setMaxPageNumberLimit(3);

    const tabletSize = window.matchMedia('(min-width: 500px)');
    if(tabletSize.matches) {
      setPageNumberLimit(5);
      setMaxPageNumberLimit(5);
    }
    
    let uri = `${BASE_URI}/region/${region}`
    try {
      
      const { data } = await axios.get(uri);
      if(data) {
        setCountries(data);
      }

    } catch (error) {
      setError(error);
    }


  }

  //search country

  const handleSearchChange = (e) => setSearchInput(e.target.value);

  const getCountryByName = async(e) => {
    e.preventDefault();

    let uri = `${BASE_URI}/name/${searchInput}?fullText=true`;
    try {
      const { data } = await axios.get(uri);
      
      setCountries(data); 
      
      setPageDisplay(false);
      setSearchInput('');
    } catch (error) {
      setError(error.message);
    }
  }

  //getCountryDetails

  const clearError = () => {
    setTimeout(() => {
      setLoading(false);
      setError(null);
    }, 10000)
  }

  const toggleNightMode = () => theme === 'dark' ? setTheme('light') : setTheme('dark');

  return (
    <Router>
      <Fragment>
        <ThemeProvider theme={theme === 'dark' ? darkMode : lightMode}>
        <GlobalStyles/>
          <Header 
            theme={theme}
            onToggleDarkMode={toggleNightMode}
          />
          <Route exact path="/" render={(props) => (
            <Home
              countries={currentItem}
              error={error}
              loading={loading}
              region={region}
              pages={pages}
              pageDisplay={pageDisplay}
              currentPage={currentPage}
              minPageNumberLimit={minPageNumberLimit}
              maxPageNumberLimit={maxPageNumberLimit}
              searchInput={searchInput}
              onPrevSelect={handlePrevBtn}
              onNextSelect={handleNextBtn}
              onPageSelect={handlePageSelect}
              onRegionSelect={getCountriesByRegion}
              onSearchChange={handleSearchChange}
              onSearchSubmit={getCountryByName}
            />
          )}/>
          <Route exact path="/countries/:name" component={Details}/>
        </ThemeProvider>
      </Fragment>
    </Router>
  );
}

export default App;
