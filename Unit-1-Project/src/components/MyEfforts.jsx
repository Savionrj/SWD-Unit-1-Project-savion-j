import Header from './Header'
import EffortsCard from './EffortsCard'

export default function MyEfforts({ efforts, setEfforts, setCreatedEffortIds }) {

  const handleDelete = (id) => {
    setEfforts(prev => prev.filter(e => e.id !== id));
    setCreatedEffortIds(prev => prev.filter(eId => eId !== id));
  };

  return (
    <div>
      <div className="my-efforts-page">
        <Header />
        <h1>Efforts You Created</h1>
        {efforts.length === 0 ? (
          <p>You haven’t created any efforts yet.</p>
        ) : (
          efforts.map((effort) => (
            <div key={effort.id} className="effort-card-container">
              <EffortsCard
                key={effort.id}
                effort={effort}
                displayMode="card"
                readOnly={true}
                noSignUp={true}
              />
              <div className="my-efforts-actions">
                <button onClick={() => handleDelete(effort.id)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
