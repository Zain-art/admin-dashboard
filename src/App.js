// import logo from './logo.svg';

import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login.jsx';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import {BrowserRouter,Route,Routes,} from 'react-router-dom'
import { productInputs, userInputs } from './formSource';
import './styles/Dark.scss';
import {useState} from 'react';
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
function App() {


  const { darkMode } = useContext(DarkModeContext);
  return (
   <>
   <div className={darkMode?'app dark':'app'}>

 <BrowserRouter>
 
 <Routes>
<Route  exact path='/'>
<Route  index element={< Home/>} />
<Route  path='login' element={< Login/>} />
<Route path='users'>
<Route path='list' element={<List/>} />
<Route path=':userId'  element={<Single/>} />
<Route path='new'  element={<New inputs={userInputs} title='Add New User'/>} />
</Route>
<Route path="products">
<Route  index element={< List/>} />
<Route  path=':productId' element={< Single/>} />
<Route   path='new' element={< New inputs={productInputs} title='Add New Product '/>} />


</Route>


</Route>
 </Routes>
 
 
 </BrowserRouter>
  
   </div>
   </>
  );
}

export default App;
