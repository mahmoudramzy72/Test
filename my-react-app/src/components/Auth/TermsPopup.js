// /src/components/Auth/TermsPopup.js
import React from 'react';
import '../../styles/Auth.css';

const TermsPopup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Terms and Conditions</h2>
        <p>Here are the terms and conditions...</p>
        <button onClick={onClose}>Accept</button>
      </div>
    </div>
  );
};

export default TermsPopup;
