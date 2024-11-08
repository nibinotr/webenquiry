import React, { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some(field => field === '')) {
      alert('Please fill in all fields');
      return;
    }
    setSubmitted(true);
    navigate('/');
  };

  // Inline styles for layout and styling
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '400px',
    width: '100%',
    backgroundColor: '#222',
    padding: '20px',
    borderRadius: '8px'
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    backgroundColor: '#333',
    border: 'none',
    color: 'white',
    borderRadius: '4px'
  };

  const buttonStyle = {
    backgroundColor: 'red',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '15px'
  };

  return (
    <div style={containerStyle}>
      {!submitted ? (
        <Form onSubmit={handleSubmit} style={formStyle}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required style={inputStyle} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} />
          </label>
          <label>
            Phone:
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={inputStyle} />
          </label>
          <label>
            Message:
            <textarea name="message" value={formData.message} onChange={handleChange} required style={inputStyle} />
          </label>
          <button type="submit" style={buttonStyle}>Submit</button>
        </Form>
      ) : (
        <div style={formStyle}>
          <h2>Thank you for your enquiry, {formData.name}!</h2>
          <p>Email: {formData.email}</p>
          <p>Phone: {formData.phone}</p>
          <p>Message: {formData.message}</p>
        </div>
      )}
    </div>
  );
};

export default EnquiryForm;
