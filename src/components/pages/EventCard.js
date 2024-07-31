import React from 'react';
import { Link } from 'react-router-dom';
import 'C:\\Users\\Lenovo\\newpro\\src\\components\\pages\\EventCard.css';

const EventCard = ({ id, title, date, description, image }) => {
  return (
    <div className="event-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="event-details">
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{description}</p>
        <button>
          <Link to={`/edit/${id}`} state={{ title, date, description, image }}>Edit</Link>
        </button>
      </div>
    </div>
  );
};
export default EventCard;
