import React from 'react'

const Button = ({ label, onClick, className ,style }) => {
    return (
      <button className={className} onClick={onClick}>
        {label} {style}
      </button>
    
    );
  };

export default Button

