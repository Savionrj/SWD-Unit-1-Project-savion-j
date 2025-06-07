import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';


export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="home-link">Volunteer STL</Link>

      <NavMenu />

    </header>
  );
}

