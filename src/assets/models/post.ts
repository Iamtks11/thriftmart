export interface Post {
  id: number
  title: string,
  price: number,
  description: string,
  image: string,
  date: string,
  userId: number
}

export const EmptyPost: Post = {
  id: 0,
  title: '',
  price: 0,
  description: '',
  image: '',
  date: '',
  userId: 0
}
