import React, { useState } from 'react';
import axios from 'axios';

function LearningHelper() {
  const [language, setLanguage] = useState('');
  const [topic, setTopic] = useState('');
  const [explanation, setExplanation] = useState('');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/learning-helper', { language, topic })
      .then(response => {
        setExplanation(response.data.explanation);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div className="LearningHelper">
      <header className="LearningHelper-header">
        <h2>Learning Helper</h2>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label>
            Language:
            <input type="text" value={language} onChange={handleLanguageChange} />
          </label>
          <label>
            Topic:
            <input type="text" value={topic} onChange={handleTopicChange} />
          </label>
          <input type="submit" value="Learn" />
        </form>
        {explanation && (
          <div className="explanation">
            <h3>Explanation:</h3>
            <p>{explanation}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default LearningHelper;
</h3></h2>