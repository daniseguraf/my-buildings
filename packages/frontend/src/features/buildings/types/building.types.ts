import type { PropertyType } from '@my-buildings/shared/index'

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
  managerId?: number
  propertyType: PropertyType
  yearBuilt?: number
  floors?: number
  phoneNumber?: string
  email?: string
  description?: string
}
