import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import aboutpicheader from 'C:\\Users\\Lenovo\\newpro\\src\\components\\Assets\\images\\newaboutus.jpg'
import aboutpic from 'C:\\Users\\Lenovo\\newpro\\src\\components\\Assets\\images\\owrwork.jpg'

const About = () => {
  const navigate = useNavigate();

  const handleEnquireClick = () => {
    navigate('/contact');
  };
  return (
    <div className="about-container">
      <div className="about-header">
        <img src={aboutpicheader} alt='about-header'  />
        
      </div>
      <div className="about-content">
        <div className="section">
          <h2>Our Company</h2>
          <p>MAKE MY EVENT is a full-service event management company in 
            Delhi dedicated to quality and excellence. Since our establishment,
            we have continuously strived towards the flawless execution of events and planning. 
            We manage events across all major cities in India.</p>
        </div>
        <div className="section">
          <h2>Mission</h2>
          <p>No matter what your requirement may be, our priority lies in
            gaining an in-depth understanding of how your business works,
            what you hope to achieve, and what we can do to deliver results 
            that exceed all expectations. We believe in flexibility with the
            clients.</p>
        </div>
        <div className="section">
          <h2>Passion</h2>
          <p>World of event management has changed tremendously in the last few years.
            We are a team of creative and innovative, passionate and enthusiastic with
            great interpersonal skills. We always ready to serve clients, best in the 
            industries with good time management skills.</p>
        </div>
      </div>
      <div className="about-image-container">
        <div className="about-image">
          <img src={aboutpic} alt='aboutpic' />
        </div>
        <div className="about-text">
          <h2>Our Story and Work</h2>
          <p>We are a full administration office in Delhi, giving experiential showcasing
            and excitement services for both public and private elements by following a comprehensive
            advertising approach. Our system depends on conceptualization, improvement, high-quality
            generation that perceives their broadness and bury conditions.</p>
          <p>The mystery of our office is a sound methodology, careful thoughtfulness regarding
            venture arranging and execution detail, and above all, an inventive choice of
            different showcasing strategies and techniques intended to achieve the most prospects in the
            most practical way.</p>
          <p>We are a notable occasion coordinator in Delhi, India to encourage our administrations to our 
            customers crosswise over and outside the country. Our young and dynamic group is fit enough to deal
            with tasks with the most extreme empathy and duty creating the best quality undertakings of global norms.</p>
        </div>
      </div>
      <div className="offer-container">
        <h3>WE OFFER</h3>
        <p>MAKE MY EVENT has been making experiences to establish connections.
           On the off chance that you are searching for event organizations, your
            inquiry closes here. We are among the main corporate occasion administration
             organizations. Our variety of incorporate services include:</p>
        
        </div>
        <div class="requirements">
          <h4>Get Plans For All Your Requirements!</h4>
          <p>At MAKE MY EVENT, your money is important to you and us. We ensure 
            cost-effective service, accountability and flexibility. Most of all,
             we treat your event like it is ours. Whatever your budget, we have 
             solutions you will not find elsewhere.</p>
             <button className="enquire-button" onClick={handleEnquireClick}>ENQUIRE NOW >></button>
        </div>
     
    </div>
  );
};

export default About;
