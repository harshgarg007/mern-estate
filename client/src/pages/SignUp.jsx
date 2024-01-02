import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OAuth from '../components/OAuth';


export default function SignUp() {

  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,  // sari info ek sath rkhne ke liye spread operator
      [e.target.id]: e.target.value,  
    })
  }
  // console.log(formData);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();  // isse refresh nhi hoga page submit krne par
      setLoading(true); // loading true before request
      // api fetch -- viteconfig file 
      const res = await fetch('api/auth/signup', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      // after request
      if(data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null)
      navigate('/sign-in');   // ye navigate kr dega sign in page pe
      // console.log(data);
    } catch (error) {
      setLoading(false);
      setError(error.message)
    }
}
   
//  console.log(formData)

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>
        Sign Up
      </h1>

      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type="text" placeholder='username' id='username' onChange={handleChange} className='border p-3 rounded-lg'/>
        <input type="email" placeholder='email' id='email' onChange={handleChange} className='border p-3 rounded-lg'/>
        <input type="password" placeholder='password' id='password' onChange={handleChange} className='border p-3 rounded-lg'/>
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        disabled={loading} >
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
        <OAuth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
