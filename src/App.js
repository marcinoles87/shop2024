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
    axios.get(`${baseUrl}`).then( (response) =>
      setData(response.data)
    
    )
 
      
  } , [])
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
