import EffortsCard from './EffortsCard'
import Header from './Header';

export default function UpcomingEfforts({ efforts, onVolunteerToggle }) {
  return (
    <div className="upcoming-efforts-page">
      <Header />
      <h1>My Upcoming Efforts</h1>
      {efforts.length === 0 ? (
        <p>You haven’t registered for any efforts yet.</p>
      ) : (
        efforts.map((effort) => (
          <EffortsCard
            key={effort.id}
            effort={effort}
            readOnly={true}
            onVolunteerSignup={onVolunteerToggle}
          />
        ))
      )}
    </div>
  );
}
