import React from 'react';
import './App.css';
import Header from './Header';
import SubHeader from "./SubHeader"
import SubSidebar from "./SubSidebar"
import RecommendedVideo from "./RecommendedVideo"
import {BrowserRouter as Router,Route,Switch } from "react-router-dom"
import Sidebar from './Sidebar';
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="app">
    <Router>
      <Switch>
        <Route path="/search/:result">
        <Header  />
        <div className="app__body">
          <div className="app__header">

          <SubSidebar/>
          </div>
        <SearchPage/>
      </div>
        </Route>
      <Route path="/sidebar">
        <div className="background">
        <Header />
        <div className="app__body1">
          {
            <Sidebar/>
           
          }
            <SubSidebar/>
      <div className="app__video">
        <SubHeader/>
        <RecommendedVideo/>
      </div>
    </div>
        </div>
        </Route>
      <Route path="/">
          <Header/>
          <div className="app__body">
      <SubSidebar/>
      <div className="app__video">
        <SubHeader/>
        <RecommendedVideo/>
      </div>
    </div>
    </Route>
      </Switch>
    </Router>
  </div>
  );
}

export default App;
