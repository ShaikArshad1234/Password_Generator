import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12); // Default password length

  // Function to generate password
  const generatePassword = () => {
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let generatedPassword = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
  };

  // Function to copy password to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  return (
    <div className="app-container">
      <h1>Random Password Generator</h1>
      <div className="input-container">
        <label>Password Length: </label>
        <input
          type="number"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <input
        type="text"
        value={password}
        readOnly
        placeholder="Generated Password"
        className="password-box"
      />
      <div className="button-group">
        <button onClick={generatePassword} className="generate-btn">
          Generate Password
        </button>
        {password && (
          <button onClick={copyToClipboard} className="copy-btn">
            Copy to Clipboard
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
