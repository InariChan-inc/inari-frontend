export interface RoleData {
  id: number,
  name: string,
  key: string,
  permissions: string[],
}

export enum ThemeEnum {
  LIGHT_THEME,
  BLACK_THEME
}

export enum ImageTypeEnum {
  BANER,
  POSTER,
  AVATAR
}

export interface ImageData {
  id: number,
  name?: string,
  type?: ImageTypeEnum,
  path?: string,
  pathResized?: string,
  isTmp?: boolean
}

export interface UserData {
  name: string,
  email: string,
  theme: ThemeEnum,
  avatar?: ImageData,
  roleData?: RoleData,
}

export interface UserWithTokenData {
  userData: UserData,
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

export interface Token {
  token: string,
  tokenExp: number
}

export interface RefreshToken {
  refreshToken: string,
  refreshTokenExp: number
}

export type GeneralToken = Token & RefreshToken;

export interface IRefreshToken {
  data: {
    refreshToken: GeneralToken
  }
}