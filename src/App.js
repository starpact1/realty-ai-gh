import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import DesktopView from './Errors/DesktopView';
import { Autocomplete, Button, CssBaseline, ThemeProvider } from '@mui/material';
import theme from "./Theme/MainTheme"
import Login from './Pages/Login/Login';
import OTPVerification from './Pages/OTPVerification/OTPVerification';
import LandingPage from "./Pages/LandingPage/LandingPage"
import SliderRange from './Component/SliderRange';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import ValueSlider from './Component/ValueSlider';
import Profile from './Pages/Profile/Profile';
import NotFound404 from './Pages/ErrorPages/NotFound404';
import FilterScreen from './Pages/FilterScreen/FilterScreen';
import PropertiesListing from './Pages/PropertiesListing/PropertiesListing';
import WishList from './Pages/WishList/WishList';

import SalesGraph from './Pages/SalesGraph/SalesGraph';
import SalesInLast3Months from './Pages/SalesInLast3Months/SalesInLast3Months';
import AgreementClause from './Pages/AgreementClause/AgreementClause';
import AppreciationPage from './Pages/AppreciationPage/AppreciationPage';
import PastAppreciationPage from './Pages/PastAppreciationPage/PastAppreciationPage';

import RentalYieldPage from './Pages/RentalYield/RentalYieldPage';
import EaseOfReselling from './Pages/EaseOfReselling/EaseOfReselling';
import EaseOfRenting from './Pages/EaseOfRenting/EaseOfRenting';
import LayoutsPage from './Pages/LayoutsPage/LayoutsPage';
import ToggleButtons from './Test/ToggleButtons';
import LocationPage from './Pages/LocationPage/LocationPage';
import ConstructionStatusPage from './Pages/ConstructionStatusPage/ConstructionStatusPage';
import LegalStatus from './Pages/LegalStatus/LegalStatus';
import BuilderHistory from './Pages/BuilderHistory/BuilderHistory';
import AmenitiesPage from './Pages/AmenitiesPage/AmenitiesPage';
import PriceValue from './Pages/PriceValue/PriceValue';
import ComparePage from './Pages/ComparePage/ComparePage';
import HeatMap from './Pages/HeatMap/HeatMap';
import LightBox from './Test/LightBox';
import Gallery from './Pages/Gallery/Gallery';
import AutocompleteTags from './Test/AutocompleteTags';
import SearchPage from "./Pages/SearchPage/SearchPage"
import Sample from './Pages/Sample/Sample';
import ScrollTop from './Component/ScrollTop';




function App() {

  const [showDesktopWarning, setShowDesktopWarning] = useState(false)


  useEffect(() => {
    if (window.innerWidth >= 800)
      setShowDesktopWarning(true)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <div className="App">

        {showDesktopWarning ?
          <>
            <DesktopView />
          </> :
          <>
            <Router>
              <ScrollTop/>
              <Routes>
                {/* Week 1 */}
                <Route path="/" element = { <Login /> } />
                <Route path="/otp-verification" element = { <OTPVerification/> } />
                <Route path="/landing-page" element = { <LandingPage/> } />
                <Route path="/profile" element = { <Profile/> } />
                {/* Week 2 */}
                <Route path="/filter-screen" element = { <FilterScreen/> } />
                <Route path="/properties-listing" element = { <PropertiesListing/> } />
                <Route path="/wishlist" element = { <WishList/> } />
                <Route path="/sales-graph" element = { <SalesGraph/> } />
                <Route path="/sales-in-last-3-months" element = { < SalesInLast3Months /> } />
                <Route path="/agreement-clause" element = { < AgreementClause /> } />
                <Route path="/appreciation-page" element= { <AppreciationPage/> } />
                <Route path="/past-appreciation-page" element= { <PastAppreciationPage /> } />
                <Route path="/rental-yield-page" element= { <RentalYieldPage /> } />
                <Route path="/*" element = {<NotFound404/>}/>

                {/* Week 3 */}

                <Route path="/ease-of-reselling" element = {<EaseOfReselling/>}/>
                <Route path="/ease-of-renting" element = {<EaseOfRenting/>}/>
                <Route path="/layouts-page" element = {<LayoutsPage/>}/>
                <Route path="/location-page" element = {<LocationPage/>}/>
                <Route path="/construction-status-page" element = { <ConstructionStatusPage /> }/>
                <Route path="/legal-status" element = { <LegalStatus /> }/>
                <Route path="/builder-history" element = { <BuilderHistory /> }/>
                <Route path="/amenities-page" element = { <AmenitiesPage /> }/>
                <Route path="/price-value" element = { <PriceValue /> }/>
                <Route path="/compare-page" element = { <ComparePage /> }/>
                <Route path="/heat-map" element = { <HeatMap /> }/>
                <Route path="/gallery" element = { <Gallery /> }/>
                <Route path="/search" element = { <SearchPage /> }/>
                <Route path="/sample" element = { <Sample /> }/>

                {/* Test Components */}

                <Route path="slider-range" element = { <SliderRange /> } />
                <Route path="value-slider" element = { <ValueSlider /> } />
                <Route path="toggle-button" element = { <ToggleButtons /> } />
                <Route path="light-box" element = { <LightBox /> } />
                <Route path="autocomplete-tags" element = { <AutocompleteTags /> } />
                

              </Routes>
            </Router>
          </>
        }

      </div>
    </ThemeProvider>
  );
}

export default App;
