<<<<<<< HEAD
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
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>yamini</h1>
        <h2>you</h2>
       

        {/* {Home (the one with search on)} */}
        <Home />
        {/* {search page (the result page)} */}
>>>>>>> 0583c2e45a50ab54210ca3f86b1edf885efd65c5
    </div>
  );
}

export default App;
