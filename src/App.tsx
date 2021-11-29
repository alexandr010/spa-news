import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './Components/HomePage/HomePage';
import { ArticlePage } from './Components/Article/ArticlePage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/articlePage/:title" element={<ArticlePage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
