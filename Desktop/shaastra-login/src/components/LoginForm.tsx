import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import { FaLock, FaEnvelope } from 'react-icons/fa';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-purple-700 bg-opacity-60 backdrop-blur-md p-8 rounded-lg shadow-lg w-[32rem]"
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
      <h3 className="text-xl text-white mb-4">Login</h3>
      <form>
        <div className="mb-4 relative">
          <label htmlFor="email" className="block text-white text-sm mb-2">Email</label>
          <div className="relative">
            <motion.input
              type="email"
              id="email"
              className="w-full px-3 py-2 pl-10 rounded transition-transform duration-50" 
              placeholder="username@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              whileFocus={{ scale: 1.02 }} 
            />
            <motion.div
              initial={{ opacity: 0.5 }}
              whileHover={{ opacity: 1 }}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              <FaEnvelope />
            </motion.div>
          </div>
        </div>
        <div className="mb-6 relative">
          <label htmlFor="password" className="block text-white text-sm mb-2">Password</label>
          <div className="relative">
            <motion.input
              type="password"
              id="password"
              className="w-full px-3 py-2 pl-10 rounded transition-transform duration-50" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              whileFocus={{ scale: 1.02 }} 
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaLock />
            </div>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: '#7c3aed' }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 border-2 border-transparent hover:border-white"
        >
          Sign in
        </motion.button>
      </form>
      <div className="mt-4 text-white text-sm">
        <a href="#" className="hover:underline">Forgot Password?</a>
      </div>
      <div className="mt-6 text-white text-sm text-center">
        Don't have an account? <Link to="/signup" className="text-purple-300 hover:underline">Register</Link>
      </div>
    </motion.div>
  );
};

export default LoginForm;