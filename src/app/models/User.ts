export interface User {
  firstName: string,
  lastName: string,
  age?: number,
  address?: {
    street?: string,
    city?: string,
    state?: string
  },
  isActiv?: boolean
  registered?: any
  hide?: boolean
}