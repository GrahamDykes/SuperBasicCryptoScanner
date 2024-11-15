import React from "react";
// eslint-disable-next-line
 import Main from '../src/Main.css'

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import WebSocketTest from './components/websockettest'
import DictionaryMaker from './components/makingAnDictionary'
import CryptoAPI from './components/cryptoAPItest'
import GPT from './components/gptMadeTicker'

const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<RecordList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
       <Route path="/socket" element={<WebSocketTest />} />
       <Route path="/api" element={<CryptoAPI />} />
       <Route path="/variable" element={<DictionaryMaker />} />
       <Route path="/gpt" element={<GPT />} />
       

     </Routes>
   </div>
 );
};
 
export default App;