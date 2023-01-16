import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Home from './Home';
// import React from'./Navbar';




function App() { 
  return (
     <div className="App">
   
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route>
            {/* <Link to="/">Home</Link> */}
          </Route>
        </Routes>
        <Home/>

        <Footer/> 
      </BrowserRouter>

       
    </div>
  
  );
}

export default App;
