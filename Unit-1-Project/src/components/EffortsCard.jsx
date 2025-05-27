import volunteerImage from '../images/volunteer.jpg';

export default function EffortsCard({ effort }) {

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
        <button className='signup-button'>As Volunteer</button>
        <p className='volunteer-count'>{effort.volunteerCount} {effort.volunteerCount > 1 ? 'volunteers already' : 'volunteer already'}</p>
        <button className='signup-button'>As Reliant</button>
      </div>
    </div>
  );
}
