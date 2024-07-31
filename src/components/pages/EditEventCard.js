import React, { useState, useRef } from 'react';
import { useLocation,useParams } from 'react-router-dom';
import {toPng} from 'html-to-image';
import 'C:\\Users\\Lenovo\\newpro\\src\\components\\pages\\EditEventCard.css';

const EditEventCard = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('Birthday Party');
  const [date, setDate] = useState('2024-08-01');
  const [description, setDescription] = useState('Join us for a fun-filled birthday party!');
  const [image, setImage] = useState('https://via.placeholder.com/300'); // Replace with your image URL

  const cardRef = useRef();

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleImageChange = (e) => setImage(e.target.value);

  const handleSave = () => {
    // Handle save logic here
    console.log('Event saved:', { title, date, description, image });
  };

  const handleDownload = () => {
    if (cardRef.current) {
      toPng(cardRef.current)
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = 'event-card.png';
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.error('Error generating image:', err);
        });
    }
  };

  return (
    <div className="edit-event-card-container">
      <div className="event-card-preview" style={{ backgroundImage: `url(${image})` }} ref={cardRef}>
        <div className="event-details">
          <h3>{title}</h3>
          <p>{date}</p>
          <p>{description}</p>
        </div>
      </div>
      <div className="event-card-editor">
        <form>
          <label>
            Title:
            <input type="text" value={title} onChange={handleTitleChange} />
          </label>
          <label>
            Date:
            <input type="date" value={date} onChange={handleDateChange} />
          </label>
          <label>
            Description:
            <textarea value={description} onChange={handleDescriptionChange}></textarea>
          </label>
          <label>
            Image URL:
            <input type="text" value={image} onChange={handleImageChange} />
          </label>
          <button type="button" onClick={handleSave}>Save</button>
          <button type="button" onClick={handleDownload}>Download</button>
        </form>
      </div>
    </div>
  );
};

export default EditEventCard;
