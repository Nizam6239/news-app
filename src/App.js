import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const  App = () => {
  const pageSizes = 15;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY; ;
  const [progress, setProgress] = useState(0);
    return (
      <div>
      <Router>
      <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
      <Navbar />
      <Routes>
      <Route exact path="/" element={<News setProgress={setProgress} apiKey ={apiKey} key="general" pageSize={pageSizes} country="in" category="general"/>} />
      <Route exact path="/business" element={<News setProgress={setProgress} apiKey ={apiKey}  key="business" pageSize={pageSizes} country="in" category="business"/>} />      
      <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey ={apiKey}  key="entertainment" pageSize={pageSizes} country="in" category="entertainment"/>} />
      <Route exact path="/general" element={<News setProgress={setProgress} apiKey ={apiKey}  key="general" pageSize={pageSizes} country="in" category="general"/>} />
      <Route exact path="/health" element={<News setProgress={setProgress} apiKey ={apiKey}  key="health" pageSize={pageSizes} country="in" category="health"/>} />
      <Route exact path="/science" element={<News setProgress={setProgress} apiKey ={apiKey}  key="science" pageSize={pageSizes} country="in" category="science"/>} />
      <Route exact path="/sports" element={<News setProgress={setProgress} apiKey ={apiKey}  key="sports" pageSize={pageSizes} country="in" category="sports"/>} />
      <Route exact path="/technology" element={<News setProgress={setProgress} apiKey ={apiKey}  key="technology" pageSize={pageSizes} country="in" category="technology"/>} />
      </Routes>
      </Router>
      </div>
      
    )
  }

export default App;
