// src/HomePage.js
import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to My Home Page</h1>
        <p>This is a simple React home page example.</p>
      </header>
      <main className="home-main">
        <section>
          <h2>About Me</h2>
          <p>Write a brief description about yourself here.</p>
        </section>
        <section>
          <h2>Projects</h2>
          <p>Describe your projects or work here.</p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>Provide contact information or a contact form here.</p>
        </section>
      </main>
      <footer className="home-footer">
        <p>&copy; 2024 My Home Page. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
