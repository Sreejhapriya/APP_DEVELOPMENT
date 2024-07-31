import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/pages/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import LoginForm from './components/Login/LoginForm';
import RegistrationForm from './components/Login/RegistrationForm';
import EditEventCard from './components/pages/EditEventCard';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const events = [
    { id: 1, title: 'Birthday Party', date: '2024-07-25', description: 'Celebrate with us!' },
    { id: 2, title: 'Birthday Bash', date: '2024-08-01', description: 'Join the fun!' },
    { id: 3, title: 'Anniversary Celebration', date: '2024-09-15', description: 'A night to remember!' }
  ];

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/edit/:id" element={<EditEventCard events={events} />} /> 
          </Routes>
        </div>
      <Footer />
      </div>
    </Router> 
  );
}

export default App;
