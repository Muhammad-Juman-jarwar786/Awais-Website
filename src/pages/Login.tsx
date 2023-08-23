import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail]: any = useState('');
  const [password, setPassword]: any = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    if (email == 'awaisjarwar98@gmail.com' && password == 'awaisjarwar98') {
      navigate('/addproduct');
    } else {
      alert('Your email or password is wrong');
    }
  };

  return (
    <>
      <div className="pt-40 text-center justify-center items-center">
        <div className="text-4xl mt-10">Admin Login</div>
        <div className="mt-10">
          <input
            className="outline-none text-2xl border-2 border-gray-600 p-2 rounded-lg mt-10"
            type="text"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <input
            className="outline-none text-2xl border-2 border-gray-600 p-2 rounded-lg mt-5 "
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button
            onClick={handleLogin}
            className="bg-emerald-600 btn mb-40 p-2 mt-5 text-white rounded-lg text-2xl font-bold"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
