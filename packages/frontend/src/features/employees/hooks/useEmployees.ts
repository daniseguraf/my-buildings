import { employeesService } from '@features/employees/services/employees.service'
import { useQuery } from '@tanstack/react-query'

export const useEmployees = () => {
  return useQuery({
    queryKey: ['employees'],
    queryFn: () => employeesService.getAll(),
    staleTime: 1000 * 60 * 60,
  })
}
