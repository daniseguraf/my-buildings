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

  async findOne(id: number) {
    try {
      const building = await this.prismaService.building.findFirst({
        where: { id },
      })

      if (!building) {
        return `Building with id ${id} does not exist`
      }

      return building
    } catch (error) {
      throw new Error('aaa')
    }
  }

  update(id: number, updateBuildingDto: UpdateBuildingDto) {
    console.log('updateBuildingDto', id, updateBuildingDto)

    const updatedBuilding = this.prismaService.building.update({
      where: { id },
      data: updateBuildingDto,
    })

    return updatedBuilding
  }

  remove(id: number) {
    return `This action removes a #${id} building`
  }
}
