import { IsNumber, IsOptional, Min } from 'class-validator'

export class PaginationDto {
  @IsOptional()
  @IsNumber()
  @Min(0)
  page?: number

  @IsOptional()
  @IsNumber()
  limit?: number
}
