import { buildingsService } from '@features/buildings/services/buildings.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useDeleteBuilding = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: number) => {
      return buildingsService.delete(id)
    },
    mutationKey: ['deleteBuilding'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['buildings'] })
    },
    onError: error => {
      console.error('Error deleting building', error)
    },
  })
}
