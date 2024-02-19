import React from 'react'
import {BrowserRouter, Routes} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Profile} from './pages/Profile'
import { Alert } from './components/Alert'
import {AlertState} from './context/alertState'

function App() {
  return (
    <AlertState>
    <BrowserRouter>
      <Navbar />
    <div className="container pt-4">
      <Alert alert={{text: 'Test alert'}}/>
        <Routes path="/" exact component={Home} />
        <Routes path="/about" exact component={About} />
        <Routes path="/profile/:name" exact component={Profile} />
    </div>
    </BrowserRouter>
    </AlertState>
  );
}

export default App;
