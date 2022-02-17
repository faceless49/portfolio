import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import s from './App.module.scss';
import {Navigation} from './components/navigation/Navigation';
import {Main} from './components/main/Main';
import {Works} from './components/works/Works';
import {About} from './components/about/About';
import {Contact} from './components/contact/Contact';
// @ts-ignore
import DancingLines from 'react-dancing-lines'
import TestMenu from './components/menu/Menu';

function App() {
  console.log('render')


  return (
    <BrowserRouter>
      <div className={s.App}>
        <TestMenu/>
        <Navigation/>
        <Main/>
        <Works/>
        <About/>
        <Contact/>

        <DancingLines/>
      </div>
    </BrowserRouter>
  );
}

export default App;
