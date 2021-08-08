import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import s from './App.module.scss';
import {Navigation} from './components/navigation/Navigation';
import {Main} from './components/main/Main';
import {Work} from './components/work/Work';
import {About} from './components/about/About';
import {Contact} from './components/contact/Contact';


function App() {
  console.log('render')
  return (
    <BrowserRouter>
      <div className={s.App}>
        <Navigation/>
        <Main/>
        <Work/>
        <About/>
        <Contact/>
      </div>
    </BrowserRouter>
  );
}

export default App;
