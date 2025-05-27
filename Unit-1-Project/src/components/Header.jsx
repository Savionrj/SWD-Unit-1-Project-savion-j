import { Link } from 'react-router-dom';

export default function Header({ search, setSearch }) {
  return (
    <header className="header">
      <Link to="/" className="home-link">Volunteer STL</Link>

      <input
        type="text"
        placeholder="Search efforts..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </header>
  );
}

