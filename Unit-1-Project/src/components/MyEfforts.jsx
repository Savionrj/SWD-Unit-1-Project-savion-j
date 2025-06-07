import Header from './Header'
import EffortsCard from './EffortsCard'

export default function MyEfforts({ efforts }) {

  return (
    <div>
      <div className="my-efforts-page">
        <Header />
        <h1>Efforts You Created</h1>
        {efforts.length === 0 ? (
          <p>You haven’t created any efforts yet.</p>
        ) : (
          efforts.map((effort) => (
            <EffortsCard
              key={effort.id}
              effort={effort}
              displayMode="card"
              readOnly={true}
              noSignUp={true}
            />
          ))
        )}
      </div>
    </div>
  )
}
