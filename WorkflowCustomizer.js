import React, { useState } from 'react';
import axios from 'axios';

function WorkflowCustomizer() {
  const [preferences, setPreferences] = useState('');
  const [workflow, setWorkflow] = useState('');

  const handlePreferencesChange = (event) => {
    setPreferences(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/workflow-customizer', { preferences });
      setWorkflow(response.data.workflow);
    } catch (error) {
      console.error('Error customizing workflow:', error);
    }
  };

  return (
    <div className="WorkflowCustomizer">
      <header>
        <h2>Workflow Customizer</h2>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="preferences">Enter your coding workflow preferences:</label>
          <textarea id="preferences" value={preferences} onChange={handlePreferencesChange} required />
          <button type="submit">Customize Workflow</button>
        </form>
        {workflow && (
          <div>
            <h3>Customized Workflow:</h3>
            <p>{workflow}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default WorkflowCustomizer;
</h3></h2>