import { IUser } from "../../redux/slices/user";
import { GeneralToken } from "../../redux/slices/token";

export interface UserWithTokenData {
  userData: IUser,
  tokenData: GeneralToken
}

export interface IRegistrationUser {
  data: {
    registrationUser: UserWithTokenData
  }
}

export interface ILoginUser {
  data: {
    loginUser: UserWithTokenData
  }
}