import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './Header.jsx';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from "./UserProfile";
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
      

    </div>
  );
}

export default App;
