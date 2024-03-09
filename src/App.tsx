import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PostDetailView, MainView } from './views';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainView />} />
        <Route path="/detail" element={<PostDetailView />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
