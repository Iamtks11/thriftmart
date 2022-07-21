export interface User{
    id: number,
    name: string,
    email: string,
    password: string,
    avatar: string
}

export const EmptyUser: User = {
    id: 0,
    name: "?",
    email: "?",
    password: "",
    avatar: ''
}

export interface signupData {
  name: string,
  email: string,
  gender: string,
  password: string,
}

export interface userCardData {
  name: string,
  email: string,
  avatar: string
}

export const EmptyUserCardData: userCardData = {
  name: '',
  email: '',
  avatar: ''

}
