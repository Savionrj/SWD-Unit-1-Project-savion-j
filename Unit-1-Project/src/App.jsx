import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EffortsDashboard from './components/EffortsDashboard'
import AddNewEffort from './components/AddNewEffort'
import './App.css'

function App() {

  const [efforts, setEfforts] = useState([]);

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
          <Route path='/' element={<EffortsDashboard efforts={efforts} />} />
          <Route path='/newEffort' element={<AddNewEffort efforts={efforts} setEfforts={setEfforts} />} />
        </Routes>
      </Router >
    </>
  )
}

export default App
