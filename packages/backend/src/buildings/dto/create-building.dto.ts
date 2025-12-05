import { Transform } from 'class-transformer'
import {
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Max,
  MaxLength,
  Min,
  IsPhoneNumber,
} from 'class-validator'

export enum PropertyType {
  RESIDENTIAL = 'RESIDENTIAL',
  COMMERCIAL = 'COMMERCIAL',
  MIXED = 'MIXED',
}

const CURRENT_YEAR = new Date().getFullYear()
const MIN_YEAR_BUILT = 1800

export class CreateBuildingDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  @Transform(
    ({ value }) => (typeof value === 'string' ? value.trim() : value) as string
  )
  name: string

  @IsString()
  @IsOptional()
  @MaxLength(1000)
  @Transform(({ value }) =>
    typeof value === 'string' ? value.trim() || undefined : undefined
  )
  description?: string

  @IsInt()
  @Min(MIN_YEAR_BUILT)
  @Max(CURRENT_YEAR)
  @Transform(({ value }) =>
    typeof value === 'string' ? parseInt(value, 10) : Number(value)
  )
  yearBuilt: number

  @IsEnum(PropertyType)
  propertyType: PropertyType

  @IsString()
  @IsNotEmpty()
  @Length(5, 500)
  @Transform(
    ({ value }) => (typeof value === 'string' ? value.trim() : value) as string
  )
  address: string

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  @Transform(
    ({ value }) => (typeof value === 'string' ? value.trim() : value) as string
  )
  district: string

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  @Transform(
    ({ value }) => (typeof value === 'string' ? value.trim() : value) as string
  )
  city: string

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  @Transform(
    ({ value }) => (typeof value === 'string' ? value.trim() : value) as string
  )
  province: string

  @IsString()
  @IsOptional()
  @Length(4, 10)
  @Transform(({ value }) =>
    typeof value === 'string'
      ? value.trim().toUpperCase() || undefined
      : undefined
  )
  postalCode?: string

  @IsInt()
  @Min(1)
  @Max(200)
  @Transform(({ value }) =>
    typeof value === 'string' ? parseInt(value, 10) : Number(value)
  )
  floors: number

  @IsOptional()
  @IsPhoneNumber('ES')
  phoneNumber?: string

  @IsOptional()
  @IsEmail()
  @Transform(({ value }) =>
    typeof value === 'string'
      ? value.trim().toLowerCase() || undefined
      : undefined
  )
  email?: string
}
