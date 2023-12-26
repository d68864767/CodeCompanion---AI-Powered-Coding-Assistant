import React, { useState } from 'react';
import axios from 'axios';

function DocumentationGenerator() {
  const [code, setCode] = useState('');
  const [documentation, setDocumentation] = useState('');

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const generateDocumentation = async () => {
    try {
      const response = await axios.post('/generate-documentation', { code });
      setDocumentation(response.data.documentation);
    } catch (error) {
      console.error('Error generating documentation:', error);
    }
  };

  return (
    <div className="DocumentationGenerator">
      <header>
        <h2>Documentation Generator</h2>
      </header>
      <main>
        <textarea
          value={code}
          onChange={handleCodeChange}
          placeholder="Enter your code here..."
        />
        <button onClick={generateDocumentation}>Generate Documentation</button>
        {documentation && (
          <div>
            <h3>Generated Documentation:</h3>
            <pre>{documentation}</pre>
          </div>
        )}
      </main>
    </div>
  );
}

export default DocumentationGenerator;
</h3></h2>