import { buildingsService } from '@features/buildings/services/buildings.service'
import { useQuery } from '@tanstack/react-query'
import type { FindAllBuildingsResponse } from '@features/buildings/services/buildings.service'

export const useBuildings = (page: number) => {
  return useQuery<FindAllBuildingsResponse>({
    queryKey: ['buildings', 'list', page],
    queryFn: () => buildingsService.getAll(page),
  })
}
