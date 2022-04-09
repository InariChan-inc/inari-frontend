export interface RoleData {
  id: number,
  name: string,
  key: string,
  permissions: string[],
}

export enum ThemeEnum {
  LIGHT_THEME = 'LIGHT_THEME',
  BLACK_THEME = 'BLACK_THEME'
}

export enum ImageTypeEnum {
  BANER,
  POSTER,
  AVATAR
}

export interface ImageData {
  id: number,
  name: string,
  type: ImageTypeEnum,
  path: string,
  pathResized?: string,
  isTmp?: boolean
}

export interface UserData {
  name: string,
  email: string,
  aboutMe: string,
  theme: ThemeEnum,
  avatar?: ImageData,
  roleData?: RoleData,
  hashColor: string,
  isSixteen: boolean,
}

export interface IProfile {
  profile: UserData
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
  refreshToken: GeneralToken
}

export enum AnimeFormat {
  TV = 'TV',
  FILM = 'FILM',
  ONA = 'ONA',
  OVA = 'OVA',
  SPLESH = 'SPLESH'
}

export enum AnimeSeason {
  SUMMER = 'SUMMER',
  FALL = 'FALL',
  SPRING = 'SPRING',
  WINTER = 'WINTER',
  NO_SEASON = 'NO_SEASON'
}

export enum AnimeStatus {
  NEW = 'NEW',
  ONGOING = 'ONGOING',
  COMPLETED = 'COMPLETED'
}

export interface Poster {
  path?: string,
  pathResized?: string
}

export interface Genre {
  id: number;
  name: string;
}

export interface AnimeData {
  id: number;
  name: string;
  poster: ImageData;
  description: string;
  studio: string;
  currentCountEpisodes?: number;
  countEpisodes: number;
  monthViews: number;
  duration: number;
  format: AnimeFormat;
  season: AnimeSeason;
  status: AnimeStatus;
  genres: Genre[];
  dateRelease: string;
  dateEnd: string;
  createdAt: string;
  updateAt: string;
}

