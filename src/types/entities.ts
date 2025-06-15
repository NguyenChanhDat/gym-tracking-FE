import { MembershipTierEnum, RoleEnum } from './enum';

export type User = {
  id: number;
  username: string;
  password: string;
  email?: string;
  dateOfBirth?: Date;
  phoneNumber?: string;
  avaUrl?: string;
  membershipTier: MembershipTierEnum;
  role: RoleEnum;
};
