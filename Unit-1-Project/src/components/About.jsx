import Header from './Header';

export default function About() {
  return (
    <div>
      <Header />
      <h1>About This App</h1>
      <p>This application was created to help communities organize, promote, and manage local volunteer efforts efficiently. Created in the wake of the 2025 St Louis City tornado, Volunteer STL core mission is rooted in compassion, empathy, and perseverance</p>

      <table className="about-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Effort Dashboard</td>
            <td>Browse and search all active community efforts.</td>
          </tr>
          <tr>
            <td>Add New Effort</td>
            <td>Create your own volunteer effort with full details.</td>
          </tr>
          <tr>
            <td>Volunteer Sign-Up</td>
            <td>Join efforts and track your commitments.</td>
          </tr>
          <tr>
            <td>My Efforts</td>
            <td>View all efforts you've created.</td>
          </tr>
          <tr>
            <td>Upcoming Efforts</td>
            <td>See efforts you've registered for and manage your involvement.</td>
          </tr>
        </tbody>
      </table>

      <p style={{ marginTop: '2rem' }}>Created by Savion James.</p>
    </div>
  );
}
