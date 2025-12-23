import { api } from '@lib/axios'
import type { Building, components } from '@my-buildings/shared'

type CreateBuildingDto = components['schemas']['CreateBuildingDto']
type UpdateBuildingDto = components['schemas']['UpdateBuildingDto']

export const buildingsService = {
  getAll: async (): Promise<Building[]> => {
    const { data } = await api.get<Building[]>('/buildings')

    return data
  },

  getById: async (id: number): Promise<Building> => {
    const { data } = await api.get<Building>(`/buildings/${id}`)
    return data
  },

  create: async (dto: CreateBuildingDto): Promise<Building> => {
    const { data } = await api.post<Building>('/buildings', dto)
    return data
  },

  update: async (id: string, dto: UpdateBuildingDto): Promise<Building> => {
    const { data } = await api.patch<Building>(`/buildings/${id}`, dto)
    return data
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/buildings/${id}`)
  },
}
