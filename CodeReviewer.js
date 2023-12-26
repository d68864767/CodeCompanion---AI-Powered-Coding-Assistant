import React, { useState } from 'react';
import axios from 'axios';

function CodeReviewer() {
  const [language, setLanguage] = useState('');
  const [codeSnippet, setCodeSnippet] = useState('');
  const [review, setReview] = useState('');

  const handleReview = async () => {
    try {
      const response = await axios.post('/code-reviewer', { language, codeSnippet });
      setReview(response.data.review);
    } catch (error) {
      console.error('Error during code review:', error);
    }
  };

  return (
    <div className="CodeReviewer">
      <header>
        <h2>Code Reviewer</h2>
      </header>
      <main>
        <form onSubmit={e => e.preventDefault()}>
          <label>
            Language:
            <input type="text" value={language} onChange={e => setLanguage(e.target.value)} required />
          </label>
          <label>
            Code Snippet:
            <textarea value={codeSnippet} onChange={e => setCodeSnippet(e.target.value)} required />
          </label>
          <button type="submit" onClick={handleReview}>Review Code</button>
        </form>
        {review && (
          <div>
            <h3>Review:</h3>
            <p>{review}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default CodeReviewer;
</h3></h2>