import EffortsCard from './EffortsCard'

export default function EffortsDashboard() {
  return (
    <div>
      <div id='button row'>
        <button>Add New Effort</button>
        <div id='diplay-toggle-menu'>
          <button className='display-toggle-button'></button>
          <button className='display-toggle-button'></button>
        </div>
      </div>
      <EffortsCard />
    </div>
  );
}
