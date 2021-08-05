import { IUser } from "../../redux/slices/user";
import { GeneralToken } from "../../redux/slices/token";

export interface UserWithTokenData {
  userData: IUser,
  tokenData: GeneralToken
}

export interface IRegistrationUser {
  data: {
    registartionUser: UserWithTokenData
  }
}

export interface ILoginUser {
  data: {
    loginUser: UserWithTokenData
  }
}