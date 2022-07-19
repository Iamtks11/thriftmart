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