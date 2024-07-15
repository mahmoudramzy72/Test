// /src/components/Auth/Register.js
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import TermsPopup from './TermsPopup';
import '../../styles/Auth.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });
  const [showTerms, setShowTerms] = useState(false);
  const { register } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    if (!formData.termsAccepted) {
      alert('You must accept the terms and conditions');
      return;
    }
    await register(formData);
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Re-Enter Password" value={formData.confirmPassword} onChange={handleChange} required />
        <div className="terms-container">
          <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })} required />
          <label onClick={() => setShowTerms(true)}>Agree to Terms and Conditions</label>
        </div>
        <button type="submit">Register</button>
      </form>
      {showTerms && <TermsPopup onClose={() => setShowTerms(false)} />}
    </div>
  );
};

export default Register;
