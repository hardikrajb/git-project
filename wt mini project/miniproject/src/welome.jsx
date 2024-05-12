import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <p><a href="D:\wt mini project\miniproject\src\home_page.html">pls click here to continue visit our website</a></p>
    </div>
  );
};