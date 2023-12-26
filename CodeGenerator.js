import React, { useState } from 'react';
import axios from 'axios';

function CodeGenerator() {
  const [language, setLanguage] = useState('');
  const [description, setDescription] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');

  const generateCode = async () => {
    try {
      const response = await axios.post('/generate_code', { language, description });
      setGeneratedCode(response.data.code);
    } catch (error) {
      console.error('Error generating code:', error);
    }
  };

  return (
    <div className="CodeGenerator">
      <h2>Code Generator</h2>
      <label>
        Language:
        <input type="text" value={language} onChange={e => setLanguage(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <button onClick={generateCode}>Generate Code</button>
      {generatedCode && (
        <div>
          <h3>Generated Code:</h3>
          <pre>{generatedCode}</pre>
        </div>
      )}
    </div>
  );
}

export default CodeGenerator;
</h3></button></h2>