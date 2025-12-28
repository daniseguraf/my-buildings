import { api } from '@lib/axios'
import type { Building } from '@my-buildings/shared'
import type {
  CreateBuildingDto,
  UpdateBuildingDto,
} from '@features/buildings/types/building.types'

export const buildingsService = {
  getAll: async (): Promise<Building[]> => {
    const { data } = await api.get<Building[]>('/buildings', {
      metadata: {
        operationName: 'getAllBuildings',
      },
    })

    return data
  },

  getById: async (id: number): Promise<Building> => {
    const { data } = await api.get<Building>(`/buildings/${id}`, {
      metadata: {
        operationName: 'getBuildingById',
      },
    })
    return data
  },

  create: async (dto: CreateBuildingDto): Promise<Building> => {
    const { data } = await api.post<Building>('/buildings', dto, {
      metadata: {
        operationName: 'createBuilding',
      },
    })
    return data
  },

  update: async (id: number, dto: UpdateBuildingDto): Promise<Building> => {
    const { data } = await api.patch<Building>(`/buildings/${id}`, dto, {
      metadata: {
        operationName: 'updateBuilding',
      },
    })
    return data
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/buildings/${id}`, {
      metadata: {
        operationName: 'deleteBuilding',
      },
    })
  },
}
