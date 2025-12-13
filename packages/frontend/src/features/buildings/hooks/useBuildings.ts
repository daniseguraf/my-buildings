import { buildingsService } from '@features/buildings/services/buildings.service'
import type { Building, components } from '@my-buildings/shared/index'
import { useMutation, useQuery } from '@tanstack/react-query'

type CreateBuildingDto = components['schemas']['CreateBuildingDto']

export const useBuildings = () => {
  const getAll = useQuery<Building[]>({
    queryKey: ['buildings'],
    queryFn: () => buildingsService.getAll(),
    staleTime: 1000 * 60 * 60,
  })

  const create = useMutation({
    mutationFn: (dto: CreateBuildingDto) => {
      console.log('dto useBuildings', dto)
      return buildingsService.create(dto)
    },
  })

  return {
    getAll,
    create,
  }
}
