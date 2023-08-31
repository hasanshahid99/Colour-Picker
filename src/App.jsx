import React from 'react'

import './App.css'
import Nav from './Nav';
import {Home} from './pages';
import {Routes, Route } from 'react-router-dom';

const App = () => {
  return (
   <>
   {console.log("The App is returning something")}
   <Routes>
   <Route path="/" element={<Nav />}>
   {console.log("The App is returning the Nav")}

<Route index element={<Home/>}/>
{console.log("The App is returning the HomePage")}

{/* <Route path ="/colors">
    <Route index element={<Colors/>}/>
    <Route path=":color" element={<SelectedColor/>}/>
    <Route path="/new" element={<NewColor/>}/>
    </Route> */}
    </Route>
   </Routes>
   </>
  )
}

export default App
