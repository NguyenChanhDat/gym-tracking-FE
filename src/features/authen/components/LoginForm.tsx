import React, { useState } from 'react';
import { useSignin } from '../composables/useSignin';
import { SigninRequestDto } from '../types/types';
import { useDispatch } from 'react-redux';
import { setToken } from '../stores/authSlice';

export function LoginForm() {
  const { signin, loading, error } = useSignin();
  const [inputs, setInputs] = useState<SigninRequestDto>({
    username: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const singinResponse = await signin(inputs);
    const token = singinResponse?.token;
    console.log('singinResponse: ', singinResponse);
    dispatch(setToken(token || ''));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          type="username"
          value={inputs.username || ''}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          value={inputs.password || ''}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          Signin
        </button>
        {error && <p>{error}</p>}
      </form>
    </>
  );
}
