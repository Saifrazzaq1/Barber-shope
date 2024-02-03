import {IUser} from './Auth/actions.d';

interface TMongoCommon {
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export type TAuth = {
  isLoggedIn: boolean;
  user: UserType | null;
  token: string | null;
  counter: number;
};
export type ISignup = {
  email: string;
  password: string;
};

export type TCallback<T> = (args: T) => void;

export interface ICommonResponse {
  success: boolean;
  message: string;
}
