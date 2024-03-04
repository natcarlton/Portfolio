import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Screens/Home';
import Page from './Screens/Page';
import {theme} from './utilities/themes'

function App() {

    return (
      <ThemeProvider theme={theme}>
        <div className="App">
            <NavBar menus={[{name: "home", path: "/"}, {name: "page", path: "/page"}]}/>
                <Routes>
                    <Route path='' element={<Home/>} />
                    <Route path='/page' element={<Page/>} />
                </Routes>
        </div>
      </ThemeProvider>
    );
}

export default App;
