import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/login';
import SearchAppBar from './homepage';
import Register from './components/register';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' exact element={<SearchAppBar/>} />
          <Route path='/signin' exact element={<SignIn/>} />
          <Route path='/register' exact element={<Register/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
