import './App.css';
import axios from 'axios'
import { useEffect , useState} from 'react';

import {Route , Routes} from "react-router"
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Contact from './components/Contact';
import Product from './components/Product';


function App() {

  const [data , setData] = useState();

  const baseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/10'

  useEffect( () => {
    fetch('https://api.fbi.gov/wanted/list')
    .then(response => response.json())
    .then(data => {
      console.log(data.items)
      setData(data.items)
    })

  } , [] )

  return (
    <div className="App">

      <Routes>
        <Route path='*' element={
          <>
            <Header></Header>
            <Nav></Nav>
            <Main></Main>
            <Product data={data}></Product>
            <Contact></Contact>


          </>
        }

        />

      </Routes>
      
    </div>
  );
}

export default App;
