export type UserModel = {
  id: string;
  username: string;
  email: string;
  fullName: string;
  password?: string | null;
  isVerified: boolean;
  isEmailVerified: boolean;
  dateOfBirth: string | null;
  addressId: string | null;
};
