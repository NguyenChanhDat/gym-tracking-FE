import { User } from '../../../types/entities';
import { ResponseMessage } from '../../../types/message';

export type SigninRequestDto = Pick<User, 'username' | 'password'>;

export type SigninResponseDto = Pick<User, 'id' | 'username'> & {
  token: string;
};

export type SignupRequestDto = Pick<User, 'username' | 'password'>;

export type SignupResponseDto = ResponseMessage;
