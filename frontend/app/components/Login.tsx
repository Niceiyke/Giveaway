"use client"
import React, { useState } from 'react';
import Cookies from 'js-cookie'
import { LoginUser } from '../endpoints/api';
import { useRouter } from 'next/navigation';

interface FormData {
  email: string;
  password: string;

}

interface Errors {
  email?: string;
  password?: string;
}

const Login: React.FC = () => {
  const router =useRouter()
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',

  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const validationErrors: Errors = {};
    if (!formData.email.includes('@')) {
      validationErrors.email = 'Invalid email format';
    }
    if (formData.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

  

   const userToken =await LoginUser(formData)
   
   if(userToken ===undefined){

    alert('invalid username or password')

   }

   Cookies.set("token",userToken.jwt)

   router.push('/')

   

  };


  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 p-2 border rounded w-full ${errors.email ? 'border-red-500' : ''}`}
              required
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
                    <div className="relative">
              <input
                type='password'
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`mt-1 p-2 border rounded w-full ${
                  errors.password ? 'border-red-500' : ''
                }`}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
