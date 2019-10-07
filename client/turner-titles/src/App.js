import React, {useState} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './components/TopNav'
import Titles from './components/Titles'

import {Container, Navbar} from 'react-bootstrap'

function App() {
  const [titles, popTitles] = useState({"data": ""})


  const setTitles = (data) => {
    popTitles({"data" : data})
  }

  return (
    <div className="App">
      <header>
       <TopNav setTitles={setTitles}/>
      </header> 
        <main>
          <Container>
         <Titles titles={titles}/>
         </Container>
        </main>
      
      <Container>
        <Navbar bg="dark" variant="dark" fixed="bottom">
   
        </Navbar>
      </Container>

    </div>
  );
}

export default App;
