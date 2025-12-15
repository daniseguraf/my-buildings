import { buildingsService } from '@features/buildings/services/buildings.service'
import type { CreateBuildingDto } from '@features/buildings/types/building.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCreateBuilding = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (dto: CreateBuildingDto) => {
      return buildingsService.create(dto)
    },
    mutationKey: ['createBuilding'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['buildings'] })
    },
    onError: error => {
      console.error('Error creating building', error)
    },
  })
}
