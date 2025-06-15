import { useState } from 'react';
import { SigninRequestDto, SigninResponseDto } from '../types/types';
import { signinApi } from '../api/api';

export function useSignin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signin = async (
    data: SigninRequestDto
  ): Promise<SigninResponseDto | undefined> => {
    try {
      setLoading(true);
      setError(null);
      const result = await signinApi(data);
      return result;
    } catch (err) {
      setError('Login failed.');
    } finally {
      setLoading(false);
    }
  };

  return { signin, loading, error };
}
