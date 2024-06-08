import React from "react";
 import Main from '../src/Main.css'

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import WebSocketTest from './components/websockettest'
import VariableTesting from './components/variableTesting'
import Git from './components/justforgithub'

const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<RecordList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
       <Route path="/socket" element={<WebSocketTest />} />
       <Route path="/variable" element={<VariableTesting />} />
       <Route path="/github" element={<Git />} />

     </Routes>
   </div>
 );
};
 
export default App;