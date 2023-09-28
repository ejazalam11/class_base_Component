// import React from 'react'
// import React, { useState } from 'react';
import React, { useState } from 'react';


export default function Heading() {
  
        const [userInput, setUserInput] = useState('');
        let message;
      
        const handleChange = (event) => {
          setUserInput(event.target.value);
        };
      
        const handleSubmit = () => {
          switch (userInput.toLowerCase()) {
            case 'h1':
              message = <h1>This is h1</h1>;
              break;
            case 'h2':
              message = <h2>This is h2</h2>;
              break;
            case 'h3':
              message = <h3>This is h3</h3>;
              break;
            default:
              message = <p>Invalid heading</p>;
          }
        };
  return (
    <div>
    <input
      type="text"
      value={userInput}
      onChange={handleChange}
      placeholder="Enter heading (e.g., h1, h2, h3)"
    />
    <button onClick={handleSubmit}>Submit</button>
    <div>
      {message}
    </div>
  </div>
);
}

