import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import parseLocation from '../parseLocation';

export default function AddEffortForm({ efforts, setEfforts, setCreatedEffortIds }) {
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    description: '',
    volunteersNeeded: true,
    openEffort: false,
    volunteerCount: 0,
    tags: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const parsedLocation = parseLocation(formData.location);
    if (!parsedLocation) {
      alert('Please use the format: Address, City, State ZIP');
      return;
    }

    function formatDate(inputDate) {
      const formattedDate = new Date(inputDate);
      return formattedDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }


    const newEffort = {
      id: efforts.length + 1,
      title: formData.title,
      time: {
        date: formatDate(formData.date),
        startTime: formData.startTime,
        endTime: formData.endTime || null
      },
      location: {
        address: parsedLocation.address,
        city: parsedLocation.city,
        state: parsedLocation.state,
        zip: parsedLocation.zip
      },
      description: formData.description,
      openEffort: formData.openEffort,
      volunteerCount: 0,
      tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()) : []
    };

    setEfforts([...efforts, newEffort]);
    setCreatedEffortIds((prev) => [...prev, newEffort.id]);
    nav('/');
  };

  return (

    <div className="add-effort-form">
      <h1 className='text-left'>Add New Effort</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-left">
          <label>
            Effort Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>

          <div className="time-fields">
            <label>
              Start Time:
              <input
                type="time"
                name="startTime"
                className="time-input"
                value={formData.startTime}
                onChange={handleChange}
              />
            </label>
            <label>
              End Time:
              <input
                type="time"
                name="endTime"
                className="time-input"
                value={formData.endTime}
                onChange={handleChange}
              />
            </label>
          </div>

          <label>
            Location:
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g., 123 Main St, City, State 12345"
            />
          </label>

          <label>
            Description:
            <textarea
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-right">

          <label>Is This An Open Effort?
            <div className="signup-check">
              <input
                type="checkbox"
                name="openEffort"
                checked={formData.openEffort}
                onChange={handleChange}
              />
              <small>Allow Reliant Sign-up</small>
            </div>
          </label>

          <label>
            Additional Tags:
            <textarea
              name="tags"
              rows="15"
              value={formData.tags}
              onChange={handleChange}
            />
          </label>

          <button type="submit" className="submit-button">Submit Effort</button>
        </div>
      </form>
    </div>
  );
}
