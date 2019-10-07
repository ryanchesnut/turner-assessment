import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './components/TopNav'
import {Navbar} from 'react-bootstrap'
import {Container} from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <header>
       <TopNav/>
      </header>
      <Container>
        <main>
          Main stuff
        </main>
      </Container>

        <Container>
          <Navbar sticky="bottom" />
        </Container>
 
    </div>
  );
}

export default App;
