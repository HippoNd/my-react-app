// import './App.css';
import React, {useState} from 'react';
import Products from './component/Contain';
import Add from './component/Add';
import { Routes, Route, Link } from 'react-router-dom'
import FilterableProductTable from './practice/FilterableProductTable';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="add" element={<Add />} />
        <Route path="practice" element={<FilterableProductTable />} />
      </Routes>
    </div>
  
  );
}

export default App;
