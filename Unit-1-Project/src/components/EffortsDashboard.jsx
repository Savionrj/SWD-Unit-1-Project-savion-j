import EffortsCard from './EffortsCard'
import Header from './Header'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function EffortsDashboard({ efforts }) {
  const [search, setSearch] = useState('');
  const [displayMode, setDisplayMode] = useState('card');

  const filteredEfforts = efforts.filter((effort) => {
    return (
      effort.title.toLowerCase().includes(search.toLowerCase()) ||
      effort.location.city.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div>
      <Header search={search} setSearch={setSearch} />

      <div className='row'>
        <Link to='/newEffort' className='button'>Add New Effort</Link>
        <div className='display-toggle-menu'>
          <button className='display-toggle-button' onClick={() => setDisplayMode('card')}>Card View</button>
          <button className='display-toggle-button' onClick={() => setDisplayMode('list')}>List View</button>
        </div>
      </div>

      {filteredEfforts.map((effort) =>
        <EffortsCard key={effort.id} effort={effort} displayMode={displayMode} />
      )}
    </div>
  );
}
