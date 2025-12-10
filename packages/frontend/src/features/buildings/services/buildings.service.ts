import { api } from '@lib/axios'
import type { Building, components } from '@my-buildings/shared'

type CreateBuildingDto = components['schemas']['CreateBuildingDto']

export const buildingsService = {
  getAll: async () => {
    const { data } = await api.get('/buildings')

    return data
  },

  getById: async (id: string) => {
    const { data } = await api.get<Building>(`/buildings/${id}`)
    return data
  },

  create: async (dto: CreateBuildingDto) => {
    const { data } = await api.post<Building>('/buildings', dto)
    return data
  },

  update: async (id: string, dto: Partial<CreateBuildingDto>) => {
    const { data } = await api.patch<Building>(`/buildings/${id}`, dto)
    return data
  },

  delete: async (id: string) => {
    await api.delete(`/buildings/${id}`)
  },
}
