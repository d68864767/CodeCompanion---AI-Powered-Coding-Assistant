import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CodeCompanion - AI-Powered Coding Assistant</h1>
      </header>
      <nav>
        <ul>
          <li><Link to="/code-generator">Code Generator</Link></li>
          <li><Link to="/debugger">Debugger</Link></li>
          <li><Link to="/learning-helper">Learning Helper</Link></li>
          <li><Link to="/documentation-generator">Documentation Generator</Link></li>
          <li><Link to="/code-reviewer">Code Reviewer</Link></li>
          <li><Link to="/workflow-customizer">Workflow Customizer</Link></li>
          <li><Link to="/user">User</Link></li>
        </ul>
      </nav>
      <main>
        <p>Welcome to CodeCompanion! Select a tool from the navigation menu to get started.</p>
      </main>
      <footer>
        <p>© 2022 CodeCompanion. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
</p></Link></h1>