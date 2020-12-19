import React, { useState, useEffect } from 'react';
import {Navbar, Footer, Card} from './components/index';
import { Home } from './Pages/index'
import { Switch, Route } from 'react-router-dom'

import './App.css';

function App() {
  const [loading, setLoading] = useState(false)

  const name = 'Jonny';

  return (<>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Footer />
    </>
  );
}

export default App;
