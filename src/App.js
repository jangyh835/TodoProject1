
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './Header/header';
import { Main } from './Main/Main';
import {Make} from './Make/Make';
import { List } from './List/list';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Navigate to="/Main" />} />
        <Route exact path="/Main" element={<Main />} />
        <Route exact path="/List" element={<List />}/>
        <Route exact path="/Make" element={<Make />} />
      </Routes>
    </Router>
  );
}

export default App;
