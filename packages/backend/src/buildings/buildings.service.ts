import { Injectable } from '@nestjs/common'
import { CreateBuildingDto } from './dto/create-building.dto'
import { UpdateBuildingDto } from './dto/update-building.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class BuildingsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createBuildingDto: CreateBuildingDto) {
    try {
      console.log('createBuildingDto', createBuildingDto)

      const response = await this.prismaService.building.create({
        data: createBuildingDto,
      })

      return response
    } catch (error) {
      console.log(error)
    }
  }

  async findAll() {
    return await this.prismaService.building.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} building`
  }

  update(id: number, updateBuildingDto: UpdateBuildingDto) {
    return `This action updates a #${id} building`
  }

  remove(id: number) {
    return `This action removes a #${id} building`
  }
}
