import EffortsCard from './EffortsCard'
import { Link } from 'react-router-dom'

export default function EffortsDashboard({ efforts }) {
  return (
    <div>
      <div className='row'>
        <Link to='/newEffort' className='button'>Add New Effort</Link>
        <div className='display-toggle-menu'>
          <button className='display-toggle-button'>Card View</button>
          <button className='display-toggle-button'>List View</button>
        </div>
      </div>
      {efforts.map((effort) =>
        <EffortsCard key={effort.id} effort={effort} />
      )}
    </div>
  );
}
