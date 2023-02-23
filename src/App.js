import React from 'react';
import './App.css';
import Home from './Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SearchPage from './SearchPage';



const App=()=>{
  return (
    //BEM
    <div className="App">
      <BrowserRouter>
       {/* Home (the one with the search on) */}
         
          <Routes>
            <Route path='/search' element={<SearchPage />}></Route>
            <Route path='/' element={<Home />}></Route>
          </Routes>
    
    
   

    {/* search page (the result page)  */}
    </BrowserRouter>
    </div>
  );
}

export default App;
