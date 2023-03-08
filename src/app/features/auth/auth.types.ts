// autoLogin and login are different cus of json server restrictions
export type UserDto = {
  firstName: string;
  lastName: string;
  email: string;
  role: AuthType;
};

export type AuthType = 'none' | 'admin' | 'employee' | 'guest';

export type LoginDTO = {
  accessToken: string;
  user: UserDto;
};

export type LoginCredentials = { email: string; password: string; rememberMe: boolean };
