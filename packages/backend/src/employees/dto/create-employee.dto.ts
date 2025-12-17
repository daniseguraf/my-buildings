import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { EmployeeRole } from 'generated/prisma/client'
import {
  IsOptionalString,
  IsRequiredString,
} from 'src/common/decorators/validation.decorators'

export class CreateEmployeeDto {
  @IsRequiredString(1, 255, 'John Doe', 'Employee first name')
  firstName: string

  @IsRequiredString(1, 255, 'Doe', 'Employee last name')
  lastName: string

  @IsOptionalString(100, '+51 987 654 321', 'Employee phone number')
  phoneNumber?: string

  @IsRequiredString(1, 255, 'john.doe@example.com', 'Employee email')
  @IsEmail()
  email: string

  @ApiProperty({
    example: EmployeeRole.MANAGER,
    description: 'Employee role',
    enum: EmployeeRole,
  })
  @IsEnum(EmployeeRole)
  role: EmployeeRole

  @ApiProperty({
    example: '2025-01-01',
    description: 'Employee start date',
  })
  @IsDate()
  @IsNotEmpty()
  startDate: Date

  @ApiProperty({
    example: '2025-01-01',
    description: 'Employee end date',
  })
  @IsDate()
  @IsOptional()
  endDate?: Date

  @ApiProperty({
    example: true,
    description: 'Employee is active',
  })
  @IsBoolean()
  isActive: boolean
}
