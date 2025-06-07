import volunteerImage from '../images/volunteer.jpg';
import { useState } from 'react'

export default function EffortsCard({ effort, displayMode, onVolunteerSignup }) {

  const [isVolunteering, setIsVolunteering] = useState(false);

  const handleClick = () => {
    onVolunteerSignup(effort.id, !isVolunteering);
    setIsVolunteering((prev) => !prev);
  };

  if (displayMode === 'list') {
    return (
      <div className="effort-card list-view">
        <div className="list-summary">
          <h3>{effort.title}</h3>
          <span>{effort.time.date} @ {effort.time.startTime}</span>
          <span>• {effort.location.city}, {effort.location.state}</span>
        </div>
        <div className="list-actions">
          <span>{effort.volunteerCount} {effort.volunteerCount === 1 ? 'volunteer' : 'volunteers'}</span>
          <button className={`signup-button small ${isVolunteering ? 'active' : ''}`} onClick={handleClick}>{isVolunteering ? 'Unregister' : 'Volunteer'}</button>
          {effort.openEffort && (
            <button className="signup-button small">Reliant</button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="effort-card">
      <img src={volunteerImage} alt="A person with their back turned to the camera, wearing a colorful shirt that says volunteer" width='200px' height='200px' />
      <div className='effort-card-info'>
        <h1 className='effort-title'>{effort.title}</h1>
        <p>Time: {effort.time.date} | {effort.time.startTime}</p>
        <p>Location: {effort.location.address}<br />{effort.location.city}, {effort.location.state} {effort.location.zip}</p>
        <p className='card-description-info'>Description: {effort.description}</p>
      </div>
      <div className='effort-card-signup'>
        <h1>Sign Up</h1>
        <button className={`signup-button ${isVolunteering ? 'active' : ''}`} onClick={handleClick}>{isVolunteering ? 'Unregister' : 'As Volunteer'}</button>
        <p className='volunteer-count'>{effort.volunteerCount} {effort.volunteerCount > 1 ? 'volunteers already' : 'volunteer already'}</p>
        {effort.openEffort && (
          <button className='signup-button'>As Reliant</button>)}
      </div>
    </div>
  );
}
