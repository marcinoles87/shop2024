import './App.css';
import axios from 'axios'
import { useEffect , useState} from 'react';

import {Link, Route , Routes} from "react-router"
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Contact from './components/Contact';
import Product from './components/Product';
import Sidebar from './components/Sidebar';
import Koszyk from './pages/Koszyk';


function App() {

  const initial = 0

  const [data , setData] = useState([]);
  const [koszyk , setKoszyk] = useState([])
  const [price , setPrice] = useState(0)

  useEffect( () => {
    axios('https://randomuser.me/api/?results=10')
    .then(response => 
      setData(response.data.results)
    )
    
      
  } , [] )

 

 
  return (
    <div className="App">

      <Routes>
        <Route path='*' element={
          <>
            <Header></Header>
            <Nav></Nav>
            <Main></Main>
            <Link to={'/koszyk'} className='shopItem'>Koszyk : {koszyk.length}</Link>
            
            <div className='products'>
              <Sidebar></Sidebar>
            <Product data={data} koszyk={koszyk} setKoszyk={setKoszyk}></Product>
            </div>
            
            <Contact></Contact>


          </>
        }
        

        />

        <Route path='/koszyk' element={<Koszyk koszyk={koszyk} price={price}></Koszyk>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
