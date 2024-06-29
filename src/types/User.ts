export type User = {
  id: number;
  gender: string;
  date_of_birth: string;
  job: string;
  city: string;
  zipcode: string;
  latitude: number;
  profile_picture: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  street: string;
  state: string;
  country: string;
  longitude: number;
};

export type UserAPIResponse = {
  success: boolean;
  message: string;
  total_users: number;
  offset: number;
  limit: number;
  users: User[];
};
