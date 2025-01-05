import './App.css';

import {Route , Routes} from "react-router"
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='*' element={
          <>
            <Nav></Nav>

          </>
        }

        />

      </Routes>
      
    </div>
  );
}

export default App;
