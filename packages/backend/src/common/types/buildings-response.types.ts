import { Building, User } from 'generated/prisma/client'

export type Pagination = {
  totalPages: number
  currentPage: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}

export type FindAllBuildingsResponse = {
  data: (Pick<
    Building,
    | 'id'
    | 'name'
    | 'propertyType'
    | 'address'
    | 'district'
    | 'city'
    | 'floors'
    | 'isActive'
    | 'managerId'
  > & {
    manager: Pick<User, 'id' | 'firstName' | 'lastName' | 'email'>
  })[]
  pagination: Pagination
}
