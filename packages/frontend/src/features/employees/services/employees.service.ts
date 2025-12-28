import { api } from '@lib/axios'
import type { components, Employee } from '@my-buildings/shared'

type CreateBuildingDto = components['schemas']['CreateEmployeeDto']
type UpdateEmployeeDto = components['schemas']['UpdateEmployeeDto']

export const employeesService = {
  getAll: async (): Promise<Employee[]> => {
    const { data } = await api.get<Employee[]>('/employees', {
      metadata: {
        operationName: 'getAllEmployees',
      },
    })

    return data
  },

  getById: async (id: string): Promise<Employee> => {
    const { data } = await api.get<Employee>(`/employees/${id}`)
    return data
  },

  create: async (dto: CreateBuildingDto): Promise<Employee> => {
    const { data } = await api.post<Employee>('/employees', dto)
    return data
  },

  update: async (id: string, dto: UpdateEmployeeDto): Promise<Employee> => {
    const { data } = await api.patch<Employee>(`/employees/${id}`, dto)
    return data
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/employees/${id}`)
  },
}
