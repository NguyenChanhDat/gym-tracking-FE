import axios from 'axios';
import { SigninRequestDto, SigninResponseDto } from '../types/types';

export const signinApi = async (
  data: SigninRequestDto
): Promise<SigninResponseDto> => {
  const response = await axios.post('http://localhost:8080/client/login', data);
  return response.data;
};

export const signup = async (
  data: SigninRequestDto
): Promise<SigninResponseDto> => {
  const response = await axios.post(
    'http://localhost:8080/client/signup',
    data
  );
  return response.data;
};
