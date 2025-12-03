import {
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Max,
  Min,
} from 'class-validator'

export enum PropertyType {
  RESIDENTIAL = 'RESIDENTIAL',
  COMMERCIAL = 'COMMERCIAL',
  MIXED = 'MIXED',
}

export class CreateBuildingDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsOptional()
  description?: string

  @IsNumber()
  @IsNotEmpty()
  yearBuilt: number

  @IsEnum(PropertyType)
  propertyType: PropertyType

  @IsString()
  @IsNotEmpty()
  address: string

  @IsString()
  @IsNotEmpty()
  district: string

  @IsString()
  @IsNotEmpty()
  city: string

  @IsString()
  @IsNotEmpty()
  province: string

  @IsString()
  @IsOptional()
  postalCode?: string

  @IsInt()
  @Min(1)
  @Max(200)
  floors: number

  @IsOptional()
  @IsPhoneNumber()
  phoneNumber?: string

  @IsEmail()
  @IsOptional()
  email?: string
}
