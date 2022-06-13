import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import DesktopView from './Errors/DesktopView';
import { Button, ThemeProvider } from '@mui/material';
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
import RangeSlider from './Component/RangeSlider';
import ValueSlider from './Component/ValueSlider';
import Profile from './Pages/Profile/Profile';


function App() {

  const [showDesktopWarning, setShowDesktopWarning] = useState(false)


  useEffect(() => {
    if (window.innerWidth >= 800)
      setShowDesktopWarning(true)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <div className="App">

        {showDesktopWarning ?
          <>
            <DesktopView />
          </> :
          <>
            <Router>
              <Routes>
                <Route path="/" element = { <Login /> } />
                <Route path="/otp-verification" element = { <OTPVerification/> } />
                <Route path="/landing-page" element = { <LandingPage/> } />
                <Route path="/slider-range" element = { <ValueSlider/> } />
                <Route path="/range-slider" element = { <RangeSlider/> } />
                <Route path="/profile" element = { <Profile/> } />
              </Routes>
            </Router>
          </>
        }

      </div>
    </ThemeProvider>
  );
}

export default App;
