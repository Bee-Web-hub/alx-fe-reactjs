import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';         // ✅ fixed
import MainContent from './components/MainContent'; // ✅ fixed
import Footer from './components/Footer';         // ✅ fixed
import UserProfile from './components/UserProfile';
import Counter from "./components/Counter";       // ✅ Counter stays in components
import './App.css';

function App() {
  return (
    <div>
      <h1>UserProfile</h1>

      {/* Passing your info as props */}
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography."
      />

      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />

      {/* 👇 Counter displayed here */}
      <Counter />
    </div>
  );
}

export default App;
