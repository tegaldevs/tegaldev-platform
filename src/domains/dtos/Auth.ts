export interface LoginRequestDto {
  credential: string; // username, email, or phone
  password: string;
}

export interface LoginResponseDto {
  id: string;
  name: string;
  username: string;
  email: string;
  role: string;
  accessToken?: string;
}
