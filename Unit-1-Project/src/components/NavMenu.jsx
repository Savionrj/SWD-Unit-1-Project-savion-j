import { Link } from 'react-router-dom';

export default function NavMenu() {

  return (
    <div className='nav-menu'>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/upcoming" className="nav-link">Upcoming Efforts</Link>
      <Link to="/my-efforts" className="nav-link">My Efforts</Link>
      <Link to="/about" className="nav-link">About</Link>
    </div>
  )
}
