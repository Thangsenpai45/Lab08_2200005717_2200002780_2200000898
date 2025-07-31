// src/App.js
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      
      <main style={{ padding: '20px' }}>
        <h2>Chào mừng bạn đến với React App của nhóm 3</h2>
        <p>Đây là nội dung chính.</p>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
