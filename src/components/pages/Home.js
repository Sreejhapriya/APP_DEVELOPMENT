 import React from 'react';
import EventCard from 'C:\\Users\\Lenovo\\newpro\\src\\components\\pages\\EventCard.js'; // Adjust path if necessary
import Footer from '../Footer'; // Adjust path if necessary
import './Home.css'; // Ensure you have a CSS file for additional styles



import image1 from 'C:\\Users\\Lenovo\\newpro\\src\\components\\Assets\\images\\image-1.webp'; // Import your images
import image2 from 'C:\\Users\\Lenovo\\newpro\\src\\components\\Assets\\images\\bid-16.webp';
import image3 from 'C:\\Users\\Lenovo\\newpro\\src\\components\\Assets\\images\\image3.webp';
import homepageBg from 'C:\\Users\\Lenovo\\newpro\\src\\components\\Assets\\images\\homepage bg.webp';

const defaultImages = [image1, image2, image3]; // Array of default images

const events = [
  { id: 1, title: 'Birthday Party', date: '2024-07-25', description: 'Celebrate with us!', image: 'path_to_image_1' },
  { id: 2, title: 'Birthday Bash', date: '2024-08-01', description: 'Join the fun!', image: 'path_to_image_2' },
  { id: 3, title: 'Anniversary Celebration', date: '2024-09-15', description: 'A night to remember!', image: 'path_to_image_3' },
];

const Home = () => {
  return (
    
    <div className="home-container">
      <div className="cards-container">
        {events.map(event => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </div>
      
  );
};
export default Home;
