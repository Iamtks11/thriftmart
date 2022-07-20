export interface User{
    id: number,
    name: string,
    email: string,
    password: string
}

export const EmptyUser: User = {
    id: 0,
    name: "?",
    email: "?",
    password: ","
}

export interface signupData {
  name: string,
  email: string,
  gender: string,
  password: string,
}
