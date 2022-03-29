import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import './App.css';
import TinderCard from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import ChatScreen from'./ChatScreen';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
         
          <Routes>
            <Route path="Chats/:person" element={ <>  <Header backButton="/Chats/ "/> <ChatScreen/> </>} >  </Route>
            <Route path="Chats" element={ <>  <Header backButton="/"/> <Chats/> </>} >  </Route>
            <Route path='/' element={<> <Header/> <TinderCard/>  <SwipeButtons/> </> } ></Route>
          </Routes>   
      </Router>
      </div>
    );
  }
}
export default App;
