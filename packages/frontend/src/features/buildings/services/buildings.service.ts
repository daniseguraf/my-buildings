import { api } from '@lib/axios'
import type { Building, User } from '@my-buildings/shared'
import type {
  CreateBuildingDto,
  UpdateBuildingDto,
} from '@features/buildings/types/building.types'

// TODO: Move to shared package
export type Pagination = {
  totalPages: number
  currentPage: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}

// TODO: Move to shared package
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

export const buildingsService = {
  getAll: async (page: number): Promise<FindAllBuildingsResponse> => {
    const { data } = await api.get<FindAllBuildingsResponse>('/buildings', {
      params: {
        page,
      },
    })

    return data
  },

  getById: async (id: number): Promise<Building> => {
    const { data } = await api.get<Building>(`/buildings/${id}`)

    return data
  },

  create: async (createBuildingDto: CreateBuildingDto): Promise<Building> => {
    const { data } = await api.post<Building>('/buildings', createBuildingDto)

    return data
  },

  update: async (
    id: number,
    updateBuildingDto: UpdateBuildingDto
  ): Promise<Building> => {
    const { data } = await api.patch<Building>(
      `/buildings/${id}`,
      updateBuildingDto
    )
    return data
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/buildings/${id}`)
  },
}
