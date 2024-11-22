// Import the necessary styles globally
import '@telegram-apps/telegram-ui/dist/styles.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import components from the library
import { AppRoot, Cell, List, Section } from '@telegram-apps/telegram-ui';
import HomeScreen from './JobFinder/HomeScreen';
import ScreenOne from './JobFinder/ScreenOne';
import ScreenTwo from './JobFinder/ScreenTwo';
import ScreenThree from './JobFinder/ScreenThree';
import ScreenFour from './JobFinder/ScreenFour';

// Example data for rendering list cells
const cellsTexts = ['Chat Settings', 'Data and Storage', 'Devices'];

export const App = () => (
  <AppRoot>
    <Router>
      {/* <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', backgroundColor: '#f1f1f1' }}>
        <Link to="/">Home</Link>
        <Link to="/screen1">Screen 1</Link>
        <Link to="/screen2">Screen 2</Link>
        <Link to="/screen3">Screen 3</Link>
        <Link to="/screen4">Screen 4</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/screen1" element={<ScreenOne />} />
        <Route path="/screen2" element={<ScreenTwo />} />
        <Route path="/screen3" element={<ScreenThree />} />
        <Route path="/screen4" element={<ScreenFour />} />
      </Routes>
    </Router>
  </AppRoot>
);

export default App;