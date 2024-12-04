import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { NotFound, PostList, PostPage } from '../pages';
import { Header, Footer } from '../widgets';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Header />
        <Routes>
          <Route path="/post-list" element={<PostList />} />
          <Route path="/post-page:id" element={<PostPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
