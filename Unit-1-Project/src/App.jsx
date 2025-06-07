import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EffortsDashboard from './components/EffortsDashboard'
import AddNewEffort from './components/AddNewEffort'
import UpcomingEfforts from './components/UpcomingEfforts'
import MyEfforts from './components/MyEfforts'
import About from './components/About'
import './App.css'

function App() {

  const [efforts, setEfforts] = useState([]);
  const [registeredEffortIds, setRegisteredEffortIds] = useState([]);

  const handleVolunteerToggle = (id, isVolunteering) => {
    setEfforts((prevEfforts) =>
      prevEfforts.map((effort) =>
        effort.id === id
          ? {
            ...effort,
            volunteerCount: isVolunteering
              ? effort.volunteerCount + 1
              : Math.max(effort.volunteerCount - 1, 0),
          }
          : effort
      )
    );
    setRegisteredEffortIds((prev) =>
      isVolunteering ? [...prev, id] : prev.filter((effortId) => effortId !== id)
    );
  };

  useEffect(() => {
    fetch('/mockEfforts.json')
      .then((response) => response.json())
      .then((data) => setEfforts(data))
      .catch((error) => console.error('Failed to load efforts:', error));
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<EffortsDashboard efforts={efforts} setEfforts={setEfforts} onVolunteerToggle={handleVolunteerToggle}
            registeredEffortIds={registeredEffortIds} />} />
          <Route path='/newEffort' element={<AddNewEffort efforts={efforts} setEfforts={setEfforts} />} />
          <Route path="/upcoming" element={<UpcomingEfforts efforts={efforts.filter((effort) =>
            registeredEffortIds.includes(effort.id)
          )} onVolunteerToggle={handleVolunteerToggle} />} />
          <Route path="/my-efforts" element={<MyEfforts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router >
    </>
  )
}

export default App
