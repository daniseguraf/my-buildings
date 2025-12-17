import type { components, PropertyType } from '@my-buildings/shared/index'

export type CreateBuildingDto = components['schemas']['CreateBuildingDto']

export type BuildingFormProps = {
  opened: boolean
  onClose: () => void
}

export interface BuildingFormValues {
  name: string
  address: string
  district: string
  city: string
  province: string
  postalCode?: string
  managerId?: string
  propertyType: PropertyType
  yearBuilt?: number
  floors?: number
  phoneNumber?: string
  email?: string
  description?: string
}
