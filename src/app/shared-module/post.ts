export interface Post {
  title: string,
  price: number,
  description: string,
  image: string,
  date: string
}

export const EmptyPost: Post = {
  title: '',
  price: 0,
  description: '',
  image: '',
  date: ''
}
