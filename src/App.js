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

  const [data , setData] = useState([]);

  useEffect( () => {
    axios('https://randomuser.me/api/?results=10')
    .then(response => 
      setData(response.data.results)
    )
    
      
  } , [] )

  console.log(data)

 
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
