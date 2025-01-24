import './App.css';
import axios from 'axios'
import { useEffect , useState} from 'react';

import {Route , Routes} from "react-router"
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Contact from './components/Contact';
import Product from './components/Product';
import Sidebar from './components/Sidebar';


function App() {

  const initial = 0

  const [data , setData] = useState([]);
  const [koszyk , setKoszyk] = useState(initial)

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
            <p className='shopItem'>Koszyk : {koszyk}</p>
            
            <div className='products'>
              <Sidebar></Sidebar>
            <Product data={data} koszyk={koszyk} setKoszyk={setKoszyk}></Product>
            </div>
            
            <Contact></Contact>


          </>
        }

        />

      </Routes>
      
    </div>
  );
}

export default App;
