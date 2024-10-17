import React from 'react';
import LoginForm from '../components/LoginForm';
import ParticleAnimation from './ParticleAnimation';
import backgroundImage from '../assets/pic.jpg';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-900 relative overflow-hidden"
         style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <ParticleAnimation />
      <LoginForm />
    </div>
  );
};

export default LoginPage;