export default function SearchBar({ search, setSearch }) {

  return (
    <input
      type="text"
      placeholder="Search efforts..."
      className="search-bar"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}
