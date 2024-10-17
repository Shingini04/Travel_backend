import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ParticleAnimation from '../components/ParticleAnimation';
import logo from '../assets/logo.png';
import backgroundImage from '../assets/pic.jpg';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const SignupPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const formRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-purple-900 relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <ParticleAnimation />
      <motion.div
        ref={formRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-purple-700 bg-opacity-60 backdrop-blur-lg p-8 rounded-lg shadow-lg w-[32rem]"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="flex justify-center mb-6"
        >
          <motion.img 
            src={logo} 
            alt="Shaastra Logo" 
            className="h-20" 
            whileHover={{ scale: 1.2 }} 
            transition={{ type: 'spring', stiffness: 300 }} 
          />
        </motion.div>
        <h3 className="text-xl text-white mb-4">Sign Up</h3>
        <form onSubmit={handleSubmit}>
          {[
            { label: 'Name', type: 'text', value: name, setValue: setName, icon: FaUser },
            { label: 'Email', type: 'email', value: email, setValue: setEmail, icon: FaEnvelope },
            { label: 'Password', type: 'password', value: password, setValue: setPassword, icon: FaLock },
            { label: 'Confirm Password', type: 'password', value: confirmPassword, setValue: setConfirmPassword, icon: FaLock },
          ].map((field) => (
            <div key={field.label} className="mb-4 relative">
              <label htmlFor={field.label.toLowerCase()} className="block text-white text-sm mb-2">{field.label}</label>
              <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                <motion.input
                  type={field.type}
                  id={field.label.toLowerCase()}
                  className="w-full px-3 py-2 pl-10 rounded transition-transform duration-50" // Added transition for smooth scaling
                  placeholder={field.label}
                  value={field.value}
                  onChange={(e) => field.setValue(e.target.value)}
                  whileFocus={{ scale: 1.02 }} // Apply scaling here with specified scale
                  transition={{ duration: 0.05 }} // Set duration to 50ms
                />
                <motion.div
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  <field.icon />
                </motion.div>
              </motion.div>
            </div>
          ))}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#7c3aed' }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 border-2 border-transparent hover:border-white"
          >
            Sign Up
          </motion.button>
        </form>
        <p className="text-white mt-4">
          Already have an account? <Link to="/" className="text-purple-300 hover:underline">Log In</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignupPage;
