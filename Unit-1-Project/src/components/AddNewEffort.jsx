export default function AddEffortForm() {
  return (

    <div className="add-effort-form">
      <h1 className='text-left'>Add New Effort</h1>
      <form>
        <div className="form-left">
          <label>
            Effort Title:
            <input type="text" name="title" required />
          </label>

          <label>
            Date:
            <input type="date" name="date" required />
          </label>

          <div className="time-fields">
            <label>
              Start Time:
              <input type="time" name="startTime" className='time-input' />
            </label>
            <label>
              End Time:
              <input type="time" name="endTime" className='time-input' />
            </label>
          </div>

          <label>
            Location:
            <input type="text" name="location" />
          </label>

          <label>
            Description:
            <textarea name="description" rows="4" />
          </label>
        </div>

        <div className="form-right">
          <label>Volunteers Needed?
            <div className="signup-check">
              <input type="checkbox" name="volunteersNeeded" />
              <small>Allow Volunteer Sign-up</small>
            </div>
          </label>

          <label>Is This An Open Effort?
            <div className="signup-check">
              <input type="checkbox" name="openEffort" />
              <small>Allow Reliant Sign-up</small>
            </div>
          </label>

          <label>
            Additional Tags:
            <textarea name="tags" rows="15" />
          </label>
          <button type="submit" className="submit-button">Submit Effort</button>
        </div>
      </form>
    </div>
  );
}
