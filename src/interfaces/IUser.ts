export interface IUser {
  name: string;
  email: string;
  password1: string;
  password2: string;
  birthday: string;
  isStudent: boolean;

  photo?: string;
  phoneNumber?: string;
  myClass?: string;
  myCourse?: string;
  myGlade?: number;
}