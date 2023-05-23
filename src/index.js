import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GoogleTranslator from './components/GoogleTranslator';
import { CookiesProvider } from 'react-cookie';
import "./utils/i18Next";
import Reacti18 from './components/Reacti18';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/usingGoogleTranslator' element={<GoogleTranslator />} />
          <Route path='/usingReacti18Translator' element={<Reacti18 />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
