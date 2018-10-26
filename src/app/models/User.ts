export interface User {
  firstName: string,
  lastName: string,
  age?: number,
  address?: {
    street?: string,
    city?: string,
    state?: string
  },
  image?: string
  isActiv?: boolean
  country?: string
  balance?: number
  registered?: any
}